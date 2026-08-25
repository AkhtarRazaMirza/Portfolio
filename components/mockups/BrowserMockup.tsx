import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import { Lock, RefreshCw } from "lucide-react";

const ASSISTANT_ITEMS = [
  { text: "Smart Inbox Summary", ok: true },
  { text: "Google Calendar Sync", ok: true },
  { text: "Natural Language Triage", ok: true },
  { text: "Meeting Intelligence", ok: true },
];

function Bar({ w = "w-3/5", tone = "bg-white/10" }: { w?: string; tone?: string }) {
  return <div className={`h-2 rounded ${w} ${tone}`} />;
}

interface BrowserFrameProps {
  url?: string;
  src?: string;
  alt?: string;
  accent?: string;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
}

export function BrowserFrame({ url = "", src, alt = "", accent = "#8B5CF6", priority = false, children, className = "" }: BrowserFrameProps) {
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
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] bg-[#0C0C14]/90 px-2.5 py-2 backdrop-blur-md sm:px-4 sm:py-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/85 ring-1 ring-black/30 transition-transform duration-300 group-hover:scale-105 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/85 ring-1 ring-black/30 transition-transform duration-300 group-hover:scale-105 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/85 ring-1 ring-black/30 transition-transform duration-300 group-hover:scale-105 sm:h-3 sm:w-3" />
        </div>

        {/* Omnibox SSL Address Pill */}
        <div className="flex max-w-[140px] flex-1 items-center justify-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.035] px-2 py-0.5 text-center shadow-inner backdrop-blur-sm sm:max-w-md sm:gap-2 sm:px-3.5 sm:py-1">
          <Lock className="h-2 w-2 shrink-0 text-emerald-400 sm:h-2.5 sm:w-2.5" />
          <span className="truncate font-mono text-[9px] tracking-wide text-zinc-300 sm:text-[10px]">{url}</span>
        </div>

        <div className="flex items-center justify-end gap-2 text-zinc-500">
          <RefreshCw className="h-2.5 w-2.5 transition-colors duration-300 hover:text-white sm:h-3 sm:w-3" />
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
          {[["Inbox", "Smart summary"], ["Calendar", "Events tracked"], ["Assistant", "Natural language"]].map(([v, l]) => (
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
            {ASSISTANT_ITEMS.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${d.ok ? "bg-emerald-400/80" : "bg-zinc-400/80"}`} />
                <Bar w={i % 2 ? "w-2/3" : "w-1/2"} tone="bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FormEngineScreen() {
  return (
    <div className="flex aspect-[16/10] bg-[#070709] text-left">
      {/* Left Form Builder Questions & Fields Sidebar */}
      <div className="hidden w-[28%] flex-col border-r border-white/[0.06] p-3 sm:flex">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-white">Form Builder</span>
          </div>
          <span className="rounded border border-violet-500/30 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[7px] text-violet-300">tRPC</span>
        </div>
        <div className="mt-3 space-y-1.5">
          {[
            { num: "01", name: "Welcome Screen", active: false },
            { num: "02", name: "Project Goals", active: true },
            { num: "03", name: "Multiple Choice", active: false },
            { num: "04", name: "Rating Scale", active: false },
            { num: "05", name: "Submission", active: false },
          ].map((item) => (
            <div
              key={item.num}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 font-mono text-[8px] ${
                item.active
                  ? "border border-violet-500/40 bg-violet-500/10 text-white"
                  : "border border-transparent text-zinc-400"
              }`}
            >
              <span className="text-zinc-500">{item.num}</span>
              <span className="truncate">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          <p className="font-mono text-[7px] uppercase tracking-wider text-zinc-500">PostgreSQL Schema</p>
          <div className="mt-1 flex gap-1">
            <span className="rounded bg-white/[0.05] px-1 py-0.5 font-mono text-[7px] text-zinc-300">7 Features</span>
            <span className="rounded bg-white/[0.05] px-1 py-0.5 font-mono text-[7px] text-zinc-300">Auth</span>
          </div>
        </div>
      </div>

      {/* Center Interactive Form Canvas */}
      <div className="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">Question 02 of 05</span>
          <div className="flex items-center gap-1.5 font-mono text-[8px] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live Preview
          </div>
        </div>

        <div className="mx-auto max-w-xs space-y-2.5 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-display text-sm font-medium text-white sm:text-base">What is your primary goal?</p>
            <p className="font-sans text-[11px] font-light text-zinc-400">Select one option to personalize your workspace</p>
          </div>
          <div className="space-y-1.5 pt-1">
            {[
              { key: "A", label: "Building SaaS products" },
              { key: "B", label: "Client web applications" },
              { key: "C", label: "Internal team workflows" },
            ].map((opt, i) => (
              <div
                key={opt.key}
                className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] ${
                  i === 0
                    ? "border-violet-500/50 bg-violet-500/10 text-white"
                    : "border-white/[0.08] bg-white/[0.02] text-zinc-300"
                }`}
              >
                <span className="flex h-4 w-4 items-center justify-center rounded bg-white/10 font-mono text-[9px] font-medium text-zinc-300">
                  {opt.key}
                </span>
                <span className="font-light">{opt.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 font-mono text-[8px] text-zinc-500">
          <span>Turborepo Monorepo</span>
          <span>Press Enter ↵</span>
        </div>
      </div>
    </div>
  );
}

export function ChaibookScreen() {
  return (
    <div className="flex aspect-[16/10] bg-[#070709] text-left">
      {/* Left Sources Ingestion Panel */}
      <div className="hidden w-[28%] flex-col border-r border-white/[0.06] p-3 sm:flex">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-white">Sources</span>
          </div>
          <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[7px] text-cyan-300">Pinecone</span>
        </div>

        <div className="mt-3 space-y-1.5">
          {[
            { tag: "DOC", title: "Architecture_Spec.pdf", active: true },
            { tag: "WEB", title: "api-documentation.io", active: false },
            { tag: "YT", title: "System_Design_Talk.mp4", active: false },
            { tag: "TXT", title: "research_notes.md", active: false },
          ].map((src) => (
            <div
              key={src.title}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 font-mono text-[8px] ${
                src.active
                  ? "border border-cyan-500/40 bg-cyan-500/10 text-white"
                  : "border border-transparent text-zinc-400"
              }`}
            >
              <span className="rounded bg-white/10 px-1 py-0.5 text-[6px] text-zinc-400">{src.tag}</span>
              <span className="truncate">{src.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          <p className="font-mono text-[7px] uppercase tracking-wider text-zinc-500">Vector Retrieval</p>
          <p className="mt-0.5 font-mono text-[8px] text-zinc-300">Prisma · PostgreSQL</p>
        </div>
      </div>

      {/* Center Q&A Canvas with Grounded Citations */}
      <div className="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">Research Canvas</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[7px] text-zinc-400">
            OpenAI Citations
          </span>
        </div>

        <div className="space-y-2.5 py-1.5">
          <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-2 text-[11px] text-zinc-300">
            <span className="font-mono text-[8px] text-zinc-500">Query: </span>
            How does the system handle multi-source retrieval?
          </div>

          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/[0.03] p-2.5 text-[11px] leading-relaxed text-zinc-200">
            <p className="font-light">
              Sources are chunked and embedded into Pinecone{" "}
              <span className="inline-flex items-center rounded bg-cyan-500/20 px-1 font-mono text-[8px] text-cyan-300">[1]</span>. Relevant vector context is synthesized into grounded responses with exact citations{" "}
              <span className="inline-flex items-center rounded bg-cyan-500/20 px-1 font-mono text-[8px] text-cyan-300">[2]</span>.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] pt-2 font-mono text-[8px] text-zinc-500">
          <span>Generated Study Artifacts</span>
          <span>4 Sources Ingested</span>
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
  "form-engine": FormEngineScreen,
  chaibook: ChaibookScreen,
  stelix: StelixScreen,
  "ppt-ai": PptAIScreen,
  "anems-travels": AnemsScreen,
};

interface ProductMockupProps {
  slug: string;
  url?: string;
  shot?: string;
  accent?: string;
  priority?: boolean;
  className?: string;
}

export function ProductMockup({ slug, url = "", shot, accent, priority = false, className = "" }: ProductMockupProps) {
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

