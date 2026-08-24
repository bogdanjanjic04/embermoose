import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import ProjectArt from "@/components/ProjectArt";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The schematic wall of Ember Moose: hand-built abstract representations of every project by Bogdan Janjić (ToShamara), honestly labeled as representations rather than screenshots.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        index="b+a"
        title="Builds &amp; archive: the schematic wall."
        lede="Every project in one place, drawn as schematics instead of screenshots. These are honest representations of how each build works, not captures of running software; the real interfaces live in the repos and on the machines they run on."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/gallery", label: "Gallery" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <li key={project.slug} className="group">
              <Link
                href={`/projects/${project.slug}`}
                className="block border border-rule bg-raised/40 no-underline transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:-translate-y-1.5"
              >
                <span className="block border-b border-rule px-4 py-2.5">
                  <span className="mono-label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  <span className="font-display text-sm font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {project.name}
                  </span>
                </span>
                <span className="block">
                  {project.shot ? (
                    <Image
                      src={project.shot.src}
                      alt={project.shot.alt}
                      width={800}
                      height={450}
                      unoptimized
                      className="h-auto w-full object-cover"
                    />
                  ) : (
                    <ProjectArt variant={project.art} />
                  )}
                </span>
              </Link>
              <p className="px-1 pt-2.5 font-mono text-xs leading-relaxed tracking-wide text-faint">
                {project.caption}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[62ch] text-sm text-muted">
          Want to see actual running software?{" "}
          <Link href="/projects/ante-zero" className="link-underline">
            ANTE ZERO
          </Link>{" "}
          is playable in the browser, and the open-source projects link their
          repositories directly from each case study.
        </p>
      </div>
    </div>
  );
}
