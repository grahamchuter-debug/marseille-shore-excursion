import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourProvence } from "@/components/ChooseYourProvence";
import { SpiritOfMarseille } from "@/components/SpiritOfMarseille";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { CruisePassengerRatings } from "@/components/CruisePassengerRatings";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema, faqSchema } from "@/lib/schema";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { MarseilleLinks } from "@/components/MarseilleLinks";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { YourDayAshore } from "@/components/YourDayAshore";
import { PlanningLinks } from "@/components/PlanningLinks";
import { SITE } from "@/lib/site";
import { getFeaturedExcursions, getExcursionBySlug } from "@/data/excursions";
import { getComparisonBySlug } from "@/data/comparisons";
import { getHomepageFaqs } from "@/data/homepage";

export const metadata = buildMetadata({
  title: "Marseille Shore Excursions | Cruise Port Tours & Provence Guide",
  description:
    "Ancient port energy, Provençal light and the gateway to southern France. Compare Marseille shore excursions for the Old Port, food, Cassis, Aix and Provence villages — planned around your time in port.",
  path: "/",
  keywords: [
    "Marseille shore excursions",
    "Marseille cruise port",
    "Cassis from Marseille",
    "Aix-en-Provence cruise day",
    "Provence shore excursion",
    "Marseille cruise planner",
  ],
});

export default function HomePage() {
  const featuredExcursions = getFeaturedExcursions();
  const spotlight = getExcursionBySlug("highlights-of-marseille");
  const otherFeatured = featuredExcursions.filter((e) => e.slug !== "highlights-of-marseille");
  const comparisonTeaser = getComparisonBySlug("compare-marseille-shore-excursions");
  const homepageFaqs = getHomepageFaqs();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          travelGuideSchema({
            title: "Marseille Shore Excursions — Gateway to Provence",
            description: SITE.description,
            path: "/",
          }),
          faqSchema(homepageFaqs),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      {/* Hero */}
      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="home-hero-heading animate-fade-up">Marseille Shore Excursions</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Ancient port energy, Provençal light and the gateway to southern France.
          </p>
          <CruiseHeroTrust />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base animate-fade-up-delay">
            Compare Marseille shore excursions designed around the time available during your port call —
            Old Port highlights, food walks, Cassis, Aix-en-Provence and Provence villages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Marseille Excursions
            </Link>
            <Link
              href="/your-day-ashore"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Plan Your Day Ashore
            </Link>
          </div>
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-white/65 sm:text-sm animate-fade-up-delay-2">
            Most large ships berth at terminals outside the historic centre, so a city day and a Provence
            landscape day start from different transfer realities. Exact berths can vary — check your
            ship&apos;s published arrangements.
          </p>
        </div>
      </section>

      <YourDayAshore />
      <ChooseYourProvence />
      <SpiritOfMarseille />
      <EditorsCollection />
      <HonestAdvice />

      {/* Featured excursions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Carefully selected</p>
          <h2 className="section-title mt-2">Featured Marseille shore excursions</h2>
          <p className="section-subtitle">
            Our Editor&apos;s Choice and a small set of other standout excursions, chosen against the criteria
            in our methodology — not the highest commission.
          </p>

          {spotlight && (
            <div className="mt-10 grid gap-0 overflow-hidden rounded-2xl border border-coastal-100 shadow-lg lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <ResponsiveImage
                  image={getExcursionImage(spotlight.slug)}
                  role="card"
                  imgClassName="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 badge-editors-choice">{spotlight.editorialBadge}</span>
              </div>
              <div className="flex flex-col justify-center bg-coastal-50 p-8 sm:p-10">
                <h3 className="font-display text-2xl font-bold text-gray-900">{spotlight.title}</h3>
                <p className="mt-2 text-gray-700">{spotlight.tagline}</p>
                {spotlight.whyRecommend && (
                  <p className="mt-4 text-sm italic text-gray-600">{spotlight.whyRecommend}</p>
                )}
                <p className="mt-4 text-xs font-medium text-coastal-700">
                  {spotlight.duration} · {spotlight.pace}
                </p>
                <Link href={`/shore-excursions/${spotlight.slug}`} className="btn-primary mt-6 self-start">
                  View Excursion Details
                </Link>
              </div>
            </div>
          )}

          {otherFeatured.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherFeatured.map((e) => (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group flex overflow-hidden">
                  <div className="relative aspect-[4/3] w-2/5 shrink-0 overflow-hidden">
                    <ResponsiveImage
                      image={getExcursionImage(e.slug)}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    {e.editorialBadge && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-maple-600">{e.editorialBadge}</span>
                    )}
                    <h3 className="mt-1 font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
                      {e.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{e.tagline}</p>
                    <span className="mt-3 text-sm font-semibold text-maple-600">View Excursion Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-secondary text-sm">
              See all Marseille shore excursions
            </Link>
          </div>
        </div>
      </section>

      <CruisePassengerRatings />

      {/* Comparison teaser */}
      {comparisonTeaser && (
        <section className="section-padding bg-white border-t border-coastal-100">
          <div className="container-wide max-w-4xl text-center">
            <p className="section-eyebrow">Not sure which to choose?</p>
            <h2 className="section-title mt-2">{comparisonTeaser.title}</h2>
            <p className="section-subtitle mx-auto">{comparisonTeaser.summary}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href={`/${comparisonTeaser.slug}`} className="btn-primary text-sm">
                Compare Marseille shore excursions
              </Link>
              <Link href="/compare" className="btn-secondary text-sm">
                See all comparisons
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Planning hub */}
      <section className="section-padding bg-coastal-50/60">
        <div className="container-wide">
          <p className="section-eyebrow">Plan your day ashore</p>
          <h2 className="section-title mt-2">Everything you need to choose the right Marseille experience</h2>
          <p className="section-subtitle">
            Not just an excursion catalogue — comparisons, guides and honest cruise-day planning advice,
            because the best bookings start with genuine understanding.
          </p>
          <div className="mt-10">
            <PlanningLinks />
          </div>
        </div>
      </section>

      <MarseilleLinks />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <p className="section-eyebrow mb-6">Before you go</p>
          <FAQSection faqs={homepageFaqs} title="Marseille cruise passenger FAQs" />
          <div className="mt-8">
            <Link href="/faq" className="btn-secondary text-sm">
              Read all Marseille FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
