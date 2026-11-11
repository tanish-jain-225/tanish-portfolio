# Tanish Sanghvi — Portfolio

A dark-themed personal engineering portfolio for Tanish Sanghvi (B.E. Automation and Robotics Engineering, VESIT Mumbai), built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS 4**, with an API route backed by **MongoDB** and **Nodemailer**.

Live site: **[tanish-portfolio-web.vercel.app](https://tanish-portfolio-web.vercel.app)**

## Architecture & Highlights

- **Server-Rendered App Router Entry:** [`app/page.tsx`](app/page.tsx) renders all sections semantically (`<header role="banner">`, `<main id="main-content" role="main">`, `<footer role="contentinfo">`) with a neutral obsidian dark palette (`#09090b` canvas, `#111114` surfaces) and `Inter` + `JetBrains Mono` typography.
- **Centralized Content Layer:** All personal details, VESIT coursework, 8 categorized technical skill domains, projects, leadership roles, metadata, and UI strings live in [`data/index.ts`](data/index.ts).
- **Project Filtering & Resume Alignment:** Interactive category filtering (`All`, `AI & Autonomous`, `Full-Stack Web`, `Security & Utilities`) defaults to the 5 flagship resume projects with a toggle to inspect all 10 projects.
- **Hardened Contact Endpoint (`/api/contact-form`):** Strict runtime type checks, trimmed bounds validation, CRLF email header sanitization, sliding-window IP rate limiting (`3` requests per `5` minutes), pooled MongoDB persistence with explicit timeouts, and graceful SMTP fallback.
- **Accessibility & SEO:** WCAG 2.2 AA contrast tokens, skip link, keyboard-focusable section targets (`tabIndex={-1}`), reduced-motion CSS and JS scroll parity, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, JSON-LD `Person` schema, and a `1200x630` OpenGraph image ([`public/og-image.png`](public/og-image.png)).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 4, React Icons |
| Language | TypeScript 5 (strict) |
| Database & Mail | MongoDB Node.js Driver, Nodemailer |
| Testing | Vitest, React Testing Library, Happy-DOM |
| Telemetry | Vercel Analytics, Vercel Speed Insights |

## Directory Structure

```text
tanish-portfolio/
├── app/
│   ├── api/contact-form/route.ts  # GET health check, POST handler, OPTIONS CORS
│   ├── globals.css                # Tailwind v4 theme variables, base & scroll-to-top styles
│   ├── layout.tsx                 # Fonts, Metadata, JSON-LD schema, Vercel Analytics
│   ├── manifest.ts                # Web App Manifest
│   ├── page.tsx                   # Primary SSR portfolio route
│   ├── robots.ts                  # Search crawler directives
│   ├── sitemap.ts                 # Dynamic XML sitemap
│   └── utilities.css              # Skip-link and text selection rules
├── components/
│   ├── ui/
│   │   ├── BentoGrid.tsx          # Background, VESIT Education, and 8-domain Skills table
│   │   ├── FloatingNav.tsx        # Top docked navigation bar + Resume link
│   │   └── ScrollToTop.tsx        # Reduced-motion-aware return-to-top button
│   ├── Contact.tsx                # Contact form, validation, details & social links
│   ├── Footer.tsx                 # Site colophon & quick links
│   ├── Grid.tsx                   # About & Stack section wrapper
│   ├── Hero.tsx                   # Name, summary, CTAs & metrics strip
│   ├── MyWorkExperience.tsx       # Leadership & hackathon rows
│   └── RecentProjects.tsx         # Filterable project showcase grid
├── data/index.ts                  # Typed content, projects, skills & SEO metadata
├── lib/
│   ├── icons.ts                   # Explicit React Icons map
│   ├── mongodb.ts                 # Pooled MongoDB connector with timeouts
│   ├── rateLimit.ts               # Sliding-window IP limiter with cache pruning
│   └── utils.ts                   # Class merge & reduced-motion scroll helpers
├── public/                        # Resume PDF, OG image, favicons & project previews
└── __tests__/                     # Vitest unit, API, accessibility & dark-mode tests
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables and configure MongoDB/SMTP values:
   ```bash
   cp .env.example .env.local
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Verification Commands

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
