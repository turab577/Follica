// Customer reviews for the product page. Add ONLY genuine reviews from real orders, shared with
// the customer's permission. Rating structured data (AggregateRating/Review) is emitted
// automatically once this list is non-empty — never add placeholder or invented reviews.
export type Review = {
  author: string;
  city?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  title?: string;
  body: string;
  verifiedPurchase: boolean;
};

export const reviews: Review[] = [];

export function reviewSummary() {
  const count = reviews.length;
  const average = count ? reviews.reduce((sum, r) => sum + r.rating, 0) / count : 0;
  const distribution = ([5, 4, 3, 2, 1] as const).map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
  }));
  return { count, average: Math.round(average * 10) / 10, distribution };
}
