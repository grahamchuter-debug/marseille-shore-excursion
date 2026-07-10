import type { EditorialCategory } from "./types";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description: "Our strongest overall pick for a well-timed Marseille cruise day.",
  },
  {
    id: "best-first-time",
    label: "Best for First-Time Visitors",
    shortLabel: "First Time",
    description: "Old Port, Le Panier and Notre-Dame — the clearest introduction to the city.",
  },
  {
    id: "best-short-port",
    label: "Best Short Port Call",
    shortLabel: "Short Port",
    description: "City-focused plans that leave transfer time back to the main terminals.",
  },
  {
    id: "best-full-day",
    label: "Best Full-Day Overview",
    shortLabel: "Full Day",
    description: "Aix and Marseille together when your call supports a longer day ashore.",
  },
  {
    id: "best-food",
    label: "Best for Food Lovers",
    shortLabel: "Food",
    description: "Tasting walks, markets and Marseille's French and North African flavours.",
  },
  {
    id: "best-multicultural",
    label: "Best for Multicultural Marseille",
    shortLabel: "Multicultural",
    description: "North African cuisine and neighbourhood culture beyond the postcard harbour.",
  },
  {
    id: "best-active",
    label: "Best Active City Option",
    shortLabel: "Active City",
    description: "E-bike circuits that cover corniche and neighbourhood ground efficiently.",
  },
  {
    id: "best-calanques",
    label: "Best Calanques Adventure",
    shortLabel: "Calanques",
    description: "Hiking the limestone coves — for fit travellers who accept access caveats.",
  },
  {
    id: "best-local-culture",
    label: "Best Local Culture",
    shortLabel: "Local Culture",
    description: "Le Panier lanes, pétanque and neighbourhood life at a human pace.",
  },
  {
    id: "best-provence",
    label: "Best for Provence",
    shortLabel: "Provence",
    description: "Hill towns, wine country and inland light beyond the cruise terminal.",
  },
  {
    id: "best-seasonal",
    label: "Best Seasonal Experience",
    shortLabel: "Seasonal",
    description: "Valensole lavender — only during blooming season, bloom not guaranteed.",
  },
  {
    id: "best-private",
    label: "Best Private Option",
    shortLabel: "Private",
    description: "Dedicated vehicle days for parties who want flexible pacing.",
  },
  {
    id: "best-premium-food",
    label: "Best Premium Food & Wine",
    shortLabel: "Premium Food",
    description: "Private Cassis wine and food when the occasion calls for it.",
  },
  {
    id: "best-coastal",
    label: "Best Coastal Day",
    shortLabel: "Coastal",
    description: "Cassis, Cape Canaille and Marseille's dramatic shoreline.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "A rewarding port day without unnecessary long transfers.",
  },
  {
    id: "best-repeat",
    label: "Best for Repeat Visitors",
    shortLabel: "Repeat",
    description: "Neighbourhood culture and deeper Provence for a second Marseille call.",
  },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description:
      "Highlights of Marseille — Old Port, signature landmarks and Notre-Dame in a half-day that still leaves flexibility for lunch or harbour time.",
    href: "/shore-excursions/highlights-of-marseille",
    cta: "View our top pick",
    signature: true,
  },
  {
    id: "first-time",
    emoji: "🏛️",
    label: "Best First-Time Tour",
    description:
      "The same city essentials framed for first visitors who want Marseille itself before committing a full day to Provence.",
    href: "/marseille-for-first-time-visitors",
    cta: "See first-time picks",
  },
  {
    id: "full-day",
    emoji: "🌿",
    label: "Best Full-Day Overview",
    description:
      "Exclusive Aix-en-Provence and Marseille — free time in Aix plus a panoramic city finish when your call is long enough.",
    href: "/shore-excursions/exclusive-aix-and-marseille",
    cta: "Plan the Aix day",
  },
  {
    id: "coastal",
    emoji: "🌊",
    label: "Best Coastal Day",
    description:
      "Marseille and Cassis — Cape Canaille drama and harbour time, with Calanques boats treated as optional extras, not promises.",
    href: "/shore-excursions/marseille-and-cassis",
    cta: "Explore the coast",
  },
  {
    id: "food",
    emoji: "🍽️",
    label: "Best for Food Lovers",
    description:
      "A Taste of Marseille — a compact tasting walk through Old Port, Le Panier and Noailles that pairs easily with extra harbour time.",
    href: "/shore-excursions/a-taste-of-marseille",
    cta: "Taste the city",
  },
  {
    id: "multicultural",
    emoji: "🌍",
    label: "Best Multicultural Marseille",
    description:
      "North African Cuisine and Culture — markets, a shared meal and a fuller sense of the city's layered identity.",
    href: "/shore-excursions/north-african-cuisine-culture",
    cta: "Discover the flavours",
  },
  {
    id: "active",
    emoji: "🚴",
    label: "Best Active Option",
    description:
      "Half-Day E-Bike Gadjo Tour — corniche and neighbourhood ground with assist, without locking the whole call to a Calanques hike.",
    href: "/shore-excursions/half-day-e-bike-gadjo",
    cta: "Go active",
  },
  {
    id: "calanques",
    emoji: "🥾",
    label: "Best Calanques Adventure",
    description:
      "Calanques National Park Hike and Swim — for fit adults only; swim optional, access subject to conditions.",
    href: "/shore-excursions/calanques-hike-and-swim",
    cta: "See the hike",
  },
  {
    id: "provence",
    emoji: "🍷",
    label: "Best for Provence",
    description:
      "Le Castellet, Bandol and Cassis — Provençal towns and wine tasting on a coastal-inland loop from the port.",
    href: "/shore-excursions/provencal-towns-castellet-bandol-cassis",
    cta: "Choose Provence",
  },
  {
    id: "seasonal",
    emoji: "💜",
    label: "Best Seasonal Experience",
    description:
      "Valensole Lavender Fields — blooming season only; verify dates and never assume purple fields year-round.",
    href: "/shore-excursions/valensole-lavender",
    cta: "Check seasonal dates",
  },
  {
    id: "private",
    emoji: "🚐",
    label: "Best Private Option",
    description:
      "Private Aix-en-Provence and Marseille by Minivan — dedicated pacing for your party on a classic gateway day.",
    href: "/shore-excursions/private-aix-and-marseille",
    cta: "View private options",
  },
  {
    id: "premium-food",
    emoji: "🥂",
    label: "Best Premium Food & Wine",
    description:
      "Private Marseille and Cassis Luxury Wine and Food — a shorter private coastal outing when the occasion calls for it.",
    href: "/shore-excursions/private-cassis-wine-food",
    cta: "See the private food day",
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
