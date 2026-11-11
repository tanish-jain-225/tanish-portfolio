import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { apiText } from '@/data';
import { connectToDatabase, getMongoConfig } from '@/lib/mongodb';
import { isRateLimited } from '@/lib/rateLimit';

interface ContactData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt?: Date;
  ipAddress?: string;
  userAgent?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n\0]+/g, ' ').trim();
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0]?.trim();
    if (firstIp) return firstIp.slice(0, 64);
  }
  const realIp = request.headers.get('x-real-ip')?.trim();
  return realIp ? realIp.slice(0, 64) : 'unknown';
}

async function sendEmailNotification(contactData: ContactData): Promise<void> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPortStr = process.env.SMTP_PORT;
  const smtpSecureStr = process.env.SMTP_SECURE;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const smtpAdmin = process.env.SMTP_ADMIN;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!smtpHost || !smtpPortStr || !smtpUser || !smtpPass || !smtpAdmin || !notificationEmail) {
    console.warn('Email notification skipped: missing SMTP configuration environment variables.');
    return;
  }

  const parsedPort = Number.parseInt(smtpPortStr, 10);
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number.isFinite(parsedPort) ? parsedPort : 587,
    secure: smtpSecureStr === 'true',
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const safeName = sanitizeHeaderValue(contactData.name).replace(/["<>]/g, '');
  const safeEmail = sanitizeHeaderValue(contactData.email).replace(/[<>]/g, '');
  const safeSubject = contactData.subject ? sanitizeHeaderValue(contactData.subject) : '';

  const mailOptions = {
    from: smtpAdmin,
    replyTo: safeName ? `"${safeName}" <${safeEmail}>` : safeEmail,
    to: notificationEmail,
    subject: safeSubject
      ? `${apiText.emailSubjectPrefix}${safeSubject}`
      : apiText.emailSubjectFallback,
    text: `${apiText.emailBodyPrefix} ${contactData.name} (${contactData.email})${safeSubject ? `\nSubject: ${safeSubject}` : ''}:\n\n${contactData.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

function validateContactForm(rawBody: Record<string, unknown>): {
  errors: string[];
  sanitized?: { name: string; email: string; subject: string; message: string };
} {
  const errors: string[] = [];

  const name = typeof rawBody.name === 'string' ? rawBody.name.trim() : '';
  const email = typeof rawBody.email === 'string' ? rawBody.email.trim().toLowerCase() : '';
  const message = typeof rawBody.message === 'string' ? rawBody.message.trim() : '';
  const subject =
    typeof rawBody.subject === 'string'
      ? rawBody.subject.trim()
      : rawBody.subject === undefined || rawBody.subject === null
        ? ''
        : null;

  if (name.length < 2) {
    errors.push(apiText.validation.nameTooShort);
  } else if (name.length > 100) {
    errors.push(apiText.validation.nameTooLong);
  }

  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    errors.push(apiText.validation.invalidEmail);
  }

  if (message.length < 2) {
    errors.push(apiText.validation.messageTooShort);
  } else if (message.length > 10000) {
    errors.push(apiText.validation.messageTooLong);
  }

  if (subject === null || subject.length > 200) {
    errors.push(apiText.validation.subjectTooLong);
  }

  if (errors.length > 0 || subject === null) {
    return { errors };
  }

  return {
    errors: [],
    sanitized: { name, email, subject, message },
  };
}

export async function GET() {
  return NextResponse.json({
    message: apiText.healthCheckMessage,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  let rawBody: unknown;

  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: apiText.validationFailed,
        errors: ['Invalid JSON request body'],
      },
      { status: 400 }
    );
  }

  if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
    return NextResponse.json(
      {
        success: false,
        message: apiText.validationFailed,
        errors: ['Request body must be a JSON object'],
      },
      { status: 400 }
    );
  }

  try {
    const { errors, sanitized } = validateContactForm(rawBody as Record<string, unknown>);
    if (errors.length > 0 || !sanitized) {
      return NextResponse.json(
        {
          success: false,
          message: apiText.validationFailed,
          errors,
        },
        { status: 400 }
      );
    }

    const ipAddress = getClientIp(request);

    if (isRateLimited(ipAddress, { windowMs: 300000, max: 3 })) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many messages sent. Please try again in 5 minutes.',
        },
        { status: 429 }
      );
    }

    const { db } = await connectToDatabase();

    const contactData: ContactData = {
      name: sanitized.name,
      email: sanitized.email,
      subject: sanitized.subject,
      message: sanitized.message,
      createdAt: new Date(),
      ipAddress,
      userAgent: (request.headers.get('user-agent') || 'unknown').slice(0, 512),
    };

    const { COLLECTION_NAME } = getMongoConfig();
    const result = await db.collection(COLLECTION_NAME).insertOne(contactData);

    if (!result.acknowledged) {
      throw new Error(apiText.failedToSave);
    }

    await sendEmailNotification(contactData);

    return NextResponse.json({
      success: true,
      message: apiText.successMessage,
      id: result.insertedId,
    });
  } catch (error) {
    console.error('Contact form submission error:', error);

    return NextResponse.json(
      {
        success: false,
        message: apiText.errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  const allowedOrigins = new Set([
    'https://tanish-portfolio-web.vercel.app',
    'http://localhost:3000',
  ]);
  const isVercelPreview = /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin);
  const allowOrigin =
    allowedOrigins.has(origin) || isVercelPreview
      ? origin
      : 'https://tanish-portfolio-web.vercel.app';

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowOrigin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    },
  });
}
