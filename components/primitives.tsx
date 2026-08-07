"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Gates first-load entrance animations until the preloader curtain lifts.
export const RevealContext = createContext(false);
export const useReady = () => useContext(RevealContext);

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 32, className = "" }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}

export function MaskReveal({ children, delay = 0, className = "", inView = false }: MaskRevealProps) {
  const reduce = useReducedMotion();
  const ready = useReady();
  const transition = { duration: 1.2, delay, ease: EASE };

  if (inView) {
    // whileInView lives on the untransformed outer mask so IntersectionObserver
    // measures a stable box; the inner line animates via variants.
    return (
      <motion.span
        className={`block overflow-hidden pb-[0.09em] -mb-[0.09em] ${className}`}
        initial={reduce ? undefined : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.span
          className="block will-change-transform"
          variants={{ hidden: { y: "112%" }, show: { y: "0%" } }}
          transition={transition}
        >
          {children}
        </motion.span>
      </motion.span>
    );
  }

  return (
    <span className={`block overflow-hidden pb-[0.09em] -mb-[0.09em] ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={reduce ? undefined : { y: "112%" }}
        animate={{ y: ready ? "0%" : "112%" }}
        transition={transition}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Per-word masked rise with a hint of rotation — the hero's signature moment.
export function WordReveal({ words, delay = 0, step = 0.07 }: { words: string[]; delay?: number; step?: number }) {
  const ready = useReady();
  const reduce = useReducedMotion();
  return (
    <>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.09em] -mb-[0.09em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={reduce ? undefined : { y: "112%", rotate: 4 }}
            animate={ready ? { y: "0%", rotate: 0 } : undefined}
            transition={{ duration: 1.1, delay: delay + i * step, ease: EASE }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </>
  );
}

// Screenshot curtain: a clipped window that opens as it enters the viewport.
export function ClipReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { clipPath: "inset(14% 6% 84% 6% round 16px)", opacity: 0.35 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 16px)", opacity: 1 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Hairlines that draw themselves across the row as it enters.
export function DrawLine({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px origin-left bg-white/10 ${className}`}
      initial={reduce ? undefined : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.4, ease: EASE }}
    />
  );
}

// Metrics count up the first time they enter the viewport.
export function CountUp({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(match ? "0" : value);

  useEffect(() => {
    if (!match || !inView || reduce) return;
    const target = parseFloat(match[1]);
    const decimals = match[1].includes(".") ? 1 : 0;
    const start = performance.now();
    const duration = 1400;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay((target * eased).toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, match]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {display}
      {match[2]}
    </span>
  );
}

const GLYPHS = "ABCDEFGHKLMNPQRSTUVWXYZ0123456789#/·";

// Labels resolve out of a character scramble — a small engineering signature.
export function DecodeText({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView || reduce) return;
    const start = performance.now();
    const duration = 650;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const settled = Math.floor(p * text.length);
      setOut(
        text
          .split("")
          .map((ch, i) => (i < settled || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join("")
      );
      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, text]);

  return <span ref={ref}>{out}</span>;
}

export function Overline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-zinc-500 ${className}`}>
      {typeof children === "string" ? <DecodeText text={children} /> : children}
    </p>
  );
}

// Soft radial light tinted with a project's brand color — depth without gradients everywhere.
export function AccentGlow({ accent = "#5B8CFF", opacity = 0.12, className = "" }: { accent?: string; opacity?: number; className?: string }) {
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, "0");
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`}
      style={{ background: `radial-gradient(circle, ${accent}${alpha} 0%, transparent 70%)` }}
    />
  );
}

// Magnetic hover: element leans toward the cursor, springs home on leave.
export function Magnetic({ children, strength = 0.3, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
