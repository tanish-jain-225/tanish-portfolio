# 📬 Contact Form API Documentation — Tanish Portfolio

## Overview
This serverless API handles contact form submissions for Tanish Sanghvi's portfolio website, validating user inputs, enforcing IP-based sliding-window rate limits, securely storing messages in **MongoDB Atlas**, and optionally dispatching email alerts via SMTP.

## Base URL
- **Development:** `http://localhost:3000/api`
- **Production:** `https://tanish-portfolio-web.vercel.app/api`

---

## Endpoints

### 1. Health Check
**`GET /api/contact-form`**

Returns API health status, operational message, and server timestamp.

#### Response (200 OK):
```json
{
  "message": "Contact Form API is working!",
  "timestamp": "2026-09-14T13:30:00.000Z"
}
```

---

### 2. Submit Contact Message
**`POST /api/contact-form`**

Submits a new inquiry or message from the portfolio contact form.

#### Request Headers:
```http
Content-Type: application/json
```

#### Request Body Schema:
```json
{
  "name": "Alex Chen",
  "email": "alex.chen@example.com",
  "subject": "Project Collaboration Inquiry",
  "message": "Hi Tanish, I came across your portfolio and would love to discuss a full-stack project collaboration."
}
```

#### Field Validation Rules:
| Field | Type | Required | Constraints |
|---|---|---|---|
| `name` | `string` | Yes | 2 to 100 characters, trimmed |
| `email` | `string` | Yes | Valid email format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) |
| `subject` | `string` | No | Up to 200 characters |
| `message` | `string` | Yes | 2 to 10,000 characters, trimmed |

#### Success Response (`200 OK`):
```json
{
  "success": true,
  "message": "Message sent successfully! Thank you for reaching out.",
  "id": "664b8c9d0a1b2c3d4e5f6789"
}
```

#### Error Responses:
- **`400 Bad Request`** — Validation failure:
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
- **`429 Too Many Requests`** — Exceeded rate limit:
  ```json
  {
    "success": false,
    "message": "Too many requests. Please wait a few minutes before trying again."
  }
  ```
- **`500 Internal Server Error`** — Database or server connection failure:
  ```json
  {
    "success": false,
    "message": "Failed to send message. Please try again later.",
    "error": "Connection timeout"
  }
  ```

---

### 3. CORS Preflight
**`OPTIONS /api/contact-form`**

Handles browser CORS preflight requests for external integrations.

#### Response Headers:
```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

## 🛡️ Security & Rate Limiting

### Sliding-Window IP Rate Limiting
- **Window Size:** 5 minutes (300,000 ms)
- **Maximum Submissions:** 3 requests per IP per window
- **Enforcement:** [lib/rateLimit.ts](file:///d:/_Deployed_Projects_Vercel/tanish-portfolio/lib/rateLimit.ts)
- Returns HTTP status code `429 Too Many Requests` when threshold is exceeded.

### Input Sanitization & Safety
- Strict type checking and string trimming prevent empty-space submissions.
- Boundary enforcement protects against buffer and document bloat.
- MongoDB query parameters are constructed via typed object literals, shielding against NoSQL injection.
- Client IP (`x-forwarded-for` / `x-real-ip`) and user agent are captured for auditing.

---

## 🗄️ Database Schema

### Collection: `contactMessages` (MongoDB Atlas)
```typescript
interface ContactDocument {
  _id: ObjectId;
  name: string;        // Trimmed user name
  email: string;       // Normalized, trimmed email address
  subject?: string;    // Inquiry subject (optional)
  message: string;     // Trimmed message body
  createdAt: Date;     // ISO timestamp of submission
  ipAddress: string;   // Client IP address (for rate limiting audit)
  userAgent: string;   // Submitting browser user-agent header
}
```

---

## ⚙️ Environment Variables

Configured in `.env.local` (local) and Vercel Environment Settings (production):

```bash
# MongoDB Atlas Database Credentials
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net"
DB_NAME="portfolio"
COLLECTION_NAME="contactMessages"

# SMTP Mail Server (Optional for Real-Time Email Notifications)
NOTIFICATION_EMAIL="tanishjain020205@gmail.com"
SMTP_HOST="smtp.yourprovider.com"
SMTP_PORT="587"
SMTP_USER="your-smtp-user@domain.com"
SMTP_PASSWORD="your-smtp-password"
SMTP_ADMIN="outgoing-admin@domain.com"
SMTP_SECURE="false" # Set to 'true' for port 465 (SSL)
```

---

## 🧪 Testing the API

Run the automated test suite covering Route Handlers, MongoDB caching, and rate limiting:
```bash
npm test __tests__/contact-api.test.ts
npm test __tests__/rateLimit.test.ts
npm test __tests__/mongodb.test.ts
```

### Manual cURL Testing

```bash
# Health Check
curl -X GET http://localhost:3000/api/contact-form

# Submit Valid Message
curl -X POST http://localhost:3000/api/contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Portfolio Feedback",
    "message": "Loved the Bento Grid layout and responsiveness!"
  }'
```
