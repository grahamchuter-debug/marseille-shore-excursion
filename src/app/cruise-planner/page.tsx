import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { MarseilleCruisePlanner } from "@/components/MarseilleCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Marseille cruise plan. Enter your port times, party size, interests, mobility and budget for tailored Old Port, Cassis, Aix and Provence recommendations.";

export const metadata = buildMetadata({
  title: "Marseille Cruise Planner — Port Day Itinerary",
  description,
  path,
  keywords: ["Marseille cruise planner", "Marseille port day itinerary", "Provence cruise planner", "Cassis cruise day"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Marseille Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Marseille Cruise Planner", description, path })]} />
      <PageHero
        title="Marseille Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the Old Port, Cassis, Aix-en-Provence, food walks and Provence villages."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <MarseilleCruisePlanner />
        </div>
      </section>
    </>
  );
}
