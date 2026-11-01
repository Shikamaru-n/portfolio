import type { Metadata } from "next";

import { profile } from "@/content/profile";
import { seo } from "@/content/site";

// Built by app/og-image.png/route.tsx
export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: seo.ogImageAlt,
  type: "image/png",
};

// Open Graph + Twitter tags for one page. A page's openGraph object replaces the
// layout's entirely, so every page gets the full set, including the preview image.
export function socialMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: profile.name,
      locale: "en_GB",
      title,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
}

// Full metadata for an inner page (About, Projects, Contact)
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...socialMetadata({ title: `${title} | ${profile.name}`, description, path }),
  };
}
