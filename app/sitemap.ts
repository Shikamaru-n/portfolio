import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

// Static export: generate sitemap.xml once at build time
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/about", "/projects", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
