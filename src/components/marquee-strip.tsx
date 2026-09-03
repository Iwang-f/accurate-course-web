"use client";

import { motion } from "motion/react";
import { getMarqueeItems } from "@/lib/site";

/**
 * Infinite scrolling wordmark strip (Cofounder trust-bar pattern).
 * CSS translate animation via motion; duplicated list for seamless loop.
 * Reduced-motion users get a static row (MotionConfig handles transform
 * animations; the loop duration is disabled via useReducedMotion).
 */
export function MarqueeStrip() {
  const items = getMarqueeItems();
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border/50 bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="marquee-track flex w-max gap-10"
        aria-hidden="true"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, idx) => (
          <span key={idx} className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {item}
          </span>
        ))}
      </motion.div>
      {/* Accessible static copy for SR / reduced motion */}
      <p className="sr-only">Materi mencakup: {items.join(", ")}</p>
    </div>
  );
}
