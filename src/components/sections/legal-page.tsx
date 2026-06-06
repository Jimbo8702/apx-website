import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  /** Filename under src/lib/policy, e.g. "privacy-policy.md" */
  file: string;
};

/* Slim utility page for legal documents: a panel header (no hero image),
   then the markdown source rendered as one article. The .md file is the
   source of truth; editing it is the whole update workflow. */
export function LegalPage({ eyebrow, title, file }: LegalPageProps) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), "src", "lib", "policy", file),
    "utf8",
  );
  // Trusted content: our own owner-approved markdown, not user input.
  const html = marked.parse(markdown, { async: false }) as string;

  return (
    <main>
      <section className="border-b border-line bg-panel py-[72px]">
        <Container>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold">{title}</h1>
        </Container>
      </section>
      <section className="py-16 nav:py-[88px]">
        <Container>
          <article
            className="legal-prose max-w-[760px]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Container>
      </section>
    </main>
  );
}
