# 🚀 Next.js 15 Developer Portfolio

A stunning, highly interactive personal portfolio website built to showcase projects, professional experience, and academic history. Crafted with the cutting-edge stack of **Next.js 15**, **React 19**, and **Tailwind CSS 4.0**, featuring smooth 3D integrations, custom Framer Motion animations, and a fully functional contact form backed by **MongoDB Atlas**.

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)

---

## ✨ Key Features & Technical Highlights

### 🎨 **UI/UX & Interactive Design**
* **Vibrant Glassmorphism:** Sleek dark-space background theme utilizing frosted glass panels, custom glowing borders, and rich radial gradients.
* **GPU-Accelerated Animations:** Smooth scrolling, hover cards, text typing triggers, and staggered entry animations built with **Framer Motion** and raw CSS transitions optimized with GPU hints (`will-change`, `backface-visibility: hidden`).
* **3D Visualizations:** Implements canvas rendering via `three`, `@react-three/fiber`, `@react-three/drei`, and `three-globe` for deep visual assets.

### ⚡ **Performance & Optimization**
* **Hydration Safety (No SSR Mismatch):** Heavily animated components and 3D scenes are dynamically loaded on the client side using Next.js `dynamic()` imports with `ssr: false`, preventing standard React 19 hydration bugs while displaying visual skeleton loader fallbacks.
* **Asset Optimization:** Comprehensive Next.js `<Image>` implementations with strict responsive `sizes` boundaries, pre-fetching routing layers, and dynamic web manifest rendering.
* **MongoDB Connection Pooling:** Database drivers cache active connections (`MongoClient` and `Db`) in serverless environments, preventing runtime container cold starts from exhausting database connection pools.

### 🛡️ **API Robustness & Graceful Degradation**
* **Strict Input Validation:** Form submissions validate types, pattern matches, and length boundaries on both the client (form controls) and server (Next.js serverless API endpoint), shielding database records.
* **IP-Based Rate Limiting:** Integrated sliding-window rate limiting prevents spamming by allowing a maximum of 3 contact requests per 5-minute interval per IP address.
* **Graceful SMTP Fallback:** If your SMTP server fails or hits sending thresholds, the API handles the failure gracefully by logging the incident and storing the record in MongoDB, assuring zero lost user messages.

### ♿ **Accessibility (a11y) & SEO Authority**
* **Semantic Landmarks:** Employs standard HTML5 tags (`<main>`, `<section>`, `<footer>`, `<header>`) and appropriate ARIA roles (`role="list"`, `aria-label`, `tabIndex`).
* **Skip-to-Content Navigation:** Features a keyboard-accessible skip anchor at the top of the viewport to improve navigation for users relying on screen readers or keyboard navigation.
* **JSON-LD Schema Markup:** Renders rich structured `Person` metadata details for Google Search crawlers directly inside the document head.
* **SEO Management:** Dynamic robots policies, customized automated sitemaps, open-graph image assets, and custom page meta mappings.

---

## 🛠️ Tech Stack

### **Core Stack**
* **Framework:** Next.js 15 (App Router, Turbopack)
* **Runtime Library:** React 19
* **Language:** TypeScript 5
* **CSS Framework:** Tailwind CSS 4.0

### **Database & Integrations**
* **Database Driver:** `mongodb` Node client
* **Mail Transport:** `nodemailer`
* **Analytics:** `@vercel/speed-insights`

---

## 📁 Project Directory Structure

```text
tanish-portfolio/
├── app/                      # Next.js 15 App Router Directory
│   ├── api/                  # Backend Serverless Endpoints
│   │   └── contact-form/     # /api/contact-form endpoint files
│   ├── layout.tsx            # Main layout configuration & SEO Schema
│   ├── page.tsx              # Main portfolio home screen
│   ├── globals.css           # Global Tailwind directives & variables
│   ├── utilities.css         # Custom animations & utility classes
│   ├── manifest.ts           # PWA Webmanifest generator
│   └── sitemap.ts            # Dynamic sitemap creator
├── components/               # React Layout Components
│   ├── ui/                   # Reusable Visual Widgets (Bento, Spotlights, Button)
│   ├── Hero.tsx              # Visual landing spotlight grid
│   ├── Grid.tsx              # Bento grid summary panels
│   ├── RecentProjects.tsx    # Interactive projects cards
│   ├── MyWorkExperience.tsx  # Timeline timeline experience panels
│   ├── Contact.tsx           # Contact form and social panels
│   └── Footer.tsx            # Navigation link maps and copyrights
├── data/                     # Single Source of Truth Configuration
│   └── index.ts              # All text nodes, project links, and configurations
├── lib/                      # Helper Functions & Utilities
│   ├── mongodb.ts            # Connection pooling database connector
│   ├── rateLimit.ts          # IP-based API sliding window rate-limiter
│   ├── icons.ts              # Centralized react-icon mapping
│   └── utils.ts              # Tailwind merge resolver
```

---

## 🚀 Setup & Installation

### 1. Prerequisites
* **Node.js** v18 or newer
* **npm** or **yarn** package manager
* A **MongoDB Atlas** database cluster (or local MongoDB database instance)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/tanish-jain-225/portfolio-website.git
cd portfolio-website
npm install
```

### 3. Environment Configuration
Duplicate the `.env.example` file to create your local variables configuration file:
```bash
cp .env.example .env.local
```

Open `.env.local` and supply your database credentials and SMTP server properties:
```env
# MongoDB Atlas Database URI Configuration
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net"
DB_NAME="portfolio"
COLLECTION_NAME="contactMessages"

# SMTP Mail Server Configuration (Optional for Form alerts)
NOTIFICATION_EMAIL="your-destination-email@domain.com"
SMTP_HOST="smtp.yourprovider.com"
SMTP_PORT="587"
SMTP_USER="smtp-username@domain.com"
SMTP_PASSWORD="smtp-authentication-password"
SMTP_ADMIN="outgoing-notification-admin@domain.com"
SMTP_SECURE="false" # Set to 'true' for port 465 (SSL)
```

### 4. Running Locally
Start your Next.js Turbopack development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to view your site locally.

---

## 📊 API Reference

The Contact form leverages Next.js serverless route handlers:

### `POST /api/contact-form`
* **Content-Type:** `application/json`
* **Request Payload Schema:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "subject": "Inquiry Topic",
    "message": "Message details..."
  }
  ```
* **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "Message saved successfully!",
    "id": "database-document-object-id"
  }
  ```
* **Failure Responses:**
  * **400 Bad Request:** Form validation error (empty fields, long text strings, invalid emails).
  * **429 Too Many Requests:** Client IP address sent more than 3 requests in a 5-minute window.
  * **500 Server Error:** General database failure.

---

## 👨‍💻 Customization & Setup Guide

This project is built to be modular. **You do not need to scour page components or HTML nodes to modify text properties.**

### How to customize the site content:
1. Open the [data/index.ts](file:///d:/_Deployed_Projects_Vercel/tanish-portfolio/data/index.ts) file.
2. Edit the configurations to match your background:
   * **`siteConfig`:** Update website title, SEO keywords, open-graph image placeholders, and name.
   * **`heroData`:** Change subtitle slogans, headers, tech stack badge lists, and call-to-action targets.
   * **`projects`:** Add or remove items from the showcase section, including category labels, live project demos, and source code repository links.
   * **`workExperience`:** Provide thumbnails, timelines, job titles, and job roles.
   * **`socialMedia`:** Define your Github, LinkedIn, Twitter links, and icon handles.

---

## 🌐 Deploying to Vercel

The architecture is configured for one-click deployment on Vercel:

1. Push your customized codebase to a **GitHub / GitLab / Bitbucket** repository.
2. Log into your **Vercel** workspace.
3. Click **"Add New Project"** and select your repository.
4. Expand **Environment Variables** and enter the environment fields from your `.env.local` file.
5. Click **Deploy**.
