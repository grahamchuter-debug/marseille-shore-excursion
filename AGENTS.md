# Marseille Shore Excursions

World 2.0 editorial cruise planning site for **marseilleshoreexcursion.com** (singular domain).

## Positioning

Ancient port energy, Provençal light and the gateway to southern France.
Gateway to Provence.

## Domain rule

Canonical domain is always `https://marseilleshoreexcursion.com` — never the plural form.

## Destination identity

- Config: `src/data/destination-identity.ts`
- Component: `src/components/DestinationLogo.tsx`
- Active mark: `logoConcept: "harbour-basilica"`
- Variants: `full` | `compact` | `mark`

## Key paths

- Homepage: `src/app/page.tsx`
- Flat editorial: `src/app/[slug]/page.tsx` + `src/data/editorial-pages.ts`
- Excursions: `/shore-excursions/[slug]`
- Data: `src/data/`

## Regenerate

```bash
npm run download:images
npm run build
npm run check-links
npm run seo-qa
```
