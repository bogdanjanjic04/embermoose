import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What Ember Moose collects (almost nothing) and what it doesn't.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        index="legal"
        title="Privacy policy"
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/privacy", label: "Privacy" },
        ]}
      />
      <div className="mx-auto max-w-3xl space-y-5 px-5 pb-20 text-md leading-relaxed text-muted md:px-8 md:pb-28">
        <p>
          Ember Moose is a personal portfolio site. It collects no personal
          data by itself: there are no accounts, no comments, no newsletter
          and no contact form, so nothing you type here is stored.
        </p>
        <p>
          The site sets no cookies by default. If Google Analytics is ever
          enabled via the site’s configuration, it would load only after that
          setting exists and would be configured with IP anonymization; until
          then no analytics requests leave your browser.
        </p>
        <p>
          Fonts are served through{" "}
          <a
            href="https://fonts.bunny.net"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            Bunny Fonts
          </a>
          , an open-source, GDPR-friendly font CDN that does not log personal
          data.
        </p>
        <p>
          Outbound links point to third-party platforms ({SITE.github.label},{" "}
          {SITE.itch.label}, {SITE.x.label}). Their own privacy
          policies apply once you leave this site.
        </p>
        <p>
          Questions about any of this? Use the channels on the{" "}
          <Link href="/contact" className="link-underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
