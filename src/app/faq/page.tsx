import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getAllFaqs } from "@/data/faqs";
import { siteImages } from "@/lib/images";

const path = "/faq";
const description =
  "Honest answers to the questions cruise passengers ask most about Marseille: port access, Old Port transfers, Cassis and Aix timing, food, Calanques access and return planning.";

export const metadata = buildMetadata({
  title: "Marseille Cruise Passenger FAQs",
  description,
  path,
  image: siteImages.port.src,
  imageAlt: siteImages.port.alt,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path },
];

export default function FaqPage() {
  const faqs = getAllFaqs();
  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), webPageSchema({ title: "Marseille Cruise Passenger FAQs", description, path })]}
      />
      <PageHero
        title="Marseille Cruise Passenger FAQs"
        subtitle="Honest answers to the questions we hear most about planning a Marseille day ashore."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <FAQSection faqs={faqs} title="Frequently asked questions" />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
