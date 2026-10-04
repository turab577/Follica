import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { guides } from "@/data/guides";
import { product, siteUrl } from "@/data/site";

// Bump when static page content changes meaningfully.
const lastUpdated = "2026-10-04";

const staticPaths = [
  "/",
  `/products/${product.slug}`,
  "/guides",
  "/ingredients",
  "/how-to-use",
  "/results",
  "/faq",
  "/delivery",
  "/contact",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: lastUpdated })),
    ...guides.map((g) => ({ url: `${siteUrl}/guides/${g.slug}`, lastModified: g.updated })),
    ...posts.map((p) => ({ url: `${siteUrl}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
