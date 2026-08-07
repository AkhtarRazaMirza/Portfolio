"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Overline, Reveal } from "@/components/primitives";

const SKILLS = [
  "Next.js", "React", "TypeScript", "Node.js", "Express.js", "REST API",
  "PostgreSQL", "Drizzle ORM", "MongoDB", "Redis", "Better Auth", "Clerk",
  "JWT", "Zod", "OpenAI API", "Resend", "Tailwind CSS", "Framer Motion",
  "shadcn/ui", "JavaScript", "HTML5", "CSS3", "Docker", "Git",
  "GitHub", "Vercel", "VS Code",
];

const LARGEST_SKILLS = new Set([
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
]);

const MEDIUM_SKILLS = new Set([
  "Express.js", "Drizzle ORM", "MongoDB", "Redis", "Better Auth", "Clerk",
  "OpenAI API", "Resend", "shadcn/ui",
]);

const radiusFor = (i: number) => {
  const skill = SKILLS[i];
  if (LARGEST_SKILLS.has(skill)) return 66;
  if (MEDIUM_SKILLS.has(skill)) return 56;
  return 46;
};

interface Ball {
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function SkillField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const field = fieldRef.current;
    if (!field) return;

    const mouse = { x: -9999, y: -9999 };
    const balls: Ball[] = SKILLS.map((_, i) => {
      const r = radiusFor(i);
      return {
        r,
        x: r + Math.random() * Math.max(1, field.clientWidth - 2 * r),
        y: r + Math.random() * Math.max(1, field.clientHeight - 2 * r),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      };
    });

    const onMove = (e: MouseEvent) => {
      const rect = field.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    field.addEventListener("mousemove", onMove);
    field.addEventListener("mouseleave", onLeave);

    let raf: number;
    const tick = () => {
      const w = field.clientWidth;
      const h = field.clientHeight;
      balls.forEach((b, i) => {
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const d = Math.hypot(dx, dy);
        const reach = 140 + b.r;
        if (d < reach && d > 0.1) {
          const force = ((reach - d) / reach) * 0.5;
          b.vx += (dx / d) * force;
          b.vy += (dy / d) * force;
        }
        b.vx *= 0.98;
        b.vy *= 0.98;
        if (Math.abs(b.vx) < 0.03) b.vx += (Math.random() - 0.5) * 0.02;
        if (Math.abs(b.vy) < 0.03) b.vy += (Math.random() - 0.5) * 0.02;
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < b.r) { b.x = b.r; b.vx *= -0.8; }
        if (b.x > w - b.r) { b.x = w - b.r; b.vx *= -0.8; }
        if (b.y < b.r) { b.y = b.r; b.vy *= -0.8; }
        if (b.y > h - b.r) { b.y = h - b.r; b.vy *= -0.8; }
        const el = ballsRef.current[i];
        if (el) el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      field.removeEventListener("mousemove", onMove);
      field.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  return (
    <section data-testid="skill-field" className="relative z-10 overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[150px]" aria-hidden="true" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
            Tech Stack<br /><span className="text-zinc-500">& primitives.</span>
          </h2>
          <Overline>07 — Capabilities</Overline>
        </Reveal>
      </div>

      {reduce ? (
        <div className="mx-auto mt-14 flex max-w-[1600px] flex-wrap gap-3 px-6 md:px-12 lg:px-24">
          {SKILLS.map((s) => (
            <span key={s} className="glass-surface rounded-full px-5 py-3 font-mono text-xs text-zinc-300">
              {s}
            </span>
          ))}
        </div>
      ) : (
        <div ref={fieldRef} className="relative mx-auto mt-14 h-[55vh] max-w-[1600px] cursor-crosshair px-6 md:px-12 lg:px-24">
          {SKILLS.map((s, i) => {
            const size = radiusFor(i) * 2;
            return (
              <span
                key={s}
                data-testid={`skill-ball-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                ref={(el) => { ballsRef.current[i] = el; }}
                className="glass-surface glass-surface-hover absolute left-0 top-0 flex select-none items-center justify-center rounded-full font-mono text-[10px] text-zinc-200 md:text-xs"
                style={{ width: size, height: size, willChange: "transform" }}
              >
                {s}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
}

