import type { NextConfig } from "next";

// Vercel auto-assigns these *.vercel.app aliases to the production deployment,
// so both serve the live, indexable site. 308 each to the canonical www host:
// keeps them out of the index (Google consolidates to the canonical) and bounces
// visitors to the real domain, path preserved. Targets www directly to avoid a
// double hop through the apex's www redirect. Exact host match so preview/branch
// *.vercel.app deploys keep loading normally for testing (the headers() rule
// below noindexes those instead of redirecting them).
const VERCEL_PROD_ALIASES = [
  "apx-website.vercel.app",
  "apx-website-apx-mobile-detaling-s-projects.vercel.app",
];

const nextConfig: NextConfig = {
  // Old-site URLs (see .claude/old_urls.md) → their closest new pages.
  async redirects() {
    return [
      ...VERCEL_PROD_ALIASES.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://www.apxcarsolutions.com/:path*",
        permanent: true,
      })),
      // The old town/location pages
      ...["alpine", "demarest", "dumont", "haworth", "new-milford"].map((town) => ({
        source: `/${town}`,
        destination: `/areas/${town}`,
        permanent: true,
      })),
      // Old services-pricing page listed the interior/exterior/full detail
      // packages, which map 1:1 to the detailing page's three cards.
      {
        source: "/services-pricing",
        destination: "/services/detailing",
        permanent: true,
      },
      {
        source: "/ceramic-coating",
        destination: "/services/ceramic-coating",
        permanent: true,
      },
      // Old blog category pages (unlinked, found via third-party tools)
      {
        source: "/category/car-detailing-services",
        destination: "/services/detailing",
        permanent: true,
      },
      {
        source: "/category/paint-correction",
        destination: "/services/paint-correction",
        permanent: true,
      },
      {
        source: "/category/ceramic-coating",
        destination: "/services/ceramic-coating",
        permanent: true,
      },
      // Old blog posts → the matching service page
      {
        source: "/ceramic-coating-for-cars",
        destination: "/services/ceramic-coating",
        permanent: true,
      },
      {
        source: "/ultimate-guide-to-ceramic-coating",
        destination: "/services/ceramic-coating",
        permanent: true,
      },
      {
        source: "/restore-vehicle-with-paint-correction-service",
        destination: "/services/paint-correction",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Belt-and-suspenders no-index for every *.vercel.app host: preview/branch
      // deploys plus any production alias the redirects above don't enumerate.
      // Host-scoped via `has`, so the canonical www.apxcarsolutions.com is never
      // affected and stays the only indexed host. The two redirected aliases 308
      // before rendering; this catches everything else under vercel.app.
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
