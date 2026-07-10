import { cruisePositioning, getCruiseTrustMessage } from "@/data/cruise-positioning";

function HarbourMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19h14" />
      <path d="M7 19V9.5c0-2.8 2.2-5 5-5s5 2.2 5 5V19" />
      <path d="M9.5 19v-6.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V19" />
    </svg>
  );
}

/**
 * Subtle cruise trust line for the homepage hero, driven by `cruisePositioning`.
 * Pass `showEyebrow={false}` when the eyebrow is already rendered elsewhere in
 * the hero (e.g. directly above the H1) to avoid repeating the same line.
 */
export function CruiseHeroTrust({ showEyebrow = true }: { showEyebrow?: boolean }) {
  if (!cruisePositioning.enabled) return null;

  const message = getCruiseTrustMessage();

  return (
    <div className="mt-4 max-w-2xl animate-fade-up-delay">
      {showEyebrow && cruisePositioning.eyebrow ? (
        <p className="mb-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-maple-400/95 sm:text-xs">
          {cruisePositioning.eyebrow}
        </p>
      ) : null}
      <p className="flex items-start gap-2.5 text-sm leading-snug text-white/88 sm:text-[0.95rem] sm:leading-relaxed">
        <HarbourMarkIcon className="mt-0.5 h-4 w-4 shrink-0 text-maple-400/90 sm:mt-1 sm:h-[1.05rem] sm:w-[1.05rem]" />
        <span>{message}</span>
      </p>
    </div>
  );
}
