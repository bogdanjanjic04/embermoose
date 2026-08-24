import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions about Ember Moose and Bogdan Janjić: availability for hire, playable games, Stardew Valley mods and the Arch Linux workflow.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        index="faq"
        title="Five questions, answered straight."
        lede="The things people actually ask before reaching out. If yours isn’t here, the contact page has the channels."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/faq", label: "FAQ" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-5 pb-20 md:px-8 md:pb-28">
        <Accordion className="divide-y divide-rule border-y border-rule">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} className="border-rule" value={`faq-${i + 1}`} id={`faq-${i + 1}`}>
              <AccordionTrigger className="gap-4 py-5 font-display text-lg font-semibold tracking-tight hover:no-underline data-hover:text-accent">
                <span className="flex items-baseline gap-3">
                  <span className="mono-label pt-1 text-faint">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-0 leading-relaxed text-muted md:pl-12">
                <div className="space-y-3 text-md">
                  {faq.answer.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-sm text-faint">
          Something else?{" "}
          <Link href="/contact" className="link-underline text-muted">
            The contact page
          </Link>{" "}
          lists every real channel.
        </p>
      </div>
    </div>
  );
}
