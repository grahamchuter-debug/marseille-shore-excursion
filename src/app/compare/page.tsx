import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { comparisons, getComparisonDisplayTitle } from "@/data/comparisons";
import { subjectImages } from "@/lib/images";

const path = "/compare";

export const metadata = buildMetadata({
  title: "Compare Excursion Options",
  description:
    "Compare Marseille's shore excursion options honestly — Aix or Cassis, city or Provence, private touring or a coach tour — before you book.",
  path,
  image: subjectImages.compare.src,
  imageAlt: subjectImages.compare.alt,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Compare", path },
];

export default function CompareHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Compare Excursion Options",
            description: "Compare Marseille's shore excursion options honestly.",
            path,
          }),
        ]}
      />
      <PageHero
        image={subjectImages.compare}
        title="Compare Your Marseille Options"
        subtitle="Clear, honest comparisons — Aix or Cassis, city day or Provence, private touring or a coach tour — without overselling any single option."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-4 sm:grid-cols-2">
            {comparisons.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="nav-card">
                <h3 className="font-display text-base font-bold text-gray-900">{getComparisonDisplayTitle(c)}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
