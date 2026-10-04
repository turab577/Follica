# Follica SEO keyword map

Researched 4 October 2026 from Google Autocomplete (Pakistan, English): 283 distinct queries across 30 hair-oil seed terms. Autocomplete shows which queries people actually type, but not search volumes. Before setting targets, check volumes in Google Keyword Planner or Ahrefs, and check impressions in Search Console once the site is live.

**Priority** combines how strong the demand signal is, how close the query is to a purchase, and how realistic it is for a new domain to rank. P1 = target first.

| #   | Keyword cluster (main → variants)                                                                                                 | Intent     | Priority | Target page                                             |
| --- | --------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------- | ------------------------------------------------------- |
| 1   | hair oil in pakistan · herbal hair oil in pakistan · organic hair oil in pakistan · hair oil online                               | Buy        | P1       | `/`                                                     |
| 2   | hair oil price in pakistan · herbal hair oil price in pakistan · hair growth oil price in pakistan                                | Buy        | P1       | `/products/herbal-hair-oil`                             |
| 3   | best hair oil in pakistan · best hair oil in pakistan for men / women / online · hair oil brands in pakistan                      | Compare    | P1       | `/guides/best-hair-oil-in-pakistan`                     |
| 4   | hair oil for hair growth · best hair oil for hair growth (and thickness) in pakistan · hair growth oil · homemade hair growth oil | Info + buy | P1       | `/guides/hair-oil-for-hair-growth`                      |
| 5   | hair oil for hair fall · anti hair fall oil · best hair oil for hair fall in pakistan · hair fall control oil                     | Info + buy | P1       | `/guides/hair-oil-for-hair-fall`                        |
| 6   | rosemary oil for hair · rosemary hair oil · rosemary oil benefits · rosemary oil in urdu                                          | Info       | P1       | `/guides/rosemary-oil-for-hair`                         |
| 7   | onion hair oil · onion hair oil benefits · onion oil for hair growth                                                              | Info       | P2       | `/guides/onion-hair-oil`                                |
| 8   | how to apply hair oil · how to apply hair oil to scalp / before shower / correctly                                                | How-to     | P2       | `/how-to-use`                                           |
| 9   | how often should I oil my hair · oil on wet or dry hair · is 30 minutes enough · oiling mistakes                                  | How-to     | P2       | `/guides/how-often-to-oil-hair`                         |
| 10  | hair oil for men · hair oil for men hair growth / hair fall / daily use                                                           | Info + buy | P2       | `/guides/hair-oil-for-men`                              |
| 11  | hair oil for women · hair oil for women hair growth                                                                               | Info + buy | P2       | `/guides/hair-oil-for-women`                            |
| 12  | castor oil for hair · castor oil for hair growth · castor oil side effects                                                        | Info       | P2       | `/guides/castor-oil-for-hair`                           |
| 13  | amla oil · amla oil benefits for hair · amla oil for low porosity hair                                                            | Info       | P2       | `/guides/amla-oil-for-hair`                             |
| 14  | kalonji oil for hair · kalonji oil for hair growth / side effects                                                                 | Info       | P2       | `/guides/kalonji-oil-for-hair`                          |
| 15  | coconut oil for hair · coconut oil for hair fall / growth / side effects                                                          | Info       | P2       | `/guides/coconut-oil-for-hair`                          |
| 16  | almond oil for hair · almond oil for hair fall / growth                                                                           | Info       | P2       | `/guides/almond-oil-for-hair`                           |
| 17  | hair oil for dandruff · hair oil for dandruff and itchy scalp / hair fall                                                         | Info       | P2       | `/guides/hair-oil-for-dandruff`                         |
| 18  | hair oil for dry hair · hair oil for dry and frizzy hair · hair oil for frizzy hair                                               | Info + buy | P2       | `/guides/hair-oil-for-dry-frizzy-hair`                  |
| 19  | what oil is best for your hair · healthiest oil for hair · oils not to use on hair                                                | Info       | P2       | `/guides/best-oil-for-hair`                             |
| 20  | hair oil benefits · hair oil uses                                                                                                 | Info       | P3       | `/guides/hair-oil-benefits`                             |
| 21  | hair oil for low porosity hair · best oil for low porosity hair · high porosity hair oil                                          | Info       | P3       | `/guides/best-oil-for-low-porosity-hair`                |
| 22  | hair oil for grey hair · grey hair to black                                                                                       | Info       | P3       | `/guides/hair-oil-for-grey-hair`                        |
| 23  | hair oil for oily scalp · oily scalp and dry ends                                                                                 | Info       | P3       | `/guides/hair-oil-for-oily-scalp`                       |
| 24  | hair oil for thin hair · hair oil for fine hair · hair oil for thicker hair                                                       | Info       | P3       | `/guides/hair-oil-for-thin-hair`                        |
| 25  | hair oils for androgenic alopecia · oil for blocking DHT · big 3 for hair regrowth                                                | Info       | P3       | `/guides/hair-oil-for-androgenetic-alopecia`            |
| 26  | natural hair oil ingredients · herbal hair oil ingredients (list)                                                                 | Info       | P3       | `/ingredients`                                          |
| 27  | hair shedding vs breakage                                                                                                         | Info       | P3       | `/blog/hair-fall-hair-care`                             |
| 28  | hair oiling routine · hair care in pakistan                                                                                       | Info       | P3       | `/blog/how-to-use-hair-oil`, `/blog/hair-care-pakistan` |

## Deliberately not targeted

- **Competitor brand queries** (for example "rosemary hair oil hemani", "onion hair oil saeed ghani", "vatika hair oil price"). Competing for these means using other brands' trademarks.
- **Urdu and Roman-Urdu queries** ("… in urdu", "banane ka tarika"). These have heavy demand and are the biggest gap. An Urdu version of the top 6 guides (with `hreflang`) is the recommended next step.
- **Packaging and label design queries** ("hair oil bottle design", "label design"). These come from manufacturers, not buyers.

## Rules for new content

1. **One page per cluster.** If a new article overlaps a cluster above, link to that cluster's page instead of competing with it.
2. **Answer first.** Each guide section opens with a 40–60 word answer under a question-style H2. This answer also feeds the FAQPage schema.
3. **Stay honest.** Make no cure, guaranteed-regrowth or "grey to black" claims. They breach Pakistan's advertising rules and Google's medical-content quality standards.

## Off-page plan (from the justamna.com analysis, October 2026)

justamna.com ranks for "hair oil" despite weak on-page SEO (an empty homepage H1, the word "hair oil" never on the homepage, ~750-word product page, no blog). What carries it is off-page trust:

1. **Reviews at scale:** 10,106 reviews on the hair oil page via Judge.me, many in Roman Urdu. → After each delivery, ask the customer on WhatsApp for a review. Add genuine ones to `src/data/reviews.ts`; rating schema switches on automatically.
2. **Founder/creator brand:** people search "just amna hair oil" by name. → Post regular Instagram, TikTok and YouTube oiling-routine content that links to the site. Add each profile to `brand.social` in `src/data/site.ts`.
3. **Business transparency:** legal entity, support hours, two phone numbers, WhatsApp, refund, privacy and terms pages. → Fill in `brand.legalName` and `brand.supportHours`, replace the placeholder phone number, and publish real refund and privacy policies.
4. **Mentions and links:** "best hair oil in Pakistan" listicles, marketplaces (Daraz) and press. → Pitch Pakistani beauty blogs, list the product on Daraz, and create a Google Business Profile.
5. **Bundles:** combo products raise order value and add more pages that can rank. → Consider a two-bottle or oil-plus-comb bundle, if it makes business sense.

Do not copy their medical claims ("No Baldness", "double your hair growth"). They breach Google's health-content standards and Pakistan's advertising rules.
