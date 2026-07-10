import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { YourDayAshore } from "@/components/YourDayAshore";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";

const path = "/your-day-ashore";
const description =
  "Everything cruise passengers should know before a day ashore in Marseille: realistic timing, terminal transfers, walking demands, heat and a safe return-to-ship buffer.";

export const metadata = buildMetadata({
  title: "Your Day Ashore in Marseille",
  description,
  path,
  image: siteImages.port.src,
  imageAlt: siteImages.port.alt,
  keywords: ["Marseille cruise day planning", "Marseille all-aboard time", "Old Port cruise day"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Your Day Ashore", path },
];

export default function YourDayAshorePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Your Day Ashore in Marseille", description, path }),
        ]}
      />
      <PageHero
        image={siteImages.port}
        title="Your Day Ashore in Marseille"
        subtitle="Ancient port energy, Provençal light and the gateway to southern France — planned around the hours your ship actually gives you, not an ambitious wish list."
        compact
      />

      <YourDayAshore />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="prose-body space-y-6">
            <h2 className="section-title text-2xl mb-4">Planning a realistic Marseille day</h2>
            <p>
              Marseille rewards passengers who plan around their ship&apos;s clock rather than around an
              idealised itinerary. Most large ships berth at terminals outside the historic centre, which
              means the Old Port is a transfer away — start by confirming how you will reach the city, then
              decide how much further the day allows you to travel.
            </p>
            <p>
              Aix and Cassis both require a meaningful road journey, which is easy to absorb on a standard
              or long call but adds real risk on a short one. The Luberon, Avignon and seasonal lavender
              country are the outliers: inland geography consumes a large part of any day before sightseeing
              even begins, so treat them as full-day commitments reserved for calls with a genuine, generous
              buffer.
            </p>
            <p>
              Heat, slopes and steps are the other constant across Marseille&apos;s hillside districts. Le
              Panier and the climb toward Notre-Dame de la Garde are real; pace warm-weather calls
              accordingly. Carry water, use sun protection in the exposed middle of the day, and build a
              café or market stop into a hot itinerary rather than pushing through it.
            </p>
            <p>
              Above all, work backwards from your ship&apos;s all-aboard time, not its published departure.
              Traffic toward the cruise terminals can slow late in the afternoon — especially on a day when
              several ships share the port — which is exactly why it is easy to become casual about the
              final stretch back.
            </p>
          </div>

          <div className="mt-10 card-accent">
            <h2 className="font-display text-xl font-bold text-gray-900">Want a tailored recommendation?</h2>
            <p className="mt-2 text-sm text-gray-600">
              Tell us your port hours, party and interests and we will suggest a realistic Marseille plan with
              editorial reasoning attached.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/cruise-planner" className="btn-primary text-sm">
                Use the Marseille Cruise Planner
              </Link>
              <Link href="/port-guide" className="btn-secondary text-sm">
                Read the full Port Guide
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
