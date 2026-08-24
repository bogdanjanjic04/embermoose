import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import {
  AREAS,
  LAB_ENTRIES,
  MOD_NOTES,
  NOTE_CATEGORIES,
  PROJECTS,
} from "@/lib/data";

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.name,
    description: `${area.intro} Projects and notes in ${area.name.toLowerCase()} by Bogdan Janjić (ToShamara).`,
    alternates: { canonical: `/work/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const projects = PROJECTS.filter((p) =>
    area.categories.some((c) => p.categories.includes(c)),
  );
  const noteIds = new Set(
    Object.entries(NOTE_CATEGORIES)
      .filter(([, cats]) => cats.some((c) => area.categories.includes(c)))
      .map(([key]) => key),
  );
  const notes = MOD_NOTES.filter((n) => noteIds.has(`note:${n.id}`));
  const labs = LAB_ENTRIES.filter((l) => noteIds.has(`lab:${l.id}`));

  return (
    <div>
      <PageHeader
        index={String(AREAS.indexOf(area) + 1).padStart(2, "0")}
        title={area.name}
        lede={area.note}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/work", label: "Work" },
          { href: `/work/${area.slug}`, label: area.name },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <p className="mono-label border-y border-rule py-4 text-muted">
          <span className="mr-3 text-faint">Tools</span>
          {area.items.join(" · ")}
        </p>

        <section aria-labelledby={`${area.slug}-builds`} className="mt-12">
          <h2 id={`${area.slug}-builds`} className="font-display text-xl font-bold tracking-tight">
            Builds
          </h2>
          <ul className="mt-5 divide-y divide-rule border-y border-rule">
            {projects.length === 0 && (
              <li className="py-4 text-sm text-faint">No featured builds in this lane yet; the lab below is where the action is.</li>
            )}
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 no-underline"
                >
                  <span className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {p.name}
                  </span>
                  <span className="max-w-[52ch] basis-full text-sm text-muted sm:basis-auto">
                    {p.summary}
                  </span>
                  <span className="mono-label shrink-0 text-faint">case study ↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {(notes.length > 0 || labs.length > 0) && (
          <section aria-labelledby={`${area.slug}-notes`} className="mt-12">
            <h2 id={`${area.slug}-notes`} className="font-display text-xl font-bold tracking-tight">
              Notes &amp; lab entries
            </h2>
            <ul className="mt-5 divide-y divide-rule border-y border-rule">
              {notes.map((n) => (
                <li key={n.id}>
                  <Link
                    href={`/modding#${n.id}`}
                    className="group flex items-baseline justify-between gap-4 py-3.5 no-underline"
                  >
                    <span className="text-md text-ink transition-colors group-hover:text-accent">{n.title}</span>
                    <span className="mono-label shrink-0 text-faint">field note ↘</span>
                  </Link>
                </li>
              ))}
              {labs.map((l) => (
                <li key={l.id}>
                  <Link
                    href={`/lab#${l.id}`}
                    className="group flex items-baseline justify-between gap-4 py-3.5 no-underline"
                  >
                    <span className="text-md text-ink transition-colors group-hover:text-accent">{l.title}</span>
                    <span className="mono-label shrink-0 text-faint">lab entry ↘</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav aria-label="Other areas" className="mt-12 flex flex-wrap gap-3">
          {AREAS.filter((a) => a.slug !== area.slug).map((a) => (
            <Link key={a.slug} href={`/work/${a.slug}`} className="chip no-underline transition-colors hover:border-accent hover:text-accent">
              {a.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
