# CLAUDE.md

Guidance for Claude Code (claude.ai/code) in this repository.

@AGENTS.md

## Project

Marketing site for APX Mobile Detailing / APX Car Solutions (mobile car detailing, Dumont / Bergen County, NJ). **Simple is key**: no component libraries, small hand-rolled primitives only. Runtime deps beyond Next/React: `clsx` + `tailwind-merge` (powering `cn`), `marked` (legal markdown at build time), `@next/third-parties` (Google tag).

Sources of truth:

- `.claude/context/apx_service_offerings.md` — full service menu + exact pricing (never alter dollar amounts)
- `.claude/real_reviews/all_reviews.json` — all 141 real Google reviews (combined from the raw GBP exports beside it); review sections now render the live Reputation Hub widget instead, so this is reference data (count claims, topic research), not site copy
- `.claude/design-reference/apx-website.html` — the design mockup (visual design, copy, Tailwind values); logos/video/map/photos live alongside it, the used ones are in `public/media/`
- `.claude/context/handoffs/` — dated session notes with detail beyond this file (the first 8 town pages predate the handoff habit; their state lives here only)
- `src/lib/site-config.ts` — business facts: phone (201) 256-5995, info@apxcarsolutions.com, IG @apxcarnj, Dumont NJ, canonical URL (`https://apxcarsolutions.com`, env-overridable), all 27 `serviceAreas`, `googleTagId`. Read from here, don't hardcode.

## Commands

**pnpm** (not npm/yarn): `pnpm dev` (localhost:3000) · `pnpm build` · `pnpm lint`.

No test suite — verify with lint + build + dev smoke check. **Screenshots are for NEW page/section layouts and reported visual bugs ONLY** (owner has repeatedly flagged anything more as wasted effort: "Changing photos will not break the website"). Copy edits and photo/asset/element swaps in a settled layout need lint (+ build if imports changed), nothing else. When you do screenshot: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1440,3400 --screenshot=/tmp/page.png http://localhost:3000/<route>`, crop with PIL via `python3`; `#anchor` fragments don't scroll in headless shots. Known artifact: mobile-width shots clip the right edge on every page — not a site bug, don't chase it.

## Stack

- **Next.js 16.2.7**, App Router — newer than training data; per AGENTS.md consult `node_modules/next/dist/docs/` (start with `01-app/`) before writing Next.js code.
- React 19.2.4, TypeScript strict, `@/*` → `./src/*`, `@public/*` → `./public/*` (static image imports only).
- **Tailwind CSS v4** — all theme config in `src/app/globals.css` (`@theme` block); no `tailwind.config`.

## Architecture

```
src/
  app/
    layout.tsx          # fonts, metadata, TopBar/Header/{children}/Footer, site-wide JSON-LD,
                        #   LeadConnector chat widget + Google tag. <html> needs BOTH
                        #   scroll-smooth AND data-scroll-behavior="smooth" or route
                        #   transitions land ~116px down with the hero cut off
    globals.css         # @theme tokens + base heading rules + .legal-prose
    (home)/             # page.tsx + _components/: hero (bg video), why-choose-us, services,
                        #   how-it-works, gallery, reviews, mailing-list
    about/              # founder story (owner Matt's copy); reuses ServiceHero + Quote;
                        #   _components/: founder-story, about-values, by-the-numbers
    services/
      page.tsx          # index: hero → service-directory → specialty banner → gift-cards → quote
      _components/      # shared by /services/*: service-hero, service-benefits, pricing-tiers,
                        #   service-process, service-faq; index-only: service-directory,
                        #   specialty, gift-cards
      ceramic-coating/  # one folder per service: metadata + local data consts + composition;
      detailing/        #   ceramic-coating is the reference implementation; ppf is
      paint-correction/ #   custom-quote only, no prices
      maintenance-plans/
      ppf/
    areas/              # 27 town folders (dumont = reference) + _components/area-services
                        #   (props-driven 4-card grid linking to /services pages)
    reviews/            # slim panel header (no hero, owner call) + ReviewWidget + quote
                        #   (passes the larger "section" widgetId; default = compact embed)
    (policy)/           # privacy-policy/ + terms-conditions/: ~12-line wrappers over <LegalPage/>
  components/
    json-ld.tsx         # <JsonLd data/> → XSS-escaped application/ld+json script tag
    layout/             # topbar, header (client), footer, logo (renders public/media/logo.png)
    sections/           # shared sections: quote (client form), legal-page, testimonials
                        #   (props: heading/subtext — body is review-widget.tsx, the
                        #   LeadConnector Reputation Hub script+iframe embed), service-areas
                        #   (towns + map inside; badges link to /areas/<slug>; home/about/towns)
    ui/                 # primitives: button, input (+Select/Textarea), field, badge,
                        #   container, eyebrow, stars, photo
    icons.tsx           # ALL svg icons live in this one file
  lib/
    cn.ts               # cn = twMerge(clsx(...))
    schema.ts           # JSON-LD builders (rules below)
    page-metadata.ts    # pageMetadata({title, description, path}) — use for every page
    policy/             # *.md source of truth for legal pages; editing the .md IS the workflow
    site-config.ts      # business facts
```

## Conventions

- Page-specific components in the route's `_components/`; shared ones in `src/components/`. Server components by default; `"use client"` only where stateful (header, quote, mailing-list).
- Section data (cards, tiers, FAQs, towns) = local `const` arrays at the top of the section file, not extracted elsewhere.
- **Service pages** (`/services/<slug>`): each declares its own copy/tiers/FAQs as local consts so content stays unique (no duplicate-content SEO penalty). Pricing verbatim from the offerings doc. Section order: hero → benefits → pricing → process → testimonials → FAQ → quote. The detailing page consolidates the old full-detail/exterior-detail/interior-deep-clean pages: Interior $195 / Exterior $200 (Wash Clay & Seal) / Full Premium $295 featured; the Luxury Detail is a "$100 more" footnote upgrade and the Interior Deep Clean & Reset surfaces only in a FAQ (owner decisions).
- **Town pages** (`/areas/<town>`): ServiceHero + area-services + ServiceProcess + Testimonials + ServiceFaq + ServiceAreas + Quote. **No pricing tables and no prices in copy** (pricing stays on /services). Anti-doorway: no user-facing string repeats across town pages (exceptions: card titles/CTAs, eyebrows, "Common questions", alt text tied to a shared photo; the review widget body is identical everywhere but iframe content isn't indexed); each town has its own angle (Dumont home base, Tenafly luxury paint, Fort Lee high-rise garages, Saddle Brook winter salt, …) and its own hero photo (a few high-res photos still repeat across 2–3 towns; don't let a town's hero also appear in its own service cards). Travel-fee FAQ everywhere: no travel fees in any served town. **Hero normalization** (owner): at 1440px every town h1 wraps to exactly 3 lines (the crimson tail is the tuning knob) and hero `copy` stays ~177–193 chars (renders 3 lines); screenshot-verify after editing hero copy. Slugs: `town.toLowerCase().replace(/ /g, "-")`.
- **`service-hero`** mirrors the home hero (full-bleed bg photo + readability overlays, badge pill, h1 scale, button pair, Google-stars trust row); the photo is the *background*, not a side column; `tag` chip bottom-right; trust row is site-wide claims so it fits any page (also used by /about).
- **`pricing-tiers`** is "starting at" style: big verbatim Coupe/Sedan price, slim rows for the other two sizes, shield warranty line, CTA. Shared prep items go once in the section-level `included` strip, never per card. Exactly one card per page may get `featured: true` (crimson border) + `badge: "Most popular"`. No per-card checklists, ghost numerals, or glows. Grid adapts to tier count (1 → centered, 2 → centered 2-col, 3+ → 3-col). Per-tier knobs: `priceLabel` (overrides "Starting at"), empty `prices` (big mark + `startingLabel` only), `priceSuffix` (cadence line, see maintenance), `includedLabel` (relabels strip). PPF is fully price-free: `startingPrice: "Custom quote"`, `priceLabel: "Pricing"`, empty `prices`, `startingLabel: ""` (a side label wraps badly next to the wide mark — verified).
- **Legal pages**: the `.md` in `src/lib/policy/` is the source of truth, including the bold `Last Updated` first line (deliberately in the markdown, not props). `legal-page.tsx` reads via `fs` at build time and renders `marked.parse()` + `dangerouslySetInnerHTML` (our own files), styled by `.legal-prose`. Owner-approved verbatim copy: never rewrite it; its em dashes are on purpose. Footer bottom-bar links only. If a policy adds a new element type (e.g. tables), add a matching `.legal-prose` rule.
- **No em dashes (—) in user-facing copy** — use period/comma/colon. En-dash ranges ("8–10 years") fine. Legal docs exempt.
- **Headings**: sentence case, carry the page's service keyword; eyebrow = short label; brand personality lives in the subtext; a heading must not duplicate its eyebrow or subtext. Hero h1 = white lead + `text-crimson-soft` tail. /about keeps personality-forward headings on purpose.
- Design tokens from `@theme`: `night, panel, panel-2, line, ink, muted, crimson, crimson-soft, gold`; `font-display`/`font-sans`; `shadow-card`; custom `nav:` breakpoint at 920px. Odd mock pixel values stay arbitrary (`py-[104px]`).
- **Never combine `sm:`/`md:` with `nav:` on the same property.** `nav:` is px, defaults are rem; Tailwind v4 can't sort mixed units, so `sm:` wins on desktop (e.g. `sm:grid-cols-2 nav:grid-cols-4` renders 2 cols at 1440px). Use `nav:` alone (dominant pattern) or `lg:` for the desktop step when `sm:` is present (see `area-services.tsx`).
- **Images are static imports**: every image prop is `StaticImageData`, never a string path — build-time dimensions (no CLS), auto blur placeholders, typo'd path = build error. One canonical import name per JPEG reused everywhere (filename↔name tables in the `2026-06-06-hires-image-swap` + `2026-06-06-photo-expansion` handoffs; grep the filename before naming a new usage). Exceptions: the hero `<video>` src (string) and the map SVG (static import, served unoptimized). Multi-MB source JPEGs are fine (`next/image` serves variants). Legacy `image_N.jpg` files are retired — never reuse. 3 unused photos sit in `.claude/potential_images/` (Macan red console, Harley engine close-up, Ford Focus PNG).
- Photos render via `ui/photo.tsx` (`next/image fill` + blur + gradient base + optional `tag` chip); the direct `<Image>`s (home services, service-directory, area-services, service-hero) carry `placeholder="blur"` too.
- Header dropdowns are pure CSS (`group-hover` + `group-focus-within`); `closeMenu` blurs the active element on navigate, otherwise the clicked link holds the dropdown open through client-side navigation. Keep that blur if reworking the header.
- **SEO/metadata**: every page goes through `pageMetadata(...)` → canonical + OG + Twitter + shared og:image. Next merges metadata shallowly, so partial `openGraph` clobbers wrong — that's also why og:image is `public/media/og_image.jpg` referenced in metadata, NOT an `app/opengraph-image` file (page-level openGraph silently drops the file-injected tag — verified). Meta descriptions ≤160 chars and unique (don't lengthen). `sitemap.ts` derives town URLs from `siteConfig.serviceAreas`; `robots.ts` exists; GSC verification reads `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- **JSON-LD**: builders in `src/lib/schema.ts` (typed via `schema-dts` dev dep), rendered as separate script tags per node (deliberately not one `@graph`). Layout renders `localBusinessSchema()` (`@type: AutoWash`, `@id …/#business`, facts from siteConfig incl. 27-town `areaServed`) + `websiteSchema()`. Each page hoists its `pageMetadata` args into a local `const META` shared with the builders and adds `webPageSchema` + `breadcrumbSchema`; service pages add `serviceSchema` (pass `TIERS` as `offers` — prices parse from the "starting at" strings, `priceSuffix` → UnitPriceSpecification; ppf passes none) + `faqSchema(FAQS)`; area pages add a single-town `serviceSchema`. Rules: **never add `AggregateRating`/`Review` markup** (the reviews are real now, but self-serving stars have been dead since 2019; the rule stands); never give a town its own LocalBusiness (fake-storefront anti-pattern — reference `#business` via `provider`/`about`); no `SearchAction` (no search route); schema must match visible page content.

## Current state / known gaps

- **Quote + mailing-list forms are mock-only** (submit flips `useState` to a success message; nothing sent). The GoHighLevel quote form is the planned replacement.
- **Reviews are the live widget now (2026-06-06, owner call)**: every reviews section site-wide (home, 5 service pages, 27 town pages, /reviews body) renders `ReviewWidget` — the LeadConnector Reputation Hub script + iframe, live-synced with Google. `Testimonials` keeps per-page heading/subtext props only; the hardcoded `Review[]` consts and the /reviews wall were deleted (the curated allocation lives in git history pre-2026-06-06 and `.claude/real_reviews/all_reviews.json` still holds all 141 exports). `ReviewWidget` takes an optional `widgetId`: the default is the compact embed (all Testimonials sections); /reviews passes the larger "section" widget id `6a24cd8525f9e2486a9b9dc8`. Known trade-offs (explained to owner before the call): iframe content isn't indexed, widget styling is controlled in the HighLevel dashboard not our CSS, and the frame resizes after load. Review-count claims still say "140+ · Google" (hero + service-hero trust rows, home subtext, /reviews, /about stat) — keep those in sync with the GBP. PPF note stands: zero reviews mention PPF, so its testimonial heading/subtext deliberately avoid claiming film experience.
- **Placeholders pending owner (Matt)**: FAQ claims (lead times, weather policy, travel fees, visit durations, cure times, "most popular" picks); the founder-story photo (foam-wash wheel shot, TODO comment stands); /about stats other than the review count (100%, 8+ towns — site serves 27, "Small team"); PPF warranty wording, Full Front "Most popular", and the at-home install-conditions FAQ; whether Exterior-Only Maintenance carries the 3-month minimum / initial-detail requirement (page deliberately claims neither); the 24/7 `openingHoursSpecification` in siteConfig (must match the GBP once one exists).
- **Owner content decisions — don't re-add**: no à la carte one-offs (§7) or add-ons sections (§8); no motorcycle/boat/plane pricing (specialty banner is custom-quote; boats/planes aren't in the offerings doc); no PPF dollar amounts or film brand names anywhere (PPF isn't in the offerings doc; modeled on aswcoatings.com/ppf; hero h1 uses the "PPF" abbreviation, spelled-out keyword in eyebrow/metadata); home services grid stays 3 cards (no ppf card); no hero on /reviews; no testimonials/FAQ on the /services index; gift cards live on the /services index with call/email CTAs (swap in an Urable purchase link if one exists).
- The old reviewer-names-unique rule is retired (reviews come from the live widget now). FAQ headings stay "Common questions" everywhere (per-service headings offered and declined; revisit if FAQ schema lands).
- No `/areas` index page: the header dropdown's parent link falls back to `/#areas` (Services parent likewise `/#services`); footer "Service areas" also points at `/#areas` on purpose. Home keeps its reviews section (widget) + `id="reviews"` anchor (nothing links to it).
- **Old-site redirects** in `next.config.ts` (sources in `.claude/old_urls.md`): 5 old town pages → `/areas/<town>`, `/services-pricing` → `/services/detailing` (old page = the detail packages), `/ceramic-coating` → its service page, blog categories/posts → closest service page; all `permanent: true` (308). The never-shipped `/services/full-detail` / `exterior-detail` / `interior-deep-clean` URLs 404 on purpose.
- **Third-party scripts**: LeadConnector (HighLevel) chat widget in `layout.tsx` (`<Script strategy="lazyOnload">`) and the Reputation Hub review widget on every page with a reviews section — the privacy policy doesn't mention LeadConnector yet, flag for the owner's next policy update. Google Ads tag `AW-16923048772` via `@next/third-parties` `<GoogleAnalytics/>` (`siteConfig.googleTagId`) — the policy's existing Google Analytics/GTM language covers it. The policy also mentions a payment processor; none is wired — keep in sync if payments land. The privacy policy's contact block is verbatim doc text, not site-config.
- **Brand assets** (PIL-generated, no source scripts kept — regenerate from scratch): `public/media/og_image.jpg` (1200×630 Rolls-Royce front + night scrim + logo + tagline; prior versions backed up in `.claude/design-reference/media/`, kept out of `public/`); `src/app/favicon.ico` (16/32/48) + `apple-icon.png` (180×180) are the "APX" letters only ("CAR SOLUTIONS" illegible below ~100px). **Turbopack quirk: `.ico` PNG frames must be RGBA or the build fails.** The header/footer logo is `public/media/logo.png` (transparent, trimmed to the 624×236 artwork); logo sources in `.claude/design-reference/logos/`.
- Hero video compressed 2026-06-06 (31 MB → 7.2 MB: 1080×1920, H.264 CRF 31, audio stripped, faststart; frame-compare verified). Original backed up in `.claude/design-reference/media/`.
- Launch gates from the SEO audit (`.claude/research/SEO_AUDIT_2026-06-05.md`): real reviews ✓ done site-wide 2026-06-06; owner claim sign-off still open for FAQ/stat claims.
