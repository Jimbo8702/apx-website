export const siteConfig = {
  name: "APX Mobile Detailing",
  legalName: "APX Car Solutions",
  shortName: "APX",
  // Canonical production origin; the env var is an override for previews.
  // www is the canonical host (the apex apxcarsolutions.com 308-redirects to
  // www in Vercel), so canonical tags / OG / sitemap / JSON-LD all use www to
  // match the final non-redirecting URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.apxcarsolutions.com",

  defaultTitle: "Mobile Detailing & Ceramic Coating in Bergen County, NJ | APX",
  titleTemplate: "%s | APX Car Solutions",
  defaultDescription:
    "Premium mobile detailing, ceramic coatings & paint correction across Dumont and Bergen County. We bring the studio to you, water, power, and all.",

  themeColor: "#bb2222",
  locale: "en_US",

  social: {
    instagram: "https://www.instagram.com/apxcarnj",
    instagramHandle: "@apxcarnj",
    tiktok: "https://www.tiktok.com/@apxcarnj",
    facebook: "https://www.facebook.com/apxcarsolutions",
    // Google Maps place listing (from the old site's schema) — schema sameAs only.
    googleMaps:
      "https://www.google.com/maps/place/APX+Mobile+Detailing/data=!4m2!3m1!1s0x0:0xafe78540ae7d572f?sa=X&ved=1t:2428&hl=en-US&ictx=111",
  },

  contact: {
    phone: "(551) 224-0345",
    phoneHref: "tel:+15512240345",
    email: "info@apxcarsolutions.com",
  },

  // Locality only on purpose (home-based service-area business; the site never
  // shows a street address). Owner decision 2026-06-06.
  address: {
    locality: "Dumont",
    region: "NJ",
    postalCode: "07628",
    country: "US",
  },

  // The Google Maps pin for the business (carried over from the old site's
  // schema) — used for LocalBusiness geo markup, never rendered.
  geo: {
    latitude: 40.9459301,
    longitude: -74.0042953,
  },

  priceRange: "$$",

  // PLACEHOLDER pending owner confirmation: the old site's schema claimed
  // "Open 24 Hours" every day, carried over here as 00:00–23:59 all week.
  // Must match the Google Business Profile once one exists.
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },

  // Towns served — for LocalBusiness schema markup (areaServed) down the line.
  // Not wired to page content; the service-areas section keeps its own list.
  serviceAreas: [
    "Dumont",
    "New Milford",
    "Bergenfield",
    "Haworth",
    "Cresskill",
    "Demarest",
    "Tenafly",
    "Alpine",
    "Emerson",
    "Fair Lawn",
    "Fort Lee",
    "Glen Rock",
    "Hackensack",
    "Harrington Park",
    "Hillsdale",
    "Maywood",
    "Northvale",
    "Norwood",
    "Old Tappan",
    "Paramus",
    "Park Ridge",
    "Ridgewood",
    "Saddle Brook",
    "Saddle River",
    "Teaneck",
    "Waldwick",
    "Woodcliff Lake",
  ],

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  /**
   * Google Tag Manager container, rendered site-wide in the root layout.
   * GA4 and the Meta Pixel are configured inside this GTM container (in the
   * GTM dashboard), not in code.
   */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-NVWR3RF2",
} as const;
