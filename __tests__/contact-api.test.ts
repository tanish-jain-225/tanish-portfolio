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
});
