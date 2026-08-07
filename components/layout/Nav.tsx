"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "@/components/primitives";
import { navLinks } from "@/lib/site";

interface NavAnchorProps {
  href: string;
  label: string;
  className: string;
  testId: string;
  onNavigate?: () => void;
}

function NavAnchor({ href, label, className, testId, onNavigate }: NavAnchorProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();
    const hash = href.split("#")[1];
    const scroll = () => {
      const el = document.getElementById(hash);
      if (!el) return;
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
      else el.scrollIntoView({ behavior: "smooth" });
    };
    if (pathname !== "/") {
      router.push("/");
      window.setTimeout(scroll, 600);
    } else {
      scroll();
    }
  };

  return (
    <a href={href} onClick={handle} data-testid={testId} className={className}>
      {label}
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between rounded-full border border-white/[0.08] bg-[#030304]/80 px-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_16px_40px_-12px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          <Link href="/" data-testid="nav-logo" className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 font-display text-xs font-semibold text-white ring-1 ring-white/20">
              AR
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 sm:inline-block">
              Akhtar Raza
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <NavAnchor
                key={l.label}
                href={l.href}
                label={l.label}
                testId={`nav-link-${l.label.toLowerCase()}`}
                className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 hover:text-white"
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available Q3 '26
            </div>

            <NavAnchor
              href="/#contact"
              label="Let's Talk"
              testId="nav-cta-talk"
              className="hidden rounded-full border border-white/15 bg-white/10 px-5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur-md transition-[background-color,color,border-color,transform] duration-200 hover:border-white/40 hover:bg-white hover:text-black active:scale-[0.97] md:block"
            />

            <button
              data-testid="nav-menu-button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-50 text-white md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#030304]/96 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-3 px-8" aria-label="Mobile">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: EASE }}
                >
                  <NavAnchor
                    href={l.href}
                    label={l.label}
                    testId={`nav-mobile-link-${l.label.toLowerCase()}`}
                    onNavigate={() => setOpen(false)}
                    className="block py-3 font-display text-5xl font-medium tracking-tight text-white"
                  />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


