"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Hero entrance choreography (motion.dev).
 * Springs with a short visual duration; reduced-motion users get opacity-only.
 */
export default function HeroReveal({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduce ? 0.2 : undefined,
        ease: reduce ? "linear" : [0.25, 1, 0.5, 1],
        type: reduce ? false : "spring",
        visualDuration: 0.5,
        bounce: 0.12,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
