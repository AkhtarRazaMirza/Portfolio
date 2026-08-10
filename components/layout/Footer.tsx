import { identity } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12 lg:px-24">
        <p className="font-mono text-[11px] text-zinc-400" data-testid="footer-copyright">
          © 2026 {identity.name} — Designed & engineered with intent.
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          <a data-testid="footer-github-link" href={identity.github} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-white">GitHub</a>
          <a data-testid="footer-linkedin-link" href={identity.linkedin} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-white">LinkedIn</a>
          <a data-testid="footer-email-link" href={`mailto:${identity.email}`} className="transition-colors duration-300 hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

