import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./utilities.css";
import siteConfig from "@/lib/siteConfig";
import Script from "next/script";
import { projects } from "@/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang="en">
      <body className={inter.className}>
        {/* SEO: Canonical and manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteConfig.url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile.svg" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Structured Data for SEO */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
            sameAs: [
              "https://github.com/tanish-jain-225",
              "https://linkedin.com/in/tanish-jain-tj02022005",
            ],
            jobTitle: "Engineering Student",
            description: siteConfig.description,
            image: siteConfig.ogImage,
          })}
        </Script>
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            publisher: {
              "@type": "Person",
              name: siteConfig.creator,
            },
          })}
        </Script>
        <Script
          id="ld-json-projects"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: projects.map((project, idx) => ({
              "@type": "CreativeWork",
              position: idx + 1,
              name: project.title,
              description: project.des,
              url: project.demoLink,
              image: project.img,
            })),
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}