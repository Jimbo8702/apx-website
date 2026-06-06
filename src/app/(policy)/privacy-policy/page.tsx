import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/page-metadata";
import { LegalPage } from "@/components/sections/legal-page";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const META = {
  title: "Privacy Policy",
  description:
    "How APX Car Solutions collects, uses, and protects your personal information when you use our mobile detailing services and website.",
  path: "/privacy-policy",
};

export const metadata = pageMetadata(META);

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy" }])}
      />
      <LegalPage eyebrow="Legal" title="Privacy policy" file="privacy-policy.md" />
    </>
  );
}
