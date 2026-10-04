import { reviews, reviewSummary } from "@/data/reviews";
import { whatsappUrl } from "@/data/site";
import { formatDate } from "@/lib/format";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-accent" aria-hidden="true">
      {"★".repeat(Math.round(rating))}
      <span className="text-border">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

export function ProductReviews() {
  const { count, average, distribution } = reviewSummary();

  return (
    <section id="reviews" className="mx-auto max-w-3xl scroll-mt-8 px-5 pt-6">
      <h2 className="text-[1.6rem]">Customer Reviews</h2>

      {count === 0 ? (
        <div className="mt-6 border border-border bg-card p-7">
          <p className="text-muted-foreground">
            No reviews yet. We only publish genuine reviews from real orders — never paid, invented
            or edited. Tried our hair oil? Tell us how your hair felt after a few weeks.
          </p>
          <a
            href={whatsappUrl}
            className="btn-outline mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share your review on WhatsApp
          </a>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-8 border border-border bg-card p-7 sm:grid-cols-[auto_1fr]">
            <div>
              <p className="font-display text-5xl text-primary">{average.toFixed(1)}</p>
              <p className="mt-2 text-lg">
                <Stars rating={average} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Based on {count} {count === 1 ? "review" : "reviews"}
              </p>
            </div>
            <ul className="space-y-2 text-sm" aria-label="Rating breakdown">
              {distribution.map((d) => (
                <li key={d.stars} className="flex items-center gap-3">
                  <span className="w-10 text-muted-foreground">{d.stars} ★</span>
                  <span className="h-1.5 flex-1 bg-secondary">
                    <span
                      className="block h-full bg-accent"
                      style={{ width: `${(d.count / count) * 100}%` }}
                    />
                  </span>
                  <span className="w-8 text-right text-muted-foreground">{d.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-6 divide-y divide-border border-y border-border">
            {reviews.map((r) => (
              <li key={`${r.author}-${r.date}`} className="py-6">
                <p className="flex flex-wrap items-center gap-x-3 text-sm">
                  <Stars rating={r.rating} />
                  <span className="sr-only">{r.rating} out of 5 stars</span>
                  <span className="text-primary">{r.author}</span>
                  {r.city && <span className="text-muted-foreground">{r.city}</span>}
                  {r.verifiedPurchase && (
                    <span className="eyebrow text-accent">Verified order</span>
                  )}
                </p>
                {r.title && <h3 className="mt-3 font-display text-lg">{r.title}</h3>}
                <p className="mt-2 text-muted-foreground">{r.body}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  <time dateTime={r.date}>{formatDate(r.date)}</time>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
