import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import productImage from "@/assets/hair-oil-pakistan-product.jpg";
import { FaqList } from "@/components/faq-list";
import { ProductReviews } from "@/components/product-reviews";
import { reviews, reviewSummary } from "@/data/reviews";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import {
  brand,
  deliveryCharge,
  faqs,
  freeDeliveryThreshold,
  ingredients,
  product,
  siteUrl,
  steps,
  whatsappUrl,
} from "@/data/site";
import { formatPrice } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

const productFaqs = faqs.slice(1, 9);

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: product.slug }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata({
    title: `Herbal Hair Oil Price in Pakistan — ${product.size}, ${formatPrice(product.price)} | ${brand.name}`,
    description: `${product.name}, ${product.size} for ${formatPrice(product.price)}. Amla, castor, coconut, almond, kalonji and rosemary for scalp care and less breakage. Cash on Delivery across Pakistan.`,
    ogTitle: `${product.name} — Natural Hair Oil for Scalp & Hair Care`,
    ogDescription: `Herbal scalp care oil, ${product.size} for ${formatPrice(product.price)}. Delivered across Pakistan.`,
    path: `/products/${slug}`,
    ogType: "product",
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (slug !== product.slug) notFound();
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const rating = reviewSummary();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          sku: product.sku,
          url: productUrl,
          image: [`${siteUrl}${productImage.src}`],
          description:
            "A herbal hair oil blending amla, castor, coconut, almond, black seed and rosemary for scalp nourishment and everyday hair care.",
          brand: { "@type": "Brand", name: brand.name },
          // Only genuine, visible reviews (src/data/reviews.ts) produce rating markup.
          ...(rating.count > 0 && {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: rating.average,
              reviewCount: rating.count,
              bestRating: 5,
              worstRating: 1,
            },
            review: reviews.slice(0, 10).map((r) => ({
              "@type": "Review",
              author: { "@type": "Person", name: r.author },
              datePublished: r.date,
              reviewBody: r.body,
              ...(r.title && { name: r.title }),
              reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            })),
          }),
          offers: {
            "@type": "Offer",
            url: productUrl,
            price: product.price,
            priceCurrency: product.currency,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            areaServed: "PK",
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: deliveryCharge,
                currency: product.currency,
              },
              shippingDestination: { "@type": "DefinedRegion", addressCountry: "PK" },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 2,
                  maxValue: 5,
                  unitCode: "DAY",
                },
              },
            },
          },
        }}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div className="hero-enter">
          <Image
            src={productImage}
            alt={`${brand.name} natural hair oil bottle, ${product.size}`}
            sizes="(min-width: 1024px) 560px, 100vw"
            placeholder="blur"
            priority
            className="w-full object-cover"
          />
        </div>
        <div>
          <div>
            <Breadcrumbs items={[{ name: product.shortName, href: `/products/${product.slug}` }]} />
            <p className="eyebrow mt-6">{product.size} · Herbal hair oil</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">
              {product.name} — Natural Hair Oil for Scalp &amp; Hair Care
            </h1>
            <p className="mt-6 text-2xl text-primary">{formatPrice(product.price)}</p>
            <p className="mt-5 text-muted-foreground">
              A herbal hair oil made for a real routine: scalp nourishment, hair fall care through
              less breakage, and hair that looks softer and healthier with consistent use. Cash on
              Delivery across Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={whatsappUrl} className="btn-solid" target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
              <Link href="/contact" className="btn-outline">
                Order by phone or email
              </Link>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              <li>· {product.size} bottle — roughly three to four months of twice-weekly use</li>
              <li>· Cash on Delivery nationwide</li>
              <li>· Delivered in 2–5 working days</li>
              <li>
                · {formatPrice(deliveryCharge)} delivery, free over{" "}
                {formatPrice(freeDeliveryThreshold)}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-body mx-auto max-w-3xl px-5">
        <h2>What is {product.name}?</h2>
        <p>
          {product.name} is a blended herbal hair oil made for regular use rather than occasional
          treatment. It combines coconut and sweet almond oils as a spreadable base with castor oil
          for conditioning weight, plus amla, black seed and rosemary — the botanicals that have
          been part of hair oiling in this part of the world for generations.
        </p>
        <p>
          It is designed for scalp care first. The hair benefits follow from a scalp that is
          conditioned and hair that is protected from the friction that causes breakage.
        </p>

        <h2>Herbal Hair Oil Price in Pakistan</h2>
        <p>
          A {product.size} bottle of {product.name} costs {formatPrice(product.price)} — about{" "}
          {formatPrice(Math.round(product.price / 5))} per 100ml — with Cash on Delivery anywhere in
          Pakistan. Used twice a week, one bottle lasts roughly three to four months, so a
          consistent routine costs around {formatPrice(Math.round(product.price / 3.5))} a month.
          Delivery is a flat {formatPrice(deliveryCharge)}, and free on orders of{" "}
          {formatPrice(freeDeliveryThreshold)} or more.{" "}
          <Link href="/guides/best-hair-oil-in-pakistan">
            How to compare hair oil prices in Pakistan
          </Link>
          .
        </p>

        <h2>Who is it for?</h2>
        <ul>
          <li>Anyone with dry hair, frizz or visible breakage along the lengths</li>
          <li>People with a dry, tight-feeling scalp, especially in hard-water areas</li>
          <li>Men and women building a consistent hair-oiling routine</li>
          <li>Chemically treated or heat-styled hair that needs extra conditioning</li>
        </ul>
        <p>
          It is not suitable as a treatment for medical hair loss. If you have sudden heavy
          shedding, bald patches or a painful scalp, see a doctor.
        </p>

        <h2>Key Benefits</h2>
        <ul>
          <li>Helps nourish the scalp and keep it from feeling dry and tight</li>
          <li>Helps reduce the appearance of dryness and breakage</li>
          <li>Supports softer, healthier-looking hair with consistent use</li>
          <li>Makes detangling easier, which means less snapping while combing</li>
          <li>Designed for a consistent hair-care routine at a workable price per month</li>
        </ul>

        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((i) => (
            <li key={i.name}>
              <strong>{i.name}</strong> — {i.role}
            </li>
          ))}
        </ul>
        <p>
          <Link href="/ingredients">See the ingredients explained in detail</Link>, or read about{" "}
          <Link href="/guides/rosemary-oil-for-hair">rosemary</Link>,{" "}
          <Link href="/guides/castor-oil-for-hair">castor</Link>,{" "}
          <Link href="/guides/amla-oil-for-hair">amla</Link> and{" "}
          <Link href="/guides/kalonji-oil-for-hair">kalonji oil</Link> for hair.
        </p>

        <h2>How to Use</h2>
        <ol>
          {steps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}.</strong> {s.body}
            </li>
          ))}
        </ol>
        <p>
          <Link href="/how-to-use">Learn how to use hair oil step by step</Link>.
        </p>

        <h2>How Often Should You Use It?</h2>
        <p>
          Two to three times a week suits most people. Once a week is enough if your scalp gets oily
          quickly; three times suits dry, coarse or chemically treated hair. Leave it on for one to
          two hours before washing.
        </p>

        <h2>Expected Results</h2>
        <p>
          Most people notice softer, smoother hair within the first few washes. Changes in breakage
          and overall condition take eight to twelve weeks of consistent use to become visible,
          because hair grows roughly a centimetre a month. Individual results may vary, and this is
          a cosmetic hair-care product rather than a treatment for hair-loss conditions.
        </p>
      </section>

      <ProductReviews />

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <h2 className="mt-10 mb-6 text-[1.6rem]">Frequently Asked Questions</h2>
        <FaqList items={productFaqs} />
        <p className="mt-8 text-sm [&_a]:underline [&_a]:underline-offset-4">
          <Link href="/faq">Read all hair oil FAQs</Link> ·{" "}
          <Link href="/delivery">Delivery across Pakistan</Link> ·{" "}
          <Link href="/results">Before &amp; after results</Link>
        </p>
      </section>
    </>
  );
}
