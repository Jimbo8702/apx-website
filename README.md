# APX Mobile Detailing — Website

Marketing site for **APX Mobile Detailing / APX Car Solutions**, a mobile car detailing business serving Dumont and Bergen County, NJ. Built as a fast, content-focused site: home, about, service pages, 27 town/area pages, reviews, and legal pages.

**Live:** https://www.apxcarsolutions.com

## Stack

- **Next.js 16** (App Router) + **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** — theme tokens live in `src/app/globals.css` (`@theme` block); there is no `tailwind.config`
- Runtime deps kept deliberately minimal: `clsx` + `tailwind-merge` (the `cn` helper), `marked` (renders legal markdown at build), `@next/third-parties` (Google tag)
- **pnpm** for package management
- Deployed on **Vercel**

No component library — only small hand-rolled UI primitives in `src/components/ui/`.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint
```

There is no test suite — verify changes with `pnpm lint`, plus `pnpm build` when imports change, and a `pnpm dev` smoke check for new or changed layouts.

## Environment variables

Set locally in a gitignored `.env`, and in the **Vercel dashboard** for production. All are optional (sensible defaults in `src/lib/site-config.ts`):

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (canonical tags, OG, sitemap, JSON-LD) | `https://www.apxcarsolutions.com` |
| `NEXT_PUBLIC_GOOGLE_TAG_ID` | Google Ads / gtag.js id | `G-NB6BZVNDGZ` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console token | unset |

> The local `.env` does **not** deploy. Production reads these from Vercel's env settings — keep `NEXT_PUBLIC_SITE_URL` on the `www` host (or unset) to match the canonical domain.

## Project structure

```
src/
  app/                  # App Router: routes + route-local _components/
    (home)/             #   landing page sections
    about/              #   founder story
    services/           #   /services index + one folder per service
    areas/              #   27 town pages (+ shared area-services)
    reviews/            #   reviews page
    (policy)/           #   privacy + terms (rendered from markdown)
    layout.tsx          #   fonts, header/footer, site-wide JSON-LD, 3rd-party scripts
    globals.css         #   Tailwind v4 @theme tokens + base styles
  components/
    layout/             #   topbar, header, footer, logo
    sections/           #   shared page sections (quote, testimonials, service-areas, …)
    ui/                 #   primitives: button, input, field, badge, container, photo, …
    icons.tsx           #   all SVG icons
  lib/
    site-config.ts      #   business facts (phone, email, service areas, URLs)
    schema.ts           #   JSON-LD builders
    page-metadata.ts    #   per-page metadata/canonical/OG helper
    policy/             #   legal page markdown (source of truth)
public/media/           # images, logo, hero video, OG image
```

## Domain & SEO

- **`www` is the canonical host.** The apex `apxcarsolutions.com` 308-redirects to `www` (configured in Vercel), and the production Vercel alias `apx-website.vercel.app` 308-redirects to `www` (`next.config.ts`) so it never gets indexed.
- Every page sets metadata via `pageMetadata(...)` (canonical + OG + Twitter) and emits JSON-LD from `src/lib/schema.ts`.
- `sitemap.ts` and `robots.ts` are generated from `siteConfig`. Old-site URLs are 308-redirected to their closest new pages in `next.config.ts`.

## Content & integrations

- **Business facts** (phone, email, service areas, social) come from `src/lib/site-config.ts` — read from there, don't hardcode.
- **Reviews** render via the live LeadConnector (HighLevel) Reputation Hub widget, synced with Google.
- **Quote form** is the live GoHighLevel (LeadConnector) inline form embed; submissions land in the HighLevel dashboard.
- The mailing-list form is currently mock-only (no backend wired).

## Contributing

Conventions, architecture decisions, owner content rules, and current known gaps are documented in **[`CLAUDE.md`](./CLAUDE.md)** (and **[`AGENTS.md`](./AGENTS.md)**). Read those before making changes — they capture deliberate decisions (pricing accuracy, SEO/anti-doorway rules, copy style) that aren't obvious from the code alone.
