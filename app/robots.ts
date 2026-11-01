import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

// Static export: generate robots.txt once at build time
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
