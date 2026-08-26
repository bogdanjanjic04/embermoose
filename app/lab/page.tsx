import PageHeader from "@/components/PageHeader";
import { LAB_ENTRIES } from "@/lib/data";

export const metadata = {
  title: "Lab",
  description:
    "Experiments and technical investigations by Bogdan Janjić (ToShamara): local LLM tooling with Ollama, SA-MP RNG research with seed recovery tooling, Linux systems tools and media/graphics experiments.",
  alternates: { canonical: "/lab/" },
};

export default function LabPage() {
  return (
    <div>
      <PageHeader
        index="05"
        title="Experiments, investigations, and other open tabs."
        lede="Smaller work that doesn’t get a case study: local model wrangling, protocol research, small systems tools and image pipelines. Documented as they were done, messily then precisely."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/lab", label: "Lab" },
        ]}
      />

      <div className="mx-auto max-w-6xl space-y-14 px-5 pb-20 md:px-8 md:pb-28">
        {LAB_ENTRIES.map((entry, i) => (
          <section
            key={entry.id}
            id={entry.id}
            aria-labelledby={`lab-${entry.id}`}
            className="scroll-mt-24 border-t border-rule pt-8"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-12">
              <div>
                <p className="mono-label text-faint">
                  LAB-{String(i + 1).padStart(2, "0")}
                </p>
                <h2
                  id={`lab-${entry.id}`}
                  className="mt-3 font-display text-xl font-semibold tracking-tight"
                >
                  {entry.title}
                </h2>
                <p className="mt-3 text-sm text-muted">{entry.intro}</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-muted/90">
                {entry.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="pt-px font-mono text-xs text-accent">
                      +
                    </span>
                    <span>
                      {item.text}{" "}
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline ml-1 font-mono text-xs tracking-wide text-muted"
                        >
                          {item.link.label} ↗
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
