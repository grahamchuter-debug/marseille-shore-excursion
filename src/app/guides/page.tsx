import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { getAllHighlightPages, getAllExperiencePages } from "@/data/editorial-pages";
import { guidesHubImage } from "@/lib/images";

const path = "/guides";

export const metadata = buildMetadata({
  title: "Marseille Planning Guides",
  description:
    "Independent Marseille cruise planning guides — Old Port, Cassis, Aix, Provence villages, food, walking and honest itinerary advice for your day ashore.",
  path,
  image: guidesHubImage.src,
  imageAlt: guidesHubImage.alt,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path },
];

export default function GuidesHubPage() {
  const highlights = getAllHighlightPages();
  const experiences = getAllExperiencePages();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Marseille Planning Guides",
            description: "Independent Marseille cruise planning guides.",
            path,
          }),
        ]}
      />
      <PageHero
        image={guidesHubImage}
        title="Marseille Planning Guides"
        subtitle="Destination guides and honest cruise-day advice for the Old Port, Cassis, Aix, Provence villages and beyond."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title text-2xl mb-6">Destination guides</h2>
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <Link key={h.slug} href={`/${h.slug}`} className="nav-card">
                <h3 className="font-display text-base font-bold text-gray-900">{h.attractionName}</h3>
                <p className="mt-1 text-sm text-gray-600">{h.tagline}</p>
              </Link>
            ))}
          </div>

          <h2 className="section-title text-2xl mb-6">Planning &amp; itinerary guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e) => (
              <Link key={e.slug} href={`/${e.slug}`} className="nav-card">
                <h3 className="font-display text-base font-bold text-gray-900">{e.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{e.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
