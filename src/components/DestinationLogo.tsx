import {
  destinationIdentity,
  type LogoConcept,
  type LogoTone,
  type LogoVariant,
} from "@/data/destination-identity";

type DestinationLogoProps = {
  variant?: LogoVariant;
  concept?: LogoConcept;
  tone?: LogoTone;
  className?: string;
  decorative?: boolean;
};

function MarkSvg({
  concept,
  tone,
  size,
}: {
  concept: LogoConcept;
  tone: LogoTone;
  size: number;
}) {
  const onDark = tone === "on-dark";
  const ink = onDark ? "#f7f2ea" : "#14283a";
  const accent = onDark ? "#d4a574" : "#c4843c";
  const soft = onDark ? "rgba(247,242,234,0.35)" : "#e8d9c4";

  if (concept === "harbour-m") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="38" height="38" rx="10" stroke={soft} strokeWidth="1.25" />
        <path
          d="M11 28V12.5L17.2 24.2h1.1L24.5 12.5V28"
          stroke={ink}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 31.5c3.2-2.2 6.4-3.3 11-3.3s7.8 1.1 11 3.3"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // harbour-basilica — restrained harbour arch with a subtle basilica tip
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" stroke={soft} strokeWidth="1.25" />
      {/* Harbour / fort entrance arch */}
      <path
        d="M9.5 30.5V17.5c0-5.6 4.6-9.5 10.5-9.5s10.5 3.9 10.5 9.5v13"
        stroke={ink}
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <path
        d="M13 30.5V18.2c0-4 3.2-6.8 7-6.8s7 2.8 7 6.8v12.3"
        stroke={soft}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Minimal basilica tip / lantern */}
      <path d="M20 6.2v2.4" stroke={accent} strokeWidth="1.45" strokeLinecap="round" />
      <circle cx="20" cy="5.4" r="1.2" fill={accent} />
      {/* Soft wave / maritime line */}
      <path
        d="M11 32.2c2.8-1.6 5.6-2.4 9-2.4s6.2.8 9 2.4"
        stroke={accent}
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Reusable World 2.0 destination wordmark.
 * HTML text for accessibility + inline SVG mark (no raster assets).
 */
export function DestinationLogo({
  variant = "full",
  concept = destinationIdentity.logoConcept,
  tone = "default",
  className = "",
  decorative = false,
}: DestinationLogoProps) {
  const { destination, descriptor, strapline, accessibleName } = destinationIdentity;
  const onDark = tone === "on-dark";
  const markSize = variant === "mark" ? 32 : variant === "compact" ? 32 : 34;

  if (variant === "mark") {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        {...(decorative
          ? { "aria-hidden": true }
          : { role: "img", "aria-label": accessibleName })}
      >
        <MarkSvg concept={concept} tone={tone} size={markSize} />
      </span>
    );
  }

  const titleClass = onDark ? "text-white" : "text-coastal-900";
  const descriptorClass = onDark ? "text-white/75" : "text-coastal-700";
  const straplineClass = onDark ? "text-autumn-300/90" : "text-maple-600";

  return (
    <span
      className={`inline-flex items-center gap-1.5 min-w-0 sm:gap-2 ${className}`}
      {...(decorative ? { "aria-hidden": true } : {})}
    >
      <MarkSvg concept={concept} tone={tone} size={markSize} />
      <span className="min-w-0 leading-none">
        <span
          className={`block font-display text-[0.95rem] font-semibold tracking-[0.03em] uppercase sm:text-[1.125rem] ${titleClass}`}
        >
          {destination}
        </span>
        <span
          className={`mt-0.5 block text-[0.58rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.68rem] ${descriptorClass}`}
        >
          {descriptor}
        </span>
        {variant === "full" && strapline ? (
          <span
            className={`mt-1 block text-[0.58rem] font-medium uppercase tracking-[0.11em] sm:text-[0.65rem] ${straplineClass}`}
          >
            {strapline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
