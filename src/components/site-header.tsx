import Link from "next/link";
import { brand, product } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { NavLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="site-header-bar mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-primary"
          aria-label={`${brand.name} home`}
        >
          {brand.name}
        </Link>
        <NavLinks />
        <Link href={`/products/${product.slug}`} className="btn-solid text-sm">
          Order — {formatPrice(product.price)}
        </Link>
      </div>
    </header>
  );
}
