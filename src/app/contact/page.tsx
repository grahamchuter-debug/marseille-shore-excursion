import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/contact";
const description = `Contact ${SITE.name} — an independent Marseille cruise planning resource. Reach us by email for questions about our guides.`;

export const metadata = buildMetadata({
  title: "Contact Us",
  description,
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Contact Us", description, path })]} />
      <PageHero
        title="Contact Us"
        subtitle="Questions about a guide, a shore excursion or planning your Marseille day ashore — we're happy to help."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent Marseille cruise planning resource. We don&apos;t run a booking
              desk or call centre, but we do read and respond to genuine questions about our guides,
              comparisons and shore excursion recommendations.
            </p>
            <p>
              The quickest way to reach us is by email at{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-coastal-700 hover:underline">
                {SITE.email}
              </a>
              . Let us know your port call dates, hours ashore and what you&apos;re trying to plan, and
              we&apos;ll point you towards the most useful guide or comparison for your situation.
            </p>
            <p>
              For questions about a specific booking, payment or a supplier&apos;s cancellation policy,
              contact the tour operator or affiliate partner directly — we can advise on planning, but
              booking support sits with the supplier who takes your payment.
            </p>
          </div>

          <div className="mt-10 card-accent">
            <h2 className="font-display text-xl font-bold text-gray-900">Keep planning while you wait to hear back</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/cruise-planner" className="btn-primary text-sm">
                Use the Marseille Cruise Planner
              </Link>
              <Link href="/port-guide" className="btn-secondary text-sm">
                Marseille Port Guide
              </Link>
              <Link href="/shore-excursions" className="btn-secondary text-sm">
                Browse Shore Excursions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
