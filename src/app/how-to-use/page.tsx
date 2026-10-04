import Image from "next/image";
import Link from "next/link";
import applyImage from "@/assets/applying-hair-oil-to-scalp.jpg";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { brand, product, siteUrl, steps } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `How to Apply Hair Oil Correctly: 5-Step Routine | ${brand.name}`,
  description:
    "How to apply hair oil to the scalp correctly, before or after a shower, how long to leave it on and how often to oil. A ten-minute, five-step routine.",
  ogTitle: `How to Apply Hair Oil | ${brand.name}`,
  ogDescription:
    "A five-step hair oiling routine: sectioning, scalp massage, timing and washing out.",
  path: "/how-to-use",
});

export default function HowToUsePage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[1fr_0.8fr]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to apply hair oil",
          image: `${siteUrl}${applyImage.src}`,
          totalTime: "PT10M",
          step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body })),
        }}
      />
      <div>
        <PageHeader
          crumb={{ name: "How to apply hair oil", href: "/how-to-use" }}
          eyebrow="The routine"
          title="How to Apply Hair Oil the Right Way"
        >
          A hair oiling routine takes about ten minutes of active time. The part that matters most
          is the one people skip: getting the oil onto the scalp and massaging it in properly.
        </PageHeader>

        <ol className="mt-10 space-y-8">
          {steps.map((s, idx) => (
            <li key={s.title} className="border-l-2 border-accent pl-5">
              <span className="eyebrow">Step {idx + 1}</span>
              <h2 className="mt-1 text-2xl">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="prose-body mt-14">
          <h2>How often should you oil your hair?</h2>
          <p>
            Two to three times a week suits most hair types. Oily scalps do better with once a week,
            applied a couple of hours before washing. Dry, coarse or chemically treated hair can
            handle three sessions comfortably.
          </p>

          <h2>How long should you leave hair oil on?</h2>
          <p>
            One to two hours is enough for the conditioning benefit. Overnight oiling is a tradition
            rather than a requirement, and scalps prone to flaking or buildup often do better with a
            shorter application.
          </p>

          <h2>Washing it out</h2>
          <p>
            Apply shampoo to the oiled scalp before wetting your hair — it lifts the oil far more
            easily. Rinse, then follow with a second gentle wash if needed, and avoid very hot
            water.
          </p>

          <h2>Should you apply hair oil before or after a shower?</h2>
          <p>
            Before. Oil applied to dry hair one to two hours before washing protects the strands
            during the wash and reaches the scalp properly. After a shower, use only a drop or two
            on damp ends to smooth frizz.{" "}
            <Link href="/guides/how-often-to-oil-hair#oil-on-wet-or-dry-hair">
              More on wet versus dry hair
            </Link>
            .
          </p>

          <h2>Common mistakes</h2>
          <ul>
            <li>Oiling only the lengths and never the scalp</li>
            <li>Using so much that it takes three aggressive washes to remove</li>
            <li>Combing or tying soaking-wet, oiled hair</li>
            <li>Judging results after one week instead of eight to twelve</li>
          </ul>

          <p>
            Read more in our guides on{" "}
            <Link href="/guides/how-often-to-oil-hair">how often to oil your hair</Link> and{" "}
            <Link href="/guides/hair-oil-benefits">the real benefits of hair oil</Link>.
          </p>

          <p>
            Ready to start? <Link href={`/products/${product.slug}`}>Explore our hair oil</Link> or{" "}
            <Link href="/faq">read the FAQs</Link>.
          </p>
        </div>
      </div>

      <Image
        src={applyImage}
        alt="Applying hair oil to the scalp with a dropper during a hair oiling routine"
        sizes="(min-width: 1024px) 470px, 100vw"
        placeholder="blur"
        className="h-fit w-full object-cover lg:sticky lg:top-8"
      />
    </section>
  );
}
