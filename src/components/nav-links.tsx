"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/guides", label: "Guides" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/how-to-use", label: "How to Use" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/delivery", label: "Delivery" },
  { href: "/blog", label: "Journal" },
];

export function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main" className="text-sm">
      <button
        type="button"
        className="menu-toggle md:hidden"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      <div id="main-navigation" className={`nav-panel ${open ? "nav-panel-open" : ""}`}>
        {nav.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`${active ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
