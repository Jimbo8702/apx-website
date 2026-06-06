import type { Thing, WithContext } from "schema-dts";

/* Escapes characters that could break out of the script tag (XSS guard for
   JSON.stringify, per the Next.js JSON-LD guide). */
function safeJsonLdReplacer(_key: string, value: unknown): unknown {
  if (typeof value === "string") {
    return value
      .replace(/&/g, "\\u0026")
      .replace(/</g, "\\u003c")
      .replace(/>/g, "\\u003e");
  }
  return value;
}

/* Renders a schema.org node as a JSON-LD script tag. Server components only,
   so the markup ships in the initial HTML (JS-less crawlers read it). A plain
   <script> is correct here — next/script is for executable code. */
export function JsonLd({ data }: { data: WithContext<Thing> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, safeJsonLdReplacer) }}
    />
  );
}
