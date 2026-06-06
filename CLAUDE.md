# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Marketing website for APX Mobile Detailing / APX Car Solutions (mobile car detailing, Dumont / Bergen County, NJ). **Simple is key** — no component libraries; small hand-rolled primitives only. The only runtime deps beyond Next/React are `clsx` + `tailwind-merge` (powering `cn`) and `marked` (renders the legal-page markdown at build time).

- `.claude/context/apx_service_offerings.md` — the full service menu with exact pricing (source of truth for all service/pricing content; do not alter dollar amounts)
- `.claude/design-reference/apx-website.html` — the design mockup the site is built from (source of truth for visual design, copy, and Tailwind values). Logos, hero video, map, and photos live alongside it; the ones the site uses are already copied to `public/media/`.
- `.claude/context/handoffs/` — dated session handoff notes (latest one = current state, owner preferences, and next steps). Exception: the original town-pages session (2026-06-05, the first 8 `/areas/<town>` pages) left no handoff; its state lives in this file only. The 19-town expansion + pricing updates are covered in `2026-06-05-pricing-updates-19-town-pages.md`.

## Commands

Uses **pnpm** (not npm/yarn).

- `pnpm dev` — start dev server at http://localhost:3000
- `pnpm build` — production build
- `pnpm lint` — run ESLint (flat config, `eslint.config.mjs`)

There is no test suite. Verify with lint + build + dev-server smoke check. For layout/styling changes, screenshot with headless Chrome and actually look at it: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1440,3400 --screenshot=/tmp/page.png http://localhost:3000/<route>` (crop to a section with PIL via `python3`; `#anchor` fragments don't scroll in headless shots). Don't screenshot trivial copy edits in an already-verified layout — owner flagged that as wasted effort (2026-06-05); lint is enough. Known quirk: at mobile widths (e.g. 390px) headless shots clip content at the right edge on every page including home — a tooling artifact, not a site bug; don't chase it.

## Stack

- **Next.js 16.2.7**, App Router. This version is newer than training data — per AGENTS.md, consult `node_modules/next/dist/docs/` (start with `01-app/`) before writing Next.js code.
- **React 19.2.4**, TypeScript strict mode, `@/*` alias → `./src/*`, `@public/*` alias → `./public/*` (used only for static image imports).
- **Tailwind CSS v4** — all theme config lives in `src/app/globals.css` (`@theme` block), no `tailwind.config` file.

## Architecture

```
src/
  app/
    layout.tsx          # fonts, metadata, renders <TopBar/> <Header/> {children} <Footer/>
                        #   <html> needs BOTH scroll-smooth and data-scroll-behavior="smooth"
                        #   (Next.js reads the data attr to suspend smooth scrolling during
                        #   route transitions; without it pages land ~116px down, hero cut off)
    globals.css         # @theme design tokens + base heading rules + .legal-prose
                        #   (article styling for the rendered legal markdown)
    (home)/
      page.tsx          # composes the nine home sections
      _components/      # home-only sections: hero, why-choose-us, services,
                        #   how-it-works, gallery, reviews, mailing-list
    about/
      page.tsx          # founder story page: reuses ServiceHero + Quote, owner copy from Matt
      _components/      # about-only sections: founder-story, about-values,
                        #   by-the-numbers
    services/
      page.tsx          # /services index: hero + service-directory + specialty
                        #   banner + gift cards + quote
      _components/      # parameterized sections shared by all /services/* pages:
                        #   service-hero, service-benefits, pricing-tiers,
                        #   service-process, service-faq; index-only:
                        #   service-directory (expanded 2×2 service cards +
                        #   wide maintenance card, data inside), specialty
                        #   (motorcycle/boat/plane banner), gift-cards
                        #   (amounts banner)
      ceramic-coating/  # one folder per service, each: metadata + per-service data
      detailing/        #   consts + section composition (ceramic coating is the
      paint-correction/ #   reference implementation)
      maintenance-plans/
      ppf/              # paint protection film: custom-quote tiers, no prices
    areas/
      _components/      # area-services: props-driven 4-card services grid linking
                        #   to the /services pages (markup mirrors home Services)
      dumont/           # one folder per town (27 total: dumont is the reference;
      new-milford/      #   the original 8 from 2026-06-05 plus 19 more added the
      ...               #   same day, see siteConfig.serviceAreas for the full
                        #   list), each: metadata + local consts + composition
    reviews/            # /reviews (2026-06-05): slim panel header (legal-page pattern,
                        #   no hero on purpose) + _components/reviews-wall (grid of all
                        #   150 placeholder reviews, data const inside) + quote
    (policy)/           # legal pages route group (2026-06-05): privacy-policy/ +
                        #   terms-conditions/, each a ~12-line page.tsx wrapper
                        #   (metadata + <LegalPage/>); content lives in src/lib/policy
  components/
    json-ld.tsx         # <JsonLd data={...}/> — renders a schema node as an
                        #   application/ld+json script tag (XSS-escaped)
    layout/             # global chrome: topbar, header (client), footer, logo
    sections/           # full sections shared across pages: quote (client form),
                        #   legal-page (reads + renders the policy markdown),
                        #   testimonials (props: heading/subtext/reviews),
                        #   service-areas (props: eyebrow/heading/copy/id; towns +
                        #   map live inside; town badges link to /areas/<slug>;
                        #   used by home with id="areas", /about, and every town page)
    ui/                 # primitives: button, input (+ Select/Textarea), field,
                        #   badge, container, eyebrow, stars, photo
    icons.tsx           # ALL svg icons live in this one file
  lib/
    cn.ts               # cn = twMerge(clsx(...)) — resolves Tailwind class conflicts
    schema.ts           # JSON-LD builders (see the structured-data convention below);
                        #   rendered via components/json-ld.tsx
    policy/             # privacy-policy.md + terms-conditions.md — source of truth
                        #   for the legal pages; editing the .md IS the update workflow
    site-config.ts      # business facts: name, contact, social, metadata, serviceAreas
                        #   (contact/social/metadata read from here; serviceAreas is for
                        #   future schema markup only — page content keeps its own list)
```

Conventions established:

- **Page-specific components** go in the route group's `_components/` folder; **shared** ones in `src/components/`. New pages follow the `(group)/page.tsx` + `_components/` pattern.
- Components are server components by default; `"use client"` only where state is needed (currently: `layout/header.tsx`, `sections/quote.tsx`, home `mailing-list.tsx`).
- **Service pages** (`/services/<slug>`): one folder per service composing the shared `services/_components/` sections; each page declares its own copy, pricing tiers, testimonials, and FAQs as local consts so content stays unique per page (avoids duplicate-content SEO penalties). Pricing comes verbatim from the offerings doc. Six testimonials per page (two rows of three, like home). Section order: hero → benefits → pricing → process → testimonials → FAQ → quote (no add-ons sections; owner had them removed 2026-06-03). Five pages: ceramic-coating (the reference), detailing, paint-correction, maintenance-plans, ppf. The detailing page (owner decision 2026-06-03) consolidates the former full-detail / exterior-detail / interior-deep-clean pages: three cards (Interior Detail $195, Exterior Detail $200 = Wash Clay & Seal, Full Premium Detail $295 featured "Most popular"), with the Luxury Detail presented as a "$100 more" upgrade in the pricing footnote and the Interior Deep Clean & Reset surfaced only in a FAQ.
- **Service-area pages** (`/areas/<town>`, first 8 built 2026-06-05, expanded to 27 the same day): one folder per served town, composing ServiceHero + `areas/_components/area-services` + ServiceProcess + Testimonials + ServiceFaq + ServiceAreas + Quote (dumont is the reference). **No pricing tables** (pricing stays on /services to avoid duplicate content) and no prices in copy. Every page's copy is fully unique (anti-doorway-page): no user-facing string may repeat across town pages (exceptions: card titles/CTAs, eyebrows, "Common questions", and alt text tied to the same photo); reviewer names are unique site-wide; each town has its own angle (e.g. Dumont home base, Bergenfield busy schedules, Tenafly luxury paint, Alpine white-glove multi-car, Fort Lee high-rise garages, Paramus lot-parked cars, Saddle Brook winter salt, Waldwick first-time customers) and its own hero photo (photos now repeat across towns; all placeholders). Travel-fee FAQ answer everywhere: no travel fees in any served town. **Hero height is normalized** (owner request 2026-06-05): at 1440px every town h1 must wrap to exactly 3 lines (the crimson tail is the tuning knob; long words after a long town name force a 4th line) and hero `copy` stays in the ~177–193 char band (renders 3 lines); verify with screenshots after editing hero copy. Header "Service areas" dropdown (3-column `wide` panel on desktop, 2-column in the mobile accordion) + ServiceAreas badges link to all 27 pages (slugs derived as `town.toLowerCase().replace(/ /g, "-")`).
- **`service-hero`** mirrors the home hero (full-bleed background image + readability overlays, badge pill, h1 scale, button pair, Google-stars trust row); the per-service photo is the *background*, not a side column. Image `tag` chip renders bottom-right. Also reused by `/about` (cross-route-group import); its trust row is the standard site-wide claims, so it fits any page-level hero.
- **`pricing-tiers`** is "starting at" style: per card a big verbatim Coupe/Sedan price, slim rows for the other two sizes, a shield warranty line, and a CTA. Shared prep items go once in the section-level `included` strip ("Every package includes"), never repeated per card. The featured card gets `featured: true` (solid crimson border) + `badge: "Most popular"` (tag floated on the top border). No per-card feature checklists, ghost numerals, glows, or in-card badge boxes; only one card per page gets a badge. Variations: the grid adapts to tier count (1 → single centered card, 2 → centered 2-col, 3+ → 3-col); per-tier `priceLabel` overrides "Starting at" (only the ppf page uses it now; wet sanding dropped its "Flat rate" override when it became "starting at $1,800" on 2026-06-05); a tier with empty `prices` shows just the big mark + `startingLabel` (wet sanding "All vehicle sizes", exterior-only maintenance "Per visit"); per-tier `priceSuffix` renders a cadence line under the size label (e.g. "per month", see maintenance plans); `includedLabel` relabels the strip ("What's included", "Bi-weekly & monthly visits include"); the ppf page goes fully price-free (`startingPrice: "Custom quote"` + `priceLabel: "Pricing"` + empty `prices`, owner request 2026-06-05).
- **Legal pages** (`/privacy-policy`, `/terms-conditions`, built 2026-06-05, both under the `app/(policy)/` route group): the markdown in `src/lib/policy/` is the source of truth; `sections/legal-page.tsx` reads it with `fs` at build time (both routes prerender static) and renders via `marked.parse()` + `dangerouslySetInnerHTML` (trusted, our own files), styled by the `.legal-prose` block in `globals.css`. To update a policy, edit the `.md` (including its bold `Last Updated` first line, which deliberately lives in the markdown, not in page props). The page owns only eyebrow + h1; the doc's original h1/title lines were stripped from the `.md`. Slim panel header, no ServiceHero, no testimonials/quote. Linked from the footer bottom bar only (not header nav). Legal copy is owner-approved verbatim text like the pricing doc: the no-em-dash rule does NOT apply to it; never rewrite it (the terms doc contains em dashes on purpose). If a policy ever adds a new element type (e.g. tables), add a matching `.legal-prose` rule.
- **No em dashes (—) in user-facing copy** — rewrite with a period, comma, or colon instead. En dashes in ranges ("8–10 years", "4–5 Seats") are fine. (Exception: the legal docs, see above.)
- **Heading copy** (set approved 2026-06-03, see the header-seo handoff): headings are sentence case and carry the page's service keyword ("Premium ceramic coating, right in your driveway."); the eyebrow is a short label and brand personality lives in the subtext. A heading must not duplicate its eyebrow or its subtext. Hero h1s split into a white lead + `text-crimson-soft` tail. `/about` keeps its personality-forward headings on purpose.
- Section data (cards, reviews, towns) is declared as a local `const` array at the top of the section file — not extracted elsewhere.
- Design tokens are Tailwind utilities from the `@theme` block: `night, panel, panel-2, line, ink, muted, crimson, crimson-soft, gold` colors, `font-display`/`font-sans`, `shadow-card`, and a custom `nav:` breakpoint at 920px. Odd pixel values from the mock stay as arbitrary values (e.g. `py-[104px]`).
- **Never combine `sm:`/`md:` with `nav:` on the same CSS property.** `--breakpoint-nav` is in px while the default breakpoints are rem; Tailwind v4 can't sort mixed-unit breakpoints, so the `nav:` media block is emitted *before* `sm:` and the `sm:` rule wins on desktop (e.g. `sm:grid-cols-2 nav:grid-cols-4` renders 2 columns at 1440px). Use only `nav:` with no smaller variant (the dominant pattern), or `lg:` (64rem) for the desktop step when `sm:` is also present (see `areas/_components/area-services.tsx`).
- **Images are static imports** (2026-06-05): every image prop site-wide is `StaticImageData`, never a string path — `import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg"` — so Next gets build-time dimensions (no CLS), auto blur placeholders, and a typo'd path is a build error caught by `pnpm build`. Each JPEG has one canonical import name reused everywhere (current filename↔name table in `.claude/context/handoffs/2026-06-06-hires-image-swap.md`; grep the filename before naming a new usage). 7 of the photos were swapped for high-res versions on 2026-06-06 (4284×5712, same shots) and renamed to their descriptive owner filenames (owner request; the old image_2/image_9 byte-identical dupes consolidated into the one Porsche file — `porsche911Cabriolet` and `porsche911Coated` both import it); image_4/11/12/13 keep their legacy `image_N.jpg` names and 768×1024 res pending better sources. Multi-MB source JPEGs are fine: `next/image` serves optimized variants, never the originals. The lone string-path exception is the hero `<video>` source. The service-areas map SVG is also statically imported (Next auto-serves `.svg` unoptimized, no blur).
- Photos render through `ui/photo.tsx` (`next/image fill` + `placeholder="blur"` + gradient base + optional `tag` chip); the direct `<Image>`s (home services, service-directory, area-services cards, service-hero) carry `placeholder="blur"` too.
- Header dropdowns (desktop) are pure CSS (`group-hover` + `group-focus-within`); `closeMenu` in `layout/header.tsx` blurs the active element on navigate, otherwise the clicked link keeps focus through the client-side navigation and holds the dropdown open. Keep that blur if reworking the header.

## Current state / known gaps

- Quote + mailing-list forms are mock-only: submit flips a `useState` to a success message; nothing is sent anywhere.
- `/services` (index page, built 2026-06-05) is live and deliberately simple (owner direction): hero (image_8) → service-directory (expanded cards in a 2×2 grid since the ppf card was added, with a full-width maintenance-plans card; owner found 4-across squished, and no pricing tables here) → specialty banner (motorcycle/boat/plane custom-quote invitation, no pricing per owner) → gift-cards banner → quote. Linked from the home services section's "See all services", the header dropdown's footer link, the footer Services column ("All services & pricing"), and the quote section's "Book online instantly". No testimonials/FAQ on it by design. Gift-card CTAs are call/email; swap in an online purchase link if Urable has one. All five individual service pages are built and linked from the header dropdown and footer; the home services grid deliberately stays at its original 3 cards (ceramic/detailing/paint-correction, no ppf card, owner call 2026-06-05). `/about` is built (founder story from owner Matt, 2026-06-03): linked from header nav + footer Company column; the founder-story photo (`image_11.jpg`) and "150+ reviews" / at-a-glance stats are placeholders pending a real photo of Matt and owner confirmation.
- All 27 `/areas/<town>` pages are built (2026-06-05; the 19 newer towns: Emerson, Fair Lawn, Fort Lee, Glen Rock, Hackensack, Harrington Park, Hillsdale, Maywood, Northvale, Norwood, Old Tappan, Paramus, Park Ridge, Ridgewood, Saddle Brook, Saddle River, Teaneck, Waldwick, Woodcliff Lake) and linked from the header "Service areas" dropdown and the ServiceAreas town badges. There is no `/areas` index page; the dropdown's parent link falls back to `/#areas` (the "Services" parent link likewise stays at `/#services`). Town-page hero photos are generic placeholders pending real per-town job photos, and all town-page testimonials + FAQ claims (lead times, weather policy, "no travel fee") are placeholders pending owner review. The footer's "Service areas" link still points at `/#areas` on purpose. `siteConfig.serviceAreas` lists all 27 towns and matches the header + service-areas lists; `src/app/sitemap.ts` derives the 27 area URLs from it.
- Pricing changes 2026-06-05 (owner numbers, offerings doc updated to match): paint correction was repriced upward and reframed as "starting at" (1 Step $800/$1,100/$1,400, 2 Step $1,400/$1,800/$2,200, wet sanding starting at $1,800 instead of flat $2,050). An **Exterior-Only Maintenance** plan was added as a third card on `/services/maintenance-plans`: "Starting at $99.00 / Per visit" only, deliberately no bi-weekly/monthly price rows (visitors inquire about cadence, per owner); unconfirmed with Matt whether it carries the 3-month minimum or requires the initial full detail, so the page claims neither, and the included strip/footnote scope the interior work + commitment to the bi-weekly/monthly programs only.
- The old `/services/full-detail`, `/services/exterior-detail`, `/services/interior-deep-clean` URLs 404 with no redirects (fine pre-launch; add redirects in `next.config.ts` if these ever shipped anywhere).
- The à la carte one-offs (§7) are deliberately *not* on the site (owner call 2026-06-05: they're repeated subsets of the main packages; a rate-list section was built then removed). Gift cards (§10) live on the `/services` index; its specialty banner invites motorcycle (§9) plus boat/plane work, all custom-quote with no pricing shown (owner had the $200 motorcycle price removed 2026-06-05; boats/planes are NOT in the offerings doc). The Interior Deep Clean & Reset (§2) is still only surfaced in a detailing-page FAQ + a name-drop in the index's detailing card (a dedicated pricing card on the index was built, then removed at owner's request, same day). The §8 add-ons are deliberately *not* a section anywhere (owner removed add-ons sections 2026-06-03).
- `/services/ppf` (built 2026-06-05, see the ppf-page handoff) is the one service NOT in the offerings doc: it's a new offering the owner requested, with content modeled on aswcoatings.com/ppf. **No dollar amounts anywhere on it** (owner request): all three coverage tiers (Partial Front / Full Front featured / Full Body) are custom-quote with `startingLabel: ""` (a side label next to the wide "Custom quote" mark wraps badly; verified and removed). Its hero h1 uses the "PPF" abbreviation (owner request); the spelled-out keyword stays in the eyebrow/metadata/section headings. No film brand names in copy (APX's actual film/warranty unknown). Placeholders pending owner: warranty wording ("manufacturer-backed", "rated around 10 years"), "Most popular" on Full Front, and the at-home install conditions FAQ (PPF wants a clean, wind-free space; owner must confirm how APX handles installs without a garage).
- `/reviews` (built 2026-06-05, see the reviews-page handoff) shows exactly 150 placeholder reviews (matching the trust-row count) in the testimonial card style: 3-col grid, initials + avatar colors derived in the component, towns rotating through all 27 served towns, no dollar amounts in quotes. All 150 first names are grep-verified unique site-wide, so the names-unique rule holds. Swap the `REVIEWS` array in `reviews/_components/reviews-wall.tsx` 1:1 when the owner exports the real Google/Yelp reviews. **No hero on purpose** (owner had it removed same day); the page opens with the legal-page slim panel header. Header nav + footer "Reviews" links point to `/reviews`; home keeps its own 6-review section and `id="reviews"` anchor (nothing links to the anchor anymore).
- Testimonials and some FAQ claims on every service page are placeholders pending owner review (visit duration, cure times, "most popular" choices on detailing/paint-correction/maintenance). Known gap in the names-unique-site-wide rule: Lauren B., Elena C., and Dana M. each appear twice (pre-2026-06-05-ppf sessions); don't add more duplicates. Section *headings* are final (approved 2026-06-03); FAQ headings stay "Common questions" everywhere (per-service FAQ headings were offered and declined — revisit if FAQ schema is added).
- Legal pages are built (2026-06-05) from owner-provided docs. Both reference "Google Analytics / Google Tag Manager" and a third-party payment processor; nothing on the site actually wires those up yet — fine, but keep the policy in sync if analytics or payments ever land. The LeadConnector (HighLevel) chat widget added 2026-06-06 (site-wide `<Script strategy="lazyOnload">` in `layout.tsx`) is a third-party data collector the privacy policy doesn't mention yet — flag for the owner's next policy update. The privacy policy's contact block reads from the doc text, not site-config (verbatim legal copy).
- SEO plumbing (2026-06-06, from the audit in `.claude/research/SEO_AUDIT_2026-06-05.md`): every page's metadata goes through `src/lib/page-metadata.ts` (`pageMetadata({ title, description, path })` → canonical + Open Graph + Twitter + shared og:image). **Use it for any new page** — a page that sets `openGraph` partially (or not at all) inherits/clobbers wrong because Next merges metadata shallowly; that's also why the og:image is `public/media/og_image.jpg` referenced in metadata, NOT an `app/opengraph-image.jpg` file convention (page-level openGraph replaces the file-injected image — verified, the tag silently disappears). `siteConfig.url` is the canonical origin (`https://apxcarsolutions.com`, env-overridable); `src/app/sitemap.ts` (38 URLs) + `robots.ts` exist; meta descriptions site-wide are ≤160 chars and unique (don't lengthen them); GSC verification reads `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` when set. Still pending from the audit: hero-video compression and the launch gates (real reviews, owner claim sign-off).
- **JSON-LD structured data** (2026-06-06, see the json-ld handoff): builders live in `src/lib/schema.ts` (typed with `schema-dts`, a types-only dev dep), rendered by `components/json-ld.tsx` as separate script tags per node (deliberately not one `@graph`). Layout renders the two site-wide entities — `localBusinessSchema()` (`@type: AutoWash`, `@id …/#business`, all facts from siteConfig incl. locality-only address + geo + 27-town `areaServed`) and `websiteSchema()`. Every page hoists its `pageMetadata` args into a local `const META` shared with the schema builders (one source of truth) and adds `webPageSchema` + `breadcrumbSchema`; service pages add `serviceSchema` (pass `TIERS` as `offers` — prices parse from the visible "starting at" strings; `priceSuffix` becomes a UnitPriceSpecification; ppf passes no offers) + `faqSchema(FAQS)`; area pages add a single-town `serviceSchema`. Rules: **never add `AggregateRating`/`Review` markup** (self-serving stars dead since 2019 + reviews are placeholders); never give a town page its own LocalBusiness (fake-storefront anti-pattern — everything references `#business` via `provider`/`about`); no `SearchAction` (no search route); schema content must match what's visible on the page. Placeholder pending owner: the 24/7 `openingHoursSpecification` in siteConfig.hours (carried from the old site; must match the GBP once one exists).
- Brand images (2026-06-06, all PIL-generated, no source scripts kept — regenerate from scratch if needed): `public/media/og_image.jpg` (1200×630) is the Rolls-Royce front end (`black-rolls-royce-ghost-black-badge-front.jpeg` cropped) + left night scrim + full transparent logo + Bricolage/Hanken tagline text (fonts fetched as TTF from Google Fonts). Regenerated 2026-06-06 from the high-res Rolls photo (crop `(0, 2231, 4284, 4480)`, measured scrim profile, overlay transplanted pixel-exact from the prior version — see the hires-image-swap handoff for the method); prior versions are backed up at `.claude/design-reference/media/og_image_v1_backup.jpg` + `og_image_v2_backup.jpg`, kept outside `public/` so they don't ship. `src/app/favicon.ico` (16/32/48 multi-size) + `src/app/apple-icon.png` (180×180, auto-injected by the file convention) are the "APX" letters cropped from `logo_transparent.png` on the brand near-black; the "CAR SOLUTIONS" subtitle is deliberately dropped (illegible below ~100px). **Turbopack quirk:** its ICO decoder rejects RGB-encoded PNG frames — save `.ico` frames as RGBA or the build fails with "The PNG is not in RGBA format". Logo sources live in `.claude/design-reference/logos/`.
- `public/media/apx_hero_video.mp4` is 32 MB — needs compression before launch.
- Business facts (phone (201) 256-5995, info@apxcarsolutions.com, Instagram @apxcarnj, Dumont, NJ) live in `src/lib/site-config.ts` — read from there, don't hardcode.
