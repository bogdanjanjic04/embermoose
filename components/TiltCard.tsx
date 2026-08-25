"use client";

import { useRef, type ReactNode } from "react";

/**
 * Pointer-tracked 3D tilt with a soft light glare, in the spirit of
 * Flutter Tilt's card examples, adapted as a dependency-free wrapper.
 * Disabled for reduced-motion users and coarse (touch) pointers.
 */
export default function TiltCard({
  children,
  className = "",
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glare = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 2 * max;
    const rx = (0.5 - py) * 2 * max;
    el.style.transform = `perspective(1100px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    if (glare.current) {
      glare.current.style.opacity = "0.5";
      glare.current.style.background = `radial-gradient(circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(255,235,220,0.16), transparent 55%)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    if (glare.current) glare.current.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative will-change-transform [transition:transform_400ms_var(--ease-out-quart)] ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      <div
        ref={glare}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 [transition:opacity_300ms_var(--ease-out-quart)]"
      />
    </div>
  );
}
