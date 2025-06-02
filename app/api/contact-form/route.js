import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

// MongoDB connection - loaded from .env.local
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_DB = process.env.COLLECTION_DB;

// Validate environment variables
if (!MONGODB_URI || !DB_NAME || !COLLECTION_DB) {
  throw new Error('Missing required environment variables. Check .env.local file.');
}

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DB_NAME);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

// Validation function
function validateContactForm(data) {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email address');
  }
  
  if (!data.message || data.message.trim().length < 2) {
    errors.push('Message must be at least 2 characters long');
  }
  
  if (data.name && data.name.length > 100) {
    errors.push('Name cannot exceed 100 characters');
  }
  
  if (data.message && data.message.length > 10000) {
    errors.push('Message cannot exceed 10000 characters');
  }
  
  return errors;
}

// GET method - Health check
export async function GET() {
  return NextResponse.json({ 
    message: 'Contact Form API is working!',
    timestamp: new Date().toISOString()
  });
}

// POST method - Handle form submission
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    const validationErrors = validateContactForm({ name, email, message });
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validationErrors 
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase();
    
    // Prepare contact data
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Insert into database
    const result = await db.collection(COLLECTION_DB).insertOne(contactData);

    if (result.acknowledged) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully! Thank you for reaching out.',
        id: result.insertedId
      });
    } else {
      throw new Error('Failed to save message');
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.',
        error: error.message
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
