import type { AttractionPage, Comparison, GuidePage } from "./types";
import { highlights, getHighlightBySlug, getAllHighlightSlugs } from "./highlights";
import { experiencePages, getExperienceBySlug, getAllExperienceSlugs } from "./experiences";
import { comparisons, getComparisonBySlug, getAllComparisonSlugs } from "./comparisons";

export type FlatPageKind = "highlight" | "experience" | "comparison";

export type FlatPage =
  | { kind: "highlight"; page: AttractionPage }
  | { kind: "experience"; page: GuidePage }
  | { kind: "comparison"; page: Comparison };

/**
 * Flat editorial registry — combines highlights, experiences and comparisons
 * into a single lookup for the flat catch-all route (src/app/[slug]/page.tsx).
 * Every Marseille editorial page resolves to a flat URL of the form /{slug}.
 */
export function getFlatPage(slug: string): FlatPage | undefined {
  const highlight = getHighlightBySlug(slug);
  if (highlight) return { kind: "highlight", page: highlight };

  const experience = getExperienceBySlug(slug);
  if (experience) return { kind: "experience", page: experience };

  const comparison = getComparisonBySlug(slug);
  if (comparison) return { kind: "comparison", page: comparison };

  return undefined;
}

export function getAllFlatPageSlugs(): string[] {
  return [...getAllHighlightSlugs(), ...getAllExperienceSlugs(), ...getAllComparisonSlugs()];
}

/**
 * Normalises any flat page (highlight, experience or comparison) into the
 * minimal shape GuideArticle's "related" cards need, so relatedSlugs can
 * freely mix highlight and experience slugs and still resolve to a flat
 * `/${slug}` link.
 */
export function getRelatedGuideLike(
  slug: string,
): { slug: string; title: string; tagline: string; hubPath: string } | undefined {
  const flat = getFlatPage(slug);
  if (!flat) return undefined;
  if (flat.kind === "highlight") {
    return { slug: flat.page.slug, title: flat.page.attractionName, tagline: flat.page.tagline, hubPath: "" };
  }
  if (flat.kind === "experience") {
    return { slug: flat.page.slug, title: flat.page.title, tagline: flat.page.tagline, hubPath: "" };
  }
  return { slug: flat.page.slug, title: flat.page.title, tagline: flat.page.summary, hubPath: "" };
}

export function getAllHighlightPages(): AttractionPage[] {
  return highlights;
}

export function getAllExperiencePages(): GuidePage[] {
  return experiencePages;
}

export function getAllComparisonPages(): Comparison[] {
  return comparisons;
}
