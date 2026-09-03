"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Honors the OS "reduce motion" setting app-wide for all motion components. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
