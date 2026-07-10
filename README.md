# Marseille Shore Excursions

World 2.0 destination site for **Marseille Shore Excursions**.

- **Canonical domain:** https://marseilleshoreexcursion.com (singular — do not use the plural form)
- **Brand:** Marseille Shore Excursions — Gateway to Provence
- **Primary affiliate source:** [Shore Excursions Group — Marseille](https://www.shoreexcursionsgroup.com/port/marseille-shore-excursions)
- **Cloudflare Pages project:** `marseille-shore-excursion`

## Development

```bash
npm install
npm run download:images   # Wikimedia masters + optimize pipeline
npm run dev
```

## Quality checks (required before deploy)

```bash
npm run build
npm run check-links
npm run seo-qa
npm run qa:world2 -- --build
```

Do not deploy until build, link and SEO QA checks pass.

## Architecture

Static Next.js export (`output: "export"`, trailing slash). Content lives in typed modules under `src/data/`. Identity, cruise positioning, palette and affiliate links are centralised.

## Cloudflare

```bash
# After QA passes
npx wrangler pages deploy out --project-name=marseille-shore-excursion
```

Attach custom domain `marseilleshoreexcursion.com` (and www redirect) in the Cloudflare Pages dashboard.
