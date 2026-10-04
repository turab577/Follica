import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { brand, product, whatsappUrl } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `Contact ${brand.name} — Hair Oil Orders & Support`,
  description:
    "Contact Follica about a hair oil order, delivery across Pakistan, or advice on building a hair-care routine. WhatsApp, phone and email support.",
  ogTitle: `Contact ${brand.name}`,
  ogDescription: "Get in touch about orders, delivery or hair-care questions.",
  path: "/contact",
});

const details = [
  { label: "WhatsApp", value: brand.whatsapp, href: whatsappUrl },
  { label: "Phone", value: brand.phone, href: `tel:${brand.phone.replace(/\s/g, "")}` },
  { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { label: "Based in", value: brand.city },
  ...(brand.supportHours ? [{ label: "Support hours", value: brand.supportHours }] : []),
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <PageHeader
        crumb={{ name: "Contact", href: "/contact" }}
        eyebrow="Get in touch"
        title={`Contact ${brand.name}`}
      >
        Questions about an order, delivery, or whether our hair oil suits your hair type? Message us
        and we&apos;ll reply within one working day.
      </PageHeader>

      <dl className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
        {details.map((d) => (
          <div key={d.label} className="bg-background p-7">
            <dt className="eyebrow">{d.label}</dt>
            <dd className="mt-2 text-lg">
              {d.href ? (
                <a href={d.href} className="underline underline-offset-4">
                  {d.value}
                </a>
              ) : (
                d.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="prose-body mt-12">
        <h2>Placing an order</h2>
        <p>
          Send us your name, full delivery address with nearest landmark, and phone number. We
          confirm the order, dispatch it, and share the courier tracking number. Payment is Cash on
          Delivery — <Link href="/delivery">see delivery times and charges</Link>.
        </p>

        <h2>Before you write</h2>
        <p>
          Many questions are already answered in our <Link href="/faq">hair oil FAQs</Link> and on
          the <Link href={`/products/${product.slug}`}>{product.shortName} page</Link>.
        </p>

        <h2>A note on health advice</h2>
        <p>
          We can help with hair-care routines and product questions. We cannot diagnose hair loss.
          For heavy shedding, bald patches or a painful scalp, please see a doctor or dermatologist.
        </p>
      </div>
    </section>
  );
}
