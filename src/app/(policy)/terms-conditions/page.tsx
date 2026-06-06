import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/page-metadata";
import { LegalPage } from "@/components/sections/legal-page";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const META = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing bookings, payments, cancellations, and service with APX Car Solutions mobile detailing.",
  path: "/terms-conditions",
};

export const metadata = pageMetadata(META);

export default function TermsConditionsPage() {
  return (
    <>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms & Conditions" }])}
      />
      <LegalPage eyebrow="Legal" title="Terms & conditions" file="terms-conditions.md" />
    </>
  );
}
