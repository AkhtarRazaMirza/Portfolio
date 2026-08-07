import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const clashDisplay = localFont({
  src: [
    { path: "../public/fonts/clash-display-500.woff2", weight: "500" },
    { path: "../public/fonts/clash-display-600.woff2", weight: "600" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const generalSans = localFont({
  src: [
    { path: "../public/fonts/general-sans-300.woff2", weight: "300" },
    { path: "../public/fonts/general-sans-400.woff2", weight: "400" },
    { path: "../public/fonts/general-sans-500.woff2", weight: "500" },
  ],
  variable: "--font-general",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [{ path: "../public/fonts/jetbrains-mono-400.woff2", weight: "400 800" }],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Akhtar Raza — Full Stack Developer",
  description: "Akhtar Raza — Full Stack Developer. I design and engineer production-grade software products.",
  openGraph: {
    type: "website",
    title: "Akhtar Raza — Full Stack Developer",
    description: "Software, engineered like a product. Stelix · PPT.ai · AIMS Tours.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${generalSans.variable} ${jetbrainsMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[300] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.15em] focus:text-black"
        >
          Skip to content
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        <div className="blueprint-lines" aria-hidden="true" />
        <div className="ambient-field" aria-hidden="true">
          <div className="ambient-blob ambient-a" style={{ top: "-10%", left: "-5%", width: 560, height: 560, background: "rgba(91,140,255,0.07)" }} />
          <div className="ambient-blob ambient-b" style={{ top: "35%", right: "-10%", width: 640, height: 640, background: "rgba(139,92,246,0.06)" }} />
          <div className="ambient-blob ambient-c" style={{ bottom: "-15%", left: "20%", width: 600, height: 600, background: "rgba(52,211,153,0.05)" }} />
          <div className="ambient-mesh" />
        </div>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
