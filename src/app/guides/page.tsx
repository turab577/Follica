import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { guideCategories, guides } from "@/data/guides";
import { brand, siteUrl } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `Hair Oil Guides — Answers to Common Questions | ${brand.name}`,
  description:
    "Honest answers to the most-searched hair oil questions in Pakistan: hair growth, hair fall, dandruff, rosemary, castor, amla and kalonji oil, and how often to oil.",
  ogTitle: `Hair Oil Guides | ${brand.name}`,
  ogDescription: "Plain-language answers to the hair oil questions people search for most.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Hair Oil Guides",
          url: `${siteUrl}/guides`,
          hasPart: guides.map((g) => ({
            "@type": "Article",
            headline: g.title,
            url: `${siteUrl}/guides/${g.slug}`,
          })),
        }}
      />
      <div>
        <Breadcrumbs items={[{ name: "Guides", href: "/guides" }]} />
        <h1 className="mt-4 text-4xl sm:text-5xl">Hair Oil Questions, Answered Properly</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          In-depth guides built around the hair oil questions people in Pakistan actually search
          for. Each one starts with a short answer, then explains the detail — no miracle claims.
        </p>
      </div>

      {guideCategories.map((category) => (
        <section key={category} className="mt-14">
          <h2 className="text-3xl">{category}</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {guides
              .filter((g) => g.category === category)
              .map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="group flex h-full flex-col border border-border bg-card p-7 transition-colors hover:border-accent"
                  >
                    <span className="eyebrow">
                      {g.eyebrow} · {g.sections.length} questions
                    </span>
                    <h3 className="mt-3 text-2xl group-hover:text-accent">{g.title}</h3>
                    <p className="mt-3 flex-1 text-muted-foreground">{g.description}</p>
                    <span className="mt-5 text-sm text-primary underline underline-offset-4">
                      Read the guide
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
