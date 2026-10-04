import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { faqJsonLd, JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { brand, faqs, product } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `Hair Oil FAQs — Use, Results & Delivery | ${brand.name}`,
  description:
    "How often to apply hair oil, how long to leave it on, whether it helps with hair fall, and how delivery and Cash on Delivery work across Pakistan.",
  ogTitle: `Hair Oil FAQs | ${brand.name}`,
  ogDescription: "Answers about using hair oil, realistic results, and delivery across Pakistan.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader
        crumb={{ name: "FAQ", href: "/faq" }}
        eyebrow="Questions"
        title="Hair Oil Questions, Answered"
      >
        Everything people ask us about using hair oil, what to expect from it, and how ordering
        works in Pakistan.
      </PageHeader>
      <div className="mt-10">
        <FaqList items={faqs} headingLevel="h2" />
      </div>
      <p className="mt-10 text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-4">
        Still unsure? <Link href="/contact">Contact us</Link> or{" "}
        <Link href={`/products/${product.slug}`}>explore our hair oil</Link>.
      </p>
    </section>
  );
}
