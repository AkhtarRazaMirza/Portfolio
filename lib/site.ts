export interface Metric {
  value: string;
  label: string;
}

export interface ArchitectureLayer {
  name: string;
  nodes: string[];
  note: string;
}

export interface DataFlowStep {
  step: string;
  label: string;
  detail: string;
}

export interface TechnicalChallenge {
  challenge: string;
  approach: string;
  result?: string;
}

export interface TradeOff {
  decision: string;
  pros: string;
  cons: string;
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
  dataFlow?: DataFlowStep[];
  decisions: Decision[];
  challenges?: TechnicalChallenge[];
  tradeOffs?: TradeOff[];
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
    stack: ["TypeScript", "React", "tRPC", "PostgreSQL", "Drizzle ORM", "Turborepo", "Tailwind CSS"],
    highlights: ["Turborepo monorepo", "Type-safe tRPC APIs", "PostgreSQL & Drizzle ORM", "Authentication & dashboard", "7 major features"],
    overview: [
      "Form Engine is a Typeform-inspired full-stack SaaS form builder engineered in a Turborepo monorepo with end-to-end type-safe tRPC communication.",
      "Built across the complete product lifecycle: dynamic interactive question canvas, response ingestion pipeline, PostgreSQL database schema with Drizzle ORM, user authentication, and a response management dashboard across 7 major features.",
    ],
    metrics: [
      { value: "1", label: "Turborepo monorepo" },
      { value: "tRPC", label: "type-safe communication" },
      { value: "7", label: "major features" },
      { value: "Drizzle", label: "PostgreSQL ORM" },
    ],
    architecture: [
      { name: "Monorepo Workspace", nodes: ["Turborepo", "TypeScript"], note: "Unified monorepo setup managing shared packages (UI, schemas, API routers) with cached builds." },
      { name: "Client Layer", nodes: ["React", "Form Builder Canvas", "Live Preview"], note: "Dynamic question editor with real-time preview, reordering, and form configuration state." },
      { name: "API & Protocol", nodes: ["tRPC Router", "Zod Validation"], note: "End-to-end type safety connecting React client components directly to backend procedures without REST contract drift." },
      { name: "Data & Persistence", nodes: ["PostgreSQL", "Drizzle ORM", "Auth"], note: "Relational persistence for user accounts, form schemas, field configurations, and submitted response records." },
    ],
    dataFlow: [
      { step: "01", label: "Builder State", detail: "User creates or modifies form questions on the React canvas; local state syncs with Zod schema definitions." },
      { step: "02", label: "Type-Safe RPC", detail: "tRPC mutations transmit structured updates to backend procedures with compile-time type validation." },
      { step: "03", label: "Relational Storage", detail: "Drizzle ORM executes type-safe queries against PostgreSQL to persist form structures and responses." },
      { step: "04", label: "Response Ingestion", detail: "Public submissions validate field rules and update aggregate metrics on the creator dashboard." },
    ],
    decisions: [
      { title: "End-to-end type safety with tRPC over manual REST contracts", body: "Utilized tRPC to achieve compile-time type validation between the React frontend and Node backend procedures. Any form schema modification immediately flags type mismatches across the entire workspace." },
      { title: "Turborepo monorepo package isolation", body: "Organized the application into modular workspace packages for the form engine core, shared UI components, and API routers, improving code maintainability and build caching." },
      { title: "Relational PostgreSQL schema with Drizzle ORM", body: "Modeled forms, question fields, user accounts, and responses relationally to enforce referential integrity and support efficient aggregation queries." },
    ],
    challenges: [
      { challenge: "Preventing schema drift between the interactive form builder canvas and server-side validation.", approach: "Created a shared validation package with Zod schemas used identically by client-side form controls and backend tRPC route handlers.", result: "Shared validation keeps the builder and server aligned around the same schema definitions." },
    ],
    tradeOffs: [
      { decision: "Turborepo & tRPC monorepo architecture", pros: "Compile-time type validation across client and server with unified code sharing.", cons: "Requires strict workspace build orchestration compared to isolated single-repo micro-apps." },
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
      "Chaibook is a NotebookLM-style research and learning workspace designed for working with documents, websites, YouTube sources, and text.",
      "Implements multi-source ingestion, vector indexing in Pinecone, AI question answering with grounded citations, research workflows, and generated learning artifacts.",
    ],
    metrics: [
      { value: "4", label: "source types (Docs, Web, YouTube, Text)" },
      { value: "Pinecone", label: "vector retrieval" },
      { value: "OpenAI", label: "citation-grounded Q&A" },
      { value: "Prisma", label: "PostgreSQL ORM" },
    ],
    architecture: [
      { name: "Source Ingestion", nodes: ["PDF Documents", "Web URLs", "YouTube Transcripts", "Raw Text"], note: "Heterogeneous ingestion pipeline normalizing multi-modal sources into clean text for chunking." },
      { name: "Vector Indexing", nodes: ["OpenAI Embeddings", "Pinecone Vector DB"], note: "High-dimensional vector storage indexing semantic source chunks for similarity retrieval." },
      { name: "Relational Metadata", nodes: ["PostgreSQL", "Prisma ORM", "Express API"], note: "Relational persistence managing workspaces, source metadata, document statuses, and user notes." },
      { name: "AI Synthesis & Artifacts", nodes: ["RAG Engine", "OpenAI API", "Citations", "Study Guides"], note: "Context-augmented prompt synthesis with grounded citation markers, generating flashcards and summaries." },
    ],
    dataFlow: [
      { step: "01", label: "Source Ingestion", detail: "Documents, websites, YouTube media, and notes are extracted, cleaned, and split into semantic text chunks." },
      { step: "02", label: "Vector & Relational Storage", detail: "OpenAI embeddings are saved to Pinecone while document metadata is recorded in PostgreSQL via Prisma." },
      { step: "03", label: "Context Retrieval (RAG)", detail: "User research queries generate vector embeddings to retrieve semantically relevant source chunks from Pinecone." },
      { step: "04", label: "Grounded Synthesis", detail: "OpenAI synthesizes verified answers with bracketed source citations and generates structured learning artifacts." },
    ],
    decisions: [
      { title: "Retrieval-Augmented Generation (RAG) with grounded citations over raw generation", body: "Designed question answering to retrieve relevant source chunks from Pinecone and require grounded citations, ensuring answers can be verified against uploaded sources." },
      { title: "Hybrid storage architecture (Pinecone + PostgreSQL / Prisma)", body: "Separated vector similarity indexing (Pinecone) from structured relational entities like workspaces, source metadata, and user study notes (PostgreSQL with Prisma)." },
      { title: "Multi-source extraction normalization", body: "Built dedicated extractors for documents, web links, and YouTube content to normalize disparate learning materials into a uniform chunking and embedding pipeline." },
    ],
    challenges: [
      { challenge: "Ingesting heterogeneous sources (PDFs, web pages, YouTube transcripts) without degrading vector search quality.", approach: "Constructed format-specific extractors that strip noise and normalize text before chunking and embedding generation.", result: "Consistent vector representations in Pinecone across all four source types." },
    ],
    tradeOffs: [
      { decision: "Dedicated external vector store (Pinecone) alongside relational PostgreSQL", pros: "High-performance vector similarity search without the overhead of self-hosting and managing native vector extensions.", cons: "Introduces an external service boundary and requires synchronization between vector IDs and relational document IDs." },
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
      { value: "Scoped", label: "Google OAuth 2.0 access" },
    ],
    architecture: [
      { name: "Client & UI", nodes: ["Next.js web app", "Tailwind"], note: "Unified conversational surface for managing email and calendar schedules without context switching." },
      { name: "Identity & Security", nodes: ["Google OAuth 2.0"], note: "Authentication is delegated to Google OAuth rather than storing application passwords." },
      { name: "API Integrations", nodes: ["Gmail API", "Google Calendar API", "Node.js"], note: "Reading, organizing, and summarizing mail; tracking meetings and schedule events." },
      { name: "Intelligence & Data", nodes: ["LLM assistant", "PostgreSQL"], note: "Natural language in, real actions and summaries out; persistent state in PostgreSQL." },
    ],
    dataFlow: [
      { step: "01", label: "OAuth Handshake", detail: "User authenticates via Google OAuth 2.0 with minimal required Gmail and Calendar permission scopes." },
      { step: "02", label: "API Sync", detail: "Backend services query Gmail API for unread threads and Calendar API for schedule timelines." },
      { step: "03", label: "LLM Processing", detail: "AI assistant extracts key action items, generates email triage summaries, and identifies schedule conflicts." },
      { step: "04", label: "Workspace Render", detail: "Conversational UI displays Smart Inbox summaries and upcoming calendar commitments in a unified view." },
    ],
    decisions: [
      { title: "Scoped Google OAuth 2.0 authentication", body: "Delegated authentication to scoped Google OAuth so permissions can be managed and revoked directly through Google without storing application passwords." },
      { title: "Unified conversational workflow over tab switching", body: "Integrated email triage and calendar schedules into a single conversational pane, eliminating fragmented context switching between standalone apps." },
    ],
    tradeOffs: [
      { decision: "Scoped OAuth token architecture", pros: "Delegates authentication to Google OAuth rather than managing application passwords.", cons: "Requires proactive token refresh handling and rate-limit backoff against Google API quotas." },
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
      { value: "OAuth", label: "passwordless sign-in" },
    ],
    architecture: [
      { name: "Client & Editor", nodes: ["Next.js web app", "Slide editor"], note: "Light and focused on a single job: prompt in, structured deck out." },
      { name: "Identity", nodes: ["GitHub OAuth", "Google OAuth"], note: "Passwordless sign-in delegating authentication to GitHub and Google OAuth providers." },
      { name: "Intelligence & Templates", nodes: ["AI text-to-deck generation", "5+ templates"], note: "Natural-language prompts become structured, presentable slides with 20+ capabilities." },
    ],
    dataFlow: [
      { step: "01", label: "Topic Prompt", detail: "User enters presentation topic or outline; client validates prompt constraints." },
      { step: "02", label: "JSON Slide Generation", detail: "AI prompt engine structures the topic into a standardized JSON slide hierarchy." },
      { step: "03", label: "Template Layout", detail: "Renderer applies selected template styling, typography hierarchy, and visual structure." },
      { step: "04", label: "Interactive Editor", detail: "User edits slide content, switches templates, and presents the generated deck." },
    ],
    decisions: [
      { title: "Structured JSON slide schema over freeform HTML generation", body: "Constrained AI output to a strict JSON slide schema to separate raw content generation from presentation rendering, preventing broken layouts." },
      { title: "Passwordless OAuth authentication", body: "Integrated GitHub and Google OAuth for fast onboarding without managing local password credentials." },
    ],
    tradeOffs: [
      { decision: "Constrained slide template engine", pros: "Provides consistent typography and structural layout across generated presentation decks.", cons: "Limits arbitrary freeform canvas drawing in favor of structured reliability." },
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
      { name: "Performance", nodes: ["Redis caching", "Image optimization"], note: "Cached package listings and optimized image pipeline for responsive media loading." },
    ],
    dataFlow: [
      { step: "01", label: "Package Browsing", detail: "Visitors explore dynamic itineraries served from Redis-cached PostgreSQL queries." },
      { step: "02", label: "Inquiry Generation", detail: "Selecting a package generates pre-filled itinerary and date parameters for WhatsApp deep linking." },
      { step: "03", label: "Direct Agency Lead", detail: "Agency staff receive inquiry messages directly on WhatsApp for immediate customer communication." },
      { step: "04", label: "CMS Updates", detail: "Staff update package pricing, dates, and media via the admin dashboard without deployments." },
    ],
    decisions: [
      { title: "Custom CMS for non-technical agency staff", body: "Designed an admin dashboard allowing agency managers to create, edit, and update 50+ seasonal packages and pricing in real time without developer intervention." },
      { title: "Redis query caching", body: "Implemented Redis caching for frequently accessed package catalog queries." },
    ],
    tradeOffs: [
      { decision: "WhatsApp deep linking over multi-step checkout forms", pros: "Keeps the inquiry flow aligned with the agency's existing direct human consultation workflow.", cons: "Offloads booking state and payment finalization to agency staff communication." },
    ],
    lessons: [
      "Client platforms must be simple for non-technical administrators to operate.",
      "Meeting users on familiar channels (WhatsApp) simplifies customer inquiries compared to standalone contact forms.",
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
