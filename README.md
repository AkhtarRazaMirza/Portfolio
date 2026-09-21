# Akhtar Raza — Personal Portfolio

Hey there! 👋 I'm **Akhtar Raza**, a Full-Stack Developer and BCA student based in Uttar Pradesh, India. 

This repository contains the source code for my personal portfolio website. I built it to showcase my full-stack projects, technical skillset, and open-source work in a clean, responsive, and performant interface.

---

## ⚡ What's Inside

- **Hero & Interactive Intro** — Dynamic typewriter effect highlighting my core roles, smooth Framer Motion reveal animations, and direct links to my resume and socials.
- **Live GitHub Activity Tracker** — A custom dashboard widget wired to GitHub's GraphQL API via Octokit (`/api/github`). It calculates real-time contribution counts, streaks, and an interactive 30-day heatmap.
- **Curated Projects** — In-depth breakdown of production apps I've built, complete with tech badges, feature highlights, GitHub source code, and live demo links.
- **Skills & Tech Stack** — Visual grid covering frontend, backend, databases, ORMs, and developer tooling.
- **Direct Contact Form** — Fully functional messaging system powered by a Next.js API route (`/api/contact`) and Resend, backed by server-side validation.
- **Modern UI / UX** — Styled with Tailwind CSS, animated with Framer Motion, and built on top of accessible Radix UI primitives with Sonner toast feedback.

---

## 🛠️ Built With

### Core Framework & Language
- **[Next.js 15](https://nextjs.org/)** — App Router, Server Components, and Turbopack
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Static typing for reliability

### Styling & Motion
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — Entrance animations and transitions
- **[Radix UI](https://www.radix-ui.com/)** — Accessible, unstyled component primitives
- **[Lucide React](https://lucide.dev/)** — Clean iconography

### Backend & Integrations
- **[Octokit](https://github.com/octokit/octokit.js)** — GitHub GraphQL queries for live contribution stats
- **[Resend](https://resend.com/)** — Transactional email delivery for the contact form
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — Form state handling and schema validation

---

## 🚀 Featured Projects Highlighted in the Portfolio

1. **[Travel Agency With Admin Panel](https://aimstravels.in/)**
   - *Stack:* Next.js, TypeScript, Tailwind CSS, Redis, PostgreSQL
   - *Features:* Real-time booking tracking, dynamic pricing engine, order management, and dedicated admin dashboard.
   - *Repo:* [AkhtarRazaMirza/Anems-travel](https://github.com/AkhtarRazaMirza/Anems-travel.git)

2. **[AI PPT Generator](https://ppt.akhtarraza.in/)**
   - *Stack:* React, TanStack Start, OpenAI API, PostgreSQL, Inngest
   - *Features:* Prompt-to-slide creation, automated content summarization, customizable slide decks, and usage analytics.
   - *Repo:* [AkhtarRazaMirza/Ai-Ppt-genrator](https://github.com/AkhtarRazaMirza/Ai-Ppt-genrator.git)

3. **[AI Learning & Research Platform (Notebook-ML)](https://lm.akhtarraza.in/)**
   - *Stack:* Next.js, Node.js, Prisma, RAG pipeline, OpenAI API
   - *Features:* Interactive tutorials, researcher collaboration workspaces, semantic vector search, and AI-driven document insights.
   - *Repo:* [AkhtarRazaMirza/NoteBook-ML](https://github.com/AkhtarRazaMirza/NoteBook-ML.git)

---

## 📂 Project Structure

```text
.
├── app/
│   ├── api/
│   │   ├── contact/route.ts     # Resend email handler with server-side validation
│   │   └── github/route.ts      # GitHub GraphQL endpoint for user activity stats
│   ├── globals.css              # Global styles & Tailwind theme variables
│   ├── layout.tsx               # Root layout, fonts, header, footer & toaster
│   └── page.tsx                 # Main single-page portfolio view
├── components/
│   ├── layout/                  # Header (nav, mobile sheet, resume) & Footer
│   ├── sections/                # Hero, Skills, Projects, Contact
│   ├── ui/                      # Radix & shadcn/ui custom primitives
│   ├── contact-form.tsx         # Contact form component with client validation
│   └── github-stats.tsx         # Heatmap & streak calculation card
├── constants/
│   └── index.ts                 # Projects and technologies data
├── public/                      # Static assets, project screenshots, and resume PDF
├── tailwind.config.ts           # Custom Tailwind theme & color tokens
└── package.json
```

---

## 💻 Getting Started Locally

If you want to run a local copy of this portfolio on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/AkhtarRazaMirza/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory and provide your keys:

```env
# GitHub Personal Access Token (classic or fine-grained with read access to user profile)
GITHUB_TOKEN=your_github_personal_access_token

# Resend API key for contact form email delivery
RESEND_API_KEY=your_resend_api_key

# Destination email where contact messages should arrive (optional fallback)
CONTACT_EMAIL=your_email@example.com
```

> **Note:** Without `GITHUB_TOKEN`, the GitHub activity widget will show a configuration error. Without `RESEND_API_KEY`, messages submitted through the contact form won't dispatch emails.

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📦 Production Build

To test or verify the production bundle:

```bash
npm run build
npm run start
```

---

## 📬 Get in Touch

I'm always open to discussing new engineering roles, freelance opportunities, or tech collaborations.

- **Email:** [akhtarrazamirza111@gmail.com](mailto:akhtarrazamirza111@gmail.com)
- **LinkedIn:** [linkedin.com/in/akhtarraza-dev](https://www.linkedin.com/in/akhtarraza-dev)
- **GitHub:** [@AkhtarRazaMirza](https://github.com/AkhtarRazaMirza)
- **Phone:** +91 9129403422
- **Location:** Fatehpur, Uttar Pradesh, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
