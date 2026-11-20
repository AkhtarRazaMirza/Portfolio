export const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "tRPC",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trpc/trpc-original.svg",
  },
  {
    name: "Zod",
    logo: "/tech/zod.svg",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Drizzle ORM",
    logo: "/tech/drizzle.svg",
  },
  {
    name: "Better Auth",
    logo: "/tech/better-auth.png",
  },
  {
    name: "OpenAI API",
    logo: "/tech/openai.svg",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl: string;
  features: string[];
}

export const projects: Project[] = [
  {
    title: "Form Engine",
    description:
      "Full-stack SaaS form builder and survey workspace built in a Turborepo monorepo with tRPC, Next.js, Express, and PostgreSQL via Drizzle ORM. Features a visual drag-and-drop form canvas, atomic two-phase field index reordering, httpOnly cookie auth, and CSV response exports.",
    image: "/fieldwork-form-engine.webp",
    technologies: ["Next.js", "TypeScript", "tRPC", "Express.js", "PostgreSQL", "Drizzle ORM", "Turborepo"],
    githubUrl: "https://github.com/AkhtarRazaMirza/Form-Engine",
    caseStudyUrl: "/projects/form-engine",
    features: [
      "Visual drag-and-drop form canvas",
      "Atomic two-phase field reordering",
      "httpOnly cookie-based session auth",
      "Live preview & client CSV exports",
    ],
  },
  {
    title: "Stelix",
    description:
      "AI-powered productivity command center that unifies Gmail and Google Calendar with a Groq-powered tool-calling agent. Built with Next.js, Express, PostgreSQL, Drizzle ORM, and Corsair integrations to manage email, schedule meetings, and execute multi-step workflows using natural-language commands.",
    image: "/stelix.jpeg",
    technologies: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Drizzle ORM", "Groq", "Corsair"],
    liveUrl: "https://stelix.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/stelix",
    caseStudyUrl: "/projects/stelix",
    features: [
      "AI-powered multi-step productivity assistant",
      "Gmail inbox, search, reading and sending",
      "Google Calendar event management",
      "Unified dashboard and persistent assistant chat",
    ],
  },
  {
    title: "AI PPT Generator",
    description:
      "AI-driven presentation platform built with React, TanStack Start, PostgreSQL, and OpenRouter API, using Inngest for asynchronous background slide generation and rendering workflows.",
    image: "/ppt-ai.webp",
    technologies: ["React", "TanStack Start", "OpenRouter API", "PostgreSQL", "Inngest", "TypeScript"],
    liveUrl: "https://ppt.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/Ai-Ppt-genrator",
    caseStudyUrl: "/projects/ai-ppt-generator",
    features: [
      "Prompt-to-deck generation",
      "Automated content summarization",
      "Customizable slide templates",
      "Background job orchestration via Inngest",
    ],
  },
  {
    title: "AI Learning & Research Platform",
    description:
      "AI-assisted research and note-taking platform featuring retrieval-augmented generation (RAG), semantic vector search, and document insights across PDFs, web links, and YouTube content.",
    image: "/chaibook-lm.webp",
    technologies: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "RAG", "OpenRouter API"],
    liveUrl: "https://lm.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/NoteBook-ML",
    caseStudyUrl: "/projects/ai-learning-research",
    features: [
      "RAG pipeline with semantic search",
      "Multi-source ingestion (PDF, Web, Video)",
      "AI document synthesis & citations",
      "Collaborative workspace notes",
    ],
  },
  {
    title: "PollBoard",
    description:
      "First Place Winner (₹5,000 prize) at the CodeEra Hackathon. Real-time polling and quiz platform built with the MERN stack and Socket.IO. Features live bi-directional response streaming, room-based voter presence, Recharts analytics, CSV data export, and best-effort anonymous duplicate voting deterrence via session/IP tracking.",
    image: "/pollboard.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://pollboard-opal.vercel.app",
    githubUrl: "https://github.com/AkhtarRazaMirza/PollBoard",
    caseStudyUrl: "/projects/pollboard",
    features: [
      "CodeEra Hackathon 1st Place (₹5,000 Prize)",
      "Room-based Socket.IO live updates",
      "Interactive Recharts analytics & CSV export",
      "Authenticated vote tracking & anonymous duplicate deterrents",
    ],
  },
  {
    title: "Travel Agency Platform",
    description:
      "Production pilgrimage travel platform for an active travel agency client. Features documented package management, booking inquiry workflows, CMS and blog administration, and backend APIs supporting 50+ travel packages.",
    image: "/anems-travels.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "PostgreSQL"],
    liveUrl: "https://aimstravels.in/",
    caseStudyUrl: "/projects/anems-travels",
    features: [
      "Curated 50+ travel package catalog",
      "Booking inquiry workflows & WhatsApp channel",
      "Administrative CMS & blog management",
      "Documented PostgreSQL, Drizzle & Redis architecture",
    ],
  },
];

export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  badge?: string;
  type: "work" | "freelance" | "achievement" | "education";
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    period: "6 Months",
    role: "Full-Stack Developer (Project-Based)",
    organization: "Agarwal Tech Support",
    type: "work",
    badge: "Commercial Client Work",
    description:
      "Built and delivered production web features across client projects, spanning responsive frontend interfaces, backend APIs, and database architecture.",
    highlights: [
      "Engineered frontend pages and responsive UI components with React and Next.js",
      "Built secure backend APIs, session authentication, and database schemas with PostgreSQL",
      "Implemented feature-level integrations and AI-powered capabilities based on client specifications",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    period: "1 Month",
    role: "Freelance Full-Stack Developer",
    organization: "Anems Travels",
    type: "freelance",
    badge: "Client Deliverable",
    description:
      "Engineered an end-to-end pilgrimage travel platform for an active commercial travel agency client (aimstravels.in), handling public routes, administrative CMS, and inquiry channels.",
    highlights: [
      "Built curated 50+ travel package catalog with hotel accommodation tiers and seasonal pricing",
      "Developed custom administrative CMS and blog dashboard for non-technical agency staff",
      "Implemented WhatsApp-first inquiry funnel to connect pilgrims directly with travel coordinators",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "Redis"],
  },
  {
    period: "2024 — Present",
    role: "Hackathon Competitor & Builder",
    organization: "CodeEra Hackathon · 1st Place Winner",
    type: "achievement",
    badge: "1st Place (₹5,000 Prize)",
    description:
      "Awarded First Place (1st) with a ₹5,000 cash prize at the CodeEra Hackathon for PollBoard, an ultra-responsive real-time polling and quiz platform.",
    highlights: [
      "Won 1st Place at CodeEra Hackathon with PollBoard (real-time WebSockets & Mongoose partial unique indexing)",
      "Participated in 5+ competitive hackathons building rapid prototypes and scalable MVPs",
      "Built and deployed 15+ large full-stack projects and 30+ web applications across diverse stacks",
    ],
    technologies: ["Socket.IO", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    period: "2024 — 2027",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "Dr. Preeti Global University",
    type: "education",
    badge: "CGPA: 7.8",
    description:
      "Pursuing BCA with a rigorous focus on full-stack web engineering, relational database design, data structures, and distributed cloud systems.",
    highlights: [
      "Cumulative GPA: 7.8 (Semester 1: 7.8, Semester 2: 8.2, Semester 3: 7.8, Semester 4: 8.0)",
      "Core coursework in Data Structures, Database Management Systems (DBMS), Web Development, and Computer Networks",
      "Hands-on application through building production-grade SaaS architectures and monorepos",
    ],
    technologies: ["TypeScript", "Data Structures", "PostgreSQL", "System Design"],
  },
];
