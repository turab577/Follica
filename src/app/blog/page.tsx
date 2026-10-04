import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { posts } from "@/data/blog";
import { brand } from "@/data/site";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `Hair Care Journal — Oiling, Hair Fall & Routines | ${brand.name}`,
  description:
    "Practical hair care writing for Pakistan: oiling routines, shedding versus breakage, seasonal hair care and what natural hair oil ingredients do.",
  ogTitle: `Hair Care Journal | ${brand.name}`,
  ogDescription: "Guides on hair oiling routines, hair fall care and natural hair oil ingredients.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <Breadcrumbs items={[{ name: "Journal", href: "/blog" }]} />
      <h1 className="mt-6 text-4xl sm:text-5xl">Hair Care, Written Honestly</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Guides on hair oiling routines, hair fall care and what the ingredients in a herbal hair oil
        actually do — written for hair care in Pakistan.
      </p>

      <ul className="mt-12 divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.slug} className="py-8">
            <p className="eyebrow">
              {formatDate(post.date)} · {post.readingTime}
            </p>
            <h2 className="mt-2 text-2xl">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
