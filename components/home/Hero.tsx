"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AccentGlow, Magnetic, Overline, WordReveal, useReady, EASE } from "@/components/primitives";
import { BrowserFrame, ProductMockup } from "@/components/mockups/BrowserMockup";
import { identity, projects } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const ready = useReady();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const mockY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0.1]);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 60, damping: 18 });
  const rotateY = useSpring(tiltY, { stiffness: 60, damping: 18 });
  const parX = useMotionValue(0);
  const centerX = useTransform(parX, (v) => v * 12);
  const leftX = useTransform(parX, (v) => v * -18);
  const rightX = useTransform(parX, (v) => v * 22);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 3);
    tiltX.set(-((e.clientY - r.top) / r.height - 0.5) * 3);
    parX.set((e.clientX - r.left) / r.width - 0.5);
  };

  return (
    <section ref={ref} onMouseMove={onMove} data-testid="hero-section" className="relative z-10 overflow-hidden pb-24 pt-36 md:pt-48">
      {/* Volumetric Radial Light Spotlight behind Hero */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/[0.08] via-violet-500/[0.04] to-transparent blur-[140px]" aria-hidden="true" />

      <motion.div style={{ opacity: fade }} className="relative mx-auto max-w-[1600px] px-6 text-center md:px-12 lg:px-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.9, delay: 0.1 }}>
          <Overline>{identity.name} — {identity.role}</Overline>
        </motion.div>

        <h1 className="mx-auto mt-8 max-w-6xl font-display text-[clamp(2.2rem,8.5vw,8.2rem)] font-semibold leading-[0.94] tracking-[-0.035em] text-white">
          <span className="block">
            <WordReveal words={["Software,", "engineered"]} delay={0.15} />
          </span>
          <span className="mt-1 block bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            <WordReveal words={["like", "a", "product."]} delay={0.42} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="mx-auto mt-9 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl"
        >
          I design and build <span className="font-normal text-white">production-grade systems</span> — from architecture to interface, and every detail between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, delay: 0.68, ease: EASE }}
          className="mt-11 flex flex-wrap justify-center gap-4"
        >
          <Magnetic strength={0.25}>
            <a
              data-testid="hero-cta-work"
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] text-black shadow-[0_12px_30px_-10px_rgba(255,255,255,0.3)] transition-[background-color,transform,box-shadow] duration-200 hover:bg-zinc-200 active:scale-[0.97]"
            >
              View selected work
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              data-testid="hero-cta-contact"
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur-md transition-[border-color,background-color,transform] duration-200 hover:border-white/50 hover:bg-white/[0.08] active:scale-[0.97]"
            >
              Let's talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 1, delay: 0.88 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
        >
          <span className="flex items-center gap-2.5" data-testid="hero-availability">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {identity.availability}
          </span>
          <span>{identity.location}</span>
          <span className="hidden md:inline">EST — PST overlap</span>
        </motion.div>
      </motion.div>

      {/* 3D Elevated Asymmetric Product Stage */}
      <div className="relative mx-auto mt-16 max-w-[1300px] px-6 pb-10 md:mt-24 md:px-12 md:pb-16" style={{ perspective: 1600 }}>
        <AccentGlow accent="#5B8CFF" opacity={0.16} className="left-1/2 top-1/3 h-80 w-3/4 -translate-x-1/2" />

        {/* Stelix Primary Hero Stage */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 70 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.3, delay: 0.7, ease: EASE }}
          className="relative z-10 mx-auto md:w-[84%]"
        >
          <motion.div style={{ y: mockY }}>
            <motion.div style={{ rotateX, rotateY, x: centerX, transformStyle: "preserve-3d" }}>
              <ProductMockup slug="stelix" url={projects[0].url} shot={projects[0].shots?.[0]} accent={projects[0].accent} priority />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile secondary stacked mockups */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
          className="relative z-20 mt-6 flex items-start gap-2.5 sm:gap-4 md:hidden"
        >
          <div className="w-1/2 -rotate-2">
            <BrowserFrame src={projects[1].shots?.[0]} url={projects[1].url} accent={projects[1].accent} alt="PPT.ai — generate presentations from text" />
          </div>
          <div className="mt-6 w-1/2 rotate-2">
            <BrowserFrame src={projects[2].shots?.[0]} url={projects[2].url} accent={projects[2].accent} alt="AIMS Tours — premium pilgrimage travel" />
          </div>
        </motion.div>

        {/* Left Secondary Floating Stage — PPT.ai */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 50 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.3, delay: 0.9, ease: EASE }}
          className="absolute bottom-4 left-0 z-20 hidden w-[36%] md:block"
        >
          <motion.div style={{ x: leftX }}>
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              style={{ rotate: -3 }}
            >
              <BrowserFrame src={projects[1].shots?.[0]} url={projects[1].url} accent={projects[1].accent} alt="PPT.ai — generate presentations from text" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Secondary Floating Stage — AIMS Tours */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 50 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.3, delay: 1.05, ease: EASE }}
          className="absolute right-0 top-10 z-20 hidden w-[38%] md:block"
        >
          <motion.div style={{ x: rightX }}>
            <motion.div
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              style={{ rotate: 2 }}
            >
              <BrowserFrame src={projects[2].shots?.[0]} url={projects[2].url} accent={projects[2].accent} alt="AIMS Tours — premium pilgrimage travel" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative z-30 mt-10 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"
        >
          Stelix — your AI command center · live at stelix.akhtarraza.in
        </motion.p>
      </div>
    </section>
  );
}

