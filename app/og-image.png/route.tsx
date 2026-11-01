// The 1200×630 preview image shown when the site is shared on LinkedIn, X, WhatsApp, etc.
// Generated once at build time from the same content as the hero, and saved as
// out/og-image.png. Every page points to it through lib/metadata.ts.
/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";
import { ogImage } from "@/lib/metadata";

// Static export: build the PNG once
export const dynamic = "force-static";

export async function GET() {
  const photo = await readFile(join(process.cwd(), "assets/og-photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          gap: 64,
          padding: "72px 80px",
          background: "#141a23",
          color: "#f2f4f7",
        }}
      >
        <img
          src={photoSrc}
          width={300}
          height={300}
          alt=""
          style={{ borderRadius: 9999, border: "8px solid rgba(95, 214, 191, 0.4)" }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ marginTop: 24, fontSize: 30, lineHeight: 1.4, color: "#5fd6bf" }}>
            {profile.roles.join("  |  ")}
          </div>
          <div style={{ marginTop: 32, fontSize: 28, color: "#a7b1bf" }}>
            {`${profile.location} · ${profile.availability}`}
          </div>
        </div>
      </div>
    ),
    { width: ogImage.width, height: ogImage.height },
  );
}
