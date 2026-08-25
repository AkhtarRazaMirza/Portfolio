"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AccentGlow, ClipReveal, CountUp, MaskReveal, Overline, Reveal } from "@/components/primitives";
import { BrowserFrame, ProductMockup } from "@/components/mockups/BrowserMockup";
import ArchitectureDiagram from "@/components/case/ArchitectureDiagram";
import type { Project } from "@/lib/site";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">{label}</p>
      <p className="mt-2 text-sm text-zinc-300">{value}</p>
    </div>
  );
}

export default function CaseStudyView({ project: p, next }: { project: Project; next: Project }) {
  const reduce = useReducedMotion();
  const shotRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: shotRef, offset: ["start end", "end start"] });
  const shotY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 36, reduce ? 0 : -36]);

  return (
    <main id="main-content" data-testid={`case-${p.slug}`} className="relative z-10 pb-32 pt-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal y={16}>
          <Link href="/" data-testid="case-back-link" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-300 hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> All work
          </Link>
        </Reveal>

        <div className="mt-16 text-center">
          <Reveal y={12}>
            <Overline className="flex items-center justify-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
              Case Study {p.index}
            </Overline>
          </Reveal>
          <h1 className="mt-8 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.03em] text-white sm:text-7xl md:text-9xl">
            <MaskReveal>{p.name}<span className="text-zinc-500">.</span></MaskReveal>
          </h1>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-7 max-w-2xl text-xl font-light text-zinc-400 md:text-2xl">{p.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="case-live-link"
                  className="group inline-flex max-w-full items-center gap-2 border-b pb-1 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
                  style={{ borderColor: `${p.accent}66` }}
                >
                  <span className="truncate">Live — {p.url || p.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="case-github-link"
                  className="group inline-flex max-w-full items-center gap-2 border-b border-white/30 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 transition-colors duration-300 hover:border-white hover:text-white"
                >
                  <span>GitHub Source</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-14">
          <div className="grid grid-cols-2 gap-4 border-y border-white/[0.08] py-8 sm:gap-8 md:grid-cols-4" data-testid="case-meta">
            <MetaItem label="Role" value={p.role} />
            <MetaItem label="Year" value={p.year} />
            <MetaItem label="Stack" value={p.stack.slice(0, 5).join(" · ")} />
            <MetaItem label="Status" value={p.status} />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-14">
          <div ref={shotRef} className="relative">
            <AccentGlow accent={p.accent} opacity={0.14} className="-inset-x-6 top-10 mx-auto h-64 w-2/3" />
            <motion.div style={{ y: shotY }}>
              <ClipReveal>
                <ProductMockup slug={p.slug} url={p.url} shot={p.shots?.[0]} accent={p.accent} priority />
              </ClipReveal>
            </motion.div>
          </div>
        </Reveal>

        <div className="mt-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Overline>The Problem</Overline>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            {p.overview.map((para, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={`leading-relaxed ${i === 0 ? "text-xl font-light text-zinc-300 md:text-2xl" : "mt-6 text-lg font-light text-zinc-400"}`}>
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {p.shots?.[1] && (
          <ClipReveal className="relative mx-auto mt-20 max-w-5xl">
            <AccentGlow accent={p.accent} opacity={0.12} className="-inset-x-6 top-8 h-56" />
            <BrowserFrame src={p.shots[1]} url={p.url} accent={p.accent} alt={`${p.name} — product detail`} />
          </ClipReveal>
        )}

        <Reveal className="mt-24">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4" data-testid="case-metrics">
            {p.metrics.map((m) => (
              <div key={m.label} className="glass-surface glass-surface-hover rounded-2xl p-4 sm:p-6 md:p-8">
                <p className="font-display text-3xl font-medium tracking-tight text-white md:text-5xl"><CountUp value={m.value} /></p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Overline>Architecture & Boundaries</Overline>
              <p className="mt-5 max-w-xs font-light leading-relaxed text-zinc-400">
                Frontend, backend, and data boundaries engineered for reliability and type safety.
              </p>
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-10">
            <ArchitectureDiagram layers={p.architecture} />

            {/* Data Flow & Request Lifecycle Pipeline */}
            {p.dataFlow && p.dataFlow.length > 0 && (
              <Reveal delay={0.1}>
                <div data-testid="case-dataflow" className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7 md:p-8">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
                    Data Flow & Request Lifecycle
                  </div>
                  <div className="mt-6 space-y-4">
                    {p.dataFlow.map((step) => (
                      <div key={step.step} className="flex items-start gap-4">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-white/10 bg-white/[0.04] font-mono text-[10px] font-semibold"
                          style={{ color: p.accent }}
                        >
                          {step.step}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-xs font-medium text-zinc-200">{step.label}</p>
                          <p className="mt-1 text-sm font-light leading-relaxed text-zinc-400">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        <div className="mt-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Overline>Engineering Decisions</Overline>
              <p className="mt-5 max-w-xs font-light leading-relaxed text-zinc-400">
                Architectural choices, rationale, and system trade-offs.
              </p>
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              {p.decisions.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.04}>
                  <div data-testid={`case-decision-${i}`} className="glass-surface glass-surface-hover rounded-2xl p-5 sm:p-7 md:p-8">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold" style={{ color: p.accent }}>0{i + 1}</span>
                      <h3 className="font-display text-xl font-medium tracking-tight text-white md:text-2xl">{d.title}</h3>
                    </div>
                    <p className="mt-4 font-light leading-relaxed text-zinc-400">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Architectural Trade-offs */}
            {p.tradeOffs && p.tradeOffs.length > 0 && (
              <Reveal delay={0.1}>
                <div data-testid="case-tradeoffs" className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7 md:p-8">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
                    Architectural Trade-offs
                  </div>
                  <div className="mt-6 space-y-5">
                    {p.tradeOffs.map((t, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="font-display text-base font-medium text-white">{t.decision}</p>
                        <div className="grid gap-3 sm:grid-cols-2 text-xs font-light leading-relaxed">
                          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-3 text-zinc-300">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block mb-1">Advantage</span>
                            {t.pros}
                          </div>
                          <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.03] p-3 text-zinc-300">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 block mb-1">Consideration</span>
                            {t.cons}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* Technical Challenges & Solutions (When present) */}
        {p.challenges && p.challenges.length > 0 && (
          <div className="mt-28 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Overline>Technical Challenges</Overline>
                <p className="mt-5 max-w-xs font-light leading-relaxed text-zinc-400">
                  Concrete implementation hurdles encountered and resolved in code.
                </p>
              </div>
            </Reveal>
            <div className="lg:col-span-7 space-y-4">
              {p.challenges.map((c, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div data-testid={`case-challenge-${i}`} className="glass-surface glass-surface-hover rounded-2xl p-5 sm:p-7 md:p-8 space-y-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Challenge</span>
                      <p className="mt-1 font-display text-lg font-medium text-zinc-200">{c.challenge}</p>
                    </div>
                    <div className="border-t border-white/[0.06] pt-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Approach</span>
                      <p className="mt-1 text-sm font-light leading-relaxed text-zinc-400">{c.approach}</p>
                    </div>
                    {c.result && (
                      <div className="border-t border-white/[0.06] pt-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">Result</span>
                        <p className="mt-1 text-sm font-light leading-relaxed text-zinc-300">{c.result}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div className="mt-28">
          <Reveal><Overline className="text-center">What It Taught Me</Overline></Reveal>
          <div className="mx-auto mt-16 max-w-3xl space-y-16 md:space-y-20">
            {p.lessons.map((l, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-center font-display text-2xl font-medium leading-snug tracking-tight text-zinc-200 md:text-4xl">
                  &ldquo;{l}&rdquo;
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-32 border-t border-white/[0.08] pt-16">
          <Link href={`/work/${next.slug}`} data-testid="case-next-link" className="group block">
            <Overline>Next case study</Overline>
            <span className="mt-6 flex items-center justify-between gap-6">
              <span className="font-display text-3xl font-semibold tracking-[-0.02em] text-white transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl md:text-8xl">
                {next.name}<span className="text-zinc-500">.</span>
              </span>
              <ArrowRight className="h-8 w-8 shrink-0 text-zinc-500 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white md:h-12 md:w-12" />
            </span>
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
