import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import ProjectArt from "@/components/ProjectArt";
import TiltCard from "@/components/TiltCard";
import InfoTip from "@/components/InfoTip";
import { CATEGORY_LABELS, MOD_NOTES, PROJECTS } from "@/lib/data";
import { ArrowRight, ArrowUpRight, Code, Play } from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.summary} ${project.meta}.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} · Ember Moose`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedNotes = MOD_NOTES.filter((n) =>
    project.relatedNoteIds?.includes(n.id),
  );
  const others = PROJECTS.filter(
    (p) =>
      p.slug !== project.slug &&
      p.categories.some((c) => project.categories.includes(c)),
  ).slice(0, 2);

  return (
    <article>
      <header className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-8 md:px-8 md:pt-10">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: `/projects/${project.slug}`, label: project.name },
            ]}
          />
          <p className="mono-label mt-6 flex flex-wrap items-center gap-x-3 text-faint">
            <span className="text-accent">
              {String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}
            </span>
            <span>
              {project.categories.map((c) => CATEGORY_LABELS[c]).join(" · ")}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.meta}</span>
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.06] tracking-tight [overflow-wrap:anywhere] md:text-[2.9rem]">
            {project.name}
          </h1>
          {project.tagline && (
            <p className="mono-label mt-3 text-muted">“{project.tagline}”</p>
          )}
          <p className="mt-5 max-w-[60ch] text-lg text-muted">{project.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`cta font-medium ${l.kind === "play" ? "cta-primary" : ""}`}
              >
                {l.kind === "play" ? (
                  <Play size={14} weight="fill" aria-hidden />
                ) : (
                  <Code size={14} aria-hidden />
                )}
                {l.label}
              </a>
            ))}
            {!project.links?.length && (
              <span className="text-sm text-faint">
                No public build or repository linked for this project yet.
              </span>
            )}
          </div>

          {project.status && (
            <InfoTip
              label={`${project.status}. The features listed on this page are implemented in the current build.`}
            >
              <p className="mono-label mt-6 flex w-fit items-center gap-2.5 border border-rule px-2 py-1 text-muted">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                {project.status}
              </p>
            </InfoTip>
          )}
        </div>
      </header>

      <figure className="border-y border-rule bg-raised/30">
        <div className="mx-auto max-w-4xl px-5 py-10 md:px-8 md:py-14">
          <TiltCard max={3}>
          {project.shot ? (
            <Image
              src={project.shot.src}
              alt={project.shot.alt}
              width={1600}
              height={900}
              unoptimized
              priority
              className="h-auto w-full border border-rule"
            />
          ) : (
            <div className="relative">
              <ProjectArt variant={project.art} />
              <span className="absolute bottom-3 right-3 border border-rule-strong bg-paper/90 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                capture pending
              </span>
            </div>
          )}
          <figcaption className="px-1 pt-4 font-mono text-xs tracking-wide text-faint">
            {project.caption}
          </figcaption>
          </TiltCard>
        </div>
      </figure>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]">
        <div>
          {project.sections?.map((section) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-display text-xl font-bold tracking-tight">
                {section.heading}
              </h2>
              {section.body.map((para) => (
                <p key={para} className="mt-4 max-w-[64ch] leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </section>
          ))}

          <section aria-labelledby="points-heading" className="mt-12 border-t border-rule pt-8">
            <h2 id="points-heading" className="font-display text-xl font-bold tracking-tight">
              What makes it technically interesting
            </h2>
            <ul className="mt-6 space-y-3 text-md leading-relaxed text-muted">
              {project.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-accent-deep"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {(relatedNotes.length > 0 || others.length > 0) && (
            <section aria-labelledby="related-heading" className="mt-12 border-t border-rule pt-8">
              <h2 id="related-heading" className="font-display text-xl font-bold tracking-tight">
                Related in the archive
              </h2>
              <ul className="mt-6 divide-y divide-rule border-y border-rule">
                {relatedNotes.map((n) => (
                  <li key={n.id}>
                    <Link
                      href={`/modding#${n.id}`}
                      className="group flex items-baseline justify-between gap-4 py-3 no-underline"
                    >
                      <span className="text-md text-ink transition-colors group-hover:text-accent">
                        {n.title}
                      </span>
                      <span className="mono-label shrink-0 text-faint">field note ↘</span>
                    </Link>
                  </li>
                ))}
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/projects/${o.slug}`}
                      className="group flex items-baseline justify-between gap-4 py-3 no-underline"
                    >
                      <span className="text-md text-ink transition-colors group-hover:text-accent">
                        {o.name}
                      </span>
                      <span className="mono-label shrink-0 text-faint">case study ↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside>
          <div className="sticky top-24 border border-rule bg-raised/40 p-5">
            <p className="mono-label text-faint">Built with</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <InfoTip
                    label={
                      project.meta.toLowerCase().includes(tech.toLowerCase())
                        ? `${tech}: part of this project’s core stack (${project.meta}).`
                        : `${tech}: used in ${project.name}.`
                    }
                  >
                    <span className="chip">{tech}</span>
                  </InfoTip>
                </li>
              ))}
            </ul>
            <dl className="mt-5 divide-y divide-rule border-t border-rule text-sm">
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="mono-label pt-0.5 text-faint">Category</dt>
                <dd className="text-muted">
                  {project.categories.map((c) => CATEGORY_LABELS[c]).join(" · ")}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="mono-label pt-0.5 text-faint">Stack line</dt>
                <dd className="text-right font-mono text-xs text-muted">{project.meta}</dd>
              </div>
              {project.status && (
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="mono-label pt-0.5 text-faint">Status</dt>
                  <dd className="text-right text-muted">{project.status}</dd>
                </div>
              )}
            </dl>
            <Link href="/projects" className="link-underline mt-4 inline-block font-mono text-xs tracking-wide text-muted">
              Back to all projects ↗
            </Link>
          </div>
        </aside>
      </div>

      <nav aria-label="Continue reading" className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-8">
          <p className="mono-label text-faint">Next case study</p>
          {(() => {
            const next =
              PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];
            return (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex items-center gap-3 font-display text-xl font-semibold tracking-tight no-underline transition-colors hover:text-accent"
              >
                {next.name} <ArrowUpRight size={16} aria-hidden />
              </Link>
            );
          })()}
          <ArrowRight size={16} aria-hidden className="hidden text-faint md:block" />
        </div>
      </nav>
    </article>
  );
}
