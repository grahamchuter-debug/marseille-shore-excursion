import Link from "next/link";

const TRUST_POINTS = [
  {
    title: "Independently written",
    body: "Guides and comparisons are researched and written by our editorial team, not supplied by tour operators.",
  },
  {
    title: "Return-to-ship first",
    body: "Every itinerary is built around your all-aboard time, not the other way around.",
  },
  {
    title: "Honest about trade-offs",
    body: "We say plainly when an excursion is optional, weather-dependent, or not worth your limited port time.",
  },
  {
    title: "Transparent about affiliates",
    body: "Some links earn us a commission at no extra cost to you — never a factor in what we recommend.",
  },
];

export function CruisePassengerRatings() {
  return (
    <section className="section-padding bg-coastal-50 border-b border-coastal-100">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Why trust this planning resource</p>
        <h2 className="section-title mt-2">An independent Marseille planning resource</h2>
        <p className="section-subtitle">
          We are not a booking platform pretending to be neutral. Here is what we can tell you about how
          this site is put together — no invented star ratings.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="card-feature">
              <h3 className="font-display text-base font-bold text-gray-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{point.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/methodology" className="btn-secondary text-sm">
            Read our methodology
          </Link>
          <Link href="/affiliate-disclosure" className="btn-secondary text-sm">
            Affiliate disclosure
          </Link>
        </div>
      </div>
    </section>
  );
}
