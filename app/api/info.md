# Portfolio Contact Form API Documentation

## Overview
This API handles contact form submissions for the portfolio website, storing messages in MongoDB Atlas and providing validation.

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://your-domain.vercel.app/api`

## Endpoints

### 1. Health Check
**GET** `/contact-form`

Returns API status and timestamp.

**Response:**
```json
{
  "message": "Contact Form API is working!",
  "timestamp": "2025-06-02T10:30:00.000Z"
}
```

### 2. Submit Contact Form
**POST** `/contact-form`

Submits a new contact form message.

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Hello, I'd like to connect with you about potential opportunities."
}
```

**Validation Rules:**
- `name`: Required, 2-100 characters
- `email`: Required, valid email format
- `message`: Required, 10-1000 characters

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully! Thank you for reaching out.",
  "id": "ObjectId"
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name must be at least 2 characters long",
    "Please provide a valid email address"
  ]
}
```

**Server Error Response (500):**
```json
{
  "success": false,
  "message": "Failed to send message. Please try again later.",
  "error": "Connection timeout"
}
```

### 3. CORS Support
**OPTIONS** `/contact-form`

Handles CORS preflight requests.

**Response Headers:**
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

## Database Schema

### Collection: `contactMessages`
```javascript
{
  _id: ObjectId,
  name: String,           // Trimmed user name
  email: String,          // Lowercase, trimmed email
  message: String,        // Trimmed message content
  createdAt: Date,        // Submission timestamp
  ipAddress: String,      // Client IP address
  userAgent: String       // Client browser info
}
```

## Environment Variables

Required in `.env.local`:
```bash
MONGODB_URI='mongodb+srv://username:password@cluster.mongodb.net'
DB_NAME='portfolio'
COLLECTION_DB='contactMessages'
```

## Rate Limiting
- No current rate limiting implemented
- Consider adding for production deployment

## Security Features
- Input validation and sanitization
- SQL injection prevention (NoSQL)
- XSS protection through data trimming
- IP address logging for monitoring

## Usage Examples

### JavaScript/Fetch
```javascript
const submitForm = async (formData) => {
  try {
    const response = await fetch('/api/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('Message sent successfully!');
    } else {
      console.error('Validation errors:', data.errors);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

### cURL
```bash
curl -X POST http://localhost:3000/api/contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message."
  }'
```

## Error Handling
- All errors are logged to console with stack traces
- Client receives sanitized error messages
- Development mode shows detailed error information
- Production mode hides sensitive error details

## MongoDB Connection
- Uses connection pooling for efficiency
- Cached connections to prevent reconnection overhead
- Automatic reconnection on connection loss
- Validates environment variables on startup

## Deployment Notes
- Works automatically on Vercel, Netlify, Railway
- Ensure MongoDB Atlas allows connections from deployment platform
- Set environment variables in deployment platform settings
- API routes become serverless functions automatically

## Testing
```bash
# Health check
curl http://localhost:3000/api/contact-form

# Test form submission
curl -X POST http://localhost:3000/api/contact-form \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

## Version History
- v1.0: Initial contact form API with MongoDB integration
- Features: Validation, error handling, CORS support, connection caching

---
Generated: June 2, 2025
Last Updated: June 2, 2025 
