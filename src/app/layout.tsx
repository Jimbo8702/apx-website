import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/topbar";
import { ogImage } from "@/lib/page-metadata";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  // Safety-net defaults only: openGraph/twitter merge shallowly, so every
  // page replaces these wholesale via the pageMetadata helper.
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: "/",
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [ogImage],
  },
  verification: {
    google: siteConfig.verification.google,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hanken.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-night text-ink font-sans leading-[1.6] antialiased overflow-x-hidden">
        {/* The site-wide business + website entities; page-level nodes
            reference them by @id (see src/lib/schema.ts). */}
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <TopBar />
        <Header />
        {children}
        <Footer />
        {/* LeadConnector chat widget; lazyOnload keeps it off the critical path. */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a177a0b9defcaefa6dafc8d"
          data-source="WEB_USER"
          strategy="lazyOnload"
        />
        {/* Google Ads tag (gtag.js); loads after hydration, off the critical path. */}
        <GoogleAnalytics gaId={siteConfig.googleTagId} />
      </body>
    </html>
  );
}
