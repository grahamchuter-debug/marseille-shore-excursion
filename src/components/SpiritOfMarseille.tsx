import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SpiritOfMarseille() {
  const image = subjectImages["vieux-port"];

  return (
    <section className="section-padding bg-gradient-to-b from-coastal-50 via-white to-white border-b border-coastal-100">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">Ancient port, Provençal light</p>
            <h2 className="section-title mt-2 max-w-xl">Spirit of Marseille</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Marseille is a working Mediterranean port that never stopped being lived in. Fishing boats
              still share the Vieux-Port with ferries and café terraces, Notre-Dame watches the city from
              its hill, and the light that painters chased inland begins right here on the waterfront.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A cruise day here could mean walking Le Panier&apos;s lanes, tasting the city&apos;s French
              and North African flavours, climbing for the basilica view, or using Marseille as the
              gateway to Cassis, Aix and the villages of Provence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Every route reveals another layer of the same southern story — ancient harbour energy,
              Provençal light and the open road into France&apos;s south.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Ancient port energy" },
                { label: "Provençal light" },
                { label: "Gateway to southern France" },
              ].map((item) => (
                <div key={item.label} className="card-feature text-center">
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ResponsiveImage image={image} role="card" imgClassName="h-full w-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-coastal-900/30 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
