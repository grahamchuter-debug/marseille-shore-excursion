import Link from "next/link";

const LINKS = [
  { href: "/port-guide", label: "Marseille Port Guide" },
  { href: "/ship-schedules/marseille", label: "Ship Schedules" },
  { href: "/cruise-planner", label: "Marseille Cruise Planner" },
  { href: "/your-day-ashore", label: "Your Day Ashore" },
  { href: "/compare", label: "Compare Marseille" },
  { href: "/shore-excursions", label: "Shore Excursions" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
