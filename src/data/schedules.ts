import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import marseilleSchedule from "./imported-schedules/marseille.json";
import {
  FUTURE_2028_SCHEDULE_NOTE,
  PARTIAL_YEAR_SCHEDULE_NOTE,
  SCHEDULE_COVERAGE_NOTE,
} from "./schedule-wording";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Marseille cruise ship schedules?",
    answer:
      "Schedules are compiled from published itineraries and updated as new calls are confirmed. Times can change — always confirm with your cruise line before booking excursions.",
  },
  {
    question: "How far is Aix-en-Provence from the Marseille cruise port?",
    answer:
      "Roughly 30–45 minutes by road in normal traffic. Build a firm return buffer — afternoon congestion back into Marseille is common in peak season.",
  },
  {
    question: "Can I visit Cassis and the Calanques on a short port call?",
    answer:
      "Short calls favour Marseille city or a compact coastal half-day. Cassis and Calanques need enough usable hours plus contingency for traffic back to port.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships share your Marseille port day before booking Provence or Cassis tours",
  "Allow a 60–90 minute return buffer to the Marseille cruise port",
  "Morning departures protect against afternoon traffic returning from Aix or Cassis",
  "Confirm published arrival and departure times with your cruise line before locking transfers",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "marseille",
    name: "Marseille",
    country: "France",
    seoTitle: "Marseille Cruise Ship Schedule — Provence & Cassis Port Calls",
    metaDescription:
      "Marseille cruise ship schedule — see which ships call at Marseille and plan Provence, Aix-en-Provence and Cassis shore excursions around published arrival and departure times.",
    intro:
      "Marseille is the gateway port for Provence, Aix-en-Provence and the Calanques on Western Mediterranean itineraries. Check scheduled arrivals and departures before booking shore excursions.",
    description:
      "France's Provence cruise gateway — Old Port and city close to the ship, Aix inland, Cassis and Calanques along the coast.",
    scheduleOverview:
      "Verified calls currently available begin July 2026, with full 2027 coverage. Peak traffic is typically May to September.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

export { FUTURE_2028_SCHEDULE_NOTE, PARTIAL_YEAR_SCHEDULE_NOTE, SCHEDULE_COVERAGE_NOTE };

const scheduleData: Record<string, ScheduleEntry[]> = {
  marseille: marseilleSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
