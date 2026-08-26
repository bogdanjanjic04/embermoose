import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectsArchive from "@/components/ProjectsArchive";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The project archive of Bogdan Janjić: ANTE ZERO and Pillars of Control in Godot, CampaignForge for WPF, Android apps like AkademskiPratilac, Graditelj Navika, KinetiDebt and ScreenWatcher, plus headless-samp.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        index="03"
        title="Featured builds across every lane."
        lede="Every entry links to a case study with the full feature list. Where a real capture exists you see the actual software; the rest carry honest schematics until a capture lands."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
        ]}
      />
      <Suspense fallback={null}>
        <ProjectsArchive />
      </Suspense>
    </div>
  );
}
