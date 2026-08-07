"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { marqueeItems } from "@/lib/site";

export default function Marquee() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skewX = useSpring(useTransform(velocity, [-2400, 0, 2400], [5, 0, -5]), { stiffness: 160, damping: 28 });

  return (
    <div className="relative z-10 overflow-hidden py-6 md:py-8" aria-hidden="true">
      {/* Edge Blur Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#030304] to-transparent md:w-44" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#030304] to-transparent md:w-44" />

      <motion.div style={{ skewX }} className="will-change-transform">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center">
              {marqueeItems.map((item, i) => (
                <span key={item} className="flex items-center">
                  <span
                    className={`px-8 font-display text-3xl font-semibold tracking-[-0.03em] md:px-12 md:text-5xl ${
                      i % 2 === 1
                        ? "bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

