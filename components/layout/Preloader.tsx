"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/primitives";
import { identity } from "@/lib/site";

export default function Preloader({ progress }: { progress: number }) {
  return (
    <motion.div
      data-testid="preloader"
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-[#050505] px-6 py-8 md:px-12"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        <span>{identity.name}</span>
        <span>Portfolio ©2026</span>
      </div>

      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "112%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: EASE }}
          className="text-center font-display text-[clamp(2.4rem,7.5vw,7rem)] font-semibold leading-none tracking-[-0.03em] text-white"
        >
          {identity.role}
        </motion.p>
      </div>

      <div className="flex items-end justify-between">
        <div className="relative mb-4 mr-8 h-px flex-1 overflow-hidden bg-white/10">
          <div className="absolute inset-y-0 left-0 bg-violet-400/80" style={{ width: `${progress}%` }} />
        </div>
        <span className="font-display text-6xl font-medium tracking-tight text-white tabular-nums md:text-8xl">
          {progress}
          <span className="text-zinc-500">%</span>
        </span>
      </div>
    </motion.div>
  );
}
