import Link from "next/link";
import { GithubLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { SITE } from "@/lib/data";

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/97 backdrop-blur-none md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-2.5">
        <a
          href={SITE.github.href}
          target="_blank"
          rel="noreferrer"
          className="cta justify-center py-2.5 text-xs"
        >
          <GithubLogo size={15} aria-hidden /> GitHub
        </a>
        <Link href="/contact" className="cta cta-primary justify-center py-2.5 text-xs">
          <EnvelopeSimple size={15} aria-hidden /> Get in touch
        </Link>
      </div>
    </div>
  );
}
