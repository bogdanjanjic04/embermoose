import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import MooseMark from "./MooseMark";
import HeroReveal from "./HeroReveal";
import { asset } from "@/lib/assets";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
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
                  View projects <ArrowRight size={14} aria-hidden />
                </Link>
                <a href={SITE.github.href} target="_blank" rel="noreferrer" className="cta">
                  GitHub <ArrowUpRight size={14} aria-hidden />
                </a>
              </div>
            </HeroReveal>
          </div>

          <div className="pointer-events-none relative hidden lg:col-span-4 lg:block" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/brand/embermoose_large_nobackground.svg")}
              alt=""
              className="animate-rise absolute inset-y-0 right-0 h-full w-auto max-w-none object-contain object-right-bottom" style={{ animationDelay: "140ms" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
