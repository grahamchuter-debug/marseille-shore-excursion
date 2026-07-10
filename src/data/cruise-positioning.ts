/**
 * Central cruise-positioning copy for homepage A/B readiness.
 * Swap `message` (or toggle flags) here — do not scatter strings across components.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  /** Reserved for a future split test — do not activate. */
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food";
}

export const dayAshoreIntro =
  "The essentials cruise passengers should know before exploring Marseille.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "time-in-port",
    title: "Typical time in port",
    body: "Port-call lengths vary, so confirm your ship’s arrival and all-aboard time before choosing a seven-hour Provence itinerary.",
    icon: "clock",
  },
  {
    id: "excursion-length",
    title: "Ideal excursion length",
    body: "A four-hour city excursion usually leaves more flexibility, while Cassis, Aix and Provence combinations often use most of the day.",
    icon: "route",
  },
  {
    id: "walking-level",
    title: "Walking level",
    body: "Moderate in central Marseille, with slopes, steps and uneven streets in areas such as Le Panier and around Notre-Dame de la Garde.",
    icon: "walk",
  },
  {
    id: "best-early-stop",
    title: "Best early stop",
    body: "Visit the Old Port or Le Panier earlier in the day before the busiest sightseeing period and stronger afternoon heat.",
    icon: "sunrise",
  },
  {
    id: "do-not-miss",
    title: "Do not miss",
    body: "The view across Marseille and the Mediterranean from Notre-Dame de la Garde.",
    icon: "viewpoint",
  },
  {
    id: "local-flavour",
    title: "Local flavour",
    body: "Try navettes, panisse, Provençal produce or a food walk reflecting Marseille’s French and North African influences.",
    icon: "food",
  },
];
