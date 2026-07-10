import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/methodology";
const description = `How ${SITE.name} selects, lists and ranks Marseille shore excursions and planning guides — our editorial methodology.`;

export const metadata = buildMetadata({
  title: "Our Methodology",
  description,
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Methodology", path },
];

const CRITERIA = [
  {
    title: "Cruise-day suitability",
    body:
      "Every excursion we list is assessed against realistic port-call hours, not a generic day-trip length. We flag anything that only works comfortably on a long call, and we say plainly when a shorter option is the safer choice.",
  },
  {
    title: "Duration and itinerary balance",
    body:
      "Published durations are compared against the ground actually covered. We look for a sensible balance between sightseeing, transport and free time, and note when an itinerary asks a lot of a short window.",
  },
  {
    title: "Activity level and group type",
    body:
      "Walking demands, slopes, steps and terrain are compiled from the supplier's published details and our own destination guides, alongside whether an excursion is a standard group departure, a small group or a private tour.",
  },
  {
    title: "Supplier information",
    body:
      "We compile supplier-published details — inclusions, meeting points, group size and what is and isn't covered — directly from the listing, and we flag anything that isn't confirmed rather than assuming the best case.",
  },
  {
    title: "Customer feedback, where available",
    body:
      "Where a supplier publishes traveller feedback or ratings, we take it into account alongside our own editorial assessment. We do not invent star ratings, and we say when feedback data is limited or unavailable.",
  },
  {
    title: "Return planning",
    body:
      "Every excursion and guide is written with your ship's all-aboard time in mind. We build in return-buffer advice by default, and we flag itineraries — such as Aix, Cassis or deeper Provence days — that carry more inherent timing risk from road traffic back to the terminals.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Our Methodology", description, path })]} />
      <PageHero
        title="Our Methodology"
        subtitle="How we select, list and rank Marseille shore excursions and planning guides — in plain terms."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent editorial resource. We are not a booking platform, and we do
              not accept payment to feature a particular excursion above another. Every guide and
              recommendation on this site is compiled and published against the same set of criteria,
              summarised below.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {CRITERIA.map((item) => (
              <div key={item.title} className="card-feature">
                <h2 className="font-display text-lg font-bold text-gray-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Where we highlight an excursion as an Editor&apos;s Choice or with another editorial badge,
              that reflects our own assessment against these criteria — it is not a paid placement.
              Supplier details such as pricing, availability and exact inclusions change, so we always
              recommend checking the current listing before booking.
            </p>
          </div>

          <div className="mt-10">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>
    </>
  );
}
