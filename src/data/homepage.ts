import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline = "Marseille Shore Excursions — Gateway to Provence";

export const visitorTypes: VisitorType[] = [
  {
    id: "first-time",
    label: "It's my first time in Marseille",
    shortLabel: "First visit",
    description:
      "Start with the Old Port, Le Panier and Notre-Dame de la Garde — the clearest introduction to the city on a cruise call.",
    href: "/marseille-for-first-time-visitors",
    cta: "See first-time picks",
  },
  {
    id: "food",
    label: "I want food and local flavour",
    shortLabel: "Food",
    description:
      "Bouillabaisse, panisse, North African markets and Provençal produce — Marseille by the plate.",
    href: "/marseille-food-guide",
    cta: "Taste Marseille",
  },
  {
    id: "coast",
    label: "I want Cassis and the coast",
    shortLabel: "Coast / Cassis",
    description:
      "Cape Canaille views, harbour time in Cassis and the dramatic Mediterranean shoreline beyond the city.",
    href: "/cassis-from-marseille",
    cta: "Plan a coastal day",
  },
  {
    id: "provence",
    label: "I want Provence villages and wine",
    shortLabel: "Provence",
    description:
      "Aix, the Luberon, Avignon and wine country — choose a day that fits your hours ashore.",
    href: "/best-provence-day-trip-from-marseille-cruise-port",
    cta: "Explore Provence options",
  },
  {
    id: "active",
    label: "I want an active Mediterranean day",
    shortLabel: "Active",
    description:
      "E-bike routes, Calanques hiking and coastal swimming for travellers who want to move.",
    href: "/best-marseille-tours-for-active-travellers",
    cta: "See active tours",
  },
  {
    id: "private",
    label: "I prefer a private day ashore",
    shortLabel: "Private",
    description:
      "Private Aix, Cassis food-and-wine or Luberon days sized for your party and your all-aboard time.",
    href: "/best-private-marseille-tours",
    cta: "Compare private options",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "marseille-essentials",
    title: "Marseille Essentials",
    description:
      "Old Port energy, Le Panier's lanes, Notre-Dame's hilltop view and the waterfront — best for first-timers who want the city itself on a half-day or standard call. Leaves room for lunch or a second short stop; confirm all-aboard before stretching the day.",
    href: "/shore-excursions/highlights-of-marseille",
    cta: "Explore the essentials",
    imageKey: "vieux-port",
  },
  {
    slug: "aix-en-provence",
    title: "Aix-en-Provence",
    description:
      "Fountains, Cours Mirabeau and Provençal town life inland from the port. Suits travellers who want elegance over harbour bustle; typically a longer outing, so check your usable hours before booking a full Aix day.",
    href: "/aix-en-provence-from-marseille",
    cta: "Plan an Aix day",
    imageKey: "aix",
  },
  {
    slug: "cassis-and-the-coast",
    title: "Cassis and the Coast",
    description:
      "Cape Canaille drama, harbour time in Cassis and Marseille's corniche on the return. A coastal full-day pace for longer calls — Calanques boat rides, where offered, are often optional extras and weather-dependent.",
    href: "/cassis-from-marseille",
    cta: "See the coast",
    imageKey: "cassis",
  },
  {
    slug: "food-and-local-culture",
    title: "Food and Local Culture",
    description:
      "Tasting walks, North African flavours and market streets for food-led travellers. Often shorter than Provence day trips, so it pairs well with Old Port time — still plan your return from wherever the meeting point sits relative to your berth.",
    href: "/marseille-food-guide",
    cta: "Taste the city",
    imageKey: "food",
  },
  {
    slug: "provence-villages-and-wine",
    title: "Provence Villages and Wine",
    description:
      "Luberon hill towns, Avignon, Bandol and lavender country when in season. Built for longer port days with a generous return buffer — not a short-call choice.",
    href: "/best-provence-day-trip-from-marseille-cruise-port",
    cta: "Choose a Provence day",
    imageKey: "provence",
  },
  {
    slug: "active-mediterranean",
    title: "Active Mediterranean",
    description:
      "E-bike circuits and Calanques hiking for travellers who want terrain and sea air. Active pace and fitness requirements apply; Calanques access can change with weather, fire risk or seasonal rules — verify before you go.",
    href: "/best-marseille-tours-for-active-travellers",
    cta: "Go active",
    imageKey: "calanques",
  },
];

export const coreSections: HomeSection[] = [
  {
    slug: "best-excursions",
    number: "01",
    title: "Best Marseille Shore Excursions",
    description:
      "City highlights, Cassis, Aix, food walks and Provence days — matched honestly to your hours ashore.",
    href: "/best-marseille-shore-excursions",
    cta: "Browse the guide",
  },
  {
    slug: "cruise-port-guide",
    number: "02",
    title: "Marseille Cruise Port Guide",
    description:
      "Terminal context, getting toward the Old Port, transfers and sensible return-to-ship planning.",
    href: "/port-guide",
    cta: "Read the port guide",
  },
  {
    slug: "compare",
    number: "03",
    title: "Compare Your Options",
    description:
      "Aix or Cassis? City day or Provence? Clear comparisons without overselling.",
    href: "/compare-marseille-shore-excursions",
    cta: "Compare shore excursions",
  },
  {
    slug: "independent",
    number: "04",
    title: "Explore Independently",
    description:
      "A realistic Old Port and Le Panier day when you prefer to move without a coach tour.",
    href: "/marseille-without-an-excursion",
    cta: "Plan a DIY day",
  },
  {
    slug: "cruise-planner",
    number: "05",
    title: "Marseille Cruise Planner",
    description:
      "Tell us your hours ashore, pace and interests for a tailored, transparent recommendation.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
  {
    slug: "faq",
    number: "06",
    title: "Marseille FAQs",
    description:
      "Honest answers on the cruise port, return timing, Calanques access, lavender season and food tours.",
    href: "/faq",
    cta: "Read the FAQs",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Where do cruise ships dock in Marseille?",
      answer:
        "Most large cruise ships use the main cruise terminals outside the historic centre. Some smaller vessels may berth closer to the city. Exact berth assignments can vary by ship and day — check your ship's daily programme and current port information on arrival.",
    },
    {
      question: "Can I reach the Old Port independently from the cruise terminal?",
      answer:
        "Yes, many passengers combine shuttle, taxi or public transport options to reach the Vieux-Port area, depending on where their ship is berthed. Do not assume a short walk from every terminal. Confirm current arrangements with your cruise line or port information before setting out.",
    },
    {
      question: "Do I need an excursion, or can I explore Marseille on my own?",
      answer:
        "The Old Port, Le Panier and nearby waterfront areas work well independently if you allow enough time for the journey back to your berth. Aix, Cassis, the Luberon and lavender country are longer road journeys and are often easier with an organised excursion timed around your all-aboard.",
    },
    {
      question: "Should first-time visitors stay in Marseille or go to Provence?",
      answer:
        "First-timers with a standard call often get the strongest sense of place from Marseille itself — Old Port, Le Panier and Notre-Dame de la Garde. Provence villages, Aix and Cassis reward longer calls with a comfortable return buffer.",
    },
    {
      question: "How early should I return to the ship in Marseille?",
      answer:
        "Work back from your ship's all-aboard time, not the published departure. Build extra margin on multi-ship days and after any outing beyond the city centre — traffic toward the terminals can slow late in the afternoon.",
    },
    {
      question: "What currency and language should I expect in Marseille?",
      answer:
        "France uses the euro. French is the everyday language; English is spoken in many visitor-facing settings, though less universally than in some other Mediterranean cruise ports. A few French phrases help in markets and neighbourhood cafés.",
    },
  ];
}
