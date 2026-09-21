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
    features: [
      "Visual drag-and-drop form canvas",
      "Atomic two-phase field reordering",
      "httpOnly cookie-based session auth",
      "Live preview & client CSV exports",
    ],
  },
  {
    title: "AI PPT Generator",
    description:
      "AI-driven presentation platform built with React, TanStack Start, PostgreSQL, and OpenAI API, using Inngest for asynchronous background slide generation and rendering workflows.",
    image: "/ppt-ai.webp",
    technologies: ["React", "TanStack Start", "OpenAI API", "PostgreSQL", "Inngest", "TypeScript"],
    liveUrl: "https://ppt.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/Ai-Ppt-genrator",
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
    technologies: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "RAG", "OpenAI API"],
    liveUrl: "https://lm.akhtarraza.in/",
    githubUrl: "https://github.com/AkhtarRazaMirza/NoteBook-ML",
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
      "Real-time polling and quiz platform built with the MERN stack and Socket.IO. Features live bi-directional response streaming, room-based voter presence, Recharts analytics, CSV data export, and IP/session duplicate submission prevention.",
    image: "/pollboard.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://pollboard-opal.vercel.app",
    githubUrl: "https://github.com/AkhtarRazaMirza/PollBoard",
    features: [
      "Room-based Socket.IO live updates",
      "Interactive Recharts analytics & CSV export",
      "Duplicate submission & rate limit enforcement",
      "JWT authentication & anonymous voter mode",
    ],
  },
  {
    title: "Travel Agency Platform",
    description:
      "Production travel booking platform featuring real-time booking tracking, dynamic pricing rules, order management, and a dedicated administrative operations panel.",
    image: "/anems-travels.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "PostgreSQL"],
    liveUrl: "https://aimstravels.in/",
    features: [
      "Real-time booking tracking",
      "Dynamic pricing engine",
      "Admin operations dashboard",
      "Redis caching for high performance",
    ],
  },
];