# Portfolio — Akhtar Raza

Personal portfolio for Akhtar Raza, Full Stack Developer.

Built with Next.js 16 App Router, React 19 Server Components, TypeScript (strict), Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 16 (App Router, static prerendering)
- **UI:** React 19, TypeScript (strict)
- **Styling:** Tailwind CSS 3.4 with custom design tokens
- **Motion:** Framer Motion 11, Lenis smooth scroll
- **Icons:** Lucide React
- **Contact form:** Axios → Next.js Route Handler (`/api/contact`)
- **Toasts:** Sonner

## Commands

```bash
yarn install       # Install dependencies
yarn dev           # Development server (localhost:3000)
yarn build         # Production build
yarn start         # Serve production build
yarn lint          # ESLint (next/core-web-vitals)
yarn typecheck     # TypeScript validation
```

## Environment Variables

Create `.env.local` (see `.env.example` for the full reference). Server-only variables stay out of `NEXT_PUBLIC_`:

```env
# Resend email notifications
RESEND_API_KEY=
CONTACT_EMAIL=akhtarrazamirza111@gmail.com
RESEND_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"

# Site metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: external backend base URL (leave empty for unified Next.js /api)
NEXT_PUBLIC_BACKEND_URL=
```

`RESEND_API_KEY` enables contact-form email notifications via Resend. `NEXT_PUBLIC_SITE_URL` sets `metadataBase` for absolute OG image URLs. `NEXT_PUBLIC_BACKEND_URL` overrides the contact form POST target (defaults to relative `/api` on the same Next.js app).

## Project Structure

```
app/
├── layout.tsx              # Root layout, fonts, ambient background layers
├── page.tsx                # Home page (composes sections)
├── globals.css             # Tailwind base + grain/blueprint/ambient CSS
├── not-found.tsx
├── icon.svg
├── opengraph-image.tsx     # OG image (home)
└── work/[slug]/
    ├── page.tsx            # Case studies (generateStaticParams)
    └── opengraph-image.tsx # OG image per case study

components/
├── home/                   # Hero, Flagship, SelectedWork, Philosophy,
│                           # Timeline, OpenSource, SkillField, Contact
├── case/                   # CaseStudyView, ArchitectureDiagram
├── layout/                 # Nav, Footer, Providers, Preloader,
│                           # Marquee, CursorGlow
├── mockups/                # BrowserFrame, ProductMockup
├── primitives.tsx          # Reveal, MaskReveal, CountUp, AccentGlow, Magnetic
└── ui/sonner.tsx           # Toaster wrapper

lib/
└── site.ts                 # Single content source (typed)

public/
├── assets/products/        # Product screenshots
└── fonts/                  # Self-hosted woff2 (next/font/local)
```

Server Components are the default. Client components are opted in only where hooks or motion require it: `Hero`, `SelectedWork`, `SkillField`, `Contact`, `Nav`, `Providers`, `Marquee`, `CursorGlow`, `Preloader`, `CaseStudyView`, `primitives`.

## Design System

- **Typography:** Clash Display (headings), General Sans (body), JetBrains Mono (metadata)
- **Color:** #050505 base with white/zinc ramps; per-project accent glows (Stelix `#5B8CFF`, PPT.ai `#FB923C`, AIMS `#34D399`)
- **Motion:** scroll parallax, entrance reveals, magnetic hover, cursor-repulsion physics
- **Accessibility:** skip-to-content, focus-visible rings, `prefers-reduced-motion` fallbacks throughout

## Backend & Contact Form

100% database-free static architecture with serverless Next.js Route Handler. `POST /api/contact` validates input via Zod and sends emails directly using Resend.


## License

UNLICENSED — private portfolio.

## Author

Akhtar Raza — [github.com/AkhtarRazaMirza](https://github.com/AkhtarRazaMirza)
