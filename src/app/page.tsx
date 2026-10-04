import Image from "next/image";
import Link from "next/link";
import applyImage from "@/assets/applying-hair-oil-to-scalp.jpg";
import heroImage from "@/assets/hair-oil-pakistan-product.jpg";
import resultsImage from "@/assets/hair-oil-results-hair-closeup.jpg";
import ingredientsImage from "@/assets/natural-hair-oil-ingredients.jpg";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { guides } from "@/data/guides";
import {
  benefits,
  brand,
  cities,
  faqs,
  freeDeliveryThreshold,
  ingredients,
  product,
  siteUrl,
  steps,
} from "@/data/site";
import { formatPrice } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

const homeFaqs = faqs.slice(0, 6);
const featuredGuides = [
  "best-hair-oil-in-pakistan",
  "hair-oil-for-hair-growth",
  "hair-oil-for-hair-fall",
  "rosemary-oil-for-hair",
  "how-often-to-oil-hair",
  "best-oil-for-low-porosity-hair",
].flatMap((slug) => guides.filter((g) => g.slug === slug));
const productHref = `/products/${product.slug}`;
const halfWidth = "(min-width: 1024px) 560px, 100vw";

export const metadata = pageMetadata({
  title: `Hair Oil in Pakistan — Natural Herbal Hair Oil | ${brand.name}`,
  description:
    "Buy herbal hair oil online in Pakistan: amla, castor, coconut, almond, kalonji and rosemary in a 500ml bottle for Rs 1,400. Cash on Delivery nationwide.",
  ogDescription:
    "Herbal hair oil for scalp nourishment and everyday hair care. Delivered across Pakistan with Cash on Delivery.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: brand.name,
          url: siteUrl,
          inLanguage: "en-PK",
          description:
            "Herbal hair oil in Pakistan for scalp care, healthier-looking hair and an everyday hair-care routine.",
        }}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <h1>
            <span className="eyebrow block font-sans">Herbal hair oil in Pakistan</span>{" "}
            <span className="mt-5 block text-5xl leading-[1.05] sm:text-6xl">{brand.tagline}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Shop premium hair oil in Pakistan formulated for scalp nourishment, healthier-looking
            hair and everyday hair care. {product.size} of amla, castor, coconut, almond, kalonji
            and rosemary — enough for months of a real routine.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href={productHref} className="btn-solid">
              Explore our hair oil — {formatPrice(product.price)}
            </Link>
            <Link href="/how-to-use" className="link">
              Learn how to use hair oil
            </Link>
          </div>
          <ul className="mt-8 grid max-w-lg grid-cols-3 border-y border-border text-sm">
            {[
              ["Cash on Delivery", "Pay on arrival"],
              ["2–5 days", "Nationwide"],
              [product.size, "Months of use"],
            ].map(([title, sub]) => (
              <li
                key={title}
                className="border-r border-border py-4 pr-3 pl-3 first:pl-0 last:border-r-0"
              >
                <span className="block font-display text-lg text-primary">{title}</span>
                <span className="text-muted-foreground">{sub}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={heroImage}
          alt={`${brand.name} natural hair oil bottle with rosemary and amla`}
          sizes="(min-width: 1024px) 530px, 100vw"
          placeholder="blur"
          priority
          className="w-full object-cover"
        />
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl">Why Scalp Care Matters</h2>
          <div className="mt-6 grid gap-8 text-muted-foreground lg:grid-cols-3">
            <p>
              Hair grows from the scalp, and a scalp that is dry, tight or neglected shows in the
              hair it produces. A few minutes of massage a couple of times a week is the simplest
              habit in hair care.
            </p>
            <p>
              Hard water, dust and long summers are hard on hair in Pakistan. Oiling before a wash
              gives the hair shaft a protective coat and helps reduce the appearance of dryness and
              breakage.
            </p>
            <p>
              Hair oiling is cosmetic care, not a medical treatment. If you are shedding heavily or
              your parting is widening, speak to a doctor —{" "}
              <Link href="/blog/hair-fall-hair-care">we wrote about the difference here</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl">Benefits of Our Hair Oil</h2>
        <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="bg-background p-7">
              <h3 className="text-xl">{b.title}</h3>
              <p className="mt-3 text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
        <Image
          src={ingredientsImage}
          alt="Botanical ingredients used in Follica herbal hair oil"
          sizes={halfWidth}
          placeholder="blur"
          className="w-full object-cover"
        />
        <div>
          <h2 className="text-3xl">What&apos;s Inside the Formula</h2>
          <ul className="mt-6 space-y-4">
            {ingredients.slice(0, 4).map((i) => (
              <li key={i.name}>
                <span className="font-display text-lg text-primary">{i.name}</span>
                <p className="text-muted-foreground">{i.role}</p>
              </li>
            ))}
          </ul>
          <Link href="/ingredients" className="link mt-7 inline-block">
            See the ingredients in full
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">Before &amp; After Hair Oil Results</h2>
            <p className="mt-5 text-muted-foreground">
              What customers notice first is condition: less frizz, fewer snapped ends, hair that
              holds a shine. That comes from consistency over eight to twelve weeks, not from a
              single application.
            </p>
            <p className="mt-4 text-muted-foreground">
              We only publish genuine customer photographs, and we publish them without retouching.
              Individual results may vary.
            </p>
            <Link href="/results" className="link mt-7 inline-block">
              See real hair oil results
            </Link>
          </div>
          <Image
            src={resultsImage}
            alt="Healthy-looking hair after a regular hair oiling routine"
            sizes={halfWidth}
            placeholder="blur"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Image
          src={applyImage}
          alt="Applying hair oil to the scalp with a dropper"
          sizes="(min-width: 1024px) 500px, 100vw"
          placeholder="blur"
          className="w-full object-cover"
        />
        <div>
          <h2 className="text-3xl">How to Use Hair Oil</h2>
          <ol className="mt-6 space-y-5">
            {steps.map((s, idx) => (
              <li key={s.title} className="flex gap-4">
                <span className="mt-1 text-sm text-accent">{String(idx + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-display text-lg text-primary">{s.title}</span>
                  <p className="text-muted-foreground">{s.body}</p>
                </span>
              </li>
            ))}
          </ol>
          <Link href="/how-to-use" className="link mt-7 inline-block">
            Read the full hair oiling routine
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Hair oil guides</p>
              <h2 className="mt-3 text-3xl">Popular Hair Oil Questions, Answered</h2>
            </div>
            <Link href="/guides" className="link">
              All hair oil guides
            </Link>
          </div>
          <ul className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((g) => (
              <li key={g.slug} className="bg-background">
                <Link
                  href={`/guides/${g.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-secondary/50"
                >
                  <span className="eyebrow">{g.eyebrow}</span>
                  <h3 className="mt-3 text-xl group-hover:text-accent">{g.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{g.quickAnswer}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-3xl">Frequently Asked Questions</h2>
        <div className="mt-8">
          <FaqList items={homeFaqs} />
        </div>
        <Link href="/faq" className="link mt-7 inline-block">
          All hair oil questions answered
        </Link>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20 text-center">
        <h2 className="text-3xl">Hair oil delivered across Pakistan</h2>
        <p className="mt-4 text-muted-foreground">
          We ship to {cities.slice(0, 5).join(", ")} and every other city and town in Pakistan, with
          Cash on Delivery on every order and free delivery over{" "}
          {formatPrice(freeDeliveryThreshold)}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={productHref} className="btn-solid">
            Order {product.shortName}
          </Link>
          <Link href="/delivery" className="btn-outline">
            Delivery &amp; charges
          </Link>
        </div>
      </section>
    </>
  );
}
