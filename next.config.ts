import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old-site URLs (see .claude/old_urls.md) → their closest new pages.
  async redirects() {
    return [
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
};

export default nextConfig;
