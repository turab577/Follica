import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { brand, cities, deliveryCharge, freeDeliveryThreshold, product } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `Hair Oil Delivery Across Pakistan | ${brand.name}`,
  description:
    "Buy hair oil online in Pakistan with Cash on Delivery. Delivery areas, timelines, shipping charges, order tracking and customer support explained.",
  ogDescription:
    "Nationwide hair oil delivery with Cash on Delivery, 2–5 working days, plus tracking and support details.",
  path: "/delivery",
});

export default function DeliveryPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <PageHeader
        crumb={{ name: "Delivery", href: "/delivery" }}
        eyebrow="Shipping"
        title="Hair Oil Delivery Across Pakistan"
      >
        Buy hair oil online in Pakistan and pay the courier when it arrives. Here is exactly how
        delivery, charges, tracking and support work.
      </PageHeader>

      <div className="prose-body mt-12">
        <h2>Delivery areas</h2>
        <p>
          We deliver nationwide through our courier partners — every city, town and cantonment they
          service. That includes {cities.join(", ")}, along with smaller towns and rural addresses.
        </p>

        <h2>Estimated delivery times</h2>
        <ul>
          <li>
            <strong>Major cities:</strong> 2–3 working days
          </li>
          <li>
            <strong>Smaller towns and rural areas:</strong> 3–5 working days
          </li>
          <li>Orders placed on Sundays and public holidays are dispatched the next working day</li>
        </ul>

        <h2>Cash on Delivery</h2>
        <p>
          Cash on Delivery is available on every order across Pakistan. You pay the courier in cash
          when the parcel reaches you — nothing is charged upfront. Please keep the exact amount
          ready, as riders often cannot make change.
        </p>

        <h2>Shipping charges</h2>
        <ul>
          <li>Flat {formatPrice(deliveryCharge)} delivery charge nationwide</li>
          <li>Free delivery on orders of {formatPrice(freeDeliveryThreshold)} and above</li>
          <li>No hidden Cash on Delivery surcharge</li>
        </ul>
        <p>
          A single {product.size} bottle of {product.shortName} is {formatPrice(product.price)}.
        </p>

        <h2>Order tracking</h2>
        <p>
          Once your parcel is dispatched we send the courier tracking number by SMS or WhatsApp to
          the number on your order. You can follow the parcel on the courier&apos;s website until it
          reaches you.
        </p>

        <h2>Failed or refused deliveries</h2>
        <p>
          Couriers attempt delivery twice. If nobody is available both times, the parcel returns to
          us and we will contact you to re-arrange. Please make sure your phone number and address
          are complete, including nearest landmark.
        </p>

        <h2>Customer support</h2>
        <p>
          Something wrong with your order? Email <a href={`mailto:${brand.email}`}>{brand.email}</a>{" "}
          or message us on WhatsApp at {brand.whatsapp}. We reply within one working day.{" "}
          <Link href="/contact">Full contact details are here</Link>.
        </p>

        <p>
          <Link href={`/products/${product.slug}`}>Order {product.shortName}</Link> or{" "}
          <Link href="/faq">read the FAQs first</Link>.
        </p>
      </div>
    </section>
  );
}
