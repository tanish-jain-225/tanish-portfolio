# 🚀 Modern Portfolio Website

A stunning, responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, featuring 3D animations, interactive components, and a fully functional contact form with **MongoDB** integration.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Dark Theme** - Sleek dark UI with purple accents
- **Smooth Animations** - Framer Motion powered interactions
- **3D Elements** - Three.js globe and interactive components
- **Glass Morphism** - Modern frosted glass effects

### 🛠️ **Technical Features**
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4.0** for styling
- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **API Routes** with MongoDB integration
- **SEO Optimized** with dynamic metadata

### 📱 **Interactive Components**
- **Floating Navigation** - Smooth scroll navigation
- **Hero Section** with animated text generation
- **Project Grid** with filtering capabilities
- **Experience Timeline** with 3D cards
- **Contact Form** with real-time validation
- **Interactive Globe** with location markers

### 🔗 **Integrations**
- **MongoDB Atlas** - Contact form data storage
- **Vercel Deployment** - Automatic deployments
- **TypeScript** - Full type safety
- **ESLint** - Code quality checks

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account (for contact form)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/tanish-jain-225/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
# Create .env.local file
cp .env.example .env.local
```

Add your MongoDB credentials to `.env.local`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
DB_NAME=portfolio
COLLECTION_DB=contactMessages
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
portfolio_website_nextjs_app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact-form/  # Contact form endpoint
│   ├── resume/            # Resume page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── utilities.css     # Utility styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Contact.tsx       # Contact form
│   ├── Hero.tsx          # Hero section
│   ├── Grid.tsx          # About section
│   ├── RecentProjects.tsx # Projects showcase
│   └── MyWorkExperience.tsx # Experience timeline
├── data/                 # Static data and configuration
│   ├── index.ts          # Centralized data exports
│   ├── confetti.json     # Animation data
│   └── globe.json        # Globe configuration
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
├── public/               # Static assets
└── README.md
```

## 🎯 Key Sections

### 🏠 **Hero Section**
- Animated name and title
- Dynamic subtitle with rotating text
- Call-to-action buttons
- Smooth scroll navigation

### 👨‍💻 **About Section**
- Interactive grid layout
- Tech stack showcase
- Personal information
- Downloadable resume

### 💼 **Projects Section**
- **Recent Projects** - Highlighted work
- **Project Grid** - Filterable project gallery
- **Live Demos** - Working project links
- **Source Code** - GitHub repository links

### 🏢 **Experience Section**
- Interactive timeline
- 3D card animations
- Company details
- Role descriptions

### 📧 **Contact Section**
- **Working Contact Form** with validation
- **MongoDB Integration** for message storage
- **Social Media Links**
- **Contact Information**

## 🛠️ Built With

### **Frontend**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### **3D & Animations**
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://docs.pmnd.rs/drei)** - Useful helpers for React Three Fiber

### **Backend & Database**
- **[MongoDB Atlas](https://www.mongodb.com/atlas)** - Cloud database
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Serverless functions

### **Deployment & DevOps**
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**

1. **Connect your repository to Vercel**
```bash
npm i -g vercel
vercel --prod
```

2. **Set environment variables in Vercel dashboard:**
- `MONGODB_URI`
- `DB_NAME`
- `COLLECTION_DB`

3. **Automatic deployments** - Every push to main branch triggers deployment

### **Deploy to Netlify**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables

### **Deploy to Railway**
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

## 📊 API Documentation

### **Contact Form API**
**Endpoint:** `POST /api/contact-form`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "id": "ObjectId"
}
```

## 🧪 Testing

### **Run locally**
```bash
npm run dev
```

### **Build for production**
```bash
npm run build
npm run start
```

### **Lint code**
```bash
npm run lint
```

### **Test Contact Form**
```bash
curl -X POST http://localhost:3000/api/contact-form \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

## 🔧 Customization

### **Update Personal Information**
Edit `/data/index.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... more fields
};
```

### **Add New Projects**
```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    des: "Project description",
    img: "/project-image.svg",
    iconLists: ["/tech1.svg", "/tech2.svg"],
    link: "https://your-project.com",
    sourceCode: "https://github.com/you/project"
  }
];
```

## 👨‍💻 Author

**Tanish Jain**
- Portfolio: [tanish-portfolio.vercel.app](https://tanish-portfolio.vercel.app)
- GitHub: [@tanish-jain-225](https://github.com/tanish-jain-225)
- LinkedIn: [Tanish Jain](https://linkedin.com/in/tanish-jain-tj02022005)
- Email: tanishjain02022005@gmail.com
