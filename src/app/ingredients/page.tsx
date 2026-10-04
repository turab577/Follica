import Image from "next/image";
import Link from "next/link";
import ingredientsImage from "@/assets/natural-hair-oil-ingredients.jpg";
import { PageHeader } from "@/components/page-header";
import { brand, ingredients, product } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `Natural Hair Oil Ingredients in Our Herbal Blend | ${brand.name}`,
  description:
    "Amla, castor, coconut, almond, kalonji and rosemary — what each natural hair oil ingredient in the Follica herbal hair oil actually does for your scalp and hair.",
  ogTitle: `Natural Hair Oil Ingredients | ${brand.name}`,
  ogDescription:
    "An honest look at the botanical ingredients in our herbal hair oil and what each one contributes.",
  path: "/ingredients",
});

export default function IngredientsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <PageHeader
          crumb={{ name: "Ingredients", href: "/ingredients" }}
          eyebrow="The formula"
          title="Natural Hair Oil Ingredients — and What They Actually Do"
        >
          Every bottle of {product.name} is a blend of carrier oils and botanical extracts. Here is
          what each one contributes, without the marketing language.
        </PageHeader>
      </section>

      <div className="mx-auto max-w-5xl px-5">
        <Image
          src={ingredientsImage}
          alt="Botanical ingredients used in Follica herbal hair oil laid out on linen"
          sizes="(min-width: 1024px) 984px, 100vw"
          placeholder="blur"
          className="w-full object-cover"
        />
      </div>

      <section className="prose-body mx-auto max-w-3xl px-5 py-16">
        <h2>Carrier oils and botanicals</h2>
        <p>
          A hair oil is mostly carrier oil — the base that spreads across the scalp and coats the
          hair shaft. Botanical extracts are added in smaller amounts for scent, feel and tradition.
          Both matter, but the carrier decides how the oil behaves on your hair.
        </p>

        {ingredients.map((i) => (
          <div key={i.name}>
            <h3>{i.name}</h3>
            <p>
              {i.role}
              {i.guide && (
                <>
                  {" "}
                  <Link href={`/guides/${i.guide}`}>Read the full guide</Link>.
                </>
              )}
            </p>
          </div>
        ))}

        <h2>What we do not claim</h2>
        <p>
          No botanical ingredient, at any concentration, reverses medical hair loss. These
          ingredients condition the scalp and hair. That is a cosmetic benefit, and it is a real one
          — but it is not a treatment for alopecia, thyroid-related shedding or hormonal hair loss.
        </p>

        <h2>Patch testing</h2>
        <p>
          If you have sensitive skin or a history of reactions, apply a small amount to the inner
          arm and wait 24 hours before using the oil on your scalp.
        </p>

        <p>
          Next: <Link href="/how-to-use">learn how to use hair oil</Link> or{" "}
          <Link href={`/products/${product.slug}`}>explore our hair oil</Link>.
        </p>
      </section>
    </>
  );
}
