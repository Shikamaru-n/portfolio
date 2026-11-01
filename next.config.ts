import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site into the `out/` folder (no server needed).
  output: "export",
  // Next's built-in image optimiser needs a server, so it's switched off for
  // static export. Images are optimised by hand instead (WebP, sized).
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
