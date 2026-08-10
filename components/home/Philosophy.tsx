import { Overline, Reveal } from "@/components/primitives";
import { philosophy } from "@/lib/site";

export default function Philosophy() {
  return (
    <section id="philosophy" data-testid="philosophy-section" className="relative z-10 py-28 md:py-44">
      {/* Background Volumetric Lighting Spot */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Overline>04 — Engineering Philosophy</Overline>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-4xl md:text-6xl">
            Principles I ship by<span className="text-zinc-500">.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 md:gap-8">
          {philosophy.map((c) => (
            <Reveal key={c.num} className="h-full">
              <div
                data-testid={`philosophy-chapter-${c.num}`}
                className="glass-surface glass-surface-hover flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Principle</span>
                  <span className="bg-gradient-to-br from-white/90 via-zinc-400 to-zinc-600 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                    {c.num}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-white md:text-3xl">{c.title}</h3>
                  <p className="mt-4 font-light leading-relaxed text-zinc-400">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

