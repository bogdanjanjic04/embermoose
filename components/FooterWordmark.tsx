"use client";

import { asset } from "@/lib/assets";
import { useRef, useState } from "react";
import MooseMark from "./MooseMark";

type Drop = {
  id: number;
  left: number;
  duration: number;
  delay: number;
};

const SIZE = 34; // small and consistent

export default function FooterWordmark() {
  const [drops, setDrops] = useState<Drop[]>([]);
  const [rained, setRained] = useState(false);
  const presses = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idRef = useRef(0);

  const press = () => {
    if (rained) return; // once per page load
    presses.current += 1;
    if (timer.current) clearTimeout(timer.current);
    if (presses.current >= 3) {
      presses.current = 0;
      setRained(true);
      const count = 10 + Math.floor(Math.random() * 6); // 10 to 15
      const next: Drop[] = Array.from({ length: count }, () => ({
        id: idRef.current++,
        left: Math.random() * 96,
        duration: 2.6 + Math.random() * 3.4,
        delay: Math.random() * 1.2,
      }));
      setDrops(next);
    } else {
      timer.current = setTimeout(() => (presses.current = 0), 900);
    }
  };

  return (
    <>
      {drops.length > 0 && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {drops.map((d) => (
            <div
              key={d.id}
              className="absolute animate-moose-fall"
              style={{
                left: `${d.left}vw`,
                top: `-${SIZE + 8}px`,
                width: SIZE,
                height: SIZE,
                animationDuration: `${d.duration}s`,
                animationDelay: `${d.delay}s`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/brand/embermoose_fall.svg")}
                alt=""
                width={SIZE}
                height={SIZE}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={press}
        aria-label="Ember Moose"
        className="flex cursor-default items-center gap-2.5 border-0 bg-transparent p-0 text-ink"
      >
        <MooseMark size={24} withBg />
        <span className="font-display text-lg font-bold tracking-tight">
          Ember Moose
        </span>
      </button>
    </>
  );
}
