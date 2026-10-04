import { ImageResponse } from "next/og";
import { brand, product } from "@/data/site";

// Site-wide social share card (Open Graph + X), rendered to a static PNG at build time.
export const alt = `${brand.name} — Herbal Hair Oil in Pakistan`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#f6f2e6",
        color: "#2c4535",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#6b6556" }}>
        Herbal hair care · Made for Pakistan
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 120, lineHeight: 1 }}>{brand.name}</div>
        <div style={{ fontSize: 52, marginTop: 24, maxWidth: 900 }}>{brand.tagline}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 30 }}>
        <div style={{ width: 64, height: 4, background: "#c58a3c" }} />
        {product.size} {product.shortName} · Cash on Delivery nationwide
      </div>
    </div>,
    size,
  );
}
