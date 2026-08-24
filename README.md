# Ember Moose

The personal build archive of **Bogdan Janjić** (online as **ToShamara**) — software, games, mods and experiments from Užice, Serbia.

Dark editorial developer portfolio. One developer, a ridiculous number of different things built.

## Stack

- Next.js (App Router) · React · TypeScript
- Tailwind CSS v4 (CSS-first `@theme` tokens)
- shadcn/ui (Base UI) for the tooltip + accordion primitives
- Phosphor Icons (`@phosphor-icons/react`), single icon family across the site
- motion.dev (`motion` v13) for the hero entrance springs, with `useReducedMotion` support
- Fonts via [Bunny Fonts](https://fonts.bunny.net) (Bricolage Grotesque · IBM Plex Sans · IBM Plex Mono)

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home: hero with CTAs above the fold, featured builds, area grid, notes/blog teasers |
| `/about` | Profile, technical metadata table, brand story |
| `/projects` | Filterable archive; filters actually change what is displayed and cross-link related notes |
| `/projects/[slug]` | Case study per project (8 pages), with status tooltips, stack tooltips, verified links |
| `/work` + `/work/[area]` | Page per area of work (6 lanes), each listing its builds and notes |
| `/modding` | Stardew Valley / SMAPI field notebook; every note is deep-linkable (`/modding#renameanimal`) and pulses on arrival via CSS `:target` |
| `/lab` | Experiments: local LLM workbench, SA-MP RNG research, small systems tools, media experiments (deep-linkable) |
| `/blog` + `/blog/[slug]` | Five undated devlog write-ups grounded strictly in shipped work |
| `/gallery` | The schematic wall: hand-built SVG representations of every build, honestly labeled |
| `/faq` | Five FAQs, native `<details>`, FAQPage JSON-LD |
| `/contact` | Real channels only; per-channel guidance and what to include |
| `/privacy`, `/terms` | Plain-language legal pages |
| `not-found.tsx` | Custom 404 ("Count down to nothing.") |

Infrastructure: `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, canonical URLs per page, unique titles/descriptions per route, Open Graph share image (`app/opengraph-image.tsx`), Person + BreadcrumbList JSON-LD.

## Design system

- Tokens live in `app/globals.css`: OKLCH palette anchored on warm red hue 25–27 over near-black charcoal paper; single accent used sparingly; type scale on a major-third rhythm.
- Display face Bricolage Grotesque, body IBM Plex Sans, mono register IBM Plex Mono for metadata.
- Motion is deliberately quiet: one orchestrated hero entrance, hover microsignals, the pickle-mark glitch, and the `:target` pulse for deep links. All gated by `prefers-reduced-motion`. No scroll-triggered animations.
- Project visuals are hand-built SVG schematics explicitly captioned as representations. No fabricated screenshots, metrics or testimonials anywhere.

## Configuration before launch

Set these in `.env.local`:

```
# Google Search Console verification token (surfaced as a meta tag when present)
NEXT_PUBLIC_GSC_VERIFICATION=

# Google Analytics ID. Nothing analytics-related loads without it,
# which is why the site needs no cookie banner by default (it sets no cookies).
NEXT_PUBLIC_GA_ID=
```

Replace the placeholder domain `https://ember-moose.example.com` in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`.

The Nexus Mods profile link is a clearly marked placeholder (`†`) because the exact profile URL isn't publicly discoverable; swap it in `lib/data.ts` (`SITE.nexus.href`) once known.

## Notes on tool choices

- **shadcn/ui** provides the accessible tooltip (Base UI) and the FAQ accordion (official `@shadcn/accordion`, re-pointed from lucide to Phosphor carets so the site keeps one icon family). Tooltips are used only where they explain something: what a status label means, why a technology is listed, why the Nexus link is pending.
- **motion.dev** drives the hero entrance (`components/HeroReveal.tsx`): spring choreography with stagger, `useReducedMotion()` switches to opacity-only. Chosen over anime.js for first-class React integration and built-in reduced-motion handling. All other motion stays CSS (hover microsignals, `:target` pulse, mark glitch) on purpose: no scroll-triggered animation exists on this site.
- **LottieFiles** was researched via its GraphQL API and consciously not shipped: nothing on the site needs runtime character animation, and a Lottie JSON would add weight for decoration only.
- **CSS handles the rest**; no other JS animation dependency is warranted at this motion vocabulary's size.
- `.cursor/rules/ember-moose.mdc` encodes the design system, content-accuracy rules and QA gates for future AI-assisted edits.

## Operational notes

- If client-side navigation ever 500s on a chunk after a rebuild, a stale `next-server` is still running: `pkill -f 'next-serve[r]'`, rebuild, start exactly one `next start`.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build && npm run start
npm run lint
```
