import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import { Lock, RefreshCw } from "lucide-react";

const DEPLOYS = [
  { env: "production", ok: true },
  { env: "staging", ok: true },
  { env: "preview #482", ok: false },
  { env: "production", ok: true },
];

function Bar({ w = "w-3/5", tone = "bg-white/10" }: { w?: string; tone?: string }) {
  return <div className={`h-2 rounded ${w} ${tone}`} />;
}

interface BrowserFrameProps {
  url: string;
  src?: string;
  alt?: string;
  accent?: string;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
}

export function BrowserFrame({ url, src, alt = "", accent = "#8B5CF6", priority = false, children, className = "" }: BrowserFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0F] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_32px_90px_-24px_rgba(0,0,0,0.95)] transition-all duration-500 hover:border-white/20 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Dynamic Specular Glass Glare Streak */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/[0.045] to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* macOS Window Chrome Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] bg-[#0C0C14]/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]/85 ring-1 ring-black/30 transition-transform duration-300 group-hover:scale-105" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/85 ring-1 ring-black/30 transition-transform duration-300 group-hover:scale-105" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]/85 ring-1 ring-black/30 transition-transform duration-300 group-hover:scale-105" />
        </div>

        {/* Omnibox SSL Address Pill */}
        <div className="flex max-w-[280px] flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.035] px-3.5 py-1 text-center shadow-inner backdrop-blur-sm sm:max-w-md">
          <Lock className="h-2.5 w-2.5 shrink-0 text-emerald-400" />
          <span className="truncate font-mono text-[10px] tracking-wide text-zinc-300">{url}</span>
        </div>

        <div className="flex items-center justify-end gap-2 text-zinc-500">
          <RefreshCw className="h-3 w-3 transition-colors duration-300 hover:text-white" />
        </div>
      </div>

      {/* Frame Screen Content */}
      <div className="relative z-10 overflow-hidden bg-[#050508]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          children
        )}
      </div>

      {/* Brand Color Ambient Bottom Edge Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${accent}80 50%, transparent 100%)`,
        }}
      />
    </div>
  );
}


export function StelixScreen() {
  return (
    <div className="flex aspect-[16/10] bg-[#070708] text-left">
      <div className="hidden w-[22%] flex-col gap-5 border-r border-white/[0.06] p-4 sm:flex">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-sm bg-white/80" />
          <Bar w="w-16" tone="bg-white/20" />
        </div>
        <div className="mt-1 space-y-2.5">
          <Bar w="w-3/5" />
          <Bar w="w-4/5" tone="bg-white/40" />
          <Bar w="w-3/5" />
          <Bar w="w-1/2" />
          <Bar w="w-3/5" />
        </div>
        <div className="mt-auto space-y-2">
          <Bar w="w-1/2" />
          <Bar w="w-2/3" />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 md:gap-4 md:p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <Bar w="w-28" tone="bg-white/40" />
            <Bar w="w-40" />
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-14 rounded-md border border-white/10 bg-white/[0.03] md:w-16" />
            <div className="h-6 w-14 rounded-md bg-white/80 md:w-16" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 md:gap-3">
          {[["45ms", "p95"], ["99.98%", "uptime"], ["12", "deploys today"]].map(([v, l]) => (
            <div key={l} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 md:p-3">
              <p className="font-mono text-xs text-white/90 md:text-sm">{v}</p>
              <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-zinc-500 md:text-[9px]">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-5 gap-2.5 md:gap-3">
          <div className="relative col-span-3 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <svg viewBox="0 0 300 110" preserveAspectRatio="none" className="absolute inset-x-3 bottom-3 top-8 h-auto w-[calc(100%-24px)]">
              <polygon points="0,90 40,70 80,78 120,50 160,58 200,32 240,40 300,14 300,110 0,110" fill="rgba(255,255,255,0.05)" />
              <polyline points="0,90 40,70 80,78 120,50 160,58 200,32 240,40 300,14" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" />
            </svg>
            <Bar w="w-20" tone="bg-white/25" />
          </div>
          <div className="col-span-2 space-y-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <Bar w="w-16" tone="bg-white/25" />
            {DEPLOYS.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${d.ok ? "bg-emerald-400/80" : "bg-red-400/80"}`} />
                <Bar w={i % 2 ? "w-2/3" : "w-1/2"} tone="bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PptAIScreen() {
  return (
    <div className="flex aspect-[16/10] bg-[#070708] text-left">
      <div className="w-[18%] space-y-2.5 border-r border-white/[0.06] p-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`aspect-video rounded border ${i === 1 ? "border-white/30 bg-white/[0.05]" : "border-white/[0.08] bg-white/[0.02]"}`} />
        ))}
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="flex aspect-video w-[88%] flex-col rounded-lg border border-white/10 bg-[#0C0C0E] p-[6%]">
          <Bar w="w-1/2" tone="bg-white/60" />
          <div className="mt-[8%] space-y-[5%]">
            {["w-4/5", "w-3/5", "w-2/3"].map((w) => (
              <div key={w} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <Bar w={w} tone="bg-white/20" />
              </div>
            ))}
          </div>
          <div className="mt-auto flex gap-2">
            <div className="h-8 flex-1 rounded bg-white/[0.06] md:h-10" />
            <div className="h-8 flex-1 rounded bg-white/[0.09] md:h-10" />
          </div>
        </div>
      </div>
      <div className="hidden w-[26%] flex-col gap-3 border-l border-white/[0.06] p-3 md:flex">
        <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">AI Copilot</p>
        <div className="space-y-2 rounded-lg border border-white/[0.08] bg-white/[0.04] p-3">
          <Bar w="w-full" tone="bg-white/20" />
          <Bar w="w-4/5" tone="bg-white/20" />
          <Bar w="w-3/5" tone="bg-white/20" />
        </div>
        <div className="h-1.5 w-full animate-pulse rounded bg-white/15" />
        <div className="mt-auto flex flex-wrap gap-1.5">
          {["w-12", "w-16", "w-10"].map((w) => (
            <div key={w} className={`h-5 ${w} rounded-full border border-white/10 bg-white/[0.03]`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AnemsScreen() {
  return (
    <div className="flex aspect-[16/10] flex-col bg-[#070708] text-left">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-white/70" />
          <Bar w="w-14" tone="bg-white/25" />
        </div>
        <div className="hidden gap-3 sm:flex">
          <Bar w="w-10" />
          <Bar w="w-10" />
          <Bar w="w-10" />
        </div>
        <div className="h-6 w-16 rounded-full bg-white/80" />
      </div>
      <div className="px-5 pt-5">
        <Bar w="w-2/5" tone="bg-white/50" />
        <div className="mt-1.5"><Bar w="w-1/4" tone="bg-white/15" /></div>
        <div className="mt-4 flex gap-2">
          <div className="h-7 flex-1 rounded-md border border-white/10 bg-white/[0.03]" />
          <div className="h-7 flex-1 rounded-md border border-white/10 bg-white/[0.03]" />
          <div className="h-7 w-16 rounded-md bg-white/80" />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3 px-5 py-4">
        {[["#111114", "Kyoto"], ["#14110E", "Marrakech"], ["#0E1214", "Reykjavik"]].map(([bg, name]) => (
          <div key={name} className="flex flex-col justify-between rounded-lg border border-white/[0.07] p-3" style={{ background: bg }}>
            <Bar w="w-1/2" tone="bg-white/30" />
            <div className="flex items-end justify-between">
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 md:text-[9px]">{name}</span>
              <Bar w="w-8" tone="bg-white/20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SCREENS: Record<string, ComponentType> = {
  stelix: StelixScreen,
  "ppt-ai": PptAIScreen,
  "anems-travels": AnemsScreen,
};

interface ProductMockupProps {
  slug: string;
  url: string;
  shot?: string;
  accent?: string;
  priority?: boolean;
  className?: string;
}

export function ProductMockup({ slug, url, shot, accent, priority = false, className = "" }: ProductMockupProps) {
  if (shot) {
    return <BrowserFrame src={shot} url={url} accent={accent} priority={priority} alt={`${slug} product screenshot`} className={className} />;
  }
  const Screen = SCREENS[slug] ?? StelixScreen;
  return (
    <BrowserFrame url={url} accent={accent} className={className}>
      <Screen />
    </BrowserFrame>
  );
}

