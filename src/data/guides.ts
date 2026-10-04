// Question-led guides built from search demand around "hair oil".
// Each section answers one real search question: `answer` is the short, plain-text
// reply (also used for FAQPage structured data), `body` is optional supporting HTML.

import { concernGuides } from "./guides-concerns";
import { ingredientGuides } from "./guides-ingredients";

export type GuideSection = {
  id: string;
  q: string;
  answer: string;
  body?: string;
};

export type GuideCategory = "Questions" | "Ingredients" | "Hair concerns";

export type Guide = {
  slug: string;
  category: GuideCategory;
  title: string;
  shortTitle: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  date: string;
  updated: string;
  readingTime: string;
  quickAnswer: string;
  intro: string;
  sections: GuideSection[];
};

const questionGuides: Guide[] = [
  {
    slug: "best-oil-for-hair",
    category: "Questions",
    shortTitle: "Best oil for your hair",
    title: "What Oil Is Best for Your Hair? A Guide by Hair Type",
    metaTitle: "What Oil Is Best for Your Hair? Guide by Hair Type",
    description:
      "The healthiest oils for hair, which oils to avoid, wet vs dry application, overnight oiling and which oils make hair smooth and silky — matched to your hair type.",
    eyebrow: "Hair oil basics",
    date: "2026-10-01",
    updated: "2026-10-04",
    readingTime: "9 min read",
    quickAnswer:
      "There is no single best hair oil — the best one matches your hair. Fine or oily hair suits light oils such as argan, jojoba or grapeseed. Thick, dry or coarse hair suits richer oils such as coconut, castor or a blended herbal oil. Pick one you can use consistently, twice a week, for at least eight weeks.",
    intro:
      "Every hair oil bottle claims to be the best. In practice, how an oil behaves depends on its weight, how readily it absorbs, and the hair you put it on. This guide works through the questions people actually search for, in plain language.",
    sections: [
      {
        id: "healthiest-oil-for-hair",
        q: "Which is the healthiest oil for hair?",
        answer:
          "Coconut oil has the strongest evidence behind it: lab studies show it penetrates the hair shaft and reduces protein loss when used before washing. Sweet almond, argan and jojoba are gentle, well-tolerated alternatives. The healthiest choice is a pure, fresh oil that suits your hair's thickness and doesn't irritate your scalp.",
        body: `<p>Most oils sit on the surface of the hair. Coconut oil is unusual because its main fatty acid (lauric acid) is small and straight enough to move into the hair shaft, which is why it has been studied as a pre-wash treatment for reducing protein loss.</p>
<div class="table-wrap"><table>
<thead><tr><th>Oil</th><th>Weight</th><th>Best for</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Coconut</td><td>Medium</td><td>Dry, thick or damaged hair; pre-wash</td><td>Can feel stiff on low-porosity hair</td></tr>
<tr><td>Castor</td><td>Very heavy</td><td>Coarse, frizzy, breakage-prone lengths</td><td>Hard to wash out on its own — blend it</td></tr>
<tr><td>Sweet almond</td><td>Light–medium</td><td>Most hair types, softness</td><td>Avoid with a nut allergy</td></tr>
<tr><td>Argan</td><td>Light</td><td>Fine hair, frizz, shine</td><td>Expensive; often diluted in blends</td></tr>
<tr><td>Jojoba</td><td>Light</td><td>Oily scalps, low-porosity hair</td><td>Less conditioning on very dry ends</td></tr>
<tr><td>Black seed (kalonji)</td><td>Medium</td><td>Scalp massage, blended oils</td><td>Strong scent; patch test first</td></tr>
</tbody>
</table></div>`,
      },
      {
        id: "oils-not-to-use-on-hair",
        q: "What oils should not be used on hair?",
        answer:
          "Avoid undiluted essential oils (tea tree, peppermint, cinnamon, clove) straight on the scalp, any oil you react to, and oils that have gone rancid. If you have dandruff or seborrheic dermatitis, go easy on olive oil, which can feed the yeast involved. Very heavy mineral-oil products can also build up on fine hair.",
        body: `<ul>
<li><strong>Undiluted essential oils.</strong> They are concentrated plant extracts, not carrier oils, and can burn or sensitise skin. Keep them below about 2% in a carrier oil.</li>
<li><strong>Rancid oil.</strong> If it smells sharp, sour or like crayons, throw it away.</li>
<li><strong>Olive oil on a flaky scalp.</strong> Its oleic acid can aggravate dandruff-prone scalps; it is fine on the lengths.</li>
<li><strong>Anything you are allergic to.</strong> Nut oils (almond, argan) need care if you have a nut allergy.</li>
<li><strong>Heated oil that is too hot.</strong> Warm, not hot — test it on your wrist first.</li>
</ul>`,
      },
      {
        id: "world-number-one-hair-oil",
        q: "Which is the world's no. 1 hair oil?",
        answer:
          "There is no independent ranking that names a single world's number one hair oil. Coconut oil is the most widely used and most studied hair oil worldwide, and best-seller lists are driven by price and distribution rather than results. The number one oil for you is the one that suits your hair and that you use consistently.",
      },
      {
        id: "oil-on-wet-or-dry-hair",
        q: "Should I use hair oil on wet or dry hair?",
        answer:
          "For a pre-wash scalp treatment, apply oil to dry hair — it spreads further and reaches the scalp. For styling, use one or two drops on damp or dry ends to tame frizz. Low-porosity hair is the exception: slightly damp, warm hair helps oil absorb rather than sit on top.",
        body: `<p>We cover wet versus dry application in more depth, including how to wash oil out cleanly, in our <a href="/guides/how-often-to-oil-hair#oil-on-wet-or-dry-hair">hair oiling frequency guide</a>.</p>`,
      },
      {
        id: "most-effective-hair-oil",
        q: "Which hair oil is the most effective?",
        answer:
          "The most effective hair oil is one matched to your goal. For breakage and dryness, richer blends with coconut and castor work well. For frizz on fine hair, a light oil like argan. For scalp comfort, a massage oil with rosemary or kalonji. Effectiveness depends far more on consistency than on any single ingredient.",
        body: `<p>Judge any oil after eight to twelve weeks of twice-weekly use. Hair grows roughly a centimetre a month, so the first changes you notice are softness and shine, not length.</p>`,
      },
      {
        id: "leave-hair-oil-overnight",
        q: "Is it okay to leave hair oil in overnight?",
        answer:
          "Yes, for most people, if the scalp tolerates it. Overnight oiling is a tradition rather than a requirement — one to two hours gives most of the conditioning benefit. If you get itching, flaking or spots along the hairline after overnight oiling, switch to a shorter application.",
        body: `<p>If you do oil overnight, cover your pillow with an old towel or a cotton cap and wash it out thoroughly in the morning. Don't sleep with oiled hair tied tightly.</p>`,
      },
      {
        id: "should-i-oil-my-hair",
        q: "Should I oil my hair?",
        answer:
          "Most people benefit from oiling, especially those with dry, frizzy, curly, coarse or chemically treated hair, or a dry scalp. People with a very oily scalp, active dandruff or fungal acne may do better skipping scalp oiling and using a drop on the ends only.",
      },
      {
        id: "oil-for-smooth-silky-hair",
        q: "Which oil makes hair smooth and silky?",
        answer:
          "Light oils make hair look smoothest because they add shine without weight: argan, jojoba and sweet almond are the usual choices. Use one or two drops on the mid-lengths and ends of damp hair after washing. For deep softness, a weekly pre-wash treatment with coconut or a herbal blend helps too.",
      },
    ],
  },
  {
    slug: "best-oil-for-low-porosity-hair",
    category: "Questions",
    shortTitle: "Oils for low porosity hair",
    title: "What Is the Best Oil for Low Porosity Hair?",
    metaTitle: "Best Oil for Low Porosity Hair: What Works and Why",
    description:
      "Light oils, warmth and damp hair are the key to oiling low porosity hair. Which oils work, which to avoid, whether coconut oil is okay, and how to help it grow.",
    eyebrow: "Hair type guide",
    date: "2026-10-01",
    updated: "2026-10-04",
    readingTime: "7 min read",
    quickAnswer:
      "Low porosity hair does best with light, fast-absorbing oils: jojoba, argan, grapeseed and sweet almond. Apply a small amount to slightly damp hair and add gentle warmth — a warm towel or shower cap — so the oil absorbs instead of sitting on the surface. Heavy oils like castor and shea work only in small amounts.",
    intro:
      "Low porosity hair has a tightly closed cuticle. That makes it resistant to damage, but it also means water and oil struggle to get in — so it feels dry, yet products sit on top and leave it greasy. The right oil, used the right way, fixes both problems.",
    sections: [
      {
        id: "what-is-low-porosity-hair",
        q: "What is low porosity hair?",
        answer:
          "Low porosity hair has cuticle layers that lie flat and tightly overlapped, so moisture and oil are slow to absorb. Signs include hair that takes a long time to get fully wet, takes ages to dry, and leaves product sitting on the surface. It is often shiny but prone to buildup.",
        body: `<p>The popular "float a strand in a glass of water" test is unreliable — oils and product residue affect whether hair sinks. A better test: notice how long your hair takes to get soaked in the shower and how long it takes to dry.</p>`,
      },
      {
        id: "worst-oils-for-low-porosity-hair",
        q: "What are the worst oils for low porosity hair?",
        answer:
          "The hardest oils for low porosity hair are the heaviest ones: undiluted castor oil, shea and cocoa butter, raw mustard oil and thick olive oil. They coat the cuticle instead of absorbing, leaving hair stiff, greasy and dull. Used in small amounts within a lighter blend, with warmth, they can still work.",
      },
      {
        id: "low-porosity-oil-wet-or-dry",
        q: "Should I use hair oil on wet or dry low porosity hair?",
        answer:
          "Use oil on slightly damp low porosity hair, not soaking wet and not bone dry. Damp hair with a little warmth has a slightly lifted cuticle, so oil absorbs better. For a pre-wash treatment, warm the oil, apply it, then cover with a shower cap for 20–30 minutes.",
      },
      {
        id: "what-not-to-use-on-low-porosity-hair",
        q: "What not to use on low porosity hair?",
        answer:
          "Avoid heavy butters and thick oils applied in large amounts, protein-heavy treatments used too often, silicones that need harsh shampoos to remove, and layering several leave-ins at once. Skip cold application too — without warmth, oil just sits on the surface. Clarify every few weeks to remove buildup.",
      },
      {
        id: "low-porosity-hair-growth",
        q: "What makes low porosity hair grow faster?",
        answer:
          "No oil makes hair grow faster than your genetics allow — about one centimetre a month. What helps low porosity hair keep its length is preventing buildup and breakage: light oils, regular gentle cleansing, warmth when conditioning, and a healthy diet with enough iron and protein. Less breakage means visibly longer hair over time.",
      },
      {
        id: "coconut-oil-low-porosity-hair",
        q: "Is coconut oil okay for low porosity hair?",
        answer:
          "Sometimes. Coconut oil can penetrate hair, but on low porosity hair it often sits on top and leaves it stiff or crunchy. If you like it, use a small amount warmed, as a pre-wash treatment under a shower cap, then shampoo it out. Don't use it as a leave-in.",
        body: `<p>Our <a href="/products/herbal-hair-oil">Follica Herbal Hair Oil</a> contains coconut and castor oil, so it is a richer blend. On low porosity hair, use about half the usual amount, warm it first, apply it to damp hair and always wash it out the same day.</p>`,
      },
      {
        id: "high-porosity-hair-oil",
        q: "What about high porosity hair?",
        answer:
          "High porosity hair is the opposite: a raised, often damaged cuticle that absorbs moisture fast and loses it just as fast. It suits heavier sealing oils — castor, coconut, olive and blended herbal oils — applied to damp hair after conditioning to lock moisture in. Bleached, coloured and heat-styled hair is usually high porosity.",
      },
      {
        id: "best-hair-oil-brand-low-porosity",
        q: "Which hair oil brand is best for low porosity hair?",
        answer:
          "Rather than a brand, look at the first three ingredients on the label. If they are light oils — jojoba, argan, grapeseed or sweet almond — the product is likely to suit low porosity hair. If castor, shea or mineral oil leads the list, use it only as a warmed, rinse-out treatment.",
      },
    ],
  },
  {
    slug: "hair-oil-for-androgenetic-alopecia",
    category: "Questions",
    shortTitle: "Hair oil & alopecia",
    title: "Hair Oils and Androgenetic Alopecia: What Helps, What Doesn't",
    metaTitle: "Hair Oils for Androgenic Alopecia: What Actually Helps",
    description:
      "Can hair oil help androgenic alopecia? The evidence on rosemary and pumpkin seed oil, DHT, the 'big 3' treatments and what makes pattern hair loss worse.",
    eyebrow: "Hair loss, honestly",
    date: "2026-10-01",
    updated: "2026-10-04",
    readingTime: "10 min read",
    quickAnswer:
      "No hair oil is a proven treatment for androgenetic alopecia. Rosemary oil has one small trial showing results similar to 2% minoxidil after six months, and oral pumpkin seed oil has a small supporting study. They may help as extras, but the treatments with strong evidence are minoxidil and finasteride — speak to a dermatologist.",
    intro:
      "Androgenetic alopecia — often searched as androgenic alopecia — is genetic pattern hair loss driven by sensitivity to the hormone DHT. It affects men and women, and it progresses slowly. Oils are part of many people's routines, so here is a straight answer on what they can and cannot do. This guide is general information, not medical advice.",
    sections: [
      {
        id: "what-worsens-androgenetic-alopecia",
        q: "What worsens androgenic alopecia?",
        answer:
          "Pattern hair loss progresses on its own, but some things speed up shedding or make it look worse: delaying treatment, smoking, low iron or vitamin D, thyroid problems, crash dieting, severe stress, anabolic steroids or testosterone use, and tight hairstyles. Many of these trigger extra shedding on top of the underlying thinning.",
      },
      {
        id: "best-oil-for-alopecia",
        q: "Which oil is better for alopecia?",
        answer:
          "For androgenetic alopecia, rosemary oil has the most direct evidence: a 2015 randomised trial in 100 men found it comparable to 2% minoxidil on hair count after six months, with less scalp itching. It was a single small study. For alopecia areata, an autoimmune condition, no oil is an effective treatment — see a dermatologist.",
        body: `<p>"Alopecia" covers several different conditions. Androgenetic alopecia is pattern thinning; alopecia areata causes round, smooth bald patches; traction alopecia comes from tight styles. Oils are only ever a supporting act, and only for the first.</p>`,
      },
      {
        id: "oil-that-regrows-hair-follicles",
        q: "Which oil regrows hair follicles?",
        answer:
          "No oil regrows hair follicles. Once a follicle has scarred over or been inactive for years, nothing topical revives it. In early androgenetic alopecia, follicles are shrinking rather than gone, and treatments like minoxidil — and possibly rosemary oil — can help some of them produce thicker hair again. Starting early matters most.",
      },
      {
        id: "help-hair-grow-with-alopecia",
        q: "What helps hair grow with alopecia?",
        answer:
          "For androgenetic alopecia, the options with strong evidence are minoxidil, finasteride or dutasteride (for men, on prescription), and for some women spironolactone. Microneedling and low-level laser therapy have supporting studies as add-ons. Gentle scalp care, good nutrition and treating deficiencies help hair you have stay healthy. A dermatologist can tailor this.",
      },
      {
        id: "natural-help-for-alopecia",
        q: "What naturally helps alopecia?",
        answer:
          "Natural options with some evidence include topical rosemary oil, oral pumpkin seed oil, a scalp massage routine and correcting iron, vitamin D or protein deficiencies. Evidence for each is limited and small-scale. They are reasonable additions to a routine, not replacements for medical treatment if your hair loss is progressing.",
        body: `<p>Gentle scalp massage is part of every oiling routine, and a small 2016 study found daily standardised scalp massage increased hair thickness over 24 weeks. A good herbal oil makes that massage more pleasant — which makes it easier to keep doing. That is a cosmetic benefit, and an honest one.</p>`,
      },
      {
        id: "oil-for-blocking-dht",
        q: "What oil is best for blocking DHT in hair?",
        answer:
          "Pumpkin seed oil and rosemary oil are the two most studied. A 2014 trial found 400 mg a day of oral pumpkin seed oil increased hair count versus placebo in men, and rosemary has lab evidence of mild anti-DHT activity. Neither blocks DHT as reliably as finasteride; treat them as supportive extras.",
      },
      {
        id: "heal-alopecia-fast",
        q: "How to heal alopecia fast?",
        answer:
          "There is no fast cure for alopecia. Androgenetic alopecia treatments take three to six months to show results and must be continued to keep them. Alopecia areata sometimes resolves on its own and can be treated by a dermatologist with steroid injections or newer medicines. Be wary of any product promising fast regrowth.",
      },
      {
        id: "big-3-for-hair-regrowth",
        q: "What are the big 3 for hair regrowth?",
        answer:
          "The 'big 3' for male pattern hair loss are finasteride (a DHT-blocking tablet), minoxidil (a topical or oral growth stimulant) and ketoconazole shampoo (an anti-fungal with mild anti-androgen effects). Finasteride and oral minoxidil need a prescription and a doctor's supervision, and they are not suitable for everyone, including women who are or may become pregnant.",
      },
    ],
  },
  {
    slug: "how-often-to-oil-hair",
    category: "Questions",
    shortTitle: "How often to oil hair",
    title: "How Often Should I Oil My Hair? Frequency, Timing & Mistakes",
    metaTitle: "How Often Should I Oil My Hair? Timing & Mistakes",
    description:
      "How often to oil your hair by hair type, wet vs dry hair, daily oiling, how long to leave it on, the best time of day and common hair oiling mistakes.",
    eyebrow: "The routine",
    date: "2026-10-01",
    updated: "2026-10-04",
    readingTime: "9 min read",
    quickAnswer:
      "Oil your hair two to three times a week if it's dry, coarse or curly, and once a week if your scalp gets oily quickly. Leave the oil on for 30 minutes to two hours before washing. Beginners should start with once a week and adjust based on how the scalp feels.",
    intro:
      "How often you oil matters more than which oil you use. Too little and you never see a difference; too much and you trade dryness for buildup. Here is a frequency that fits your hair, plus the timing and technique questions people ask most.",
    sections: [
      {
        id: "oil-on-wet-or-dry-hair",
        q: "Do you put oil in wet or dry hair?",
        answer:
          "Put oil on dry hair for a pre-wash scalp treatment — oil and water don't mix, so dry hair lets the oil spread and reach the scalp. Put a few drops on damp hair after washing if you want to seal in moisture and smooth frizz. Low porosity hair absorbs oil best when slightly damp.",
      },
      {
        id: "oil-hair-every-day",
        q: "Is it okay to apply hair oil every day?",
        answer:
          "Daily scalp oiling isn't recommended for most people. Oil that stays on the scalp for days traps sweat and dust and can feed dandruff-causing yeast. A couple of drops on dry ends every day is fine. For the scalp, two to three sessions a week, each washed out, is plenty.",
      },
      {
        id: "how-to-oil-hair-correctly",
        q: "How to oil hair correctly?",
        answer:
          "Detangle dry hair, part it into four or five sections, apply a few drops along each parting, massage the scalp with your fingertips for three to five minutes, draw the leftover oil through the ends, leave it for 30 minutes to two hours, then shampoo — applying shampoo before water.",
        body: `<p>The full five-step routine, with amounts for short, medium and long hair, is on our <a href="/how-to-use">how to use hair oil</a> page.</p>`,
      },
      {
        id: "does-hair-oil-help-hair-grow",
        q: "Does hair oil help hair grow?",
        answer:
          "Hair oil doesn't make hair grow faster than its natural rate of about a centimetre a month. What it does is reduce breakage by coating the hair shaft and lowering friction, so you keep more of the length you grow. Over a few months that looks like longer, fuller hair.",
      },
      {
        id: "oil-before-washing",
        q: "Should I oil my hair before washing?",
        answer:
          "Yes — oiling before washing (sometimes called pre-poo) is the most effective way to use hair oil. The oil protects strands from the swelling and friction of washing, which reduces protein loss and breakage, and you wash off the excess so hair isn't left greasy.",
      },
      {
        id: "is-30-minutes-of-oiling-enough",
        q: "Is 30 minutes of oiling enough?",
        answer:
          "Yes, 30 minutes is enough for a useful pre-wash treatment, especially with warmth from a towel or shower cap. One to two hours gives slightly more time for oil to absorb into dry or thick hair. Beyond that, the extra benefit is small for most people.",
      },
      {
        id: "best-time-to-oil-hair",
        q: "What is the best time of day to oil hair?",
        answer:
          "The best time to oil your hair is one to two hours before you plan to wash it. For most people that means the evening before a morning wash, or the morning before an evening wash. Avoid oiling right before going out in dust and sun, which stick to oiled hair.",
      },
      {
        id: "common-hair-oiling-mistakes",
        q: "What are common hair oiling mistakes?",
        answer:
          "Common mistakes include using too much oil, oiling only the ends and never the scalp, scrubbing with nails instead of fingertips, combing or tying oiled hair tightly, leaving oil on for days, using hot oil, and judging results after a week instead of two to three months.",
      },
      {
        id: "oil-hair-two-days-in-a-row",
        q: "Can I oil my hair 2 days in a row?",
        answer:
          "You can if you wash it out in between and your scalp feels fine, but there is little benefit. Leaving the same oil on for two days builds up sweat and dust on the scalp. Spacing sessions two to three days apart works better for most hair types.",
      },
      {
        id: "too-much-oil-hair-growth",
        q: "Can too much oil stop hair growth?",
        answer:
          "Too much oil won't stop hair growth by itself, but it can cause problems that affect scalp health: buildup, itching, dandruff flare-ups and blocked pores along the hairline. Heavy washing to remove it can also dry and stress the hair. A teaspoon or two per session is enough for most people.",
      },
    ],
  },
];

export const guides: Guide[] = [...questionGuides, ...concernGuides, ...ingredientGuides];

export const guideCategories: GuideCategory[] = ["Questions", "Hair concerns", "Ingredients"];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
