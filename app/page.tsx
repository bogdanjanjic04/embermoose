import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Hero from "@/components/Hero";
import ProjectPanel from "@/components/ProjectPanel";
import { AREAS, MOD_NOTES, POSTS, PROJECTS, SITE } from "@/lib/data";

export default function HomePage() {
  const featured = ["ante-zero", "pillars-of-control", "campaignforge"]
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      <Hero />

      <section aria-labelledby="featured-heading" className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mono-label text-faint">
                <span className="text-accent">01</span> / featured
              </p>
              <h2
                id="featured-heading"
                className="mt-3 max-w-[22ch] font-display text-3xl font-bold tracking-tight [overflow-wrap:anywhere]"
              >
                Three picks from the archive.
              </h2>
            </div>
            <Link href="/projects" className="cta text-xs">
              All projects <ArrowRight size={13} aria-hidden />
            </Link>
          </div>

          <div className="mt-6 divide-y divide-rule">
            {featured.map((project, i) => (
              <ProjectPanel key={project.slug} project={project} index={i} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="areas-heading" className="border-t border-rule bg-raised/30">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="mono-label text-faint">
            <span className="text-accent">02</span> / areas of work
          </p>
          <h2
            id="areas-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight"
          >
            Six lanes, one developer.
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => {
              const count = PROJECTS.filter((p) =>
                area.categories.some((c) => p.categories.includes(c)),
              ).length;
              return (
                <li key={area.slug}>
                  <Link
                    href={`/work/${area.slug}`}
                    className="group flex h-full flex-col justify-between border border-rule bg-paper p-5 no-underline transition-colors hover:border-accent-deep"
                  >
                    <span>
                      <span className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                        {area.name}
                      </span>
                      <span className="mt-1.5 block text-sm text-muted">{area.intro}</span>
                    </span>
                    <span className="mono-label mt-4 flex items-center justify-between text-faint">
                      {count} {count === 1 ? "build" : "builds"}
                      <ArrowRight size={12} aria-hidden />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="notes-heading" className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-2">
          <div>
            <p className="mono-label text-faint">
              <span className="text-accent">03</span> / from the field notes
            </p>
            <h2 id="notes-heading" className="mt-3 font-display text-2xl font-bold tracking-tight">
              Fresh out of the modding notebook.
            </h2>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {MOD_NOTES.slice(0, 3).map((n) => (
                <li key={n.id}>
                  <Link
                    href={`/modding#${n.id}`}
                    className="group flex items-baseline justify-between gap-4 py-3 no-underline"
                  >
                    <span className="text-md text-ink transition-colors group-hover:text-accent">
                      {n.title}
                    </span>
                    <span className="mono-label shrink-0 text-faint">note ↘</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/modding" className="link-underline mt-4 inline-block text-sm text-muted">
              All field notes
            </Link>
          </div>
          <div>
            <p className="mono-label text-faint">
              <span className="text-accent">04</span> / from the blog
            </p>
            <h2 id="blog-teaser-heading" className="mt-3 font-display text-2xl font-bold tracking-tight">
              Write-ups worth keeping.
            </h2>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {POSTS.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-3 no-underline"
                  >
                    <span className="text-md text-ink transition-colors group-hover:text-accent">
                      {p.title}
                    </span>
                    <span className="mono-label shrink-0 text-faint">post ↗</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/blog" className="link-underline mt-4 inline-block text-sm text-muted">
              All posts
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="home-contact-heading" className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="mono-label text-faint">
            <span className="text-accent">05</span> / contact
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-8">
            <div>
              <h2
                id="home-contact-heading"
                className="max-w-[24ch] font-display text-3xl font-extrabold tracking-tight [overflow-wrap:anywhere]"
              >
                The archive is the résumé.{" "}
                <span className="text-accent">What’s next is negotiable.</span>
              </h2>
              <p className="mt-4 max-w-[52ch] text-muted">
                Looking for software development work: internships included,
                and the more advanced the better.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="cta cta-primary text-xs">
                Get in touch <ArrowRight size={13} aria-hidden />
              </Link>
              <a href={SITE.github.href} target="_blank" rel="noreferrer" className="cta text-xs">
                GitHub · {SITE.github.handle} <ArrowUpRight size={13} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
