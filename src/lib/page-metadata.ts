import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path used for the canonical + og:url, e.g. "/areas/dumont" */
  path: string;
  /** Skip the " | APX Car Solutions" title template (home page only) */
  absoluteTitle?: boolean;
};

/* Shared og:image. This must ride along in every page's openGraph/twitter
   objects: the app/opengraph-image.jpg file convention does NOT work here,
   because page-level `openGraph` replaces the root segment's openGraph
   wholesale (shallow merge), file-injected images included. */
export const ogImage = {
  url: "/media/og_image.jpg",
  width: 1200,
  height: 630,
  alt: "APX Car Solutions logo over a freshly ceramic coated deep red car",
};

/* Per-page metadata: canonical + Open Graph + Twitter derived from one
   title/description pair. Next.js merges metadata shallowly, so a page that
   only sets `title` would inherit the layout's openGraph wholesale (stale
   og:title); every page goes through this helper instead. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
