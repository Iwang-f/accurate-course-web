"use client";

/**
 * Motion primitives — thin wrappers over `motion` (framer-motion).
 * Global reduced-motion preference is handled once in <Providers />
 * via MotionConfig reducedMotion="user"; components here stay dumb.
 */
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the entrance animation starts. */
  delay?: number;
  /** Vertical offset in px the element travels up from. */
  y?: number;
};

/** Fade-up on scroll into view. Fires once. */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <RevealItem> children. */
export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.09 } } }}
    >
      {children}
    </motion.div>
  );
}

/** A child of <StaggerGroup>; fades up after its siblings. */
export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } } }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Count-up number for trust stats. Parses the leading integer out of a
 * display string ("100+" → 100 with suffix "+") and animates 0 → value
 * when scrolled into view. Non-numeric strings render as-is.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(\d+)(.*)$/);
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => (match ? `${Math.round(v)}${match[2]}` : value));

  useEffect(() => {
    if (inView && match) {
      const controls = animate(mv, Number(match[1]), { duration: 1.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, match]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
    </span>
  );
}
