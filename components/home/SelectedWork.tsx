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
      <Link href={`/work/${p.slug}`} data-testid={`work-tile-${p.slug}`} className="group block">
        <div
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
            e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
          }}
          className="glass-surface glass-surface-hover relative overflow-hidden rounded-2xl"
        >
          {/* Radial spotlight tracking hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: `radial-gradient(560px circle at var(--mx, 50%) var(--my, 50%), ${p.accent}18, transparent 65%)` }}
          />

          <div className="p-7 md:p-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400">{p.index}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </div>
            <h3 className="mt-6 font-display text-3xl font-medium tracking-[-0.025em] text-white md:text-5xl">{p.name}</h3>
            <p className="mt-3 max-w-md font-light leading-relaxed text-zinc-400">{p.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.slice(0, 4).map((s) => (
                <span key={s} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="relative px-7 md:px-10">
            <AccentGlow accent={p.accent} opacity={0.16} className="bottom-0 left-1/2 h-44 w-3/4 -translate-x-1/2" />
            <div className="origin-top translate-y-8 transition-transform duration-700 ease-out group-hover:translate-y-4 group-hover:scale-[1.02] [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-[1.05]">
              <ProductMockup slug={p.slug} url={p.url} shot={p.shots?.[0]} accent={p.accent} className="rounded-b-none border-b-0" />
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function SelectedWork() {
  return (
    <section data-testid="selected-work-section" className="relative z-10 py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
            More<br /><span className="text-zinc-500">Products</span>
          </h2>
          <Overline>02 — 03 · Shipped with the same standard</Overline>
        </Reveal>

        {/* Asymmetric Product Showcase Layout Grid */}
        <div className="mt-14 grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
          {projects.slice(1).map((p, i) => (
            <WorkTile key={p.slug} project={p} className={i === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-24"} />
          ))}
        </div>
      </div>
    </section>
  );
}

