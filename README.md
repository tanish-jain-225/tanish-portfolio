# 🚀 Tanish Sanghvi — Full Stack Developer & Software Engineer Portfolio

A modern, high-performance personal portfolio website showcasing projects, professional experience, and academic milestones. Crafted with **Next.js 15**, **React 19**, and **Tailwind CSS 4.0**, featuring an authentic Bento Grid architecture, responsive card grids, GPU-accelerated Framer Motion micro-interactions, and a secure serverless contact endpoint backed by **MongoDB Atlas**.

Live Portfolio: **[tanish-portfolio-web.vercel.app](https://tanish-portfolio-web.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)

---

## ✨ Key Features & Technical Highlights

### 🎨 **UI/UX & Structural Architecture**
* **Authentic Bento Grid:** Responsive CSS Grid layout (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl`) featuring deliberate 2-column feature spans for engineering profile and stats, alongside a full-width bottom connect banner.
* **Balanced Card Grids & Baseline Action Alignment:** Projects and Work Experience sections utilize clean CSS Grids with flex-grow descriptions, ensuring all action buttons ("Source Code" and "Live Demo") align on the exact same baseline across every card in each row.
* **Ultra-Narrow (300px) Responsiveness:** Engineered and verified for viewports from **280px–300px** (e.g., Samsung Galaxy Z Fold outer screen) up to 4K displays. Project action buttons adaptively collapse to vertical stacking below `380px` (`xs`), preventing text truncation.
* **GPU-Accelerated Micro-Animations:** Staggered entry reveals, hover card transforms, smooth text generation triggers, and interactive spotlight effects powered by Framer Motion and optimized CSS transitions.

### ⚡ **Performance & Optimization**
* **Hydration Safety (Zero SSR Mismatch):** Heavily animated components and client-interactive widgets dynamically load via Next.js `dynamic()` imports with `ssr: false` and lightweight skeleton fallbacks, preventing React 19 hydration mismatches.
* **Asset Optimization:** Comprehensive Next.js `<Image>` implementations with responsive `sizes` configurations, priority hints for hero assets, dynamic webmanifest, and automated XML sitemap generation.
* **MongoDB Connection Pooling:** Serverless database client caches `MongoClient` and `Db` instances across function invocations, avoiding cold-start latency and connection exhaustion.

### 🛡️ **API Robustness & Security**
* **Strict Input Validation & Sanitization:** Submissions validate required fields (`name`, `email`, `subject`, `message`), length bounds, and regex format on both client and server before database write.
* **Sliding-Window IP Rate Limiting:** In-memory sliding window rate limiter restricts clients to 3 submissions per 5-minute window (HTTP 429 Too Many Requests), defending against spam.
* **Graceful SMTP Fallback:** If SMTP dispatch is unavailable or encounters transmission limits, the endpoint securely logs the incident and persists the submission in MongoDB Atlas, ensuring zero lost messages.

### ♿ **Accessibility (a11y) & SEO Authority**
* **W3C Semantic Landmark Architecture:** Standard HTML5 landmarks with top-level `<header role="banner">` (FloatingNav), `<main id="main-content" role="main">` for portfolio content, and `<footer role="contentinfo">` (Footer) outside main content.
* **Keyboard Navigation & Skip Link:** Top-level `.skip-to-content` anchor enables fast focus traversal directly to the primary content for screen reader and keyboard users.
* **JSON-LD Structured Data:** Embedded `Person` schema markup provides search crawlers with rich author, affiliation (VESIT), and social profile graph data.
* **SEO Meta & OpenGraph:** Canonical URL mapping, dynamic robots.txt policy, OpenGraph previews, and custom Twitter Card tags.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Runtime & UI** | React 19, Framer Motion, React Icons |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4.0, Vanilla CSS Tokens |
| **Database** | MongoDB Atlas (Native Node.js Driver) |
| **Email Transport** | Nodemailer (Optional SMTP Alerts) |
| **Testing** | Vitest, React Testing Library, Happy-DOM |
| **Analytics** | Vercel Speed Insights |

---

## 📁 Project Directory Structure

```text
tanish-portfolio/
├── app/                        # Next.js 15 App Router Directory
│   ├── api/                    # Backend Serverless Route Handlers
│   │   ├── contact-form/       # /api/contact-form POST & GET handlers
│   │   └── info.md             # API technical documentation
│   ├── layout.tsx              # Root Layout, Metadata & JSON-LD Schema
│   ├── page.tsx                # Portfolio Page (Semantic Header, Main, Footer)
│   ├── globals.css             # Tailwind v4 Directives & Custom Variables
│   ├── utilities.css           # Utility classes, Shimmer & Accessibility Styles
│   ├── manifest.ts             # Web App Manifest Generator
│   ├── robots.ts               # Automated Robots.txt Policy
│   └── sitemap.ts              # Dynamic Sitemap XML Creator
├── components/                 # React Application Components
│   ├── ui/                     # Reusable UI Widgets
│   │   ├── BentoGrid.tsx       # Responsive Bento Grid & Item Component
│   │   ├── ExpCard.tsx         # 3D Experience Card Component
│   │   ├── FloatingNav.tsx     # Adaptive Floating Top Navigation
│   │   ├── GradientBg.tsx      # Animated Background Gradients
│   │   ├── MagicButton.tsx     # Animated Gradient Button
│   │   ├── Pin.tsx             # 3D Pin Container for Projects
│   │   ├── Spotlight.tsx       # SVG Spotlight Beam Effect
│   │   └── TextGenerateEffect  # Staggered Headline Text Reveal
│   ├── Hero.tsx                # Landing Section with Badges & CTA
│   ├── Grid.tsx                # About Section (BentoGrid Wrapper)
│   ├── RecentProjects.tsx      # Featured Projects Showcase Grid
│   ├── MyWorkExperience.tsx    # Experience & Timeline Grid
│   ├── Contact.tsx             # Interactive Contact Form & Social Links
│   └── Footer.tsx              # Footer Links, Branding & Credits
├── data/                       # Centralized Data Configuration
│   └── index.ts                # Projects, Experience, Socials, Site Config
├── lib/                        # Shared Utilities & Server Helpers
│   ├── mongodb.ts              # Cached MongoDB Connection Pool
│   ├── rateLimit.ts            # Sliding Window IP Rate Limiter
│   ├── icons.ts                # Dynamic Icon Resolver
│   └── utils.ts                # Classname Merge (clsx + tailwind-merge)
└── __tests__/                  # Automated Test Suite (Vitest)
    ├── accessibility.test.tsx  # Semantic Landmarks & a11y Suite
    ├── components.test.tsx     # Hero, Contact, and Footer Component Tests
    ├── contact-api.test.ts     # Contact Form API Handler Tests
    ├── mongodb.test.ts         # Database Connection Pool Tests
    └── rateLimit.test.ts       # Rate Limiting Logic Tests
```

---

## 🚀 Setup & Local Development

### 1. Prerequisites
* **Node.js** v20.x or newer
* **npm** or **yarn**
* A **MongoDB Atlas** cluster URI (or local MongoDB database)

### 2. Installation
```bash
git clone https://github.com/tanish-jain-225/portfolio-website.git
cd portfolio-website
npm install
```

### 3. Environment Configuration
Create a local `.env.local` configuration file:
```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:
```env
# MongoDB Atlas Database Configuration
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net"
DB_NAME="portfolio"
COLLECTION_NAME="contactMessages"

# SMTP Mail Server Configuration (Optional for Instant Email Alerts)
NOTIFICATION_EMAIL="tanishjain020205@gmail.com"
SMTP_HOST="smtp.yourprovider.com"
SMTP_PORT="587"
SMTP_USER="smtp-username@domain.com"
SMTP_PASSWORD="smtp-password"
SMTP_ADMIN="outgoing-admin@domain.com"
SMTP_SECURE="false" # Set to 'true' for port 465 (SSL)
```

### 4. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Code Quality

The codebase enforces testing and static analysis:

```bash
# Run all Vitest unit and accessibility tests
npm test

# Run tests in watch mode
npm run test:watch

# Run ESLint check
npm run lint

# Build production bundle
npm run build
```

*Test Suites (23 Tests across 5 files):*
- `__tests__/accessibility.test.tsx`: W3C landmarks, skip-link presence, non-nested buttons, focus-visible outlines.
- `__tests__/components.test.tsx`: Rendering and form interaction for Hero, Contact, and Footer.
- `__tests__/contact-api.test.ts`: Route handler validation, rate limiting (HTTP 429), and database insertion.
- `__tests__/mongodb.test.ts`: Connection pooling and environment handling.
- `__tests__/rateLimit.test.ts`: Sliding-window eviction and threshold enforcement.

---

## 👨‍💻 Customizing Portfolio Content

All personal data, projects, work experiences, and text nodes are centralized in a single configuration file:
👉 **[data/index.ts](file:///d:/_Deployed_Projects_Vercel/tanish-portfolio/data/index.ts)**

- **`siteConfig`**: Name, bio, SEO keywords, open-graph image, and metadata.
- **`heroData`**: Headline, subtitle, technology badge pills, and CTA button.
- **`bentoGridData`**: About section items, academic stats, and collaboration notes.
- **`projects`**: Project titles, descriptions, live demo links, repository URLs, and tech tags.
- **`workExperience`**: Roles, organizations, descriptions, and thumbnail graphics.
- **`socialMedia`**: GitHub, LinkedIn, and Instagram profile links.
- **`personalInfo`**: Direct email, location, degree, and university details.

---

## 🌐 Deployment to Vercel

Configured for automated zero-config deployments on **Vercel**:

1. Push your repository to **GitHub**.
2. Import the project into your **Vercel Dashboard**.
3. Add the environment variables from `.env.local` in the Vercel project settings.
4. Click **Deploy**.
