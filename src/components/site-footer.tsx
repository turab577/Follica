import Link from "next/link";
import { guides } from "@/data/guides";
import { brand, cities, product, socialProfiles } from "@/data/site";

const columns = [
  {
    title: "Shop",
    links: [
      { href: `/products/${product.slug}`, label: product.shortName },
      { href: "/ingredients", label: "See the ingredients" },
      { href: "/how-to-use", label: "Learn how to use hair oil" },
      { href: "/results", label: "Before & after results" },
    ],
  },
  {
    title: "Guides",
    links: guides.map((g) => ({ href: `/guides/${g.slug}`, label: g.shortTitle })),
  },
  {
    title: "Help",
    links: [
      { href: "/delivery", label: "Delivery across Pakistan" },
      { href: "/faq", label: "Hair oil FAQs" },
      { href: "/contact", label: "Contact us" },
      { href: "/blog", label: "Hair care journal" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-display text-2xl text-primary">{brand.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Herbal hair oil made for scalp care and an everyday hair-care routine, delivered across
            Pakistan with Cash on Delivery.
          </p>
          {brand.supportHours && (
            <p className="mt-3 text-sm text-muted-foreground">Support: {brand.supportHours}</p>
          )}
          {socialProfiles.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-4 text-sm">
              {socialProfiles.map((s) => (
                <li key={s.network}>
                  <a
                    href={s.url}
                    className="capitalize hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    {s.network}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="text-sm">
            <h2 className="eyebrow mb-3">{col.title}</h2>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="text-sm">
          <h2 className="eyebrow mb-3">We deliver to</h2>
          <p className="text-muted-foreground">{cities.join(" · ")} and the rest of Pakistan.</p>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        <p>
          {brand.name} hair oil is a cosmetic hair-care product, not a medical treatment. Individual
          results may vary.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} {brand.legalName || brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
