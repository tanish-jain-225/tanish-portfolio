import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./utilities.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteConfig = {
  name: "Tanish Sanghvi | Full Stack Developer & Engineering Student",
  description:
    "Portfolio of Tanish Sanghvi — Full Stack Developer & Engineering student at VESIT, Mumbai. Explore projects built with React, Next.js, Node.js, Python, and MongoDB. Open to collaborations and freelance opportunities.",
  favicon: "/favicon.ico",
  url: "https://tanish-portfolio-web.vercel.app",
  creator: "Tanish Sanghvi",
  keywords: [
    "Tanish Sanghvi",
    "Full Stack Developer",
    "Engineering Student",
    "VESIT Mumbai",
    "React Developer",
    "Next.js Portfolio",
    "MERN Stack Developer",
    "Node.js",
    "Python Developer",
    "Web Developer Mumbai",
    "AI Projects",
    "Software Engineer Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
  ogImage: "/og-image.png",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },

  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteConfig.url,
  },

  other: {
    "application-name": siteConfig.name,
    "theme-color": "#8b5cf6",
    manifest: "/manifest.json",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteConfig.url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile.svg" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.creator,
              url: siteConfig.url,
              jobTitle: "Engineering Student & Full Stack Developer",
              knowsAbout: ["React", "Next.js", "Node.js", "Python", "MongoDB", "TypeScript"],
              sameAs: [
                "https://github.com/tanish-jain-225",
                "https://linkedin.com/in/tanish-jain-tj02022005",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}