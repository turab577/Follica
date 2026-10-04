import { guides } from "@/data/guides";
import { brand, product, siteUrl } from "@/data/site";
import { formatPrice } from "@/lib/format";

// Plain-text site summary for AI search engines and agents (llmstxt.org convention).
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${brand.name}`,
    "",
    `> ${brand.name} sells ${product.name} (${product.size}, ${formatPrice(product.price)}), a herbal hair oil with amla, castor, coconut, almond, kalonji and rosemary, delivered across Pakistan with Cash on Delivery. It is a cosmetic hair-care product, not a medical treatment.`,
    "",
    "## Shop",
    `- [${product.name}](${siteUrl}/products/${product.slug}): price, ingredients, how to use, delivery`,
    `- [Ingredients](${siteUrl}/ingredients)`,
    `- [How to apply hair oil](${siteUrl}/how-to-use)`,
    `- [Delivery across Pakistan](${siteUrl}/delivery)`,
    `- [FAQ](${siteUrl}/faq)`,
    `- [Contact](${siteUrl}/contact)`,
    "",
    "## Hair oil guides",
    ...guides.map((g) => `- [${g.title}](${siteUrl}/guides/${g.slug}): ${g.description}`),
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
