"use client";

import { ArrowClockwise, House } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect } from "react";
import MooseMark from "@/components/MooseMark";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center md:px-8">
      <MooseMark size={72} glitch />
      <p className="mono-label mt-8 text-faint">
        runtime <span className="text-accent">fault</span> · the brine got everywhere
      </p>
      <h1 className="mt-4 max-w-[24ch] font-display text-hero font-extrabold tracking-tight [overflow-wrap:anywhere]">
        This page slipped off the shelf.
      </h1>
      <p className="mt-4 max-w-[46ch] text-muted">
        A client-side error interrupted the archive. Reloading usually settles
        it; the rest of the site is untouched.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={reset} className="cta cta-primary cursor-pointer text-xs">
          <ArrowClockwise size={13} aria-hidden /> Try again
        </button>
        <Link href="/" className="cta text-xs">
          <House size={13} aria-hidden /> Back home
        </Link>
      </div>
    </div>
  );
}
