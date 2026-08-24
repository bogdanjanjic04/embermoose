import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import MooseMark from "./MooseMark";
import HeroReveal from "./HeroReveal";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <HeroReveal delay={0}>
              <p className="mono-label text-muted">
                Bogdan Janjić
              </p>
            </HeroReveal>

            <HeroReveal delay={0.08}>
              <h1
                id="hero-heading"
                className="mt-5 font-display text-hero leading-[1.04] font-extrabold tracking-tight [overflow-wrap:anywhere]"
              >
                Software, games, tools &amp; other experiments.
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.16}>
              <p className="mt-6 max-w-[56ch] text-lg text-muted">
                …and things that probably should have been separate projects.
                I’m Bogdan. I build desktop apps, Android software, Godot games
                and Stardew Valley mods. Ember Moose is where all of it lives.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="cta cta-primary font-medium">
                  View projects <ArrowDown size={14} aria-hidden />
                </Link>
                <a href={SITE.github.href} target="_blank" rel="noreferrer" className="cta">
                  GitHub <ArrowUpRight size={14} aria-hidden />
                </a>
              </div>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.14} className="justify-self-center lg:col-span-4 lg:justify-self-end">
            <div
              className="relative border border-rule bg-raised/40 p-10 md:p-12"
              role="presentation"
            >
              <span
                aria-hidden="true"
                className="absolute left-3 top-3 h-1.5 w-1.5 bg-accent"
              />
              <MooseMark size={148} glitch className="mx-auto block" />
              <p className="mono-label mt-8 text-faint" aria-hidden="true">
                EM-01 · personal build archive
              </p>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
