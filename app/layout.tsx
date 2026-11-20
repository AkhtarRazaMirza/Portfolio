import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/footer";


const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akhtarraza.in"),
  title: {
    default: "Akhtar Raza — Full-Stack Developer",
    template: "%s | Akhtar Raza",
  },
  description:
    "BCA student and Full-Stack Developer building web applications with Next.js, React, Node.js, TypeScript, PostgreSQL, and modern cloud architectures.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Akhtar Raza", url: "https://www.akhtarraza.in" }],
  creator: "Akhtar Raza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.akhtarraza.in",
    title: "Akhtar Raza — Full-Stack Developer",
    description:
      "BCA student and Full-Stack Developer building web applications with Next.js, React, Node.js, TypeScript, and PostgreSQL.",
    siteName: "Akhtar Raza Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhtar Raza — Full-Stack Developer",
    description:
      "BCA student and Full-Stack Developer building web applications with Next.js, React, Node.js, TypeScript, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akhtar Raza",
  url: "https://www.akhtarraza.in",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/AkhtarRazaMirza",
    "https://www.linkedin.com/in/akhtarraza-dev",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Dr. Preeti Global University",
  },
  award: "First Place (1st) — CodeEra Hackathon (PollBoard, ₹5,000 Prize)",
  knowsAbout: [
    "Web Development",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className}`}
      >
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
