import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { identity } from "@/lib/site";

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

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = rawUrl && rawUrl.length > 0 ? rawUrl.replace(/\/+$/, "") : "https://www.akhtarraza.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akhtar Raza — Full-Stack Developer",
    template: "%s | Akhtar Raza",
  },
  description:
    "Akhtar Raza — Full-Stack Developer and BCA student building full-stack web applications with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Akhtar Raza",
    title: "Akhtar Raza — Full-Stack Developer",
    description:
      "Akhtar Raza — Full-Stack Developer and BCA student building full-stack web applications with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhtar Raza — Full-Stack Developer",
    description:
      "Akhtar Raza — Full-Stack Developer and BCA student building full-stack web applications with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: identity.name,
      jobTitle: identity.role,
      url: `${siteUrl}/`,
      sameAs: [identity.github, identity.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Akhtar Raza — Full-Stack Developer",
      description:
        "Portfolio of Akhtar Raza, Full-Stack Developer and BCA student building full-stack web applications.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
