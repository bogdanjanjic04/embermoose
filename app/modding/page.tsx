import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { MOD_NOTES, SITE } from "@/lib/data";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Modding & reverse engineering",
  description:
    "Stardew Valley SMAPI mods, reverse engineering and save repair by Bogdan Janjić (ToShamara): RenameAnimal, Chat Commands for SDV 1.6, XNB texture work and a Serbian localization pipeline.",
  alternates: { canonical: "/modding" },
};

export default function ModdingPage() {
  return (
    <div>
      <PageHeader
        index="04"
        title="Modding, reverse engineering, and breaking things just enough to understand them."
        lede="Field notes from Stardew Valley, where an active SMAPI habit turns into API archaeology more often than not. Mod sources are published on GitHub and linked per note."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/modding", label: "Modding" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <ol className="divide-y divide-rule border-y border-rule">
          {MOD_NOTES.map((note, i) => (
            <li
              key={note.id}
              id={note.id}
              className="group grid scroll-mt-24 gap-3 py-7 md:grid-cols-[minmax(0,5rem)_minmax(0,1fr)_minmax(0,13rem)] md:gap-8"
            >
              <p className="mono-label pt-1 text-faint transition-colors group-hover:text-accent">
                [{String(i + 1).padStart(2, "0")}]
              </p>
              <div>
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  {note.title}
                </h2>
                <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">
                  {note.body}
                </p>
                {note.link && (
                  <a
                    href={note.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="cta mt-4 text-xs"
                  >
                    {note.link.label} <ArrowUpRight size={13} aria-hidden />
                  </a>
                )}
              </div>
              <ul className="flex flex-wrap content-start gap-2 md:justify-end">
                {note.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[60ch] text-sm text-faint">
          The{" "}
          <Link href="/blog/chat-commands-smapi-commandmanager-reflection" className="link-underline">
            Chat Commands port
          </Link>{" "}
          has its own write-up on the blog.
        </p>
      </div>
    </div>
  );
}
