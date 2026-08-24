import Link from "next/link";
import MooseMark from "@/components/MooseMark";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center md:px-8">
      <MooseMark size={72} glitch />
      <p className="mono-label mt-8 text-faint">
        error <span className="text-accent">404</span> · this page was pickled away
      </p>
      <h1 className="mt-4 font-display text-hero font-extrabold tracking-tight [overflow-wrap:anywhere]">
        Count down to nothing.
      </h1>
      <p className="mt-4 max-w-[46ch] text-muted">
        The page you were after doesn’t exist, moved, or never shipped. The
        archive itself is still right where you left it.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="cta cta-primary text-xs">
          Back home <ArrowRight size={13} aria-hidden />
        </Link>
        <Link href="/projects" className="cta text-xs">
          Browse projects
        </Link>
      </div>
    </div>
  );
}
