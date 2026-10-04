# Follica

Marketing site for Follica Herbal Hair Oil, built with Next.js (App Router), React and Tailwind CSS v4. Every page is prerendered as static HTML at build time.

## Development

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` to the live domain (defaults to `https://follica.pk`). It is used for canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`.

## Structure

- `src/app/` — routes, layout, `sitemap.ts`, `robots.ts`, global styles
- `src/components/` — header, footer, FAQ list, JSON-LD helpers
- `src/data/` — brand, product, FAQs, ingredients, blog posts and hair oil guides (`guides*.ts`) — edit content here
- `docs/seo-keyword-map.md` — which keyword cluster each page targets; check it before adding content
- `src/assets/` — images, served through `next/image`
