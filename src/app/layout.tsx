import type { Metadata, Viewport } from "next";
import { Fraunces, Karla } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand, siteUrl, socialProfiles } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${brand.name} — Herbal Hair Oil in Pakistan`,
  applicationName: brand.name,
  twitter: { card: "summary_large_image" },
  // Google Search Console: add your token, e.g. verification: { google: "..." }
};

export const viewport: Viewport = {
  themeColor: "#f6f2e6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-PK"
      suppressHydrationWarning
      className={`${fraunces.variable} ${karla.variable}`}
    >
      <head>
        {/* Lets the mobile menu collapse only when JS runs; without JS the links stay listed. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: brand.name,
            url: siteUrl,
            description:
              "Herbal hair oil for scalp care and everyday hair care, delivered across Pakistan.",
            email: brand.email,
            areaServed: "PK",
            ...(brand.legalName && { legalName: brand.legalName }),
            ...(socialProfiles.length > 0 && { sameAs: socialProfiles.map((s) => s.url) }),
            contactPoint: {
              "@type": "ContactPoint",
              telephone: brand.phone,
              email: brand.email,
              contactType: "customer service",
              areaServed: "PK",
              availableLanguage: ["en", "ur"],
            },
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
