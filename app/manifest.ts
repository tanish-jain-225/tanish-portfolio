import type { MetadataRoute } from "next";
import { manifestData, siteConfig } from "@/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: manifestData.name,
    short_name: manifestData.shortName,
    description: manifestData.description,
    start_url: "/",
    display: "standalone",
    background_color: manifestData.backgroundColor,
    theme_color: manifestData.themeColor,
    icons: [
      {
        src: siteConfig.favicon,
        sizes: "192x192",
        type: "image/x-icon",
      },
      {
        src: siteConfig.favicon,
        sizes: "512x512",
        type: "image/x-icon",
      },
    ],
  };
}
