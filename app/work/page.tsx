import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { AREAS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Areas of work",
  description:
    "Six lanes of work by Bogdan Janjić (ToShamara): application development, Android, game development, systems & Linux, AI & local tooling, modding & reverse engineering.",
  alternates: { canonical: "/work/" },
};

export default function WorkIndexPage() {
  return (
    <div>
      <PageHeader
        index="02"
        title="The map, grouped by what the work actually is."
        lede="No percentages, no radar charts. Each lane is a real area of work with the tools it actually uses and the builds that prove it."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/work", label: "Work" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <p className="border-y border-rule py-4 text-sm text-muted">
          <span className="mono-label mr-3 text-faint">Languages</span>
          C# · Kotlin · PHP · Node.js / JavaScript · Python · GDScript · C
        </p>

        <ul className="divide-y divide-rule">
          {AREAS.map((area) => (
            <li key={area.slug} className="group grid gap-3 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-8">
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                  <Link href={`/work/${area.slug}`} className="no-underline">
                    {area.name}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-faint">{area.note}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2">
                {area.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
