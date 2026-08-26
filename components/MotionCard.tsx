"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Hover lift with a motion.dev spring (visualDuration + low bounce),
 * in the spirit of the Flutter Tilt "Multiple Tilt" bento examples —
 * one axis only, restrained. Disabled for reduced-motion users.
 */
export default function MotionCard({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -5 }}
      whileTap={reduce ? undefined : { y: -2, scale: 0.995 }}
      transition={
        reduce
          ? { duration: 0.15 }
          : { type: "spring", visualDuration: 0.32, bounce: 0.28 }
      }
      className="h-full"
    >
      <Link href={href} className={`block h-full no-underline ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}

export function ArrowSlide() {
  return (
    <ArrowRight
      size={12}
      aria-hidden
      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
    />
  );
}
