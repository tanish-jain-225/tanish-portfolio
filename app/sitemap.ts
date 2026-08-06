import type { MetadataRoute } from "next";
import { siteConfig } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
