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
  type: string;
  url?: string;
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  shots?: string[];
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
  linkedin: "https://www.linkedin.com/in/akhtarraza-dev",
  location: "India · Remote",
  availability: "Available for full-stack roles & internships",
  resumeUrl: "/Akhtar_Raza_Resume.pdf",
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
    slug: "form-engine",
    index: "01",
    name: "Form Engine",
    type: "Full-Stack SaaS",
    githubUrl: "https://github.com/AkhtarRazaMirza/Form-Engine",
    accent: "#8B5CF6",
    tagline: "Typeform-inspired full-stack form builder with type-safe tRPC communication.",
    year: "2024",
    role: "Full-Stack Developer",
    status: "Completed · Full-Stack SaaS",
    stack: ["TypeScript", "React", "tRPC", "PostgreSQL", "Turborepo", "Tailwind CSS"],
    highlights: ["Turborepo monorepo", "Type-safe tRPC APIs", "PostgreSQL database", "Authentication & dashboard", "7 major features"],
    overview: [
      "Form Engine is a Typeform-inspired full-stack form builder built in a Turborepo monorepo with type-safe tRPC communication.",
      "Engineered across the full product lifecycle: frontend, backend APIs, PostgreSQL database schema, user authentication, interactive question canvas, and a response management dashboard across 7 major features.",
    ],
    metrics: [
      { value: "1", label: "Turborepo monorepo" },
      { value: "tRPC", label: "type-safe communication" },
      { value: "7", label: "major features" },
      { value: "PostgreSQL", label: "database architecture" },
    ],
    architecture: [
      { name: "Monorepo Workspace", nodes: ["Turborepo", "TypeScript"], note: "Unified monorepo setup managing shared packages, configurations, and applications with strict typing." },
      { name: "API & Data Layer", nodes: ["tRPC router", "PostgreSQL"], note: "End-to-end type safety connecting React client components directly to backend procedures and PostgreSQL." },
      { name: "Application Features", nodes: ["Form builder", "Dashboard", "Auth"], note: "Interactive question canvas, user authentication, and response management dashboard across 7 major features." },
    ],
    decisions: [
      { title: "End-to-end type safety with tRPC over manual REST contracts", body: "Utilized tRPC to achieve compile-time type validation between the React frontend and Node backend, eliminating API contract drift across the monorepo." },
      { title: "Turborepo monorepo architecture", body: "Organized the application into modular workspace packages for the form engine, shared UI components, and API routers to ensure maintainability and fast build caching." },
    ],
    lessons: [
      "Shared types across the full stack drastically reduce runtime integration errors.",
      "Monorepo tooling with Turborepo keeps full-stack SaaS projects organized as they scale.",
      "Form builders require careful state management for dynamic field configurations.",
    ],
  },
  {
    slug: "chaibook",
    index: "02",
    name: "Chaibook",
    type: "AI Research Workspace",
    githubUrl: "https://github.com/AkhtarRazaMirza/NoteBook-ML",
    accent: "#06B6D4",
    tagline: "NotebookLM-style research and learning workspace with multi-source retrieval and citations.",
    year: "2024",
    role: "Full-Stack & AI Developer",
    status: "Completed · AI Workspace",
    stack: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Pinecone", "OpenAI"],
    highlights: ["Multi-source processing", "AI Q&A with citations", "Vector search with Pinecone", "Learning artifacts generation", "Prisma & PostgreSQL"],
    overview: [
      "Chaibook is a NotebookLM-style research and learning workspace for working with documents, websites, YouTube sources, and text.",
      "Implements source processing, vector search with Pinecone, AI question answering with grounded citations, research workflows, and generated learning artifacts.",
    ],
    metrics: [
      { value: "4", label: "source types (Docs, Web, YouTube, Text)" },
      { value: "Pinecone", label: "vector retrieval" },
      { value: "OpenAI", label: "citation-grounded Q&A" },
      { value: "Prisma", label: "PostgreSQL ORM" },
    ],
    architecture: [
      { name: "Source Ingestion", nodes: ["Documents", "Websites", "YouTube", "Text"], note: "Multi-modal source ingestion pipeline parsing text content for vector embedding and retrieval." },
      { name: "Vector & Storage", nodes: ["Pinecone", "PostgreSQL", "Prisma"], note: "Vector index storing source embeddings alongside relational metadata in PostgreSQL via Prisma." },
      { name: "AI Intelligence", nodes: ["OpenAI API", "Citation Engine"], note: "Retrieval-based AI answering user queries grounded in uploaded sources with exact citation references." },
      { name: "Client Workspace", nodes: ["Next.js", "React", "TypeScript"], note: "Interactive learning workspace for researching sources and generating structured study artifacts." },
    ],
    decisions: [
      { title: "Retrieval-based AI with grounded citations over raw generation", body: "Designed question answering to retrieve relevant source chunks from Pinecone and require grounded citations, ensuring answers can be cross-referenced with uploaded materials." },
      { title: "Multi-source ingestion architecture", body: "Built dedicated extractors for documents, web links, and YouTube content to unify disparate learning materials into a single searchable workspace." },
    ],
    lessons: [
      "Grounded citations make AI answers useful for research rather than generic hallucination.",
      "Clean chunking and metadata handling in Pinecone are critical for accurate multi-source retrieval.",
      "Prisma and PostgreSQL provide reliable metadata management alongside external vector stores.",
    ],
  },
  {
    slug: "stelix",
    index: "03",
    name: "Stelix",
    type: "AI Productivity Platform",
    url: "stelix.akhtarraza.in",
    liveUrl: "https://stelix.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/stelix",
    accent: "#5B8CFF",
    shots: ["/assets/products/shot-stelix-1.jpeg", "/assets/products/shot-stelix-2.jpeg"],
    tagline: "Your AI command center — Gmail and Google Calendar, managed through one intelligent assistant.",
    year: "2025 — Present",
    role: "Full-Stack Developer",
    status: "Live · Deployed",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Gmail API", "Calendar API", "Tailwind"],
    highlights: ["Natural-language assistant", "Smart Inbox summaries", "Calendar intelligence", "Scoped Google OAuth"],
    overview: [
      "Stelix is a unified productivity workspace combining Gmail and Google Calendar workflows into one application.",
      "Three features carry the product: an AI Assistant that handles email and calendar through natural language, a Smart Inbox that reads, organizes and summarizes Gmail, and Calendar Intelligence that tracks meetings and upcoming events in one place.",
    ],
    metrics: [
      { value: "2", label: "Google integrations" },
      { value: "3", label: "core features" },
      { value: "1", label: "unified assistant" },
      { value: "Scoped", label: "Google OAuth 2.0 security" },
    ],
    architecture: [
      { name: "Client & UI", nodes: ["Next.js web app", "Tailwind"], note: "Unified conversational surface for managing email and calendar schedules without context switching." },
      { name: "Identity & Security", nodes: ["Google OAuth 2.0"], note: "Scoped connections to Gmail and Calendar — zero credential storage on application servers." },
      { name: "API Integrations", nodes: ["Gmail API", "Google Calendar API", "Node.js"], note: "Reading, organizing, and summarizing mail; tracking meetings and schedule events." },
      { name: "Intelligence & Data", nodes: ["LLM assistant", "PostgreSQL"], note: "Natural language in, real actions and summaries out; persistent state in PostgreSQL." },
    ],
    decisions: [
      { title: "One assistant over three tools", body: "Email, calendar and planning usually live in separate apps. Stelix integrates both through one conversational workspace to eliminate tab switching." },
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
    index: "04",
    name: "PPT.ai",
    type: "AI Presentation Platform",
    url: "ppt.akhtarraza.in",
    liveUrl: "https://ppt.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/Ai-Ppt-genrator",
    accent: "#FB923C",
    shots: ["/assets/products/shot-ppt-1.jpeg"],
    tagline: "Generate presentations from text.",
    year: "2024",
    role: "Full-Stack Developer",
    status: "Live · Deployed",
    stack: ["Next.js", "React", "TypeScript", "AI generation", "GitHub OAuth", "Google OAuth", "Tailwind"],
    highlights: ["Text-to-deck generation", "5+ templates", "20+ presentation capabilities", "Passwordless sign-in"],
    overview: [
      "PPT.ai generates presentations from text — describe what you need and get a structured deck instead of a blank slide. The product is deliberately focused: sign in, describe the presentation topic, and let the AI do the layout work.",
      "Includes a presentation editor, 5+ customizable templates, 20+ presentation capabilities, and passwordless authentication with GitHub and Google OAuth.",
    ],
    metrics: [
      { value: "5+", label: "presentation templates" },
      { value: "20+", label: "presentation capabilities" },
      { value: "2", label: "OAuth providers" },
      { value: "0", label: "passwords stored" },
    ],
    architecture: [
      { name: "Client & Editor", nodes: ["Next.js web app", "Slide editor"], note: "Light and focused on a single job: prompt in, structured deck out." },
      { name: "Identity", nodes: ["GitHub OAuth", "Google OAuth"], note: "Passwordless sign-in — no credentials to leak, nothing to reset." },
      { name: "Intelligence & Templates", nodes: ["AI text-to-deck generation", "5+ templates"], note: "Natural-language prompts become structured, presentable slides with 20+ capabilities." },
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
    index: "05",
    name: "AIMS Tours",
    type: "Freelance Client Platform",
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
