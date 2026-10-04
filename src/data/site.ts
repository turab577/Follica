// Set NEXT_PUBLIC_SITE_URL to the live domain; used for canonical URLs, Open Graph and the sitemap.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://follica.pk";

export const brand = {
  name: "Follica",
  tagline: "Healthy Hair Starts at the Roots.",
  email: "hello@follica.pk",
  phone: "+92 300 0000000",
  whatsapp: "+92 300 0000000",
  city: "Lahore, Pakistan",
  // Fill in when available; each appears in the footer/contact page and Organization schema
  // only once set. Use real details only.
  legalName: "",
  supportHours: "",
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: "",
  },
};

export const socialProfiles = Object.entries(brand.social)
  .filter(([, url]) => url)
  .map(([network, url]) => ({ network, url }));

export const whatsappUrl = `https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`;

export const product = {
  name: "Follica Herbal Hair Oil",
  shortName: "Herbal Hair Oil",
  slug: "herbal-hair-oil",
  price: 1400,
  currency: "PKR",
  size: "500ml",
  sku: "FOL-HHO-500",
};

export const deliveryCharge = 200;
export const freeDeliveryThreshold = 3000;

export const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Gujranwala",
  "Sialkot",
  "Quetta",
];

export const ingredients = [
  {
    name: "Amla (Indian Gooseberry)",
    guide: "amla-oil-for-hair",
    role: "A traditional hair-care botanical used in South Asian oiling routines to condition the scalp and add shine to dry-looking hair.",
  },
  {
    name: "Castor Oil",
    guide: "castor-oil-for-hair",
    role: "A thick, slow-absorbing oil that coats the hair shaft and helps reduce the appearance of dryness and breakage.",
  },
  {
    name: "Rosemary Extract",
    guide: "rosemary-oil-for-hair",
    role: "An aromatic herb commonly used in scalp oils for a light, fresh feel during massage.",
  },
  {
    name: "Black Seed (Kalonji) Oil",
    guide: "kalonji-oil-for-hair",
    role: "A classic desi ingredient valued for conditioning the scalp and softening coarse hair.",
  },
  {
    name: "Coconut Oil",
    guide: "coconut-oil-for-hair",
    role: "A lightweight base oil that spreads easily and helps hair feel smoother after washing.",
  },
  {
    name: "Sweet Almond Oil",
    guide: "almond-oil-for-hair",
    role: "A gentle carrier oil that leaves hair feeling soft rather than heavy.",
  },
];

export const benefits = [
  {
    title: "Scalp nourishment",
    body: "A weekly massage with Follica helps the scalp feel conditioned and comfortable rather than tight and dry.",
  },
  {
    title: "Less visible breakage",
    body: "Regular oiling helps reduce the appearance of dryness and breakage along the lengths of the hair.",
  },
  {
    title: "Softer, healthier-looking hair",
    body: "Hair looks smoother and reflects more light after a consistent hair-oiling routine.",
  },
  {
    title: "Made for a real routine",
    body: "A 500ml bottle designed for regular use, not a one-off treatment you use twice and forget.",
  },
];

export const faqs = [
  {
    q: "What is the best hair oil for hair care in Pakistan?",
    a: "The best hair oil is the one you can actually use consistently. Follica Herbal Hair Oil blends amla, castor, coconut, almond, black seed and rosemary in a 500ml bottle so a twice-weekly routine is affordable. Choose a formula that suits your scalp — lighter oils for oily scalps, richer blends for dry, coarse hair.",
  },
  {
    q: "How often should I apply hair oil?",
    a: "Two to three times a week suits most people. If your scalp gets oily quickly, once a week before washing is enough.",
  },
  {
    q: "How long should I leave hair oil on?",
    a: "One to two hours is plenty for a conditioning effect. Longer is not necessarily better, especially if your scalp is prone to buildup.",
  },
  {
    q: "Can men use this hair oil?",
    a: "Yes. Follica is not gender-specific. Men usually need less product because of shorter hair — a few drops massaged into the scalp is enough.",
  },
  {
    q: "Can women use this hair oil?",
    a: "Yes. For long hair, work the oil into the scalp first and then draw the remainder down the lengths and ends.",
  },
  {
    q: "Is this hair oil suitable for dry hair?",
    a: "Yes. The castor and almond content makes it well suited to dry, frizzy or chemically treated hair that needs extra conditioning.",
  },
  {
    q: "Does hair oil help with hair fall?",
    a: "Hair oiling is cosmetic care. It can reduce breakage caused by dryness and rough handling, which makes hair look fuller. It does not treat medical hair loss such as alopecia, thyroid-related shedding or hormonal conditions — those need a doctor or dermatologist.",
  },
  {
    q: "How do I use hair oil for scalp care?",
    a: "Section dry hair, apply a few drops directly to the scalp, and massage with your fingertips for three to five minutes. Leave it on for one to two hours, then shampoo.",
  },
  {
    q: "Can I leave hair oil overnight?",
    a: "You can, if your scalp tolerates it well. If you notice itchiness, flaking or blocked pores, switch to a shorter one to two hour application instead.",
  },
  {
    q: "Do you deliver hair oil across Pakistan?",
    a: "Yes. We deliver nationwide, including Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Gujranwala, Sialkot and Quetta.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes. Cash on Delivery is available across Pakistan — you pay the courier when your order arrives.",
  },
  {
    q: "How long does delivery take?",
    a: "Typically 2–3 working days for major cities and 3–5 working days for smaller towns and remote areas.",
  },
];

export const steps = [
  {
    title: "Section dry hair",
    body: "Comb through and part your hair into four or five sections so the oil reaches the scalp, not just the top layer.",
  },
  {
    title: "Apply to the scalp",
    body: "Squeeze a few drops along each parting. For short hair a teaspoon is enough; long hair may need two.",
  },
  {
    title: "Massage for 3–5 minutes",
    body: "Use your fingertips, not your nails, in slow circles. This is the part most people skip, and it is the part that matters.",
  },
  {
    title: "Work through the lengths",
    body: "Draw whatever is left on your hands down the mid-lengths and ends, where dryness and split ends show first.",
  },
  {
    title: "Leave on, then wash",
    body: "Wait one to two hours, then shampoo. Two gentle washes usually clear the oil without stripping the scalp.",
  },
];
