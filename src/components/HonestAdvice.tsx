import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do you need a shore excursion in Marseille?</h2>
        <p className="section-subtitle">
          The honest answer: it depends which Marseille you want. The Old Port and Le Panier reward
          independent exploring once you have accounted for the terminal transfer; Aix, Cassis and deeper
          Provence need more planning than most first-time passengers expect.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Old Port and Le Panier — a strong case for going independently
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              For a first-time call, Marseille&apos;s historic harbour and hillside lanes work well without
              a coach tour once you have a clear transfer plan from your berth:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Vieux-Port quays and waterfront atmosphere
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Le Panier&apos;s lanes and local character
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Notre-Dame de la Garde viewpoint
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Food markets and café stops at your own pace
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Aix, Cassis and Provence need more planning
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A few of Marseille&apos;s best-known day trips are easy to underestimate on a single port call.
              Give these extra thought before booking:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Aix-en-Provence</strong> — an inland transfer plus town time genuinely needs a
                  longer call, not a quick add-on after a city morning
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Cassis and the Calanques</strong> — a worthwhile coastal day, but boat conditions
                  and park access can change, so they should not anchor a short call
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Luberon, Avignon and lavender</strong> — full-day Provence geography that only
                  works with a generous return buffer
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Heat and hills</strong> — Le Panier and Notre-Dame involve slopes and steps;
                  pace warm-weather calls accordingly
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare" className="btn-secondary text-sm">
            Compare Marseille options
          </Link>
          <Link href="/port-guide" className="btn-secondary text-sm">
            Marseille Port Guide
          </Link>
          <Link href="/your-day-ashore" className="btn-secondary text-sm">
            Your Day Ashore
          </Link>
          <Link href="/methodology" className="btn-secondary text-sm">
            How we research this
          </Link>
        </div>
      </div>
    </section>
  );
}
