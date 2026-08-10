import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AccentGlow, ClipReveal, CountUp, MaskReveal, Overline, Reveal } from "@/components/primitives";
import { BrowserFrame, ProductMockup } from "@/components/mockups/BrowserMockup";
import { projects } from "@/lib/site";

export default function Flagship() {
  const p = projects[0];

  return (
    <section id="work" data-testid="flagship-section" className="relative z-10 py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal>
          <Overline className="flex items-center justify-center gap-2.5 text-center">
            <span className="h-2 w-2 rounded-full shadow-[0_0_12px_#5B8CFF]" style={{ background: p.accent }} />
            01 — Flagship Product
          </Overline>
        </Reveal>

        <h2 className="mt-8 text-center font-display text-5xl font-semibold leading-[0.92] tracking-[-0.035em] text-white sm:text-7xl md:text-9xl">
          <MaskReveal inView>Stelix<span className="text-zinc-500">.</span></MaskReveal>
        </h2>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
            {p.tagline} Connect Gmail, connect Google Calendar, ask Stelix, get work done — the entire product in four steps.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-16 md:mt-24">
          <AccentGlow accent={p.accent} opacity={0.18} className="-inset-x-12 top-10 mx-auto h-72 w-3/4" />
          <ClipReveal>
            <ProductMockup slug={p.slug} url={p.url} shot={p.shots?.[0]} accent={p.accent} />
          </ClipReveal>
          {p.shots?.[1] && (
            <div className="relative z-10 mx-auto -mt-12 max-w-2xl md:-mt-28 md:ml-auto md:mr-10">
              <ClipReveal delay={0.15}>
                <BrowserFrame src={p.shots[1]} url={p.url} accent={p.accent} alt={`${p.name} — features`} />
              </ClipReveal>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.05} className="mt-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {p.metrics.map((m) => (
              <div
                key={m.label}
                className="glass-surface glass-surface-hover rounded-2xl p-4 sm:p-6 md:p-8"
                data-testid={`flagship-metric-${m.label.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
              >
                <p className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
                  <CountUp value={m.value} />
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-12 flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap gap-2.5">
            {p.highlights.map((h) => (
              <span key={h} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-mono text-[11px] text-zinc-300 backdrop-blur-md">
                {h}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="flagship-live-link"
              className="group inline-flex max-w-full items-center gap-2 border-b pb-1 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
              style={{ borderColor: `${p.accent}66` }}
            >
              <span className="truncate">Visit live — {p.url}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              href={`/work/${p.slug}`}
              data-testid="flagship-case-link"
              className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white"
            >
              Read case study
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

