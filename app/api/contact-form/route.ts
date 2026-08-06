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

// Mail receiving function
async function sendEmailNotification(contactData: ContactData): Promise<void> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPortStr = process.env.SMTP_PORT;
  const smtpSecureStr = process.env.SMTP_SECURE;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const smtpAdmin = process.env.SMTP_ADMIN;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  // SMTP transport setup only if config exists
  if (!smtpHost || !smtpPortStr || !smtpUser || !smtpPass || !smtpAdmin || !notificationEmail) {
    console.warn('Email notification skipped: missing SMTP configuration environment variables.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPortStr, 10),
    secure: smtpSecureStr === 'true',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const mailOptions = {
    from: smtpAdmin,
    replyTo: `${contactData.name} <${contactData.email}>`,
    to: notificationEmail,
    subject: contactData.subject
      ? `${apiText.emailSubjectPrefix}${contactData.subject}`
      : apiText.emailSubjectFallback,
    text: `${apiText.emailBodyPrefix} ${contactData.name} (${contactData.email})${contactData.subject ? `\nSubject: ${contactData.subject}` : ''}:\n\n${contactData.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully to:', notificationEmail);
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Validation function
function validateContactForm(data: ContactData): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push(apiText.validation.nameTooShort);
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push(apiText.validation.invalidEmail);
  }

  if (!data.message || data.message.trim().length < 2) {
    errors.push(apiText.validation.messageTooShort);
  }

  if (data.name && data.name.length > 100) {
    errors.push(apiText.validation.nameTooLong);
  }

  if (data.message && data.message.length > 10000) {
    errors.push(apiText.validation.messageTooLong);
  }

  if (typeof data.subject === 'string' && data.subject.length > 200) {
    errors.push(apiText.validation.subjectTooLong);
  }

  return errors;
}

// GET method - Health check
export async function GET() {
  return NextResponse.json({
    message: apiText.healthCheckMessage,
    timestamp: new Date().toISOString()
  });
}

// POST method - Handle form submission
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    const validationErrors = validateContactForm({ name, email, subject, message });
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: apiText.validationFailed,
          errors: validationErrors
        },
        { status: 400 }
      );
    }

    // Prepare IP Address
    const ipAddress = request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Rate limiting: max 3 requests per 5 minutes per IP
    if (isRateLimited(ipAddress, { windowMs: 300000, max: 3 })) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages sent. Please try again in 5 minutes.",
        },
        { status: 429 }
      );
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Prepare contact data
    const contactData = {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      subject: typeof subject === 'string' ? subject.trim() : '',
      message: (message as string).trim(),
      createdAt: new Date(),
      ipAddress,
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Send email notification
    await sendEmailNotification(contactData);

    // Insert into database
    const { COLLECTION_NAME } = getMongoConfig();
    const result = await db.collection(COLLECTION_NAME).insertOne(contactData);

    if (result.acknowledged) {
      return NextResponse.json({
        success: true,
        message: apiText.successMessage,
        id: result.insertedId
      });
    } else {
      throw new Error(apiText.failedToSave);
    }
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

// OPTIONS method - CORS handling
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
