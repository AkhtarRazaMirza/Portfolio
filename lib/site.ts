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
  location: "India · Remote",
  availability: "Available for full-stack roles & internships",
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
    tagline: "Full-stack pilgrimage travel platform built for a real agency client.",
    year: "2024",
    role: "Freelance Full-Stack Developer",
    status: "Live · Client Platform",
    stack: ["Next.js", "React", "Tailwind", "PostgreSQL", "Drizzle ORM", "Redis", "WhatsApp API", "Admin CMS"],
    highlights: ["50+ packages managed", "Admin CMS dashboard", "WhatsApp booking flow", "SEO-optimized pages"],
    overview: [
      "Built as a freelance full-stack client project for AIMS Tours, a pilgrimage travel agency with 15+ years of hospitality service and 10,000+ pilgrims guided.",
      "Engineered the complete platform end-to-end: a high-performance public website, an admin dashboard managing 50+ dynamic travel packages, booking and inquiry workflows with WhatsApp deep links, and structured destination pages.",
    ],
    metrics: [
      { value: "50+", label: "travel packages" },
      { value: "1", label: "admin CMS dashboard" },
      { value: "WhatsApp", label: "direct inquiry flow" },
      { value: "Full-Stack", label: "client platform" },
    ],
    architecture: [
      { name: "Client", nodes: ["Next.js web app", "Tailwind CSS"], note: "Responsive, mobile-optimized public portal with fast imagery and booking CTAs." },
      { name: "Content & CMS", nodes: ["Admin dashboard", "PostgreSQL", "Drizzle ORM"], note: "Complete management of 50+ packages, itineraries, testimonials, and gallery content without code changes." },
      { name: "Integration", nodes: ["WhatsApp deep links", "Inquiry workflows"], note: "Pre-filled inquiry messaging routing leads directly to agency representatives." },
      { name: "Performance", nodes: ["Redis caching", "Image optimization"], note: "Cached package listings and optimized image pipeline for quick mobile load times." },
    ],
    decisions: [
      { title: "Direct WhatsApp booking over friction-heavy forms", body: "For high-stakes pilgrimage travel, clients prefer direct human conversations. Every package inquiry pre-populates trip details directly into WhatsApp for immediate conversion." },
      { title: "Custom CMS for non-technical agency staff", body: "Designed an admin dashboard allowing agency managers to create, edit, and update 50+ seasonal packages and pricing in real time without developer intervention." },
      { title: "Performance-first mobile experience", body: "Most pilgrims and families browse on mobile devices. Optimized the media pipeline and query caching to maintain fast load times across high-resolution imagery." },
    ],
    lessons: [
      "Client platforms must be simple for non-technical administrators to operate.",
      "Meeting users on familiar channels (WhatsApp) drives faster conversions than cold forms.",
      "Strong data modeling with Drizzle and PostgreSQL simplifies complex multi-package itineraries.",
    ],
  },
];

export const philosophy: Chapter[] = [
  { num: "01", title: "Software is a product, not a project.", body: "Projects end. Products compound. I build for the second commit, the hundredth deploy, and the user who arrives a year from now." },
  { num: "02", title: "Architecture is a promise.", body: "Every boundary I draw is a promise about how the system will change. I choose boring technology deliberately, so the product is allowed to be interesting." },
  { num: "03", title: "Performance is a feature.", body: "Speed is the first thing a user feels and the last thing a team budgets for. I measure and optimize load times, interaction fidelity, and rendering efficiency deliberately." },
  { num: "04", title: "Details compound.", body: "A hairline border, a 120ms ease, a well-named function. None of them matter alone. Together they are the difference between software and craft." },
];

export const timeline: TimelineEntry[] = [
  {
    period: "2024 — 2027",
    role: "BCA Student",
    org: "Dr. Preeti Global University",
    note: "Pursuing Bachelor of Computer Applications (CGPA 7.8) with a focus on full-stack web engineering, databases, and modern software design.",
  },
  {
    period: "6 Months",
    role: "Full-Stack Developer (Project-Based)",
    org: "Agarwal Tech Support",
    note: "Built and delivered web features across client projects: responsive UI pages, backend APIs, PostgreSQL schemas, and authentication flows.",
  },
  {
    period: "1 Month",
    role: "Freelance Full-Stack Developer",
    org: "Anems Travels",
    note: "Engineered an end-to-end travel platform for a travel agency client: 50+ packages, custom CMS, booking workflows, and PostgreSQL backend.",
  },
  {
    period: "2024 — Present",
    role: "Hackathons & Building",
    org: "5+ Hackathons · 1st Place Win",
    note: "Won 1st place in a hackathon competition; built and deployed 15+ large full-stack applications and 30+ small/medium web projects.",
  },
];

export const openSource: OssProject[] = [
  {
    name: "Full-Stack Web Applications",
    desc: "15+ large full-stack projects and 30+ small/medium web applications built and deployed with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    meta: "GitHub · Public Repositories",
  },
  {
    name: "Client Work & Admin Systems",
    desc: "Freelance client platforms, admin dashboards, and custom CMS workflows.",
    meta: "GitHub · Real Projects",
  },
  {
    name: "AI & Hackathon Projects",
    desc: "1st-place hackathon winning project and AI tools integrating modern LLM APIs.",
    meta: "GitHub · Open Code",
  },
];
