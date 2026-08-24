import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Devlog write-ups by Bogdan Janjić (ToShamara): SMAPI reflection, Firestore cache debugging, The Cut card design, SA-MP RNG research and Serbian localization with Ollama.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        index="blog"
        title="Write-ups worth keeping."
        lede="Devlog-style posts about shipped work: what broke, what was built, and what the fix taught. Intentionally undated; the archive speaks for itself."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <ul className="divide-y divide-rule border-y border-rule">
          {POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 py-6 no-underline md:grid-cols-[minmax(0,1fr)_minmax(0,14rem)] md:items-center"
              >
                <span>
                  <span className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="mt-1.5 block max-w-[64ch] text-sm text-muted">
                    {post.dek}
                  </span>
                </span>
                <span className="flex flex-wrap gap-1.5 md:justify-end">
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
