import { ArrowUpRight, GitBranch } from "lucide-react";
import { Overline, Reveal } from "@/components/primitives";
import { identity, openSource } from "@/lib/site";

export default function OpenSource() {
  return (
    <section id="opensource" data-testid="opensource-section" className="relative z-10 py-28 md:py-40">
      {/* Background Volumetric Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-6xl">
            Public by<br /><span className="text-zinc-500">default.</span>
          </h2>
          <Overline>06 — Public Code</Overline>
        </Reveal>

        <div className="mt-14 space-y-4">
          {openSource.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.04}>
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                data-testid={`oss-link-${o.name}`}
                className="glass-surface glass-surface-hover group flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5 sm:gap-6 sm:p-7 md:p-8"
              >
                <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-6">
                  <div className="flex items-center gap-3">
                    <GitBranch className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
                    <span className="font-display text-2xl font-medium tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                      {o.name}
                    </span>
                  </div>
                  <span className="max-w-xl font-light text-zinc-400">{o.desc}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur-md">
                    {o.meta}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                    <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            All projects and source code published on GitHub — github.com/AkhtarRazaMirza
          </p>
        </Reveal>
      </div>
    </section>
  );
}

