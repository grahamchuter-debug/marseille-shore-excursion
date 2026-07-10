import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, excursionsHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata = buildMetadata({
  title: "Shore Excursions",
  description:
    "Carefully selected Marseille shore excursions from the cruise port — Old Port highlights, food walks, Cassis, Aix-en-Provence and Provence villages, with honest cruise-day timing.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: [
    "Marseille shore excursions",
    "Cassis shore excursion",
    "Aix-en-Provence shore excursion",
    "Provence cruise excursion",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Shore Excursions",
            description: "Carefully selected Marseille shore excursions from the cruise port.",
            path: "/shore-excursions",
          }),
        ]}
      />
      <PageHero
        image={excursionsHubImage}
        title="Marseille Shore Excursions"
        subtitle="Cruise-timed tours for the Old Port, Cassis, Aix, food walks and Provence villages — with editorial reasoning and reliable return-to-ship planning."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 max-w-2xl text-gray-600">
            Not sure which one fits your port call? Start with our{" "}
            <Link href="/compare-marseille-shore-excursions" className="font-semibold text-coastal-700 hover:underline">
              Compare Marseille Shore Excursions
            </Link>{" "}
            guide, or read our{" "}
            <Link href="/best-marseille-shore-excursions" className="font-semibold text-coastal-700 hover:underline">
              best Marseille shore excursions
            </Link>{" "}
            ranking before you book.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => {
              const image = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {e.editorialBadge ? (
                      <span className="absolute left-3 top-3 badge-editors-choice">{e.editorialBadge}</span>
                    ) : (
                      <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {e.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    {e.whyRecommend && (
                      <p className="mt-3 text-sm text-gray-500 italic">{e.whyRecommend}</p>
                    )}
                    <p className="mt-3 text-xs font-medium text-coastal-700">
                      {e.duration} · {e.pace}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-maple-600 group-hover:text-maple-500">
                      View Excursion Details →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>
    </>
  );
}
