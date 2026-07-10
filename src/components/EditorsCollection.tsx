import Link from "next/link";
import { editorsCollectionItems } from "@/data/editorial";

export function EditorsCollection() {
  return (
    <section className="section-padding bg-coastal-50">
      <div className="container-wide">
        <p className="section-eyebrow">Editor&apos;s Collection</p>
        <h2 className="section-title mt-2">The best route for your kind of traveller</h2>
        <p className="section-subtitle">
          Not every passenger wants the same Marseille. Our editorial team recommends the strongest option
          for each traveller type — honest picks, not a catalogue listing.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {editorsCollectionItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                item.id === "editors-choice"
                  ? "border-sandstone-400/50 bg-gradient-to-br from-sandstone-300/25 to-white"
                  : "border-gray-100 bg-white shadow-md"
              }`}
            >
              <span className="badge-editors-choice self-start">{item.label}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {item.description.split(" — ")[0]}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
              <span className="mt-4 text-sm font-semibold text-maple-600 group-hover:text-maple-500">
                {item.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
