import Link from "next/link";

const MARSEILLE_LINKS = [
  {
    title: "Marseille Essentials",
    description:
      "Old Port, Le Panier and Notre-Dame — the strongest first-time pairing for a city-focused call.",
    href: "/shore-excursions/highlights-of-marseille",
  },
  {
    title: "Cassis and the coast",
    description:
      "What a Cassis day actually needs in port time, and when Cape Canaille is worth the full outing.",
    href: "/cassis-from-marseille",
  },
  {
    title: "Aix or Provence villages?",
    description:
      "Honest guidance on Aix, the Luberon and inland wine country versus staying in the city.",
    href: "/best-provence-day-trip-from-marseille-cruise-port",
  },
  {
    title: "Marseille Port Guide",
    description:
      "Terminal context, transfers toward the Old Port and sensible return-to-ship planning.",
    href: "/port-guide",
  },
  {
    title: "Your Day Ashore",
    description:
      "The essentials cruise passengers should know before exploring Marseille — timing, walking and heat.",
    href: "/your-day-ashore",
  },
  {
    title: "Marseille Cruise Planner",
    description:
      "Tell us your port hours, party and interests for a tailored Marseille plan with editorial reasoning.",
    href: "/cruise-planner",
  },
];

export function MarseilleLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Marseille planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy and
          curiosity — whether you stay around the Old Port or travel into Provence.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARSEILLE_LINKS.map((link) => (
            <Link key={link.title} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/shore-excursions" className="btn-secondary text-sm">
            All Marseille shore excursions
          </Link>
        </div>
      </div>
    </section>
  );
}
