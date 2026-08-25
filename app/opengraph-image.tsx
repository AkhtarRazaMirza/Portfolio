import { ImageResponse } from "next/og";

export const alt = "Akhtar Raza — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: "28%",
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(91,140,255,0.14) 0%, transparent 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#71717a", fontSize: 26, letterSpacing: 6, textTransform: "uppercase" }}>
          <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#5B8CFF" }} />
          Akhtar Raza — Full-Stack Developer
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 118, fontWeight: 600, letterSpacing: -4, lineHeight: 1.02 }}>
          <span style={{ color: "white" }}>Software, engineered</span>
          <span style={{ color: "#52525b" }}>like a product.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#52525b", fontSize: 19, letterSpacing: 3, textTransform: "uppercase" }}>
          <span>Form Engine · Chaibook · Stelix · PPT.ai · AIMS Tours</span>
          <span style={{ display: "flex", gap: 10 }}>
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: "#8B5CF6" }} />
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: "#06B6D4" }} />
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: "#5B8CFF" }} />
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: "#FB923C" }} />
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: "#34D399" }} />
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
