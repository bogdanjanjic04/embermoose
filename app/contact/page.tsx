import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/data";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bogdan Janjić (ToShamara) about software development work, internships or the projects on Ember Moose. GitHub, itch.io and X.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    ...SITE.github,
    note: "Fastest for code, issues and professional messages. Open to internships and development roles; the projects here are the portfolio.",
  },
  {
    ...SITE.itch,
    note: "Games live here, including ANTE ZERO which runs right in the browser.",
  },
  {
    ...SITE.x,
    note: "Short-form updates, progress clips and quick questions.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        index="06"
        title="The archive is the résumé. What’s next is negotiable."
        lede="I’m looking for software development work: internships included, and the more advanced the better. The projects here are the portfolio."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <ul className="grid gap-4 lg:grid-cols-3">
          {CHANNELS.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col border border-rule bg-raised/40 p-5 no-underline transition-colors hover:border-accent-deep"
              >
                <span className="flex items-center justify-between">
                  <span className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {c.label} · {c.handle}
                  </span>
                  <ArrowUpRight size={15} aria-hidden className="text-faint group-hover:text-accent" />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted">{c.note}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 border border-rule p-5 md:p-6">
          <p className="flex items-center gap-2 font-mono text-sm text-muted">
            <GithubLogo size={15} aria-hidden /> Downloads live on GitHub
          </p>
          <p className="mt-2 max-w-[64ch] text-sm text-muted">
            Source and releases for the public projects are published at{" "}
            <a
              href={SITE.github.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              github.com/{SITE.github.handle}
            </a>
            . Grab builds there; playable games also run on itch.io.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight">What to include</h2>
            <p className="mt-3 max-w-[60ch] text-md leading-relaxed text-muted">
              A sentence about the role or project, what success looks like,
              and roughly when. Messages that say what they need get answers
              faster than ones that don’t.
            </p>
          </div>
          <dl className="divide-y divide-rule border-y border-rule text-sm">
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="mono-label text-faint">Open to</dt>
              <dd className="text-right text-muted">Internships · junior &amp; mid-level dev roles</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="mono-label text-faint">Background</dt>
              <dd className="text-right text-muted">
                <Link href="/about" className="link-underline">On the About page</Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
