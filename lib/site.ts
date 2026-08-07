export interface Metric {
  value: string;
  label: string;
}

export interface ArchitectureLayer {
  name: string;
  nodes: string[];
  note: string;
}

export interface Decision {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  index: string;
  name: string;
  url: string;
  liveUrl: string;
  accent: string;
  shots: string[];
  tagline: string;
  year: string;
  role: string;
  status: string;
  stack: string[];
  highlights: string[];
  overview: string[];
  metrics: Metric[];
  architecture: ArchitectureLayer[];
  decisions: Decision[];
  lessons: string[];
}

export interface Chapter {
  num: string;
  title: string;
  body: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  note: string;
}

export interface OssProject {
  name: string;
  desc: string;
  meta: string;
}

export const identity = {
  name: "Akhtar Raza",
  role: "Full Stack Developer",
  email: "akhtarrazamirza111@gmail.com",
  github: "https://github.com/AkhtarRazaMirza",
  linkedin: "https://www.linkedin.com/in/akhtar-raza-800001302",
  location: "India · Remote US hours",
  availability: "Available for senior roles — Q3 2026",
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Contact", href: "/#contact" },
];

export const marqueeItems = [
  "Full Stack",
  "System Architecture",
  "Product Design",
  "Performance",
  "Accessibility",
  "Developer Experience",
];

export const projects: Project[] = [
  {
    slug: "stelix",
    index: "01",
    name: "Stelix",
    url: "stelix.akhtarraza.in",
    liveUrl: "https://stelix.akhtarraza.in/",
    accent: "#5B8CFF",
    shots: ["/assets/products/shot-stelix-1.jpeg", "/assets/products/shot-stelix-2.jpeg"],
    tagline: "Your AI command center — Gmail and Google Calendar, managed through one intelligent assistant.",
    year: "2025 — Present",
    role: "Design & Full Stack",
    status: "Live · in production",
    stack: ["Next.js", "React", "Google OAuth 2.0", "Gmail API", "Calendar API", "LLM", "Tailwind"],
    highlights: ["Natural-language assistant", "Smart Inbox summaries", "Calendar intelligence", "Scoped Google OAuth"],
    overview: [
      "Stelix is an AI productivity platform: connect Gmail and Google Calendar, then manage your workflow through one intelligent assistant. Instead of switching between inbox, calendar and to-do apps, you ask Stelix — it reads, organizes and summarizes your messages and keeps every meeting in view.",
      "Three features carry the product: an AI Assistant that handles email and calendar through natural language, a Smart Inbox that reads, organizes and summarizes Gmail, and Calendar Intelligence that tracks meetings and upcoming events in one place.",
    ],
    metrics: [
      { value: "2", label: "Google integrations" },
      { value: "3", label: "core features" },
      { value: "1", label: "assistant for everything" },
      { value: "4", label: "steps to done" },
    ],
    architecture: [
      { name: "Client", nodes: ["Next.js web app"], note: "A single conversational surface for email and calendar — no tab switching." },
      { name: "Identity", nodes: ["Google OAuth 2.0"], note: "Scoped connections to Gmail and Calendar — Stelix never sees a password." },
      { name: "Integrations", nodes: ["Gmail API", "Google Calendar API"], note: "Reading, organizing and summarizing mail; tracking meetings and events." },
      { name: "Intelligence", nodes: ["LLM assistant", "Inbox summarization"], note: "Natural language in, real actions and summaries out." },
    ],
    decisions: [
      { title: "One assistant over three tools", body: "Email, calendar and planning usually live in separate apps. Stelix bet on a single conversational surface: connect Gmail, connect Calendar, ask Stelix, get work done — that four-step flow is the entire onboarding." },
      { title: "OAuth scopes over credentials", body: "Google OAuth 2.0 with scoped access means the product never touches a password, and users can revoke access from their Google account at any time. Security as a feature, not a footnote." },
      { title: "Summaries as the default inbox view", body: "The Smart Inbox doesn't just list mail — it reads, organizes and summarizes, so triage takes seconds. The assistant earns its place before the user ever types a command." },
    ],
    lessons: [
      "Integrations are the product — the assistant is only as good as what it connects to.",
      "Onboarding should be four steps, not forty.",
      "A summary people trust beats a feed people scroll.",
    ],
  },
  {
    slug: "ppt-ai",
    index: "02",
    name: "PPT.ai",
    url: "ppt.akhtarraza.in",
    liveUrl: "https://ppt.akhtarraza.in/",
    accent: "#FB923C",
    shots: ["/assets/products/shot-ppt-1.jpeg"],
    tagline: "Generate presentations from text.",
    year: "2024",
    role: "Design & Full Stack",
    status: "Live",
    stack: ["Next.js", "React", "AI generation", "GitHub OAuth", "Google OAuth", "Tailwind"],
    highlights: ["Text-to-deck generation", "Passwordless sign-in", "GitHub + Google OAuth"],
    overview: [
      "PPT.ai generates presentations from text — describe what you need and get a beautiful deck instead of a blank slide. The product is deliberately focused: sign in, say what the presentation is about, and let the AI do the layout work.",
      "Access is passwordless by design: creators sign in with GitHub or Google and land straight in the product. No forms, no friction between an idea and its first draft.",
    ],
    metrics: [
      { value: "1", label: "prompt to a deck" },
      { value: "2", label: "OAuth providers" },
      { value: "0", label: "passwords stored" },
      { value: "1-click", label: "sign-in" },
    ],
    architecture: [
      { name: "Client", nodes: ["Next.js web app"], note: "Light and focused on a single job: prompt in, deck out." },
      { name: "Identity", nodes: ["GitHub OAuth", "Google OAuth"], note: "Passwordless sign-in — no credentials to leak, nothing to reset." },
      { name: "Intelligence", nodes: ["AI text-to-deck generation"], note: "Natural-language prompts become structured, presentable slides." },
    ],
    decisions: [
      { title: "Passwordless from day one", body: "GitHub and Google OAuth cover virtually every developer and knowledge worker the product serves. Zero passwords stored means zero credential breaches — and sign-in takes one click." },
      { title: "One job, done well", body: "The landing page is the sign-in page. PPT.ai doesn't sell ten features; it promises one outcome — presentations from text — and removes everything between the visitor and that outcome." },
    ],
    lessons: [
      "Focus is a feature — one clear promise beats ten vague ones.",
      "OAuth is a UX decision as much as a security one.",
      "The fastest onboarding is no onboarding at all.",
    ],
  },
  {
    slug: "anems-travels",
    index: "03",
    name: "AIMS Tours",
    url: "aimstravels.in",
    liveUrl: "https://aimstravels.in/",
    accent: "#34D399",
    shots: ["/assets/products/shot-anems-1.jpeg", "/assets/products/shot-anems-2.jpeg"],
    tagline: "Premium Hajj, Umrah & Ziyarat travel — every sacred journey deserves trusted guidance.",
    year: "2024 — Present",
    role: "Design & Full Stack",
    status: "Live · 10,000+ pilgrims served",
    stack: ["Next.js", "React", "Tailwind", "WhatsApp deep links", "Google Reviews", "Admin CMS"],
    highlights: ["WhatsApp-first conversion", "Admin-managed packages", "SEO-rich destination pages", "Skip-to-content accessibility"],
    overview: [
      "AIMS Tours is a premium pilgrimage travel platform for Hajj, Umrah and Ziyarat — built to feel as calm and cared-for as the journeys it sells. Fifteen years of hospitality-led service, more than ten thousand pilgrims guided, and a 4.9-star Google rating across 1,200+ reviews.",
      "The site carries real business weight: curated packages, destination showcases from Makkah to Dubai, verified testimonials, a team directory, compliance credentials and a pilgrim gallery — all managed through an admin dashboard, all converting through WhatsApp.",
    ],
    metrics: [
      { value: "15+", label: "years of service" },
      { value: "10K+", label: "pilgrims guided" },
      { value: "4.9★", label: "Google rating · 1,200+ reviews" },
      { value: "24/7", label: "dedicated support" },
    ],
    architecture: [
      { name: "Client", nodes: ["Next.js pages", "Optimized image pipeline"], note: "Photography-led design with responsive, optimized images keeping it fast on real networks." },
      { name: "Content", nodes: ["Admin dashboard CMS"], note: "Packages, destinations, testimonials and gallery entries are content-managed — no deploys for updates." },
      { name: "Conversion", nodes: ["WhatsApp deep links", "Click-to-call"], note: "Every CTA opens a conversation with context pre-filled — no forms, no dead ends." },
      { name: "Trust", nodes: ["Google Reviews", "Maps verification"], note: "Real ratings and a verifiable business presence, surfaced where decisions happen." },
    ],
    decisions: [
      { title: "WhatsApp-first over contact forms", body: "The audience books sacred, high-stakes travel — they want a human, not a form. Every call-to-action deep-links into WhatsApp with a pre-filled message, and replies arrive in minutes. Forms filter people out; conversations convert them." },
      { title: "Content-managed everything", body: "Packages, destinations, testimonials and gallery photos all live behind an admin dashboard. The business updates the site without touching code — seasonal packages and pricing changes ship in minutes." },
      { title: "Photography as the premium signal, performance as the budget", body: "The design is carried by real imagery from Makkah, Madinah and handpicked hotels. Every image ships through the optimizer at responsive sizes, so the site stays fast on the phones pilgrims actually use." },
    ],
    lessons: [
      "Trust is the conversion strategy — ratings, faces and credentials sell the journey.",
      "Meet customers where they already are; for this audience, that's WhatsApp.",
      "A CMS is a business feature, not a technical convenience.",
    ],
  },
];

export const philosophy: Chapter[] = [
  { num: "01", title: "Software is a product, not a project.", body: "Projects end. Products compound. I build for the second commit, the hundredth deploy, and the user who arrives a year from now." },
  { num: "02", title: "Architecture is a promise.", body: "Every boundary I draw is a promise about how the system will change. I choose boring technology deliberately, so the product is allowed to be interesting." },
  { num: "03", title: "Performance is a feature.", body: "Speed is the first thing a user feels and the last thing a team budgets for. I measure it like revenue — because it is." },
  { num: "04", title: "Details compound.", body: "A hairline border, a 120ms ease, a well-named function. None of them matter alone. Together they are the difference between software and craft." },
];

export const timeline: TimelineEntry[] = [
  { period: "2025 — Now", role: "Founding Engineer", org: "Stelix", note: "Designing and building a deployment intelligence platform from zero to production." },
  { period: "2023 — 2025", role: "Senior Full Stack Engineer", org: "B2B SaaS · US, remote", note: "Led product engineering for an analytics suite — architecture, shipping cadence and the design system." },
  { period: "2021 — 2023", role: "Full Stack Engineer", org: "Fintech", note: "Built payment flows and internal tooling processing millions in monthly volume." },
  { period: "2019 — 2021", role: "Engineer", org: "Agencies & early products", note: "Shipped a dozen products across stacks. Learned that shipping is a skill of its own." },
];

export const openSource: OssProject[] = [
  { name: "atlas-ui", desc: "Headless, accessible React primitives with a motion-first API.", meta: "TypeScript · 2.1K stars" },
  { name: "pgstream", desc: "Tail Postgres logical replication into webhooks and queues.", meta: "Go · 840 stars" },
  { name: "commitment", desc: "A tiny CLI that enforces conventional commits without config.", meta: "Rust · 310 stars" },
];
