# 🚀 Modern Developer Portfolio

A stunning, highly interactive personal portfolio website built to showcase projects, experience, and technical skills. Crafted with the cutting-edge stack of **Next.js 15**, **React 19**, and **Tailwind CSS 4.0**, featuring smooth 3D interactions and a fully functional contact form powered by **MongoDB**.

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)

---

## ✨ Key Features

### 🎨 **UI/UX Design**
- **Modern & Responsive:** Flawless display across mobile, tablet, and desktop screens.
- **Dark Theme:** Inter-font typography with a sleek, space-gray and purple aesthetic.
- **Glass Morphism:** Trendy frosted glass effects and beautiful gradients.
- **Micro-interactions:** Powered by **Framer Motion** for smooth entrances, text generation, and interactive cards.
- **3D Integrations:** Built with `three` and `@react-three/fiber` for creative graphical elements.

### 🔌 **Functional Components**
- **Floating Navigation:** Context-aware sticky navigation menu.
- **Bento Grid Layout:** Dynamic grid highlighting skills, communication, and tech stack.
- **Projects Showcase:** Detailed 3D pin cards for each highlighted project, featuring direct repository and live demo links.
- **Experience Timeline:** Engaging, visual timeline tracking professional and academic history.
- **Working Contact Form:** Complete with full user validation, error handling, and robust **MongoDB** data storage.

---

## 🛠️ Tech Stack & Dependencies

### **Core Architecture**
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

### **Styling & Animation**
- **CSS Framework:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://motion.dev/)
- **3D Rendering:** `three`, `@react-three/fiber`, `@react-three/drei`, `three-globe`
- **Component Primitives:** Customized utility classes combined with `clsx` and `tailwind-merge`

### **Backend & Database**
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas) (via `mongodb` Node driver)
- **API:** Next.js Serverless Route Handlers (`/api/contact-form`)
- **Email/Transport:** `nodemailer`

### **DevOps & Tooling**
- **Linter:** ESLint 9 + `@eslint/eslintrc`
- **Analytics:** `@vercel/speed-insights`

---

## 📁 Project Structure

```text
portfolio_website_nextjs_app/
├── app/                    # Next.js 15 App Router
│   ├── api/                # Serverless API routes (contact-form)
│   ├── layout.tsx          # Root layout & Metadata configuration
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global Tailwind directives
│   ├── utilities.css       # Custom utility classes
│   ├── manifest.ts         # PWA Manifest configuration
│   └── sitemap.ts          # Automated SEO sitemap
├── components/             # Reusable React components
│   ├── ui/                 # Atomic/Micro UI components (BentoGrid, FloatingNav, etc.)
│   ├── Hero.tsx            # Landing "Hero" section
│   ├── Grid.tsx            # Bento Grid "About" section
│   ├── RecentProjects.tsx  # Interactive Projects showcase
│   ├── MyWorkExperience.tsx# Experience timeline cards
│   ├── Contact.tsx         # User-facing form component
│   └── Footer.tsx          # Global footer
├── data/                   # Centralized data structures
│   ├── index.ts            # Defines all text, arrays, and interfaces used in components
├── lib/                    # Global utilities
│   ├── utils.ts            # classNames/tailwind-merge helper
│   └── icons.ts            # Dynamic react-icons lookup
└── public/                 # Static assets (SVGs, PNGs, etc.)
```

*(Note: Ensure your `.vscode`, `.next` folders and `.env.local` files are ignored in `.gitignore` as configured).*

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+ 
- `npm` or `yarn`
- MongoDB Atlas cluster connection URI

### 2. Installation Setup
Clone the repository and install dependencies:

```bash
git clone https://github.com/tanish-jain-225/portfolio-website.git
cd portfolio-website
npm install
```

### 3. Environment Variables
Create a new `.env.local` file in the root directory (you can copy `.env.example`):

```bash
cp .env.example .env.local
```

Populate it with your database and email credentials:
```env
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net"
DB_NAME="portfolio"
COLLECTION_DB="contactMessages"

# If using Nodemailer:
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_app_password"
```

### 4. Run the Development Server
Start the high-performance Turbopack dev server:

```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to view the application locally.

---

## 📊 API Documentation

The site features a built-in backend route for the Contact section. You can find detailed development docs for the implementation in `app/api/info.md`.

**`POST /api/contact-form`**
- **Body:** `{ "name": "String", "email": "Email", "message": "String" }`
- **Description:** Validates input, prevents spam, and inserts the message directly into a MongoDB collection.

---

## 🌍 Deployment

This repository is optimized for one-click deployment on **Vercel**:

1. Fork or push your cloned repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Under **Environment Variables**, add `MONGODB_URI`, `DB_NAME`, and `COLLECTION_DB`.
5. Click **Deploy**.

Next.js caching, Server-Side Rendering (SSR), and Route Handlers will all automatically configure for optimal performance.

---

## 👨‍💻 Author / Customization

**Tanish Sanghvi**
- GitHub: [@tanish-jain-225](https://github.com/tanish-jain-225)
- LinkedIn: [Tanish Jain](https://linkedin.com/in/tanish-jain-tj02022005)

**Want to use this for yourself?**
Absolutely! Update the centralized data completely via `data/index.ts`. All interfaces mapped to Hero text, about grids, project links, social media, and more live entirely inside this one file. No need to hunt down text nodes inside complex component trees.
