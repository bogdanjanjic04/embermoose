import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { AREAS, SITE } from "@/lib/data";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bogdan Janjić is a final-year Applied IT student in Užice, Serbia, working across software development, games, Android, Linux, modding and local LLM tooling. Graduating late 2026.",
  alternates: { canonical: "/about/" },
};

const META: { label: string; value: string }[] = [
  { label: "Location", value: SITE.location },
  {
    label: "Education",
    value: "Akademija strukovnih studija Zapadna Srbija · Applied IT",
  },
  { label: "Status", value: "Final year · graduating late 2026" },
  { label: "Daily driver", value: "Arch Linux, for about five years now" },
  { label: "Also known as", value: SITE.handle },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        index="01"
        title="One developer. A ridiculous number of different things built."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 text-md leading-relaxed text-muted lg:col-span-7 md:max-w-[62ch]">
            <p>
              Bogdan Janjić is a final-year Applied IT student at Akademija
              strukovnih studija Zapadna Srbija in Užice, Serbia, expected to
              graduate in late 2026.
            </p>
            <p>
              The work doesn’t stay in one lane: application development in
              C#/.NET and WPF; Android apps in Kotlin and Jetpack Compose;
              systems-heavy games in Godot; Linux tooling on an Arch daily
              driver; SMAPI modding that keeps turning into reverse
              engineering; local LLM pipelines for when a task deserves its own
              model.
            </p>
            <p>
              The projects are the argument. A social strategy game with four
              competing roles, a card-table duel counted on fingers, an offline
 GM toolkit with a recursive dice parser, Android apps that
              fight foreground services and Firestore caches, mods that end in
              reflection into SMAPI’s private API.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <dl className="divide-y divide-rule border-y border-rule">
              {META.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] gap-4 py-3.5"
                >
                  <dt className="mono-label pt-0.5 text-faint">{row.label}</dt>
                  <dd className="text-sm text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              <li>
                <a href={SITE.github.href} target="_blank" rel="noreferrer" className="link-underline font-mono text-xs tracking-wide">
                  github/{SITE.github.handle} ↗
                </a>
              </li>
              <li>
                <a href={SITE.itch.href} target="_blank" rel="noreferrer" className="link-underline font-mono text-xs tracking-wide">
                  itch.io/{SITE.itch.handle} ↗
                </a>
              </li>
              <li>
                <a href={SITE.x.href} target="_blank" rel="noreferrer" className="link-underline font-mono text-xs tracking-wide">
                  x/{SITE.x.handle} ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section aria-labelledby="brand-heading" className="mt-16 border-t border-rule pt-10 md:mt-20 md:pt-14">
          <p className="mono-label text-faint">The name</p>
          <h2 id="brand-heading" className="mt-3 max-w-[26ch] font-display text-2xl font-bold tracking-tight">
            Why “Ember Moose”?
          </h2>
          <div className="mt-5 max-w-[62ch] space-y-4 text-md leading-relaxed text-muted">
            <p>
              No lore to explain. Ember is the palette this whole archive runs
              on: one smoldering signal color over dark charcoal, used only
              where something deserves attention. The moose is the deliberately
              odd mark that makes the site recognizably mine instead of
              generically clean.
            </p>
            <p>
              The name does what a good handle should: it sticks, it doesn’t
              take itself too seriously, and it leaves all the credibility to
              the work filed under it.
            </p>
          </div>
        </section>

        <section aria-labelledby="areas-about-heading" className="mt-16 border-t border-rule pt-10">
          <h2 id="areas-about-heading" className="font-display text-xl font-semibold tracking-tight">
            Areas of work
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/work/${area.slug}`}
                  className="group flex items-center justify-between gap-3 border border-rule px-4 py-3.5 no-underline transition-colors hover:border-accent-deep"
                >
                  <span className="font-display text-md font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {area.name}
                  </span>
                  <ArrowRight size={14} aria-hidden className="shrink-0 text-faint group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
