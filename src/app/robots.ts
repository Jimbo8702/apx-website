import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// AI *search* crawlers — the ones that fetch pages live to answer user queries.
// Explicitly welcomed so APX can be cited in AI answers (generative engine SEO).
const AI_SEARCH_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
];

export default function robots(): MetadataRoute.Robots {
  // No disallow list: the site is all public marketing content, has no API
  // routes or private paths, and the Vercel-alias / apex hosts are kept out of
  // the index via 308 redirects in next.config.ts, not here.
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_SEARCH_BOTS, allow: "/" },
      // AI *training* crawlers (GPTBot, ClaudeBot, Google-Extended) are left
      // allowed via "*". To opt content out of model training, add:
      //   { userAgent: ["GPTBot", "ClaudeBot", "Google-Extended"], disallow: "/" }
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
