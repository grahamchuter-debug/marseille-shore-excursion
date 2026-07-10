import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Marseille Shore Excursions — an independent cruise planning resource for passengers arriving at the Marseille cruise port.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About", description: `About ${SITE.name}.`, path })]} />
      <PageHero
        title={`About ${SITE.name}`}
        subtitle="An independent planning resource built for cruise passengers — your gateway to Provence from Marseille."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose prose-gray">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Marseille.
              Whether you have half a day ashore or a genuinely long call, our goal is to help you choose
              the best version of Marseille and Provence for your time in port — not just browse a catalogue
              of tours.
            </p>
            <p>
              We focus on the practical decisions that shape a good Marseille cruise day: city or Provence,
              whether independent exploring suits your hours once you have accounted for the terminal
              transfer, when a private tour beats a large coach, and how to build a realistic return-to-ship
              buffer for Aix, Cassis or a deeper inland day.
            </p>
            <p>
              Our guides are compiled for real cruise timings, not generic tourism copy. We publish honest
              editorial comparisons and Editor&apos;s Collection recommendations for different traveller
              types, and we are upfront about which excursions are weather-dependent, need advance booking,
              or simply are not worth the time on a short call. Ship schedules and transfer times are
              indicative — always confirm all-aboard times with your cruise line. See our{" "}
              <Link href="/methodology" className="font-semibold text-coastal-700 hover:underline">
                methodology
              </Link>{" "}
              for how we select and list excursions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
