export interface ArchitectureLayer {
  name: string;
  technologies: string[];
  description: string;
}

export interface EngineeringChallenge {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  projectType: "source-verified" | "client-proprietary";
  role: string;
  timeline?: string;
  heroImage: string;
  imageWidth: number;
  imageHeight: number;
  liveUrl?: string;
  githubUrl?: string;
  overview: string[];
  problemAndMotivation: string[];
  solution: string[];
  verifiedTechnologies: {
    category: string;
    items: string[];
  }[];
  coreFeatures: {
    title: string;
    description: string;
  }[];
  architectureLayers: ArchitectureLayer[];
  engineeringChallenges: EngineeringChallenge[];
  outcomesAndLearnings: string[];
  confidentialityNote?: string;
}

export const caseStudies: Record<string, CaseStudyData> = {
  "form-engine": {
    slug: "form-engine",
    title: "Form Engine (Fieldwork)",
    tagline:
      "Full-stack SaaS form builder featuring a visual drag-and-drop canvas, atomic two-phase field index reordering, httpOnly cookie sessions, and unified tRPC/OpenAPI surfaces.",
    category: "Full-Stack TypeScript Monorepo · SaaS Platform",
    projectType: "source-verified",
    role: "Full-Stack Developer",
    heroImage: "/fieldwork-form-engine.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    githubUrl: "https://github.com/AkhtarRazaMirza/Form-Engine",
    overview: [
      "Form Engine (shipped in the UI under the product name Fieldwork) is a full-stack form creation and response-collection platform built within a clean Turborepo monorepo.",
      "The product treats the visual builder, publishing gate, respondent experience, and response analytics as a single continuous workflow rather than isolated CRUD screens.",
      "Architected with Next.js 16 (App Router), React 19, Express 5, tRPC, PostgreSQL, and Drizzle ORM, with absolute boundary separation between user interface, services, and database layers.",
    ],
    problemAndMotivation: [
      "Most form builders separate form configuration, public sharing, and submission inspection across disconnected views, forcing users through jarring context switches.",
      "Traditional form database schemas often rely on naive sequential integer indexing, which causes expensive re-indexing writes and race conditions during drag-and-drop operations.",
      "The engineering objective was to build an end-to-end type-safe TypeScript monorepo that delivers an instant keyboard/drag-and-drop editing canvas with strict request-level ownership authorization and zero client-side credential exposure.",
    ],
    solution: [
      "Engineered a pnpm/Turborepo workspace where apps/web (Next.js 16) and apps/api (Express 5) share typed packages for database, services, logger, and tRPC contracts without leaking SQL or private secrets to the client.",
      "Implemented a dual-surface API router: one tRPC router mounted for direct type-safe client RPCs and compiled via trpc-to-openapi into an OpenAPI REST specification with interactive Scalar API documentation at /docs.",
      "Designed a two-phase transaction-safe field reordering algorithm that parks rows on negative temporary indices to respect unique PostgreSQL constraints during rapid drag reordering.",
      "Enforced httpOnly cookie sessions, request-level ownership checks (IDOR protection), formula injection-resistant client-side CSV exports, and HMAC-SHA256 password digests with per-user 16-byte random salts (chosen to eliminate native build dependencies, with the explicit disclosure that HMAC-SHA256 is a fast cryptographic digest and NOT a memory-hard password hashing function like Argon2id or bcrypt; in high-threat enterprise deployments, a migration to a memory-hard KDF would be required).",
    ],
    verifiedTechnologies: [
      {
        category: "Frontend & UI Architecture",
        items: [
          "Next.js 16",
          "React 19",
          "Tailwind CSS 4",
          "TanStack Query",
          "tRPC Client",
          "Lucide React",
        ],
      },
      {
        category: "Backend & API Engine",
        items: [
          "Express 5",
          "tRPC Server",
          "trpc-to-openapi (Scalar Docs)",
          "Zod Schema Validation",
          "Winston Logger",
        ],
      },
      {
        category: "Data Layer & Persistence",
        items: [
          "PostgreSQL",
          "Drizzle ORM",
          "drizzle-kit",
          "Docker Compose",
        ],
      },
      {
        category: "Monorepo & Tooling",
        items: [
          "Turborepo",
          "pnpm Workspaces",
          "TypeScript 5.9",
          "Prettier",
        ],
      },
    ],
    coreFeatures: [
      {
        title: "Visual Drag-and-Drop & Keyboard Builder",
        description:
          "Palette of five field types (short text, number, email, yes/no, password) with live canvas previews, optimistic local ordering, and full keyboard navigation (arrows, 1-5 shortcuts, duplicate).",
      },
      {
        title: "Dual tRPC & OpenAPI REST Surfaces",
        description:
          "Single tRPC server router mounted both as an end-to-end typed RPC endpoint for Next.js and as a public REST API with generated OpenAPI JSON and Scalar docs UI.",
      },
      {
        title: "Two-Phase Atomic Field Reordering",
        description:
          "Reorders form fields inside a database transaction by parking rows on negative indices, completely avoiding UNIQUE(form_id, index) constraint collisions.",
      },
      {
        title: "Secure Response Explorer & Sanitized CSV Export",
        description:
          "Master-detail response inspector with full-text answer search, masked password fields, and client-side CSV serialization that neutralizes spreadsheet formula injection (=, +, -, @).",
      },
    ],
    architectureLayers: [
      {
        name: "Web Application (apps/web)",
        technologies: ["Next.js 16", "React 19", "TanStack Query", "Tailwind CSS 4"],
        description:
          "Responsive dashboard, drag-and-drop form canvas, and lightweight public respondent route (/form/[id]) consuming the shared tRPC client.",
      },
      {
        name: "API Server & Routing (apps/api & packages/trpc)",
        technologies: ["Express 5", "tRPC", "trpc-to-openapi", "Scalar"],
        description:
          "Mounts both /trpc and /api OpenAPI endpoints, validates request payloads via Zod, and enforces authentication and IDOR ownership checks.",
      },
      {
        name: "Data Access & Business Logic (packages/services)",
        technologies: ["TypeScript", "Drizzle ORM", "Winston"],
        description:
          "Encapsulated service layer managing form lifecycle, atomic reordering transactions, duplication, and response queries without exposing SQL to the web tier.",
      },
      {
        name: "Persistence & Monorepo Infrastructure",
        technologies: ["PostgreSQL", "Drizzle Schema", "Turborepo", "pnpm"],
        description:
          "Normalized relational schema with foreign key integrity, migration tracking, and pnpm workspace isolation.",
      },
    ],
    engineeringChallenges: [
      {
        title: "Avoiding Unique Constraint Collisions During Field Reordering",
        problem:
          "Form fields enforce a strict UNIQUE(form_id, index) database constraint. In-place reordering permutations directly update indices, which throws unique constraint violation errors when swapping adjacent items.",
        solution:
          "Engineered a two-phase reordering transaction: phase 1 shifts target field indices to temporary negative values (-1, -2, etc.); phase 2 assigns the final zero-based positive sequence.",
        result:
          "Reliable in-transaction index swapping without UNIQUE constraint collision errors during rapid drag-and-drop or keyboard reordering.",
      },
      {
        title: "Exposing Dual API Surfaces from a Single Router",
        problem:
          "Maintaining separate REST and RPC endpoints leads to duplicate validation schemas, documentation drift, and fragmented auth middleware.",
        solution:
          "Integrated trpc-to-openapi with the root tRPC router in Express, generating an OpenAPI 3.0 specification and interactive Scalar UI at /docs from the exact same schema definitions.",
        result:
          "End-to-end type-safe internal RPC calls for the web client while effortlessly providing standard REST documentation for external consumers.",
      },
      {
        title: "Preventing IDOR & Leaking Unpublished Schemas",
        problem:
          "Draft forms must remain strictly confidential to the creator, while public respondent links (/form/[id]) must allow submission only when explicitly published.",
        solution:
          "Separated public and authenticated procedure paths. getForm checks creator ownership: unauthenticated requests for draft forms receive only an empty shell, and submitForm rejects any non-PUBLISHED form.",
        result:
          "Strict separation between private draft configurations and published respondent experiences, reducing unauthorized field discovery.",
      },
    ],
    outcomesAndLearnings: [
      "Demonstrated how Turborepo and pnpm workspaces enforce clean separation of concerns across enterprise-scale TypeScript projects.",
      "Mastered transaction-safe database indexing patterns to build high-performance visual drag-and-drop user experiences.",
      "Eliminated API contract drift by unifying tRPC and OpenAPI generation under a single TypeScript source of truth.",
      "Evaluated the security trade-off of using Node's native HMAC-SHA256 with per-user random salts to eliminate native build dependencies, while explicitly documenting that high-threat enterprise deployments require dedicated memory-hard functions like Argon2id or bcrypt.",
    ],
  },
  "stelix": {
    slug: "stelix",
    title: "Stelix Command Center",
    tagline:
      "AI productivity command center unifying Gmail and Google Calendar with a Groq-powered multi-step tool-calling agent in Next.js and Express.",
    category: "Full-Stack AI Productivity Platform",
    projectType: "source-verified",
    role: "Full-Stack Developer",
    heroImage: "/stelix.jpeg",
    imageWidth: 1920,
    imageHeight: 1080,
    liveUrl: "https://stelix.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/stelix",
    overview: [
      "Stelix Command Center is an AI-powered communication and scheduling platform engineered to eliminate context switching between email inboxes and calendar applications.",
      "Built with Next.js 16, Express 5, PostgreSQL, Drizzle ORM, and Google OAuth 2.0, the platform connects directly with Gmail and Google Calendar through Corsair integrations.",
      "A conversational AI assistant powered by Groq's high-speed Llama models interprets natural language instructions into multi-step tool calls, enabling users to read emails, draft replies, check schedule availability, and create calendar events from one unified interface.",
    ],
    problemAndMotivation: [
      "Knowledge workers spend significant time context switching back and forth between email threads and calendar tabs to negotiate meeting times, verify dates, and send invites.",
      "Standard email and calendar clients treat communication and scheduling as separate silos, requiring repetitive manual copy-pasting of event details and attendee emails.",
      "The technical goal was to engineer a unified workspace with an AI tool-calling assistant that helps automate communication workflows while keeping actions inspectable by the user.",
    ],
    solution: [
      "Architected a decoupled system: a high-speed Next.js 16 frontend paired with a modular Express 5 TypeScript backend running PostgreSQL and Drizzle ORM.",
      "Implemented Google OAuth 2.0 integration requesting scoped authorization for Gmail and Google Calendar APIs via the Corsair framework.",
      "Developed an AI Agent service using the Groq SDK that parses natural-language prompts into structured tool executions for email search, draft generation, calendar inspection, and event scheduling.",
      "Built a persistent conversation and activity feed that displays tool execution results alongside email threads and calendar timelines.",
    ],
    verifiedTechnologies: [
      {
        category: "Frontend Client",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "Tailwind CSS 4",
          "Radix UI Primitives",
          "React Hook Form",
          "Zod",
        ],
      },
      {
        category: "Backend Service & APIs",
        items: [
          "Express 5",
          "Node.js 22",
          "TypeScript",
          "Corsair SDK",
          "Google Auth Library",
          "Winston Logger",
        ],
      },
      {
        category: "AI & Tool Orchestration",
        items: [
          "Groq SDK (Llama 3.3 70B)",
          "Structured Tool Calling",
          "Multi-turn Context Loop",
        ],
      },
      {
        category: "Database & Persistence",
        items: [
          "PostgreSQL",
          "Drizzle ORM",
          "drizzle-kit",
          "Docker Compose",
        ],
      },
    ],
    coreFeatures: [
      {
        title: "Natural-Language Tool-Calling Agent",
        description:
          "Interprets complex requests like 'Find emails from John and schedule a 30-min sync tomorrow' into structured, sequential API executions.",
      },
      {
        title: "Unified Gmail Inbox & Thread Reader",
        description:
          "Full inbox synchronization allowing users to read message threads, search by keyword or sender, and compose outgoing emails directly.",
      },
      {
        title: "Google Calendar Event Management",
        description:
          "Direct calendar synchronization to view upcoming schedules, check conflicts, and create or update calendar events.",
      },
      {
        title: "Persistent Chat & Activity History",
        description:
          "Preserves conversation threads and audit logs of agent-executed actions with PostgreSQL persistence.",
      },
    ],
    architectureLayers: [
      {
        name: "Frontend Workspace (client)",
        technologies: ["Next.js 16", "React 19", "Tailwind CSS 4", "Radix UI"],
        description:
          "Interactive command center housing the unified email client, calendar view, and persistent assistant chat drawer.",
      },
      {
        name: "Backend Gateway (server)",
        technologies: ["Express 5", "TypeScript", "Helmet", "Cookie Parser"],
        description:
          "REST API handling authentication, user session cookies, error handling, and routing between agent and Google services.",
      },
      {
        name: "AI Agent Engine",
        technologies: ["Groq SDK", "Llama 3.3 70B", "Function Calling"],
        description:
          "Autonomous agent loop analyzing intent, selecting appropriate tool definitions, and formatting tool results for conversational feedback.",
      },
      {
        name: "Integration & Persistence Layer",
        technologies: ["Corsair SDK", "Google APIs", "Drizzle ORM", "PostgreSQL"],
        description:
          "Scoped OAuth 2.0 communication with Google Cloud services paired with relational storage for users, accounts, and session metadata.",
      },
    ],
    engineeringChallenges: [
      {
        title: "Reliable Multi-Step AI Tool Calling with Groq",
        problem:
          "Natural language prompts often involve multi-part tasks (e.g., read an email, parse a date, create an event, send a reply) where single-step LLM calls fail or hallucinate parameters.",
        solution:
          "Implemented an iterative agent loop that evaluates tool-call requests against strict Zod schemas, executes functions sequentially, and feeds tool outputs back to the model until completion.",
        result:
          "Structured, step-by-step tool invocation with clear conversational feedback for each action taken.",
      },
      {
        title: "Managing Scoped Google OAuth Credentials",
        problem:
          "Handling combined Gmail modify and Google Calendar access requires robust token storage and graceful error handling when tokens expire.",
        solution:
          "Leveraged Corsair integrations with secure server-side credential isolation and structured error boundary middleware to prevent session drops.",
        result:
          "Smooth user authentication and reliable access to Google APIs across active sessions.",
      },
      {
        title: "Preventing Context Window Blowup During Thread Parsing",
        problem:
          "Raw email threads and HTML bodies contain massive metadata, headers, and CSS that rapidly consume LLM context windows.",
        solution:
          "Built sanitization pre-processors that strip boilerplate MIME wrappers, extract plain-text messages, and truncate non-essential historical quotes before passing content to the agent.",
        result:
          "Substantially reduced token consumption and faster response times from Groq inference.",
      },
    ],
    outcomesAndLearnings: [
      "Engineered an interactive AI tool-calling workflow connecting natural-language requests to Google Workspace APIs (Gmail and Google Calendar).",
      "Learned strategies for token minimization and data sanitization when piping unstructured communication into LLMs.",
      "Recognized the practical boundaries of OAuth token lifecycles and the importance of user-in-the-loop confirmation before irreversible email or calendar actions.",
      "Deepened expertise with Next.js 16 and Express 5 decoupled full-stack architectures.",
    ],
  },
  "ai-ppt-generator": {
    slug: "ai-ppt-generator",
    title: "AI PPT Generator",
    tagline:
      "Full-stack presentation platform featuring structured AI slide generation, background media pipelines, and native PowerPoint compilation.",
    category: "Full-Stack AI Application",
    projectType: "source-verified",
    role: "Full-Stack Developer",
    heroImage: "/ppt-ai.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    liveUrl: "https://ppt.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/Ai-Ppt-genrator",
    overview: [
      "AI PPT Generator is a modern web platform engineered with TanStack Start, React 19, and Vite that transforms natural-language prompts into structured, multi-slide presentation decks.",
      "The architecture deliberately decouples high-speed structured text generation from asynchronous media synthesis, enabling immediate interactive slide previews while multi-pass background workers generate visual assets and compile downloadable Microsoft PowerPoint (.pptx) binaries.",
    ],
    problemAndMotivation: [
      "Creating presentation decks manually is time-consuming, requiring repetitive formatting, layout adjustments, and copy fitting across dozens of slides.",
      "Generic AI chatbots output raw unformatted text blocks that still need to be manually transferred to presentation tools, while traditional end-to-end slide generation tools block the browser interface for several minutes during image rendering.",
      "The engineering goal was to build an asynchronous generation pipeline that returns an initial structured slide outline synchronously while offloading image synthesis and document serialization to background queues.",
    ],
    solution: [
      "Architected a server-side rendered application with TanStack Start, powered by the Nitro engine and Vite for server-side rendering and client-side hydration.",
      "Implemented a structured generation pipeline using the Vercel AI SDK and OpenRouter provider, enforcing strict Zod JSON schemas for slide hierarchies, bullet points, and speaker notes.",
      "Integrated Inngest event-driven background functions to orchestrate multi-pass image generation with exponential backoff and automated retry schedules.",
      "Utilized PptxGenJS to compile presentation ASTs directly into native Microsoft PowerPoint (.pptx) binary files on the client and server.",
    ],
    verifiedTechnologies: [
      {
        category: "Frontend & Full-Stack Framework",
        items: [
          "TanStack Start (SSR)",
          "React 19",
          "Vite",
          "Tailwind CSS 4",
          "TanStack Router",
          "TanStack Query",
        ],
      },
      {
        category: "AI & Generation Pipeline",
        items: [
          "Vercel AI SDK (ai)",
          "OpenRouter API",
          "Zod Schema Validation",
          "Pollinations AI (Image Generation)",
        ],
      },
      {
        category: "Background Workflows & Storage",
        items: [
          "Inngest (Event-Driven Background Jobs)",
          "Cloudinary (Asset Uploads & Storage)",
          "PptxGenJS (Native PPTX Generator)",
        ],
      },
      {
        category: "Backend & Data Persistence",
        items: [
          "PostgreSQL",
          "Prisma ORM",
          "Better Auth (OAuth & Session Management)",
        ],
      },
    ],
    coreFeatures: [
      {
        title: "Prompt-to-Deck Structured Generation",
        description:
          "Transforms natural-language topics into multi-slide presentations with titles, structured takeaways, and dedicated presenter notes.",
      },
      {
        title: "Asynchronous Multi-Pass Image Pipeline",
        description:
          "Inngest background workers generate slide imagery asynchronously with multi-pass retries (immediate pass, 5-minute retry, 15-minute fallback), allowing users to review and edit presentation outlines without waiting for media generation to complete.",
      },
      {
        title: "Native PowerPoint (.pptx) Compilation",
        description:
          "Compiles slide specifications, typography, layouts, and visual assets into standard Microsoft PowerPoint (.pptx) files ready for immediate presentation.",
      },
      {
        title: "Better Auth OAuth & Session Management",
        description:
          "Secure authentication supporting Google and GitHub OAuth providers with session persistence in PostgreSQL via Prisma.",
      },
    ],
    architectureLayers: [
      {
        name: "Client & Presentation Surface",
        technologies: ["TanStack Start", "React 19", "Tailwind CSS 4"],
        description:
          "Server-side rendered application surface with interactive slide navigation, fullscreen presentation mode, and slide editing controls.",
      },
      {
        name: "Generation & AI Orchestration",
        technologies: ["Vercel AI SDK", "OpenRouter API", "Zod"],
        description:
          "Prompt analysis and structured JSON schema enforcement generating slide titles, key takeaways, speaker notes, and concise image generation prompts.",
      },
      {
        name: "Background Queue & Media Pipeline",
        technologies: ["Inngest", "Pollinations AI", "Cloudinary"],
        description:
          "Event-driven workers executing background image generation, managing rate limits (HTTP 429), and uploading optimized assets to Cloudinary.",
      },
      {
        name: "Persistence & Document Export",
        technologies: ["Prisma ORM", "PostgreSQL", "PptxGenJS"],
        description:
          "Relational models for presentations, slides, and user accounts, paired with client/server PPTX binary serialization.",
      },
    ],
    engineeringChallenges: [
      {
        title: "Decoupling Fast Text from Slow Media Generation",
        problem:
          "Generating both slide copy and high-resolution images synchronously caused API gateway timeouts and kept users waiting for prolonged periods without response.",
        solution:
          "Split generation into two phases: Phase 1 synchronously generates text structures, assigns slide hierarchies, and persists initial records with imageStatus = 'PENDING'. Phase 2 triggers an Inngest background event that populates image assets asynchronously.",
        result:
          "Users receive an interactive presentation preview immediately while background workers complete media synthesis without blocking UI interactions.",
      },
      {
        title: "Resilient Image Synthesis with Rate-Limit Handling",
        problem:
          "External image synthesis APIs intermittently encounter rate limits (HTTP 429) or timeouts during concurrent batch generation across multi-slide decks.",
        solution:
          "Implemented an Inngest worker with sequential execution, exponential backoff with jitter, and automatic retry passes at 5-minute and 15-minute intervals.",
        result:
          "Resilient deck completion that gracefully recovers from transient rate limits and upstream timeouts without manual user retries.",
      },
    ],
    outcomesAndLearnings: [
      "Demonstrated practical implementation of modern TanStack Start SSR combined with event-driven background job architectures.",
      "Learned the importance of structured schema enforcement with Zod to constrain LLM responses into strictly typed JSON structures.",
      "Engineered an asynchronous document-generation pattern that maximizes perceived responsiveness for the end user.",
    ],
  },
  "ai-learning-research": {
    slug: "ai-learning-research",
    title: "AI Learning & Research Platform (ChaiBook)",
    tagline:
      "Multi-modal research workspace featuring retrieval-augmented generation (RAG), Pinecone vector similarity search, document chunking, and contextual citations.",
    category: "Full-Stack AI Application · RAG Architecture",
    projectType: "source-verified",
    role: "Full-Stack Developer",
    heroImage: "/chaibook-lm.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    liveUrl: "https://lm.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/NoteBook-ML",
    overview: [
      "ChaiBook (developed in the NoteBook-ML repository) is an AI-powered research platform designed to ingest complex multi-modal study materials and provide citation-grounded answers.",
      "Built with Next.js 16, React 19, Express 5, Prisma ORM, and PostgreSQL, the platform integrates Pinecone serverless vector databases and OpenRouter AI SDK models to power semantic retrieval-augmented generation (RAG).",
      "Researchers can upload PDF documents, scrape web articles with Firecrawl, search live research papers via Tavily, and extract YouTube transcripts to build structured, searchable knowledge workspaces with interactive node graphs.",
    ],
    problemAndMotivation: [
      "Students and researchers struggle to synthesize information across disparate formats: PDF textbooks, online documentation, web articles, and video lectures.",
      "Standard LLMs frequently hallucinate facts or fail to cite specific source passages, making them unreliable for serious academic study or technical research.",
      "The technical goal was to build an asynchronous ingestion pipeline that chunks multi-modal sources, computes vector embeddings, and answers queries with verifiable page-level and source-level citations.",
    ],
    solution: [
      "Architected an Express 5 and Prisma backend paired with a modern Next.js 16 client utilizing @xyflow/react for interactive knowledge canvasing.",
      "Integrated Pinecone serverless vector indexing with OpenRouter-powered embedding and completion models using the Vercel AI SDK.",
      "Engineered a multi-source ingestion pipeline: unpdf for PDF text and page extraction, Firecrawl for clean web scraping, Tavily for real-time web research, and youtube-transcript for video lectures.",
      "Incorporated Inngest background job orchestration to decouple heavy document parsing and vector upserting from the main HTTP API loop.",
      "Integrated Mem0 for user-specific research memory and Better Auth for session management.",
    ],
    verifiedTechnologies: [
      {
        category: "Frontend & Interactive Workspace",
        items: [
          "Next.js 16",
          "React 19",
          "@xyflow/react (Knowledge Canvas)",
          "TanStack Query",
          "Better Auth Client",
          "Tailwind CSS 4",
        ],
      },
      {
        category: "AI & Semantic Search (RAG)",
        items: [
          "Vercel AI SDK (ai)",
          "OpenRouter API Provider",
          "Pinecone Vector DB",
          "Mem0 AI (Research Memory)",
        ],
      },
      {
        category: "Document Ingestion & Web Scraping",
        items: [
          "unpdf (PDF Extraction)",
          "Firecrawl (Web Scraper)",
          "Tavily Core (Web Search)",
          "YouTube Transcript API",
        ],
      },
      {
        category: "Backend & Background Processing",
        items: [
          "Express 5",
          "TypeScript",
          "Inngest (Background Workers)",
          "Prisma ORM",
          "PostgreSQL",
        ],
      },
    ],
    coreFeatures: [
      {
        title: "Multi-Source Document Ingestion",
        description:
          "Unified ingestion for PDF textbooks, web links, YouTube videos, and raw notes with automated text sanitization and metadata preservation.",
      },
      {
        title: "Citation-Grounded RAG Assistant",
        description:
          "Retrieval-augmented QA that retrieves relevant chunks from Pinecone and grounds every response in specific document passages with page numbers.",
      },
      {
        title: "Interactive Knowledge Canvas (@xyflow/react)",
        description:
          "Visual node-based diagramming canvas for connecting concepts, sources, and synthesis notes in a freeform spatial layout.",
      },
      {
        title: "Asynchronous Processing via Inngest",
        description:
          "Background workers handle heavy document parsing, chunking, and vector embedding asynchronously, keeping the user interface snappy.",
      },
    ],
    architectureLayers: [
      {
        name: "Client Application (client)",
        technologies: ["Next.js 16", "React 19", "@xyflow/react", "TanStack Query"],
        description:
          "Split-screen research studio featuring document viewers, node-based mind maps, and interactive chat interface.",
      },
      {
        name: "API & Ingestion Service (server)",
        technologies: ["Express 5", "Prisma ORM", "unpdf", "Firecrawl", "Tavily"],
        description:
          "Receives document uploads and URLs, extracts clean structured text, and schedules background processing jobs.",
      },
      {
        name: "Background Vector Pipeline",
        technologies: ["Inngest", "Pinecone Vector DB", "Embedding Models"],
        description:
          "Asynchronous workers executing text chunking, embedding generation, and vector index upserts with source metadata.",
      },
      {
        name: "RAG Synthesis & Persistence",
        technologies: ["OpenRouter AI SDK", "Mem0", "PostgreSQL", "Prisma"],
        description:
          "Performs cosine similarity searches, injects source context into system prompts, and persists notes and conversations in PostgreSQL.",
      },
    ],
    engineeringChallenges: [
      {
        title: "Preserving Page-Level Metadata During PDF Chunking",
        problem:
          "Naive text extractors merge an entire PDF into a monolithic string, stripping out page boundaries and making precise academic citations impossible.",
        solution:
          "Structured ingestion to preserve individual page boundaries via unpdf before applying sliding-window text chunking, tagging generated vectors with page numbers when parsing succeeds (falling back to document-level chunks when inline text extraction does not retain page splits).",
        result:
          "Responses cite exact page numbers from original PDF textbooks whenever page boundaries are preserved, allowing researchers to quickly verify claims.",
      },
      {
        title: "Offloading Multi-Modal Ingestion to Prevent HTTP Timeouts",
        problem:
          "Parsing 50+ page PDFs, crawling complex web pages, and generating vector embeddings synchronously blocks Express HTTP threads and triggers gateway timeouts.",
        solution:
          "Decoupled upload from processing using Inngest event triggers: the API immediately returns HTTP 202 with sourceStatus = 'PROCESSING', while Inngest workers execute chunking and vector indexing in the background.",
        result:
          "Fast, non-blocking uploads with real-time UI progress updates as sources complete vectorization.",
      },
      {
        title: "Mitigating Hallucinations via Context-Grounded Prompts",
        problem:
          "Standard LLMs answer from pre-trained parametric memory rather than user-provided research sources when questions overlap with general knowledge.",
        solution:
          "Designed prompt constraints and retrieval context injection that direct the model to cite retrieved vector chunks or state when source materials do not contain sufficient evidence.",
        result:
          "Grounded answers anchored to retrieved vector passages, with transparent citation chips indicating source locations.",
      },
    ],
    outcomesAndLearnings: [
      "Developed deep proficiency in building production-grade RAG pipelines combining vector databases with traditional relational data.",
      "Learned how to handle diverse multi-modal source formats (PDFs, web DOMs, video transcripts) in a normalized data architecture.",
      "Implemented spatial interactive user interfaces with React 19 and @xyflow/react for complex knowledge organization.",
    ],
  },
  "pollboard": {
    slug: "pollboard",
    title: "PollBoard",
    tagline:
      "Real-time polling and quiz platform featuring bi-directional Socket.IO updates, Recharts analytics, duplicate vote prevention, and client CSV exports.",
    category: "Full-Stack MERN Application · Real-Time Web",
    projectType: "source-verified",
    role: "Full-Stack Developer",
    heroImage: "/pollboard.png",
    imageWidth: 1280,
    imageHeight: 800,
    liveUrl: "https://pollboard-opal.vercel.app",
    githubUrl: "https://github.com/AkhtarRazaMirza/PollBoard",
    overview: [
      "PollBoard is a real-time polling and audience-engagement platform built on the MERN stack (MongoDB, Express 5, React 19, Node.js) with Socket.IO.",
      "Designed for classrooms, student teams, hackathons, and live presentations, creators can build multi-question polls, enforce voting rules, and observe live responses update instantaneously without page reloads.",
      "The platform features room-based WebSocket broadcasting, animated analytics powered by Recharts, automated poll expiry enforcement, and CSV export functionality.",
    ],
    problemAndMotivation: [
      "Traditional survey tools rely on page refreshes or periodic polling, making them sluggish for interactive live presentations or classroom voting.",
      "Many lightweight poll tools lack essential security controls, allowing ballot box stuffing through repeated submissions from single browsers.",
      "The technical goal was to build an ultra-responsive, real-time polling application with room-isolated WebSockets, atomic vote tallying, and robust anti-duplicate submission safeguards.",
    ],
    solution: [
      "Developed a React 19 client with Vite and Tailwind CSS 4, utilizing Framer Motion for micro-interactions and Recharts for live visual data representations.",
      "Engineered an Express 5 backend with MongoDB and Mongoose, implementing Socket.IO rooms to isolate real-time event broadcasting to active poll participants.",
      "Built dual voting modes: authenticated voting tracked by user ID and anonymous voting using client session tokens and IP heuristics as a lightweight deterrent against casual re-voting (acknowledging that anonymous client heuristics can be bypassed via incognito windows or IP rotation).",
      "Managed voting concurrency and deduplication by implementing dual partial unique indexes in Mongoose: the authenticated unique index { poll: 1, respondent: 1 } uses partialFilterExpression: { respondent: { $type: \"objectId\" } }, which applies only to authenticated respondents and excludes anonymous records where respondent is null; the anonymous unique index { poll: 1, anonymousVoterHash: 1 } uses partialFilterExpression: { anonymousVoterHash: { $type: \"string\" } }.",
      "Added security and reliability middleware including Helmet, CORS, and express-rate-limit to protect API endpoints against abuse.",
    ],
    verifiedTechnologies: [
      {
        category: "Frontend Client",
        items: [
          "React 19",
          "Vite",
          "React Router DOM 7",
          "Tailwind CSS 4",
          "Framer Motion",
          "Recharts",
          "Socket.IO Client",
          "Axios",
        ],
      },
      {
        category: "Backend & Real-Time Engine",
        items: [
          "Node.js",
          "Express 5",
          "Socket.IO",
          "Zod Validation",
          "JWT Authentication",
          "bcryptjs",
        ],
      },
      {
        category: "Database & Persistence",
        items: [
          "MongoDB",
          "Mongoose ODM",
        ],
      },
      {
        category: "Security & Middleware",
        items: [
          "Helmet",
          "CORS",
          "express-rate-limit",
        ],
      },
    ],
    coreFeatures: [
      {
        title: "Room-Scoped Live Response Streaming",
        description:
          "Socket.IO rooms broadcast vote increments and participant counts instantly to creators and voters without unnecessary traffic across other polls.",
      },
      {
        title: "Multi-Question Poll Builder & Expiry",
        description:
          "Flexible creator workflow supporting single and multi-question polls with optional expiry deadlines enforced by server-side schedulers.",
      },
      {
        title: "Interactive Analytics & CSV Export",
        description:
          "Real-time dynamic bar and pie charts rendered via Recharts, with one-click client-side CSV export for offline analysis.",
      },
      {
        title: "Duplicate Vote Prevention & Security",
        description:
          "Enforces vote uniqueness for authenticated accounts via a partial unique index on { poll, respondent } (excluding anonymous nulls), alongside dedicated token-hash deduplication for anonymous respondents.",
      },
    ],
    architectureLayers: [
      {
        name: "Client Application (client)",
        technologies: ["React 19", "Vite", "Tailwind CSS 4", "Framer Motion"],
        description:
          "Responsive single-page application handling poll creation, voting flows, and animated chart displays.",
      },
      {
        name: "Real-Time WebSocket Layer",
        technologies: ["Socket.IO", "Room-Based Channels"],
        description:
          "Manages client socket connections, groups connections into poll-specific rooms, and broadcasts live tally events upon vote submission.",
      },
      {
        name: "API Server & Auth (server)",
        technologies: ["Express 5", "Zod", "JWT", "express-rate-limit"],
        description:
          "REST API handling user authentication, poll CRUD operations, payload validation, and voting endpoint security.",
      },
      {
        name: "Persistence Layer",
        technologies: ["MongoDB", "Mongoose ODM"],
        description:
          "Document models for users, polls, questions, and voter logs with compound indices to ensure data integrity.",
      },
    ],
    engineeringChallenges: [
      {
        title: "Isolating Real-Time Broadcast Traffic with Socket.IO Rooms",
        problem:
          "Broadcasting vote updates to a global WebSocket namespace wastes bandwidth and causes security leaks as participants receive updates for unrelated polls.",
        solution:
          "Implemented room-based socket subscriptions (join:poll): voters and creators join only their specific poll's room, and the server emits events strictly to socket.to(pollId).",
        result:
          "Clean network isolation with minimal overhead, maintaining high real-time throughput even with concurrent active polls.",
      },
      {
        title: "Handling Concurrent Submissions with Partial Unique Indexes",
        problem:
          "Simultaneous vote submissions can cause race conditions. Furthermore, a naive unique compound index on { poll: 1, respondent: 1 } includes anonymous records where respondent is null, causing duplicate key collisions across distinct anonymous voters on the same poll.",
        solution:
          "Separated authenticated and anonymous deduplication into distinct partial unique indexes. The unique index { poll: 1, respondent: 1 } uses partialFilterExpression: { respondent: { $type: \"objectId\" } }, which applies only to authenticated respondents and excludes anonymous records where respondent is null. The anonymous unique index { poll: 1, anonymousVoterHash: 1 } uses partialFilterExpression: { anonymousVoterHash: { $type: \"string\" } }. Validated this fix with an automated 19-test MongoDB verification suite (commit a230b93) covering sequential voting, concurrent voting and race conditions, duplicate-key protection (HTTP 409 Conflict), authenticated and anonymous vote handling, and legacy index replacement and migration safety checks.",
        result:
          "Enforced one-response-per-account integrity for authenticated users and anonymous vote deduplication using voter hashes, while eliminating cross-voter null collisions. Anonymous deduplication depends on continuity of the client-side voter token and may be bypassed if that token is cleared or reset. The schema index correction and migration procedure are verified in the codebase (commit a230b93). The production database migration has not yet been executed and requires a separately planned maintenance window.",
      },
      {
        title: "Smooth Transition from Voting to Published Results",
        problem:
          "Managing poll states (draft, active, expired, published) across disparate clients without forcing manual page reloads.",
        solution:
          "Broadcasted state-change socket events (poll:published) that dynamically trigger client-side re-renders, immediately locking the voting form and displaying the results dashboard.",
        result:
          "Instantaneous state transitions that keep audience screens synchronized in live presentation settings.",
      },
    ],
    outcomesAndLearnings: [
      "Gained hands-on experience designing and debugging room-scoped WebSocket architectures with Socket.IO.",
      "Engineered and verified MongoDB partial unique indexes to solve cross-voter null index collisions, backed by an automated 19-test verification suite covering concurrency, error mapping, and legacy index replacement.",
      "Engineered accessible, real-time data visualizations using Recharts and Framer Motion.",
    ],
  },
  "anems-travels": {
    slug: "anems-travels",
    title: "Anems Travels (AIMS Travels)",
    tagline:
      "Production pilgrimage travel platform featuring catalog administration, package management workflows, CMS and blog content, and a WhatsApp-first consultation channel.",
    category: "Client Engagement · Commercial Platform",
    projectType: "client-proprietary",
    role: "Freelance Full-Stack Developer",
    timeline: "Documented Freelance Client Engagement",
    heroImage: "/anems-travels.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    liveUrl: "https://aimstravels.in/",
    confidentialityNote:
      "This platform was built as proprietary freelance client work for an active travel agency client. Source code and internal operations remain private under commercial client confidentiality.",
    overview: [
      "Anems Travels (operating publicly as AIMS Tours & Travels at aimstravels.in) is a production commercial travel platform built for a specialized pilgrimage travel agency.",
      "The platform serves pilgrims planning journeys for Hajj, Umrah, and Ziyarat, providing curated package details, hotel accommodation tiers, and seasonal pilgrimage packages.",
      "The platform was engineered to provide a structured digital catalog paired with a direct WhatsApp consultation funnel for prospective pilgrim inquiries.",
    ],
    problemAndMotivation: [
      "Pilgrimage travel involves significant logistical coordination, seasonal pricing fluctuations, and high emotional investment from travelers.",
      "Prospective pilgrims often require transparent access to package tiers, inclusions, and dates before initiating direct consultation with travel coordinators.",
      "Non-technical agency staff required an intuitive administrative system to manage seasonal package dates, pricing tiers, and package content without having to modify code or trigger redeployments.",
      "Travelers booking sacred journeys consistently prioritize direct human consultation and personalized guidance over automated multi-step checkout forms.",
    ],
    solution: [
      "Developed a responsive public website on Next.js with server-side rendered routes and responsive photography served through Cloudinary CDN.",
      "Engineered a customized administrative content management system (CMS) and blog allowing agency staff to manage 50+ packages, package details, and blog content as documented client deliverables.",
      "Implemented a WhatsApp-first inquiry flow: package action buttons open pre-formatted WhatsApp chat links with package details, enabling travelers to initiate consultations directly with agency representatives.",
      "Integrated Clerk Authentication for secure administrative access and operational dashboard workflows.",
    ],
    verifiedTechnologies: [
      {
        category: "Public Production Stack (Publicly Observable)",
        items: [
          "Next.js (App Router)",
          "TypeScript",
          "Tailwind CSS",
          "Clerk Authentication",
          "Cloudinary CDN",
          "Google Analytics",
          "Vercel",
        ],
      },
      {
        category: "Documented Experience (Author Resume Claims)",
        items: [
          "PostgreSQL",
          "Drizzle ORM",
          "Redis",
          "Node.js / Express Backend APIs",
          "Admin Dashboard CMS & Blog",
        ],
      },
    ],
    coreFeatures: [
      {
        title: "Curated 50+ Package Catalog",
        description:
          "Comprehensive showcase of pilgrimage packages (Hajj, Umrah, Ramadan Specials, Ziyarat) detailing duration, hotel ratings, inclusions, and transparent pricing tiers.",
      },
      {
        title: "WhatsApp Consultation Channel",
        description:
          "Package inquiry buttons connect travelers directly to WhatsApp with pre-formatted inquiry text including package names, allowing agency representatives to handle inquiries in a familiar messaging app.",
      },
      {
        title: "Administrative Content & Blog Management (Documented Deliverable)",
        description:
          "Resume-documented operational panel designed for non-technical staff to create, update, and manage travel packages, seasonal dates, pricing tiers, and blog articles.",
      },
      {
        title: "Clerk Authentication",
        description:
          "User authentication securing the operational dashboard and administration views.",
      },
      {
        title: "High-Performance Media Pipeline",
        description:
          "Responsive photography served through Cloudinary CDN to ensure fast load times on mobile networks in target regions.",
      },
    ],
    architectureLayers: [
      {
        name: "Client Experience",
        technologies: ["Next.js App Router", "Tailwind CSS", "Cloudinary"],
        description:
          "Clean, photography-forward public catalog optimized for mobile viewing on cellular networks across domestic and international travelers.",
      },
      {
        name: "Consultation & Inquiry Funnel",
        technologies: ["WhatsApp Action Links", "URL Parameter Encoding"],
        description:
          "Pre-formatted WhatsApp chat action links that allow travelers to reach agency representatives directly from individual package pages.",
      },
      {
        name: "Administration & Security (Documented Client Deliverable)",
        technologies: ["Clerk Authentication", "Admin CMS Panel"],
        description:
          "Administrative portal documented in client deliverables, designed to enable authorized staff to update seasonal package listings and agency content without requiring developer code changes.",
      },
      {
        name: "Documented Backend & Storage",
        technologies: ["PostgreSQL", "Drizzle ORM", "Redis"],
        description:
          "Resume-documented backend architecture utilizing PostgreSQL, Drizzle ORM, and Redis for data persistence and application services.",
      },
    ],
    engineeringChallenges: [
      {
        title: "Consultation Architecture: WhatsApp vs. Self-Service Checkout",
        problem:
          "Sacred, high-consideration pilgrimage travel involves significant traveler questions and customized accommodations, where rigid self-service eCommerce checkouts often create friction.",
        solution:
          "Integrated contextual WhatsApp inquiry buttons across package listings, pre-formatting the inquiry message with package details to immediately connect travelers with agency staff.",
        result:
          "A direct, low-friction inquiry channel aligned with how prospective pilgrims communicate and seek guidance for sacred journeys.",
      },
      {
        title: "CMS Design for Operational Package Management",
        problem:
          "Managing frequent seasonal pricing updates and lunar calendar departure dates requires an administrative interface that non-technical staff can operate without code edits.",
        solution:
          "Designed structured administrative workflows for managing package tiers, dates, and inclusions as documented client project requirements.",
        result:
          "Allowed agency staff to maintain updated package listings directly, establishing clear operational autonomy for non-technical personnel.",
      },
    ],
    outcomesAndLearnings: [
      "Delivered an end-to-end production platform for an active commercial travel client.",
      "Learned that conversion architecture must align with audience psychology: direct human consultation often serves high-value pilgrimage travel better than automated checkout forms.",
      "Balanced photography-forward catalog presentation with responsive CDN media delivery.",
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies[slug];
}
