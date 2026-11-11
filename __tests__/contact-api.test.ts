import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GET, POST, OPTIONS } from '@/app/api/contact-form/route';
import { NextRequest } from 'next/server';

const mockInsertOne = vi.fn();
vi.mock('@/lib/mongodb', () => ({
  connectToDatabase: vi.fn(async () => ({
    client: {},
    db: {
      collection: () => ({
        insertOne: mockInsertOne,
      }),
    },
  })),
  getMongoConfig: vi.fn(() => ({
    COLLECTION_NAME: 'contacts',
  })),
}));

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: vi.fn().mockResolvedValue(true),
    })),
  },
}));

describe('Contact Form API Endpoint (/api/contact-form)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockInsertOne.mockResolvedValue({ acknowledged: true, insertedId: 'mock-id-123' });
  });

  it('handles GET health check request', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBeDefined();
    expect(data.timestamp).toBeDefined();
  });

  it('handles OPTIONS CORS preflight request', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact-form', {
      method: 'OPTIONS',
      headers: {
        origin: 'https://tanish-portfolio-web.vercel.app',
      },
    });

    const response = await OPTIONS(request);
    expect(response.status).toBe(200);
    expect(response.headers.get('Access-Control-Allow-Methods')).toContain('POST');
    expect(response.headers.get('Access-Control-Allow-Origin')).toBeTruthy();
  });

  it('rejects submissions with invalid or missing fields', async () => {
    const invalidBody = {
      name: '',
      email: 'not-an-email',
      message: 'x',
    };

    const request = new NextRequest('http://localhost:3000/api/contact-form', {
      method: 'POST',
      body: JSON.stringify(invalidBody),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors.length).toBeGreaterThan(0);
  });

  it('successfully processes valid contact submission', async () => {
    const validBody = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Inquiry',
      message: 'Hello, I would like to collaborate on an open-source project.',
    };

    const request = new NextRequest('http://localhost:3000/api/contact-form', {
      method: 'POST',
      body: JSON.stringify(validBody),
      headers: {
        'x-forwarded-for': '127.0.0.1',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.id).toBe('mock-id-123');
    expect(mockInsertOne).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, I would like to collaborate on an open-source project.',
      })
    );
  });

  it('rejects malformed JSON payloads with HTTP 400', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact-form', {
      method: 'POST',
      body: '{invalid-json',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(mockInsertOne).not.toHaveBeenCalled();
  });

  it('rejects non-string JSON operator injection payloads with HTTP 400', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact-form', {
      method: 'POST',
      body: JSON.stringify({
        name: { $ne: null },
        email: 'test@example.com',
        message: ['array-injection'],
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(mockInsertOne).not.toHaveBeenCalled();
  });

  it('enforces IP rate limiting using the first forwarded client IP', async () => {
    const payload = {
      name: 'Rate Test',
      email: 'rate@example.com',
      subject: 'Test',
      message: 'Checking sliding window IP rate limit enforcement.',
    };

    for (let i = 0; i < 3; i++) {
      const req = new NextRequest('http://localhost:3000/api/contact-form', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'x-forwarded-for': `203.0.113.55, 10.0.0.${i}`,
        },
      });
      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    const blockedReq = new NextRequest('http://localhost:3000/api/contact-form', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'x-forwarded-for': '203.0.113.55, 10.0.0.99',
      },
    });
    const blockedRes = await POST(blockedReq);
    expect(blockedRes.status).toBe(429);
  });

  it('strips CRLF characters from email notification headers', async () => {
    const nodemailer = (await import('nodemailer')).default;
    const sendMailMock = vi.fn().mockResolvedValue(true);
    vi.mocked(nodemailer.createTransport).mockReturnValueOnce({
      sendMail: sendMailMock,
    } as never);

    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'user';
    process.env.SMTP_PASSWORD = 'pass';
    process.env.SMTP_ADMIN = 'admin@example.com';
    process.env.NOTIFICATION_EMAIL = 'notify@example.com';

    const request = new NextRequest('http://localhost:3000/api/contact-form', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Alice\r\nBcc: attacker@evil.com',
        email: 'alice@example.com',
        subject: 'Hello\r\nInjected: header',
        message: 'Valid body message.',
      }),
      headers: {
        'x-forwarded-for': '198.51.100.42',
      },
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    expect(sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        replyTo: expect.not.stringMatching(/[\r\n]/),
        subject: expect.not.stringMatching(/[\r\n]/),
      })
    );

    delete process.env.SMTP_HOST;
    delete process.env.SMTP_PORT;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASSWORD;
    delete process.env.SMTP_ADMIN;
    delete process.env.NOTIFICATION_EMAIL;
  });
});
