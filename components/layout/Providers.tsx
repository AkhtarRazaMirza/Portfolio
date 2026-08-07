"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Preloader from "@/components/layout/Preloader";
import CursorGlow from "@/components/layout/CursorGlow";
import { RevealContext } from "@/components/primitives";

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

// Reading progress as a hairline gradient — guides the eye without chrome.
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[95] h-0.5 origin-left bg-gradient-to-r from-[#5B8CFF] via-[#8B5CF6] to-[#34D399]"
      style={{ scaleX }}
    />
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 0 : 1900;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = duration === 0 ? 100 : Math.min(100, Math.round(((t - start) / duration) * 100));
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else window.setTimeout(() => setReady(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    window.__lenis = lenis;
    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <RevealContext.Provider value={ready}>
      <ScrollProgress />
      {children}
      <AnimatePresence>{!ready && <Preloader progress={progress} />}</AnimatePresence>
      <CursorGlow />
      <Toaster theme="dark" position="bottom-right" />
    </RevealContext.Provider>
  );
}
