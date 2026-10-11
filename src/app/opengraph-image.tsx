import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "#0a0a0f",
          color: "#e6e0e9",
          fontFamily: "sans-serif",
          borderTop: "8px solid #60a5fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#12121a" />
            <path
              d="M14 47V17h8l10 16 10-16h8v30h-8V31L32 46 22 31v16z"
              fill="#60a5fa"
            />
          </svg>
          <span style={{ fontSize: 26, color: "#cbc4d2" }}>Portfolio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 42, fontWeight: 600, color: "#60a5fa" }}>
            Full Stack Developer
          </div>
          <div style={{ fontSize: 26, color: "#cbc4d2", marginTop: 12 }}>
            Web apps, auth, payments, and a homelab on the side.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e1e2e",
            paddingTop: 24,
            fontSize: 24,
            color: "#cbc4d2",
          }}
        >
          <span>Next.js · React · TypeScript</span>
          <span>{new URL(site.url).hostname}</span>
        </div>
      </div>
    ),
    size,
  );
}
