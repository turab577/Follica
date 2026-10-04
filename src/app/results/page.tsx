import Image from "next/image";
import Link from "next/link";
import resultsImage from "@/assets/hair-oil-results-hair-closeup.jpg";
import { PageHeader } from "@/components/page-header";
import { brand, product } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `Before & After Hair Oil Results | ${brand.name}`,
  description:
    "What a consistent hair oiling routine realistically changes, how long hair oil results take, and why individual results vary. No retouched photos, no guarantees.",
  ogDescription:
    "Honest expectations for hair care results from a regular hair oiling routine. Individual results may vary.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <PageHeader
          crumb={{ name: "Results", href: "/results" }}
          eyebrow="Results"
          title="Before & After Hair Oil Results"
        >
          We would rather set honest expectations than post a dramatic comparison photo. Here is
          what a consistent hair oiling routine changes, how long it takes, and what it will not do.
        </PageHeader>
      </section>

      <div className="mx-auto max-w-4xl px-5">
        <Image
          src={resultsImage}
          alt="Healthy-looking hair after a consistent hair oiling routine"
          sizes="(min-width: 896px) 856px, 100vw"
          placeholder="blur"
          className="w-full object-cover"
        />
      </div>

      <section className="prose-body mx-auto max-w-3xl px-5 py-16">
        <h2>What changes first</h2>
        <p>
          Condition shows up before anything else. Within the first few washes most people notice
          hair that feels softer, detangles more easily and reflects more light. That is the oil
          doing its most straightforward job: coating the hair shaft and reducing friction.
        </p>

        <h2>What takes longer</h2>
        <p>
          Less breakage is a slower, quieter result. When strands stop snapping mid-length, your
          hair keeps the length it grows, and after two or three months the overall shape looks
          fuller and more even. Hair grows roughly a centimetre a month, so this is a season-long
          hair growth journey, not a week-long one.
        </p>

        <h2>A realistic timeline</h2>
        <ul>
          <li>
            <strong>Weeks 1–2:</strong> softer texture, easier combing, less frizz.
          </li>
          <li>
            <strong>Weeks 3–6:</strong> a scalp that feels less dry and tight.
          </li>
          <li>
            <strong>Weeks 8–12:</strong> fewer short broken pieces, more even-looking lengths.
          </li>
        </ul>

        <h2>Individual results may vary</h2>
        <p>
          Hair type, water hardness, diet, stress, medication and underlying health all affect what
          you see. Two people using the same oil for the same three months can have genuinely
          different outcomes. We never claim guaranteed hair growth, and no hair oil should.
        </p>

        <h2>Our photo policy</h2>
        <p>
          We only publish genuine customer photographs, shared with permission and unretouched, and
          we publish the routine and timeframe alongside them. We do not use stock before-and-after
          images. As customer photos come in from real orders, they will be added to this page.
        </p>

        <h2>Cosmetic care, not medical treatment</h2>
        <p>
          If your parting is widening, you have round bald patches, or you are shedding in handfuls,
          that is a medical question — see a doctor or dermatologist.{" "}
          <Link href="/blog/hair-fall-hair-care">
            We explain the difference between shedding and breakage here
          </Link>
          .
        </p>

        <p>
          <Link href={`/products/${product.slug}`}>Explore our hair oil</Link> or{" "}
          <Link href="/how-to-use">learn how to use hair oil</Link>.
        </p>
      </section>
    </>
  );
}
