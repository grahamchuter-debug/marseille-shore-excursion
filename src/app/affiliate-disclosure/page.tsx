import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/affiliate-disclosure";
const description = `Affiliate disclosure for ${SITE.name} — how commission-based links work on this site and why they never influence our recommendations.`;

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description,
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Affiliate Disclosure", path },
];

export default function AffiliateDisclosurePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Affiliate Disclosure", description, path })]} />
      <PageHero title="Affiliate Disclosure" subtitle="A clear explanation of how commission-based links work on this site." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent Marseille cruise planning resource. Some of the links on this
              site — including links to shore excursion suppliers — are affiliate links. If you click
              through and book, we may earn a small commission from the supplier at no extra cost to you.
            </p>
            <p>
              This commission never affects which excursions or guides we recommend. Our editorial badges,
              such as Editor&apos;s Choice or Best Value, reflect our own assessment against the criteria
              described in our{" "}
              <Link href="/methodology" className="font-semibold text-coastal-700 hover:underline">
                methodology
              </Link>
              , not which supplier pays the highest commission.
            </p>
            <p>
              Excursion pricing, availability and exact inclusions are set and confirmed by the supplier,
              not by us. Where we link to a supplier listing, we recommend checking the current price and
              confirmed details before booking, since these can change without notice.
            </p>
            <p>
              We do not accept payment to feature a particular excursion above another, and we clearly
              label any content that is sponsored, should that ever change. If you have questions about a
              specific affiliate relationship, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-coastal-700 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
