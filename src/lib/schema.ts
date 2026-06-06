import type {
  AutoWash,
  BreadcrumbList,
  FAQPage,
  Service,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";
import { siteConfig } from "@/lib/site-config";

/* JSON-LD builders for every schema node on the site. All business facts come
   from siteConfig; page-level builders take the page's own consts so the
   markup can never drift from visible content. Each node renders via
   <JsonLd/> as its own script tag, linked through the @id constants below
   (the @graph approach was deliberately not used: per-page script tags match
   the layout/page component split and one bad block can't kill the rest). */

/* The single business entity. Every other node points at this @id — town and
   service pages must reference it (provider/about), never declare their own
   LocalBusiness (the fake-storefront anti-pattern for a service-area
   business). */
export const BUSINESS_ID = `${siteConfig.url}/#business`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

const absoluteUrl = (path: string) => (path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`);

/* "$1,399.99" → 1399.99 (offer prices are the visible "starting at"
   Coupe/Sedan figures, passed verbatim from each page's TIERS const). */
const parsePrice = (price: string) => Number(price.replace(/[^0-9.]/g, ""));

const SERVICE_CATALOG = [
  { name: "Ceramic Coating", path: "/services/ceramic-coating" },
  { name: "Detailing", path: "/services/detailing" },
  { name: "Paint Correction", path: "/services/paint-correction" },
  { name: "Maintenance Plans", path: "/services/maintenance-plans" },
  { name: "Paint Protection Film", path: "/services/ppf" },
];

const cityNode = (town: string) => ({
  "@type": "City" as const,
  name: `${town}, NJ`,
});

/* Site-wide (layout.tsx). AutoWash is schema.org's closest type to mobile
   detailing (no detailing-specific type exists; AutoWash ⊂ AutomotiveBusiness
   ⊂ LocalBusiness). NO aggregateRating/review here or anywhere: self-serving
   review stars are dead since 2019 and the on-site reviews are placeholders. */
export function localBusinessSchema(): WithContext<AutoWash> {
  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.defaultDescription,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}/apple-icon.png`,
    image: `${siteConfig.url}/media/og_image.jpg`,
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours.days.map((day) => ({
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: day,
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    })),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.facebook,
      siteConfig.social.googleMaps,
    ],
    areaServed: siteConfig.serviceAreas.map(cityNode),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile detailing services",
      itemListElement: SERVICE_CATALOG.map((service) => ({
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          name: service.name,
          url: absoluteUrl(service.path),
        },
      })),
    },
  };
}

/* Site-wide (layout.tsx). No SearchAction: the site has no search route. */
export function websiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

type WebPageInput = {
  path: string;
  /** The page's <title> (same string passed to pageMetadata) */
  title: string;
  /** The page's meta description (same string passed to pageMetadata) */
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
};

export function webPageSchema({
  path,
  title,
  description,
  type = "WebPage",
}: WebPageInput): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

/* Last item = current page: name only, no item URL (Google requirement). */
export function breadcrumbSchema(
  items: { name: string; path?: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  /** Defaults to all 27 served towns; area pages pass their single town */
  areaServed?: readonly string[];
  /** Pass the page's TIERS const; prices are the visible "starting at" figures.
      priceSuffix (maintenance cadence like "per month") becomes a
      UnitPriceSpecification so recurring prices aren't read as one-time. */
  offers?: readonly { name: string; startingPrice: string; priceSuffix?: string }[];
};

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = siteConfig.serviceAreas,
  offers,
}: ServiceInput): WithContext<Service> {
  const priced = offers?.filter((tier) => !Number.isNaN(parsePrice(tier.startingPrice)));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed.map(cityNode),
    ...(priced?.length
      ? {
          offers: priced.map((tier) => ({
            "@type": "Offer" as const,
            name: tier.name,
            price: parsePrice(tier.startingPrice),
            priceCurrency: "USD",
            url: absoluteUrl(path),
            ...(tier.priceSuffix
              ? {
                  priceSpecification: {
                    "@type": "UnitPriceSpecification" as const,
                    price: parsePrice(tier.startingPrice),
                    priceCurrency: "USD",
                    unitText: tier.priceSuffix,
                  },
                }
              : {}),
          })),
        }
      : {}),
  };
}

/* Built from the page's visible FAQS const (matches the on-page <details>
   content, which keeps the markup policy-safe). */
export function faqSchema(
  faqs: readonly { question: string; answer: string }[],
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: { "@type": "Answer" as const, text: faq.answer },
    })),
  };
}
