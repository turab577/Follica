export function FaqList({
  items,
  headingLevel = "h3",
}: {
  items: { q: string; a: string }[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="faq-row py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
            <Heading className="font-display text-lg">{item.q}</Heading>
            <span aria-hidden="true" className="faq-icon text-xl leading-none text-accent">
              +
            </span>
          </summary>
          <p className="faq-answer mt-3 max-w-3xl text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
