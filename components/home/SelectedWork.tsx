"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AccentGlow, Overline, Reveal } from "@/components/primitives";
import { ProductMockup } from "@/components/mockups/BrowserMockup";
import { projects } from "@/lib/site";
import type { Project } from "@/lib/site";

function WorkTile({ project: p, className }: { project: Project; className: string }) {
  return (
    <Reveal className={className}>
      <div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
        }}
        data-testid={`work-tile-${p.slug}`}
        className="glass-surface glass-surface-hover group relative overflow-hidden rounded-2xl transition-all duration-500"
      >
        {/* Radial spotlight tracking hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(560px circle at var(--mx, 50%) var(--my, 50%), ${p.accent}18, transparent 65%)` }}
        />

        <div className="p-5 sm:p-7 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-semibold text-zinc-400">{p.index}</span>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                {p.type}
              </span>
            </div>
            <Link
              href={`/work/${p.slug}`}
              aria-label={`View ${p.name} case study`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          </div>

          <Link href={`/work/${p.slug}`} className="group/title block">
            <h3 className="mt-5 font-display text-3xl font-medium tracking-[-0.025em] text-white transition-colors duration-300 group-hover/title:text-zinc-200 md:text-5xl">
              {p.name}
            </h3>
          </Link>
          <p className="mt-3 max-w-md font-light leading-relaxed text-zinc-400">{p.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.slice(0, 4).map((s) => (
              <span key={s} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm">
                {s}
              </span>
            ))}
          </div>

          {/* Action CTAs (Live Demo / GitHub / Case Study) */}
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-4 font-mono text-[11px] uppercase tracking-wider">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                data-testid={`tile-live-${p.slug}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-3 w-3 text-zinc-400" />
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-testid={`tile-github-${p.slug}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-zinc-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 text-zinc-400" />
              </a>
            )}
            <Link
              href={`/work/${p.slug}`}
              className="inline-flex items-center gap-1.5 px-2 py-1.5 text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              <span>Case Study</span>
              <ArrowUpRight className="h-3 w-3 text-zinc-400" />
            </Link>
          </div>
        </div>

        <Link href={`/work/${p.slug}`} className="relative block px-5 sm:px-7 md:px-10" aria-label={`View ${p.name} preview`}>
          <AccentGlow accent={p.accent} opacity={0.16} className="bottom-0 left-1/2 h-44 w-3/4 -translate-x-1/2" />
          <div className="origin-top translate-y-8 transition-transform duration-700 ease-out group-hover:translate-y-4 group-hover:scale-[1.02] [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-[1.05]">
            <ProductMockup slug={p.slug} url={p.url} shot={p.shots?.[0]} accent={p.accent} className="rounded-b-none border-b-0" />
          </div>
        </Link>
      </div>
    </Reveal>
  );
}

export default function SelectedWork() {
  const otherProjects = projects.filter((p) => p.slug !== "stelix");

  return (
    <section data-testid="selected-work-section" className="relative z-10 py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-6xl">
            Selected<br /><span className="text-zinc-500">Engineering Work</span>
          </h2>
          <Overline>01 — 05 · Full-Stack & AI Systems</Overline>
        </Reveal>

        {/* Asymmetric Product Showcase Layout Grid */}
        <div className="mt-14 grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
          {otherProjects.map((p, i) => {
            const isLeft = i % 2 === 0;
            const spanClass = isLeft ? "md:col-span-7" : "md:col-span-5 md:mt-16";
            return <WorkTile key={p.slug} project={p} className={spanClass} />;
          })}
        </div>
      </div>
    </section>
  );
}

