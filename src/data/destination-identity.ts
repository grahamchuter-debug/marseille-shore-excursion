export type LogoConcept = "harbour-basilica" | "harbour-m";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

/**
 * World 2.0 destination identity — controlled centrally for logo, accent and strapline.
 * Compatible with the Málaga prototype architecture for network-wide reuse.
 */
export const destinationIdentity = {
  destination: "Marseille",
  descriptor: "Shore Excursions",
  strapline: "Gateway to Provence",
  accessibleName: "Marseille Shore Excursions",
  accent: "ochre" as const,
  logoConcept: "harbour-basilica" as LogoConcept,
  iconStyle: "harbour-basilica" as const,
} as const;
