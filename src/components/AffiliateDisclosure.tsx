import Link from "next/link";

interface AffiliateDisclosureProps {
  /** Compact renders a single inline line (e.g. for the footer). */
  compact?: boolean;
  className?: string;
}

/**
 * Reusable short affiliate disclosure. Full version links through to the
 * dedicated /affiliate-disclosure page for the complete policy.
 */
export function AffiliateDisclosure({ compact = false, className = "" }: AffiliateDisclosureProps) {
  if (compact) {
    return (
      <p className={`text-xs text-coastal-100/60 ${className}`}>
        Some links on this site are affiliate links. We may earn a commission from qualifying bookings
        at no extra cost to you.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-white">
          Learn more
        </Link>
        .
      </p>
    );
  }

  return (
    <p className={`text-sm leading-relaxed text-gray-600 ${className}`}>
      {"We independently research and recommend Marseille shore excursions and planning resources. "}
      Some links on this site are affiliate links, which means we may earn a commission if you book
      through them — at no extra cost to you. This never affects which excursions or guides we
      recommend.{" "}
      <Link href="/affiliate-disclosure" className="font-semibold text-coastal-700 hover:underline">
        Read our full affiliate disclosure
      </Link>
      .
    </p>
  );
}
