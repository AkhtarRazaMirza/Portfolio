import { ImageResponse } from "next/og";
import { projects } from "@/lib/site";

export const alt = "Case study — Akhtar Raza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug) ?? projects[0];

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
            background: `radial-gradient(circle, ${p.accent}24 0%, transparent 70%)`,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#71717a", fontSize: 26, letterSpacing: 6, textTransform: "uppercase" }}>
          <div style={{ width: 12, height: 12, borderRadius: 9999, background: p.accent }} />
          Case Study {p.index} — Akhtar Raza
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>
            <span style={{ color: "white" }}>{p.name}</span>
            <span style={{ color: p.accent }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#a1a1aa", maxWidth: 920, lineHeight: 1.3 }}>{p.tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#52525b", fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
          <span>{p.url || p.type || p.name}</span>
          <span>Full-Stack Developer</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
