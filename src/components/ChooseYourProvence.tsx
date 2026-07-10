import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

/** Experience paths aligned with `experienceCards` in homepage.ts */
const CHOOSE_CARDS = [
  {
    slug: "marseille-essentials",
    title: "Marseille Essentials",
    tagline:
      "Old Port energy, Le Panier's lanes, Notre-Dame's hilltop view and the waterfront — the clearest city introduction.",
    highlights: [
      "Vieux-Port harbour and waterfront atmosphere",
      "Le Panier's hillside lanes and local character",
      "Notre-Dame de la Garde viewpoint",
      "Best for first-timers on a half-day or standard call",
    ],
    cta: "Explore the essentials",
    href: "/shore-excursions/highlights-of-marseille",
    imageKey: "vieux-port",
    wide: true,
  },
  {
    slug: "aix-en-provence",
    title: "Aix-en-Provence",
    tagline:
      "Fountains, Cours Mirabeau and Provençal town life inland from the port — elegance over harbour bustle.",
    highlights: [
      "Cours Mirabeau and fountain-lined streets",
      "Markets, cafés and polished town walking",
      "A longer outing beyond the cruise terminals",
      "Confirm usable hours before booking a full Aix day",
    ],
    cta: "Plan an Aix day",
    href: "/aix-en-provence-from-marseille",
    imageKey: "aix",
    wide: true,
  },
  {
    slug: "cassis-and-the-coast",
    title: "Cassis and the Coast",
    tagline:
      "Cape Canaille drama, harbour time in Cassis and Marseille's corniche on the return.",
    highlights: [
      "Cape Canaille cliff views",
      "Cassis harbour and coastal Provençal pace",
      "Calanques boats often optional and weather-dependent",
      "Built for longer calls with a solid return buffer",
    ],
    cta: "See the coast",
    href: "/cassis-from-marseille",
    imageKey: "cassis",
    wide: false,
  },
  {
    slug: "food-and-local-culture",
    title: "Food and Local Culture",
    tagline:
      "Tasting walks, North African flavours and market streets — Marseille by the plate.",
    highlights: [
      "Bouillabaisse, panisse and Provençal produce",
      "Old Port, Le Panier and Noailles neighbourhoods",
      "Often shorter than Provence day trips",
      "Pairs well with extra harbour time",
    ],
    cta: "Taste the city",
    href: "/marseille-food-guide",
    imageKey: "food",
    wide: false,
  },
  {
    slug: "provence-villages-and-wine",
    title: "Provence Villages and Wine",
    tagline:
      "Luberon hill towns, Avignon, Bandol and lavender country when in season.",
    highlights: [
      "Hill villages and inland Provençal light",
      "Wine country and seasonal lavender options",
      "Built for longer port days only",
      "Needs a generous return-to-ship buffer",
    ],
    cta: "Choose a Provence day",
    href: "/best-provence-day-trip-from-marseille-cruise-port",
    imageKey: "provence",
    wide: false,
  },
  {
    slug: "active-mediterranean",
    title: "Active Mediterranean",
    tagline:
      "E-bike circuits and Calanques hiking for travellers who want terrain and sea air.",
    highlights: [
      "E-bike routes covering corniche and neighbourhoods",
      "Calanques hiking for fit travellers",
      "Access can change with weather or fire risk",
      "Verify fitness requirements before you book",
    ],
    cta: "Go active",
    href: "/best-marseille-tours-for-active-travellers",
    imageKey: "calanques",
    wide: false,
  },
] as const;

export function ChooseYourProvence() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Provence</p>
        <h2 className="section-title mt-2 max-w-3xl">
          How would you like to experience Marseille?
        </h2>
        <p className="section-subtitle">
          From Old Port energy to Cassis, Aix and inland Provence villages, choose the route that fits
          your interests, mobility and the hours your ship actually gives you ashore.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages["vieux-port"];
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
