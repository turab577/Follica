import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { faqJsonLd, JsonLd } from "@/components/json-ld";
import { getGuide, guides } from "@/data/guides";
import { brand, product, siteUrl } from "@/data/site";
import { formatDate, formatPrice } from "@/lib/format";
import { ogImage, pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return pageMetadata({
    title: `${guide.metaTitle} | ${brand.name}`,
    description: guide.description,
    ogTitle: guide.title,
    path: `/guides/${guide.slug}`,
    ogType: "article",
    publishedTime: guide.date,
  });
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  const url = `${siteUrl}/guides/${guide.slug}`;
  // Same-category guides first, then the rest, so related links stay topical.
  const others = [
    ...guides.filter((g) => g.slug !== guide.slug && g.category === guide.category),
    ...guides.filter((g) => g.category !== guide.category),
  ].slice(0, 6);

  return (
    <article className="mx-auto max-w-6xl px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          image: `${siteUrl}${ogImage.url}`,
          datePublished: guide.date,
          dateModified: guide.updated,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: brand.name, url: siteUrl },
          publisher: { "@type": "Organization", name: brand.name, url: siteUrl },
        }}
      />
      <JsonLd data={faqJsonLd(guide.sections.map((s) => ({ q: s.q, a: s.answer })))} />

      <div className="max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Guides", href: "/guides" },
            { name: guide.shortTitle, href: `/guides/${guide.slug}` },
          ]}
        />
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{guide.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> ·{" "}
          {guide.readingTime}
        </p>
        <p className="mt-8 text-lg text-muted-foreground">{guide.intro}</p>

        <div className="mt-8 border-l-2 border-accent bg-card p-6">
          <p className="eyebrow">The short answer</p>
          <p className="mt-2 text-lg leading-relaxed">{guide.quickAnswer}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_17rem]">
        <div className="max-w-3xl">
          {guide.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-8 border-t border-border py-10">
              <h2 className="text-[1.75rem] leading-snug">{s.q}</h2>
              <p className="mt-4 text-lg leading-relaxed">{s.answer}</p>
              {s.body && (
                <div className="prose-body mt-5" dangerouslySetInnerHTML={{ __html: s.body }} />
              )}
            </section>
          ))}

          <p className="border-t border-border pt-8 text-sm text-muted-foreground">
            This guide is general hair-care information, not medical advice. For heavy shedding,
            bald patches or a painful scalp, see a doctor or dermatologist.
          </p>
        </div>

        <aside className="lg:sticky lg:top-8 lg:h-fit">
          <nav aria-label="On this page" className="border border-border bg-card p-6">
            <p className="eyebrow">On this page</p>
            <ol className="mt-4 space-y-3 text-sm">
              {guide.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary">
                    {s.q}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>

      <aside className="mt-14 max-w-3xl border border-border bg-card p-7">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="mt-3 text-muted-foreground">
          A {product.size} herbal blend of amla, castor, coconut, almond, kalonji and rosemary for
          scalp care and a consistent oiling routine — {formatPrice(product.price)}, Cash on
          Delivery across Pakistan.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href={`/products/${product.slug}`} className="btn-solid">
            Explore our hair oil
          </Link>
          <Link href="/how-to-use" className="btn-outline">
            Learn how to use hair oil
          </Link>
        </div>
      </aside>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl">Related hair oil guides</h2>
        <ul className="mt-5 space-y-3">
          {others.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="underline underline-offset-4 hover:text-accent"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/guides" className="link mt-6 inline-block">
          See all hair oil guides
        </Link>
      </section>
    </article>
  );
}
