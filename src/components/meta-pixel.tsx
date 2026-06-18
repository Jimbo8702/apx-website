"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Meta (Facebook) Pixel. The inline base snippet (afterInteractive) initializes
 * fbq and fires the landing PageView; the effect re-fires PageView on App Router
 * client-side navigations, which don't reload the page. We record the last URL
 * tracked so the initial mount (already counted by the snippet) is a no-op and
 * StrictMode's double-invoke can't double-count.
 *
 * Reads useSearchParams, so the caller must wrap this in <Suspense> (see layout).
 */
export function MetaPixel() {
  const pixelId = siteConfig.metaPixelId;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    if (!pixelId) return;
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    if (lastTracked.current === null) {
      // First run: the inline snippet already counted this view.
      lastTracked.current = url;
      return;
    }
    if (lastTracked.current === url) return;
    lastTracked.current = url;
    window.fbq?.("track", "PageView");
  }, [pixelId, pathname, searchParams]);

  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
