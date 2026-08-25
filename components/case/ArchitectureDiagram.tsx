import { Reveal } from "@/components/primitives";
import type { ArchitectureLayer } from "@/lib/site";

export default function ArchitectureDiagram({ layers }: { layers: ArchitectureLayer[] }) {
  return (
    <div
      role="list"
      aria-label="System Architecture Layers"
      data-testid="architecture-diagram"
      className="relative space-y-10 border-l border-white/10 pl-8 md:pl-12"
    >
      {layers.map((layer, i) => (
        <Reveal key={layer.name} delay={i * 0.05} className="relative">
          <div role="listitem">
            <span
              aria-hidden="true"
              className="absolute top-1.5 h-2 w-2 rotate-45 border border-white/40 bg-[#050505] -left-[37px] md:-left-[53px]"
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">{layer.name}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {layer.nodes.map((n) => (
                <span key={n} className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs text-zinc-200 md:text-sm">
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-zinc-500">{layer.note}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
