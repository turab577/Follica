import Link from "next/link";
import { siteUrl } from "@/data/site";
import { JsonLd } from "./json-ld";

type Crumb = { name: string; href: string };

// Visible breadcrumb trail plus matching BreadcrumbList structured data. "Home" is implied.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: c.name,
            item: `${siteUrl}${c.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="eyebrow">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {trail.map((c, idx) => {
            const last = idx === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-foreground/70">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="hover:text-primary">
                      {c.name}
                    </Link>
                    <span aria-hidden="true" className="text-accent">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
