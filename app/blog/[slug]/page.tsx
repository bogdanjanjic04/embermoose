import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { POSTS } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: { title: `${post.title} · Ember Moose`, description: post.dek },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const index = POSTS.indexOf(post);
  const prev = POSTS[index - 1];
  const next = POSTS[index + 1];

  return (
    <article>
      <PageHeader
        index="blog"
        title={post.title}
        lede={post.dek}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${post.slug}`, label: post.title },
        ]}
      />

      <div className="mx-auto max-w-3xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          <span className="mono-label ml-auto text-faint">undated devlog</span>
        </div>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-bold tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((para) => (
                <p key={para} className="mt-4 leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {post.related && (
          <p className="mt-10 text-sm text-muted">
            Related:{" "}
            <Link href={post.related.href} className="text-ink underline-offset-4 hover:text-accent hover:underline">
              {post.related.label}
            </Link>
          </p>
        )}

        <nav
          aria-label="More posts"
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6"
        >
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex items-center gap-2 no-underline">
              <ArrowLeft size={14} aria-hidden className="text-faint group-hover:text-accent" />
              <span className="text-sm text-muted transition-colors group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="group flex items-center gap-2 text-right no-underline">
              <span className="text-sm text-muted transition-colors group-hover:text-accent">
                {next.title}
              </span>
              <ArrowRight size={14} aria-hidden className="text-faint group-hover:text-accent" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
