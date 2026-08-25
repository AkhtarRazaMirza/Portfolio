import { Overline, Reveal } from "@/components/primitives";
import { timeline } from "@/lib/site";

export default function Timeline() {
  return (
    <section id="timeline" data-testid="timeline-section" className="relative z-10 py-28 md:py-44">
      {/* Subtle Background Lighting Spot */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[700px] -translate-y-1/2 rounded-full bg-indigo-600/[0.035] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-6xl">
            Experience &<br /><span className="text-zinc-500">trajectory.</span>
          </h2>
          <Overline>05 — Experience & Education</Overline>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.period} delay={i * 0.05} className="h-full">
              <div
                data-testid={`timeline-entry-${i}`}
                className="glass-surface glass-surface-hover flex h-full flex-col justify-between rounded-2xl p-5 sm:p-7 md:p-8"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {t.period}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-white md:text-2xl">{t.role}</h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">{t.org}</p>
                </div>
                <p className="mt-6 text-sm font-light leading-relaxed text-zinc-400">{t.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

