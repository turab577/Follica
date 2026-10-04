import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { getPost, posts } from "@/data/blog";
import { brand, product, siteUrl } from "@/data/site";
import { formatDate, formatPrice } from "@/lib/format";
import { ogImage, pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.seoTitle ?? post.title} | ${brand.name}`,
    description: post.description,
    ogTitle: post.title,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${siteUrl}/blog/${post.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          image: `${siteUrl}${ogImage.url}`,
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: brand.name, url: siteUrl },
          publisher: { "@type": "Organization", name: brand.name, url: siteUrl },
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Journal", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
      </p>
      <p className="mt-8 text-lg text-muted-foreground">{post.intro}</p>

      <div className="prose-body mt-8" dangerouslySetInnerHTML={{ __html: post.body }} />

      <aside className="mt-14 border border-border bg-card p-7">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="mt-3 text-muted-foreground">
          {product.size} of herbal hair oil for scalp care and everyday hair care —{" "}
          {formatPrice(product.price)}, Cash on Delivery across Pakistan.
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

      <section className="mt-14">
        <h2 className="text-2xl">Related reading</h2>
        <ul className="mt-5 space-y-3">
          {related.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="underline underline-offset-4 hover:text-accent"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
