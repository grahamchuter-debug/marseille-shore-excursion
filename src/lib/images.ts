export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero-home",
    "Marseille harbour and Notre-Dame de la Garde — gateway to Provence from the cruise port",
  ),
  ogDefault: img(
    "og-default",
    "Marseille cruise planning — Old Port, Cassis, Aix-en-Provence and Provençal days ashore",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Marseille Shore Excursions",
  },
  port: img("cruise-port", "Marseille cruise port terminal and harbour approaches"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "hero-home": img(
    "hero-home",
    "Marseille waterfront and basilica skyline from the Mediterranean",
  ),
  "og-default": img(
    "og-default",
    "Marseille shore excursion planning from the cruise port",
  ),
  "cruise-port": img("cruise-port", "Marseille cruise port terminal area"),
  "vieux-port": img("vieux-port", "Vieux-Port harbour basin and quayside in Marseille"),
  "notre-dame": img(
    "notre-dame",
    "Notre-Dame de la Garde overlooking Marseille and the sea",
  ),
  "le-panier": img("le-panier", "Le Panier's hillside lanes above the Old Port"),
  mucem: img("mucem", "MuCEM and the Marseille waterfront museums"),
  corniche: img("corniche", "Corniche Kennedy coastal road along Marseille's shoreline"),
  calanques: img("calanques", "Calanques limestone coves on the Marseille coast"),
  aix: img("aix", "Aix-en-Provence fountains and Cours Mirabeau"),
  cassis: img("cassis", "Cassis harbour beneath Cape Canaille"),
  luberon: img("luberon", "Luberon hill villages in Provençal light"),
  avignon: img("avignon", "Avignon's papal palace and Rhône-side old town"),
  food: img("food", "Marseille food markets, panisse and Provençal produce"),
  walking: img("walking", "Walking Marseille's Old Port and historic streets"),
  markets: img("markets", "Open-air markets and local stalls in Marseille"),
  beaches: img("beaches", "Mediterranean beaches and coves near Marseille"),
  lavender: img("lavender", "Valensole lavender fields in blooming season"),
  provence: img("provence", "Provençal countryside, villages and vineyards"),
  compare: img("compare", "Comparing Marseille shore excursion options from the cruise port"),
  private: img("private", "Private Marseille shore excursion with dedicated vehicle"),
  family: img("family", "Family exploring Marseille and Provence from a cruise call"),
  wine: img("wine", "Provençal wine tasting near Marseille, Cassis and Bandol"),
  // Convenience aliases used across editorial imageKey fields
  port: img("cruise-port", "Marseille cruise port terminal area"),
  hero: img(
    "hero-home",
    "Marseille harbour and Notre-Dame de la Garde — gateway to Provence",
  ),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "highlights-of-marseille": "vieux-port",
  "exclusive-aix-and-marseille": "aix",
  "marseille-and-cassis": "cassis",
  "a-taste-of-marseille": "food",
  "north-african-cuisine-culture": "markets",
  "half-day-e-bike-gadjo": "corniche",
  "calanques-hike-and-swim": "calanques",
  "full-day-e-bike-calanques": "calanques",
  "le-panier-petanque": "le-panier",
  "provencal-towns-castellet-bandol-cassis": "wine",
  "villages-of-luberon": "luberon",
  "charming-luberon-valley": "luberon",
  "valensole-lavender": "lavender",
  "private-aix-and-marseille": "private",
  "private-cassis-wine-food": "wine",
  "discover-aix-countryside": "aix",
  "avignon-and-wine": "avignon",
  "les-baux-wine": "provence",
  "coastal-cave-snorkeling": "beaches",
  "culinary-workshop": "food",
  "private-cassis-and-marseille": "cassis",
  "private-luberon": "luberon",
  "private-avignon": "avignon",
  "private-camargue": "provence",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "vieux-port");
}

export const excursionsHubImage = pick("vieux-port");

const highlightImageKeys: Record<string, string> = {
  "vieux-port": "vieux-port",
  "le-panier": "le-panier",
  "notre-dame-de-la-garde": "notre-dame",
  mucem: "mucem",
  corniche: "corniche",
  calanques: "calanques",
  cassis: "cassis",
  "aix-en-provence": "aix",
  luberon: "luberon",
  avignon: "avignon",
  lavender: "lavender",
};

const comparisonImageKeys: Record<string, string> = {
  "aix-or-cassis": "compare",
  "marseille-or-provence": "compare",
  "private-tour-vs-group-tour": "private",
  "best-marseille-shore-excursion": "vieux-port",
  "one-day-in-marseille": "walking",
  "is-cassis-worth-it": "cassis",
  "aix-vs-cassis-from-marseille": "compare",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "vieux-port");
}

export function getGuideImage(key: string): SiteImage {
  return pick(key in subjectImages ? key : "provence");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("vieux-port");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("cruise-port");
}

export const guidesHubImage = pick("provence");
