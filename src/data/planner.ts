import type { Pace } from "./types";

export interface PlannerInput {
  /** Optional explicit hours ashore. If omitted, derived from arrival/departure. */
  hoursAshore?: number;
  arrivalTime?: string;
  departureTime?: string;
  visitType: "first-time" | "repeat";
  pace: Pace;
  interests: string[];
  walkingTolerance: "full" | "some" | "limited";
  travelStyle: "private" | "guided" | "diy";
  adults: number;
  children: number;
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
  /** Excursion slug when the link points at a bookable shore excursion. */
  slug?: string;
}

export interface PlannerResult {
  /** Recommended experience type for the day ashore. */
  bestFitType: string;
  /** Suggested duration band. */
  duration: string;
  /** Principal recommendation — usually a featured excursion. */
  principalExcursion: PlannerLink;
  alternative: PlannerLink;
  returnConsideration: string;
  /** Optional Old Port add-on when the main plan leaves room. */
  oldPortAddOn?: PlannerLink;
  /** @deprecated Prefer oldPortAddOn — kept for existing planner UI. */
  independentAddOn?: PlannerLink;
  whyThisMatches: string;
}

export const INTEREST_OPTIONS = [
  { id: "city", label: "Marseille city highlights" },
  { id: "coast", label: "Cassis and the coast" },
  { id: "food", label: "Food and local culture" },
  { id: "provence", label: "Provence villages and wine" },
  { id: "active", label: "Active Mediterranean (e-bike, hike)" },
  { id: "lavender", label: "Lavender fields (seasonal)" },
];

export const VISIT_TYPE_OPTIONS = [
  { id: "first-time", label: "First time in Marseille" },
  { id: "repeat", label: "I've been to Marseille before" },
] as const;

export const WALKING_TOLERANCE_OPTIONS = [
  { id: "full", label: "Full — slopes and steps are fine" },
  { id: "some", label: "Some — I'd rather avoid long climbs" },
  { id: "limited", label: "Limited — flatter routes and vehicle-based days preferred" },
] as const;

export const TRAVEL_STYLE_OPTIONS = [
  { id: "guided", label: "Guided shore excursion" },
  { id: "private", label: "Private driver-guide" },
  { id: "diy", label: "Independent, self-guided" },
] as const;

type PlanKey =
  | "highlights"
  | "taste-food"
  | "cassis"
  | "aix-marseille"
  | "luberon"
  | "active-ebike"
  | "active-hike"
  | "lavender"
  | "private-aix"
  | "private-cassis-food";

interface MarseilleDayPlan {
  bestFitType: string;
  duration: string;
  minimumHours: number;
  principalExcursion: PlannerLink;
  alternative: PlannerLink;
  oldPortAddOn?: PlannerLink;
}

const OLD_PORT_ADDON: PlannerLink = {
  label: "Old Port and Le Panier",
  href: "/vieux-port",
  why: "A short harbour wander pairs well before or after a half-day city or food plan — leave transfer time back to your berth.",
};

export const MARSEILLE_DAY_PLANS: Record<PlanKey, MarseilleDayPlan> = {
  highlights: {
    bestFitType: "Marseille Essentials — City Highlights",
    duration: "4–6 hours",
    minimumHours: 4,
    principalExcursion: {
      label: "Highlights of Marseille",
      href: "/shore-excursions/highlights-of-marseille",
      slug: "highlights-of-marseille",
      why: "Old Port, signature landmarks and Notre-Dame in a cruise-friendly half-day with more flexibility than a full Provence outing.",
    },
    alternative: {
      label: "Marseille for First-Time Visitors",
      href: "/marseille-for-first-time-visitors",
      why: "A fuller first-visit framing if you want to compare city-only options before booking.",
    },
    oldPortAddOn: OLD_PORT_ADDON,
  },
  "taste-food": {
    bestFitType: "Food-Led City Morning — Taste of Marseille",
    duration: "3–5 hours",
    minimumHours: 3.5,
    principalExcursion: {
      label: "A Taste of Marseille",
      href: "/shore-excursions/a-taste-of-marseille",
      slug: "a-taste-of-marseille",
      why: "A short tasting walk through Old Port, Le Panier and Noailles that still leaves room for harbour time.",
    },
    alternative: {
      label: "North African Cuisine and Culture",
      href: "/shore-excursions/north-african-cuisine-culture",
      slug: "north-african-cuisine-culture",
      why: "A longer food-and-culture outing if you want a sit-down meal and multicultural Marseille in more depth.",
    },
    oldPortAddOn: OLD_PORT_ADDON,
  },
  cassis: {
    bestFitType: "Cassis and the Coast — Full Coastal Day",
    duration: "6–8 hours",
    minimumHours: 6,
    principalExcursion: {
      label: "Marseille and Cassis",
      href: "/shore-excursions/marseille-and-cassis",
      slug: "marseille-and-cassis",
      why: "Cape Canaille views, harbour time in Cassis and a Marseille panorama — sized for a longer call.",
    },
    alternative: {
      label: "Cassis from Marseille",
      href: "/cassis-from-marseille",
      why: "Editorial planning notes, including the reminder that Calanques boat rides are often optional extras.",
    },
  },
  "aix-marseille": {
    bestFitType: "Aix and Marseille — Classic Provence Gateway Day",
    duration: "7–8 hours",
    minimumHours: 7,
    principalExcursion: {
      label: "Exclusive Aix-en-Provence and Marseille",
      href: "/shore-excursions/exclusive-aix-and-marseille",
      slug: "exclusive-aix-and-marseille",
      why: "Free time in Aix plus a panoramic Marseille finish — our strongest full-day overview when hours allow.",
    },
    alternative: {
      label: "Discover Aix-en-Provence Countryside Walk",
      href: "/shore-excursions/discover-aix-countryside",
      slug: "discover-aix-countryside",
      why: "A shorter Aix-focused alternative if you want less Marseille panorama and more town-and-countryside time.",
    },
  },
  luberon: {
    bestFitType: "Luberon Villages — Deep Provence Day",
    duration: "7–8+ hours",
    minimumHours: 7,
    principalExcursion: {
      label: "Villages of Luberon",
      href: "/shore-excursions/villages-of-luberon",
      slug: "villages-of-luberon",
      why: "Hill towns and ochre landscapes inland — a full Provençal day for longer calls only.",
    },
    alternative: {
      label: "Charming Villages of Luberon Valley",
      href: "/shore-excursions/charming-luberon-valley",
      slug: "charming-luberon-valley",
      why: "A parallel Luberon routing with wine tastings noted on the supplier listing — compare stop lists before choosing.",
    },
  },
  "active-ebike": {
    bestFitType: "Active City — Half-Day E-Bike",
    duration: "4–6 hours",
    minimumHours: 4,
    principalExcursion: {
      label: "Half-Day E-Bike Gadjo Tour",
      href: "/shore-excursions/half-day-e-bike-gadjo",
      slug: "half-day-e-bike-gadjo",
      why: "Corniche and neighbourhood riding with e-bike assist — active without committing a full Calanques day.",
    },
    alternative: {
      label: "Full Day E-Bike Tour to the Calanques",
      href: "/shore-excursions/full-day-e-bike-calanques",
      slug: "full-day-e-bike-calanques",
      why: "Stretch to a longer coastal e-bike day if your hours and fitness support it.",
    },
    oldPortAddOn: OLD_PORT_ADDON,
  },
  "active-hike": {
    bestFitType: "Active Calanques — Hike and Optional Swim",
    duration: "6–7 hours",
    minimumHours: 6,
    principalExcursion: {
      label: "Calanques National Park Hike and Swim",
      href: "/shore-excursions/calanques-hike-and-swim",
      slug: "calanques-hike-and-swim",
      why: "A serious coastal hike for fit adults — swim is optional, and park access can change with conditions.",
    },
    alternative: {
      label: "Best Marseille Tours for Active Travellers",
      href: "/best-marseille-tours-for-active-travellers",
      why: "Compare e-bike, hike and snorkel options before committing to the most demanding route.",
    },
  },
  lavender: {
    bestFitType: "Seasonal Lavender — Valensole Plateau",
    duration: "7–8 hours",
    minimumHours: 7,
    principalExcursion: {
      label: "Valensole Lavender Fields and Provence Countryside",
      href: "/shore-excursions/valensole-lavender",
      slug: "valensole-lavender",
      why: "Plateau fields and a producer visit during blooming season only — bloom is not guaranteed year-round.",
    },
    alternative: {
      label: "Best Provence Day Trip from Marseille",
      href: "/best-provence-day-trip-from-marseille-cruise-port",
      why: "If lavender is not operating on your dates, use this guide to pivot to Aix, Luberon or wine country.",
    },
  },
  "private-aix": {
    bestFitType: "Private Aix and Marseille — Flexible Full Day",
    duration: "7–8 hours",
    minimumHours: 7,
    principalExcursion: {
      label: "Private Aix-en-Provence and Marseille by Minivan",
      href: "/shore-excursions/private-aix-and-marseille",
      slug: "private-aix-and-marseille",
      why: "Private vehicle pacing for Aix free time and a Marseille panorama without a large coach group.",
    },
    alternative: {
      label: "Private Full Day Luberon Villages",
      href: "/shore-excursions/private-luberon",
      slug: "private-luberon",
      why: "Swap Aix for a private Luberon circuit if hill towns matter more than the classic gateway pairing.",
    },
  },
  "private-cassis-food": {
    bestFitType: "Private Cassis Food and Wine — Premium Coastal",
    duration: "4–6 hours",
    minimumHours: 4.5,
    principalExcursion: {
      label: "Private Marseille and Cassis Luxury Wine and Food",
      href: "/shore-excursions/private-cassis-wine-food",
      slug: "private-cassis-wine-food",
      why: "A private coastal food-and-wine outing that fits a medium call better than a full inland Provence day.",
    },
    alternative: {
      label: "Private Cassis and Marseille",
      href: "/shore-excursions/private-cassis-and-marseille",
      slug: "private-cassis-and-marseille",
      why: "A longer private Cassis-and-city day if your port hours support a fuller coastal itinerary.",
    },
  },
};

function usableHours(input: PlannerInput): number {
  if (typeof input.hoursAshore === "number") return input.hoursAshore;
  if (!input.arrivalTime || !input.departureTime) return 6.5;
  const [arrivalHour, arrivalMinute] = input.arrivalTime.split(":").map(Number);
  const [departureHour, departureMinute] = input.departureTime.split(":").map(Number);
  const elapsed = departureHour * 60 + departureMinute - arrivalHour * 60 - arrivalMinute;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  const privatePref = input.travelStyle === "private";

  if (privatePref && interests.includes("food") && interests.includes("coast")) {
    return "private-cassis-food";
  }
  if (privatePref && (interests.includes("provence") || interests.includes("city") || hours >= 6)) {
    if (interests.includes("coast") && !interests.includes("provence")) return "private-cassis-food";
    return "private-aix";
  }
  if (privatePref && interests.includes("coast")) {
    return "private-cassis-food";
  }

  if (interests.includes("lavender") && hours >= 6) {
    return "lavender";
  }

  if (interests.includes("active")) {
    if (hours >= 6 && (input.pace === "Active" || input.walkingTolerance === "full")) {
      return "active-hike";
    }
    return "active-ebike";
  }

  if (interests.includes("food") && (hours < 6 || !interests.includes("provence"))) {
    return "taste-food";
  }

  if (interests.includes("coast") && hours >= 6) {
    return "cassis";
  }

  if (interests.includes("provence") && hours >= 7) {
    // Repeat visitors chasing inland villages → Luberon; classic long first day → Aix + Marseille
    if (input.visitType === "repeat" && !interests.includes("city")) return "luberon";
    return "aix-marseille";
  }

  if (interests.includes("provence") && hours >= 5) {
    return "aix-marseille";
  }

  if (
    (input.visitType === "first-time" || interests.includes("city")) &&
    hours >= 4 &&
    hours < 7
  ) {
    return "highlights";
  }

  if (hours < 4 || input.walkingTolerance === "limited") {
    return interests.includes("food") ? "taste-food" : "highlights";
  }

  if (hours >= 7 && interests.includes("provence")) {
    return "aix-marseille";
  }

  if (hours >= 6 && interests.includes("coast")) {
    return "cassis";
  }

  return "highlights";
}

function returnNoteFor(key: PlanKey): string {
  switch (key) {
    case "cassis":
    case "private-cassis-food":
      return "Cassis is a road journey from the main cruise terminals. Allow a generous afternoon buffer for traffic, and remember any Calanques boat ride is typically optional, extra and weather-dependent — do not let it jeopardise all-aboard.";
    case "aix-marseille":
    case "private-aix":
      return "Aix sits inland from Marseille. Confirm all-aboard before lingering in town, and treat the Marseille panorama segment as part of the timed return rather than an open-ended add-on.";
    case "luberon":
      return "Luberon village days use most of a long call. Build a wide return margin for inland roads and multi-ship terminal congestion late in the afternoon.";
    case "lavender":
      return "Valensole is a long seasonal outing. Verify the excursion is operating on your date, and leave more return buffer than you would for a city-only day — bloom and traffic both vary.";
    case "active-hike":
      return "Calanques hiking needs careful timing: trail conditions, heat and park restrictions can slow the day. Active travellers only — prioritise all-aboard over an optional swim.";
    case "active-ebike":
      return "E-bike routes still need a clear path back to your berth. Factor in the transfer from the meeting or end point, especially if your ship uses the main terminals outside the centre.";
    case "taste-food":
      return "Food walks often meet in the city rather than at the gangway. Confirm how you will reach the meeting point and how you will return to the terminal with time to spare.";
    default:
      return "Even on a Marseille city day, the main cruise terminals usually sit outside the historic centre. Allow transfer time both ways and work back from all-aboard, not published departure.";
  }
}

export function generateMarseillePlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = MARSEILLE_DAY_PLANS[key];
  const partySize = input.adults + input.children;

  const walkingNote =
    input.walkingTolerance === "limited"
      ? " Given limited walking tolerance, this plan favours vehicle-based or shorter urban segments over Calanques hiking and steep neighbourhood circuits."
      : input.walkingTolerance === "some"
        ? " With moderate walking tolerance in mind, this plan avoids the most demanding Calanques terrain while still reaching the main experiences you selected."
        : " With full walking tolerance, this plan can include slopes, harbour walking or active coastal terrain where relevant.";

  const familyNote =
    input.children > 0
      ? " Family pacing has been factored in — skip adult-only or high-exertion Calanques products if ages or stamina do not fit the supplier rules."
      : "";

  const travelStyleNote =
    input.travelStyle === "private"
      ? " Your private preference steered the recommendation toward a dedicated vehicle product where that better matches the day."
      : input.travelStyle === "diy"
        ? " This plan is still useful as a DIY brief, though Provence and Cassis days are usually simpler with organised timing back to the ship."
        : " A guided shore excursion will run this itinerary, or a close variation of it, with published meeting details and a coordinated return.";

  const seasonalNote =
    key === "lavender"
      ? " Lavender is seasonal only: verify operating dates for your call, and never assume purple fields year-round — bloom is not guaranteed."
      : "";

  const whyThisMatches =
    `Based on roughly ${hours.toFixed(1)} usable hours ashore for ${partySize} guest${partySize === 1 ? "" : "s"}, ` +
    `a ${input.pace.toLowerCase()} pace, and your stated interests, we recommend ${plan.bestFitType}.` +
    `${walkingNote}${familyNote}${travelStyleNote}${seasonalNote}` +
    (hours < plan.minimumHours
      ? ` Note that this is shorter than the ${plan.minimumHours}-hour minimum we would normally recommend for this plan, so consider the Highlights of Marseille or a short food walk if your hours ashore are firm.`
      : "");

  return {
    bestFitType: plan.bestFitType,
    duration: plan.duration,
    principalExcursion: plan.principalExcursion,
    alternative: plan.alternative,
    returnConsideration: returnNoteFor(key),
    oldPortAddOn: plan.oldPortAddOn,
    independentAddOn: plan.oldPortAddOn,
    whyThisMatches,
  };
}

