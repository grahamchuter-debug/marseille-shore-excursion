import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { portGuideContent } from "@/data/port-guide";

const path = "/port-guide";

export const metadata = buildMetadata({
  title: portGuideContent.title,
  description:
    "The Marseille cruise port guide: main terminals, getting toward the Old Port, transfers, shuttles and sensible return-to-ship planning.",
  path,
  image: siteImages.port.src,
  imageAlt: siteImages.port.alt,
  keywords: ["Marseille cruise port", "Marseille cruise terminal", "Vieux-Port from cruise ship", "Marseille shore excursion port"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Marseille Port Guide", path },
];

export default function PortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(portGuideContent.faqs),
          articleSchema({
            title: portGuideContent.title,
            description: portGuideContent.subtitle,
            path,
            image: siteImages.port.src,
          }),
        ]}
      />
      <PhotoHeroBand
        image={siteImages.port}
        eyebrow="Marseille for Cruise Passengers"
        title={portGuideContent.title}
        subtitle={portGuideContent.subtitle}
        compact
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title text-2xl mb-4">Cruise terminal</h2>
          <div className="mb-10 grid gap-4 sm:grid-cols-1">
            {portGuideContent.terminals.map((terminal) => (
              <div key={terminal.name} className="card-feature">
                <h3 className="font-display text-lg font-bold text-gray-900">{terminal.name}</h3>
                <dl className="mt-3 space-y-2 text-sm text-gray-700">
                  <div>
                    <dt className="font-semibold text-coastal-700">Quay</dt>
                    <dd>{terminal.quay}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-coastal-700">Used by</dt>
                    <dd>{terminal.usedBy}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-coastal-700">Access into the city</dt>
                    <dd>{terminal.cityAccess}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="prose-body space-y-10">
            {portGuideContent.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="section-title text-2xl mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 card-accent">
            <h2 className="font-display text-xl font-bold text-gray-900">Prefer the full excursion catalogue?</h2>
            <p className="mt-2 text-sm text-gray-600">
              See the Marseille cruise port guide in the context of a specific destination, or browse carefully
              selected shore excursions built around this same terminal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/marseille-cruise-port" className="btn-secondary text-sm">
                Marseille Cruise Port — quick reference
              </Link>
              <Link href="/shore-excursions" className="btn-primary text-sm">
                Browse Shore Excursions
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <FAQSection faqs={portGuideContent.faqs} title="Marseille Port Guide — FAQs" />
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
