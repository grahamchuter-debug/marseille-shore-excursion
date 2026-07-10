import Link from "next/link";
import { SITE } from "@/lib/site";
import { DestinationLogo } from "@/components/DestinationLogo";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-maple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-coastal-900"
              aria-label={`${SITE.name} — home`}
            >
              <DestinationLogo variant="compact" tone="on-dark" decorative />
            </Link>
            <p className="mt-4 text-sm text-coastal-100/70 leading-relaxed">
              Helping cruise passengers choose between the Old Port, Cassis, Aix-en-Provence and the
              villages of Provence with honest independent advice for every day ashore.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Choose your Marseille</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/compare" className="hover:text-white">Compare Marseille options</Link></li>
              <li><Link href="/guides" className="hover:text-white">Planning guides</Link></li>
              <li><Link href="/your-day-ashore" className="hover:text-white">Your Day Ashore</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/cruise-planner" className="hover:text-white">Marseille Cruise Planner</Link></li>
              <li><Link href="/port-guide" className="hover:text-white">Marseille Port Guide</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/guides" className="hover:text-white">Independent guides</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">About this site</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/methodology" className="hover:text-white">Our methodology</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white">Affiliate disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <DestinationLogo variant="mark" tone="on-dark" className="opacity-90" decorative />
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
        <div className="container-wide mt-4 border-t border-white/10 pt-4">
          <AffiliateDisclosure compact />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Marseille cruise planning resource — not affiliated with any
        cruise line or the Marseille cruise port. {SITE.domain}
      </div>
    </footer>
  );
}
