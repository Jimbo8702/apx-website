export const siteConfig = {
  name: "APX Mobile Detailing",
  legalName: "APX Car Solutions",
  shortName: "APX",
  // Canonical production origin; the env var is an override for previews.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apxcarsolutions.com",

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
      "https://www.google.com/maps/place/APX+Mobile+Detailing/@40.9459301,-74.0042953,17z",
  },

  contact: {
    phone: "(201) 256-5995",
    phoneHref: "tel:+12012565995",
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

  /** Google Ads tag (gtag.js), rendered site-wide in the root layout. */
  googleTagId: process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ?? "AW-16923048772",
} as const;
