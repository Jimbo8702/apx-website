import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const SERVICE_SLUGS = [
  "ceramic-coating",
  "detailing",
  "paint-correction",
  "maintenance-plans",
  "ppf",
];

// All routes are static; lastModified/changeFrequency/priority are omitted
// on purpose (no real per-page dates, and Google ignores the other two).
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/services",
    ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
    ...siteConfig.serviceAreas.map(
      (town) => `/areas/${town.toLowerCase().replace(/ /g, "-")}`,
    ),
    "/reviews",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return routes.map((route) => ({ url: `${siteConfig.url}${route}` }));
}
