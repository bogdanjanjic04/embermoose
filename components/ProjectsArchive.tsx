"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CATEGORY_LABELS,
  FILTERS,
  LAB_ENTRIES,
  MOD_NOTES,
  NOTE_CATEGORIES,
  PROJECTS,
  type Category,
} from "@/lib/data";
import ProjectPanel from "./ProjectPanel";

type NoteRef = {
  key: string;
  title: string;
  href: string;
  source: string;
};

const NOTES: NoteRef[] = [
  ...MOD_NOTES.map((n) => ({
    key: `note:${n.id}`,
    title: n.title,
    href: `/modding#${n.id}`,
    source: "field note",
  })),
  ...LAB_ENTRIES.map((l) => ({
    key: `lab:${l.id}`,
    title: l.title,
    href: `/lab#${l.id}`,
    source: "lab entry",
  })),
];

export default function ProjectsArchive() {
  const [filter, setFilter] = useState<Category | "all">("all");

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const q = new URLSearchParams(window.location.search).get("filter");
      if (q && FILTERS.some((f) => f.id === q)) setFilter(q as Category);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const counts = useMemo(() => {
    const c = new Map<string, number>();
    for (const f of FILTERS) {
      const cat = f.id;
      if (cat === "all") continue;
      const n =
        PROJECTS.filter((p) => p.categories.includes(cat)).length +
        NOTES.filter((note) => NOTE_CATEGORIES[note.key]?.includes(cat)).length;
      c.set(cat, n);
    }
    return c;
  }, []);

  const visibleProjects = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  const relatedNotes = useMemo(() => {
    if (filter === "all") return [];
    return NOTES.filter((n) => NOTE_CATEGORIES[n.key]?.includes(filter));
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div
        role="group"
        aria-label="Filter the archive"
        className="flex flex-wrap gap-x-6 gap-y-2 border-y border-rule py-3"
      >
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={`mono-label cursor-pointer bg-transparent pb-1 no-underline transition-colors ${
                active
                  ? "border-b border-accent text-accent"
                  : "border-b border-transparent text-muted hover:text-ink"
              }`}
            >
              {f.label}
              {f.id !== "all" && (
                <span className="ml-1.5 text-[0.65rem] opacity-70">
                  {counts.get(f.id)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div key={filter} className="animate-rise divide-y divide-rule">
        {visibleProjects.map((project, i) => (
          <ProjectPanel
            key={project.slug}
            project={project}
            index={i}
            flip={i % 2 === 1}
          />
        ))}
      </div>

      {relatedNotes.length > 0 && (
        <div className="mt-12 animate-rise">
          <p className="mono-label text-faint">
            Also filed under{" "}
            <span className="text-accent">{CATEGORY_LABELS[filter as Category]}</span>
          </p>
          <ul className="mt-3 divide-y divide-rule border-t border-rule">
            {relatedNotes.map((n) => (
              <li key={n.key}>
                <a
                  href={n.href}
                  className="group flex items-baseline justify-between gap-4 py-3 no-underline"
                >
                  <span className="text-md text-ink transition-colors group-hover:text-accent">
                    {n.title}
                  </span>
                  <span className="mono-label shrink-0 text-faint">{n.source} ↘</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {visibleProjects.length === 0 && (
        <p className="py-16 text-center text-muted">Nothing filed here yet.</p>
      )}
    </div>
  );
}
