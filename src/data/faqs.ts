import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "How do I get from the Marseille cruise port to the city centre?",
    answer:
      "Most large ships berth at the main cruise terminals outside the historic centre. Passengers typically use a cruise-line shuttle, taxi or public transport to reach the Old Port area. Confirm current arrangements for your ship — do not assume a short walk from every berth.",
  },
  {
    question: "What is a sensible return-to-ship buffer in Marseille?",
    answer:
      "Always work back from all-aboard, not published departure. For a city-focused day, allow transfer time from the Old Port back to the terminals. For Aix, Cassis, the Luberon or lavender country, build a larger buffer for road traffic and multi-ship congestion.",
  },
  {
    question: "Should I book an organised excursion or explore independently?",
    answer:
      "Independent exploring works well for the Old Port, Le Panier and nearby waterfront once you have a clear transfer plan. Organised excursions are usually simpler for Cassis, Aix, inland Provence and timed active days, because return logistics are built around the ship.",
  },
  {
    question: "Can cruise passengers visit the Calanques from Marseille?",
    answer:
      "Yes, via hiking, e-bike or boat-based options depending on the product. Access can be affected by weather, fire risk and seasonal park rules — check current conditions before relying on a specific cove or trail. On some Cassis tours, a Calanques boat ride is an optional extra, not included.",
  },
  {
    question: "When is lavender season near Marseille?",
    answer:
      "Valensole lavender excursions typically operate only during the blooming season. Exact operating dates are not always listed on supplier pages, and bloom is not guaranteed. Verify whether the tour runs on your call date before planning a lavender day.",
  },
  {
    question: "Is Aix-en-Provence or Cassis better from the Marseille cruise port?",
    answer:
      "Choose Aix for fountains, town elegance and a classic Provençal inland day. Choose Cassis for harbour atmosphere, Cape Canaille views and a coastal feel. Both usually need a longer call than a Marseille-only highlights tour — compare your usable hours before booking either.",
  },
  {
    question: "Are food tours realistic on a cruise call?",
    answer:
      "Yes. Shorter tasting walks such as A Taste of Marseille are designed to fit a half-day and can leave room for Old Port time afterwards. Check the meeting point carefully — some food tours meet in the city and expect a shuttle or taxi from the terminal first.",
  },
  {
    question: "Is Notre-Dame de la Garde realistic independently?",
    answer:
      "Yes for many visitors, but it involves a hillside climb or a local transport option up to the basilica. Combine it with Old Port time only if your berth-to-centre transfer and return buffer still feel comfortable.",
  },
  {
    question: "Do I need to speak French in Marseille?",
    answer:
      "French is the everyday language. English is common in visitor-facing spots around the Old Port, though less universal in neighbourhood markets and cafés. A few basic phrases help; they are not a barrier to a well-planned cruise day.",
  },
  {
    question: "What should I know about heat and walking in Marseille?",
    answer:
      "Summer days can be hot on open quays and at upper viewpoints, and Le Panier includes slopes and steps. Carry water, wear comfortable shoes and tackle the most exposed climbs earlier when you can.",
  },
  {
    question: "Are private tours worth it in Marseille?",
    answer:
      "Private Aix, Cassis food-and-wine or Luberon days suit families, mixed-mobility groups and travellers who want flexible pacing. They cost more than standard group seats — compare against your party size and how much of the day you need to cover.",
  },
  {
    question: "Can I combine a short food walk with Old Port time?",
    answer:
      "Often yes. A three-to-four-hour tasting walk leaves room for harbour wandering if your meeting point and terminal transfer still allow a safe return. Do not stack a long Provence outing on the same call afterwards.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
