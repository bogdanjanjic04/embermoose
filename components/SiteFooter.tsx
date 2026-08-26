import Link from "next/link";
import FooterWordmark from "./FooterWordmark";
import { SITE } from "@/lib/data";

const SECTIONS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Areas of work" },
  { href: "/modding", label: "Modding" },
  { href: "/lab", label: "Lab" },
];

const MORE = [
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
];

const ELSEWHERE = [
  { href: SITE.github.href, label: `${SITE.github.label} · ${SITE.github.handle}` },
  { href: SITE.itch.href, label: `${SITE.itch.label} · ${SITE.itch.handle}` },
  { href: SITE.x.href, label: `${SITE.x.label} · ${SITE.x.handle}` },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <FooterWordmark />
            <p className="mt-3 max-w-[42ch] text-sm text-muted">
              The personal build archive of Bogdan Janjić: software, games,
              mods and experiments.
            </p>
          </div>

          <nav aria-label="Footer sections">
            <p className="mono-label text-faint">Sections</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[...SECTIONS, ...MORE].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-muted no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-faint no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono-label text-faint">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-sm">
              {ELSEWHERE.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline font-mono text-xs tracking-wide text-muted"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-rule pt-5 font-mono text-xs tracking-wide text-faint">
          <p>© 2026 Bogdan Janjić</p>
          <p>Set in Bricolage Grotesque &amp; IBM Plex via Bunny Fonts · built with Next.js + Tailwind CSS + shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
