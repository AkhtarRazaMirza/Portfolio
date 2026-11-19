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
      "Real-time polling and quiz platform built with the MERN stack and Socket.IO. Features live bi-directional response streaming, room-based voter presence, Recharts analytics, CSV data export, and best-effort anonymous duplicate voting deterrence via session/IP tracking.",
    image: "/pollboard.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://pollboard-opal.vercel.app",
    githubUrl: "https://github.com/AkhtarRazaMirza/PollBoard",
    caseStudyUrl: "/projects/pollboard",
    features: [
      "Room-based Socket.IO live updates",
      "Interactive Recharts analytics & CSV export",
      "Authenticated vote tracking & anonymous duplicate deterrents",
      "JWT authentication & anonymous voter mode",
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