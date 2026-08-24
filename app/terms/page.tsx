import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The plain-language terms for using Ember Moose.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        index="legal"
        title="Terms of use"
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/terms", label: "Terms" },
        ]}
      />
      <div className="mx-auto max-w-3xl space-y-5 px-5 pb-20 text-md leading-relaxed text-muted md:px-8 md:pb-28">
        <p>
          This site is a personal portfolio documenting work by{" "}
          {SITE.owner} ({SITE.handle}). Content is provided as-is, for
          information only, with no warranty of any kind.
        </p>
        <p>
          Project descriptions are written to be factually accurate. Games,
          apps and mods are owned by their author unless a specific project
          states an open-source license; third-party trademarks such as
          Stardew Valley, Godot and Android belong to their respective owners
          and are referenced descriptively.
        </p>
        <p>
          Downloads happen on the linked external platforms ({SITE.itch.label},
          GitHub) under those platforms’ terms. Nothing is sold on
          this site and no payment information is ever handled here.
        </p>
        <p>
          Don’t scrape the site aggressively, don’t misrepresent the work as
          your own, and don’t use the contact channels for spam.
        </p>
        <p className="text-faint">
          Plain language, last updated when this page was built. Questions?
          The <Link href="/contact" className="link-underline">contact page</Link> has the channels.
        </p>
      </div>
    </div>
  );
}
