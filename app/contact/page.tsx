import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/data";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bogdan Janjić (ToShamara) about software development work, internships or the projects on Ember Moose. GitHub, itch.io and X.",
  alternates: { canonical: "/contact/" },
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

        <div className="mt-12 border-t border-rule pt-8">
          <h2 className="font-display text-xl font-bold tracking-tight">Fastest routes</h2>
          <dl className="mt-5 divide-y divide-rule border-y border-rule text-sm">
            <div className="grid gap-1 py-3.5 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-6">
              <dt className="mono-label pt-0.5 text-faint">Work offer</dt>
              <dd className="text-muted">
                GitHub profile with a short intro, or an X message. Both land in the same place.
              </dd>
            </div>
            <div className="grid gap-1 py-3.5 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-6">
              <dt className="mono-label pt-0.5 text-faint">Game feedback</dt>
              <dd className="text-muted">
                itch.io comment sections, per game. ANTE ZERO feedback goes straight to its page.
              </dd>
            </div>
            <div className="grid gap-1 py-3.5 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-6">
              <dt className="mono-label pt-0.5 text-faint">Mod issues</dt>
              <dd className="text-muted">
                GitHub issues on the mod&rsquo;s repository, so fixes are tracked in the open.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
