import Link from "next/link";
import type { Project } from "@/lib/data";
import { CATEGORY_LABELS } from "@/lib/data";
import { ArrowRight, Play, Code } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import ProjectArt from "./ProjectArt";
import TiltCard from "./TiltCard";
import InfoTip from "./InfoTip";

type Props = {
  project: Project;
  index: number;
  flip?: boolean;
  compact?: boolean;
};

export default function ProjectPanel({ project, index, flip = false, compact = false }: Props) {
  return (
    <article
      className={`group grid items-center gap-8 md:py-16 lg:grid-cols-2 lg:gap-12 ${
        compact ? "py-10" : "py-12"
      }`}
    >
      <div className={flip ? "lg:order-2" : ""}>
        <p className="mono-label flex flex-wrap items-center gap-x-3 text-faint">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <Link
            href={`/projects?filter=${project.categories[0]}`}
            className="no-underline transition-colors hover:text-accent"
          >
            {project.categories.map((c) => CATEGORY_LABELS[c]).join(" · ")}
          </Link>
          <span aria-hidden="true">·</span>
          <span>{project.meta}</span>
        </p>

        <h2
          className={`mt-4 font-display font-bold tracking-tight transition-colors group-hover:text-accent [overflow-wrap:anywhere] ${
            compact ? "text-2xl" : "text-3xl md:text-[2.1rem]"
          }`}
        >
          <Link href={`/projects/${project.slug}`} className="no-underline">
            {project.name}
          </Link>
          {project.formerName && (
            <span className="mono-label ml-3 align-middle font-normal text-faint">
              ex-{project.formerName}
            </span>
          )}
        </h2>

        {project.tagline && (
          <p className="mono-label mt-2 text-muted">“{project.tagline}”</p>
        )}

        <p className="mt-4 max-w-[52ch] text-md text-muted">{project.summary}</p>

        {!compact && (
          <ul className="mt-6 max-w-[58ch] space-y-2.5 text-sm leading-relaxed text-muted/90">
            {project.points.slice(0, 4).map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-accent-deep transition-colors group-hover:bg-accent"
                />
                {point}
              </li>
            ))}
            {project.points.length > 4 && (
              <li className="font-mono text-xs text-faint">
                +{project.points.length - 4} more on the case study page
              </li>
            )}
          </ul>
        )}

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href={`/projects/${project.slug}`} className="cta cta-primary text-xs">
            Case study <ArrowRight size={13} aria-hidden />
          </Link>
          {project.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="cta text-xs"
            >
              {l.kind === "play" ? (
                <Play size={13} aria-hidden />
              ) : (
                <Code size={13} aria-hidden />
              )}
              {l.label}
            </a>
          ))}
        </div>

        {project.status && (
          <InfoTip label={`${project.name}: ${project.status}. The features listed here are implemented in the current build.`}>
            <p className="mono-label mt-5 flex w-fit items-center gap-2.5 border border-rule px-2 py-1 text-muted">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {project.status}
            </p>
          </InfoTip>
        )}
      </div>

      <figure className={flip ? "lg:order-1" : ""}>
        <TiltCard>
          <Link
            href={`/projects/${project.slug}`}
            className="block border border-rule bg-raised/40 no-underline"
          >
            {project.shot ? (
              <Image
                src={project.shot.src}
                alt={project.shot.alt}
                width={1600}
                height={900}
                unoptimized
                className="h-auto w-full object-cover"
              />
            ) : (
              <div className="relative">
                <ProjectArt variant={project.art} />
                <span className="absolute bottom-3 right-3 border border-rule-strong bg-paper/90 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                  capture pending
                </span>
              </div>
            )}
          </Link>
        </TiltCard>
        <figcaption className="px-1 pt-3 font-mono text-xs tracking-wide text-faint">
          {project.caption}
        </figcaption>
      </figure>
    </article>
  );
}
