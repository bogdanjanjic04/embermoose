import type { Metadata, Viewport } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import MobileCta from "@/components/MobileCta";
import Analytics from "@/components/Analytics";
import "./globals.css";

// TODO(bogdan): replace with the production domain before launch
const SITE_URL = "https://embermoose.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ember Moose · Bogdan Janjić",
    template: "%s · Ember Moose",
  },
  description:
    "Software, games, tools and experiments by Bogdan Janjić: desktop apps, Android development, Godot games, Stardew Valley mods, Linux systems work and local LLM tooling.",
  applicationName: "Ember Moose",
  authors: [{ name: "Bogdan Janjić" }],
  creator: "Bogdan Janjić",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Ember Moose",
    url: SITE_URL,
    title: "Ember Moose · Bogdan Janjić",
    description:
      "One developer, an unreasonable range of builds: Godot games, Android apps, WPF tools, SMAPI mods, Linux experiments and local LLM pipelines.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ToShamara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Google Search Console: set NEXT_PUBLIC_GSC_VERIFICATION in .env.local to your verification token
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#201915",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ember Moose",
  alternateName: "Ember Moose — Bogdan Janjić",
  url: SITE_URL,
  description:
    "Software, games, tools and experiments by Bogdan Janjić: desktop apps, Android development, Godot games, Stardew Valley mods, Linux systems work and local LLM tooling.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bogdan Janjić",
  alternateName: "ToShamara",
  description:
    "Final-year Applied IT student and developer working across software, games, Android, Linux, modding and local LLM tooling.",
  homeLocation: { "@type": "Place", name: "Užice, Serbia" },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Akademija strukovnih studija Zapadna Srbija",
  },
  sameAs: [
    "https://github.com/bogdanjanjic04",
    "https://toshamara.itch.io",
    "https://x.com/ToShamara",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link rel="preconnect" href="https://fonts.bunny.net" crossOrigin="" />
        <link
          href="https://fonts.bunny.net/css?family=bricolage-grotesque:500,600,700,800|ibm-plex-sans:400,500,600|ibm-plex-mono:400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:bg-raised focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-rule-strong focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <TooltipProvider delay={250}>
          <SiteNav />
          <main id="main">{children}</main>
          <SiteFooter />
          <MobileCta />
        </TooltipProvider>
      </body>
    </html>
  );
}
