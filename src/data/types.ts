export interface FAQ {
  question: string;
  answer: string;
}

export type Pace = "Relaxed" | "Moderate" | "Active";

/** Flexible supplier model — SEG today, affiliates and exclusives later. */
export type SupplierKind =
  | "shore-excursions-group"
  | "affiliate"
  | "exclusive"
  | "future"
  | "editorial";

export interface ExcursionSupplier {
  kind: SupplierKind;
  name: string;
  /** Optional booking or affiliate URL when live */
  url?: string;
  productId?: string;
  notes?: string;
}

export interface ExcursionPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  tagline: string;
  duration: string;
  pace: Pace;
  bestFor: string;
  overview: string;
  body: string[];
  highlights: string[];
  included: string[];
  portLogistics: string;
  tips: string[];
  faqs: FAQ[];
  relatedExcursionSlugs: string[];
  featured?: boolean;
  supplier?: ExcursionSupplier;
  editorialBadge?: EditorialBadge;
  whyRecommend?: string;
  cruiseSuitability?: CruiseSuitability[];
  groupType?: string;
  foodInclusion?: string;
  keyLocations?: string[];
  activityLevel?: string;
}

export interface TransferOption {
  name: string;
  description: string;
  duration: string;
  priceEstimate: string;
  bestFor: string;
}

export interface TransferPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  tagline: string;
  overview: string;
  body: string[];
  options: TransferOption[];
  timing: string[];
  tips: string[];
  faqs: FAQ[];
  relatedTransferSlugs: string[];
  featured?: boolean;
}

export interface HotelArea {
  name: string;
  description: string;
  bestFor: string;
}

export interface HotelPick {
  name: string;
  description: string;
  distance: string;
}

export interface HotelPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  tagline: string;
  overview: string;
  body: string[];
  areas: HotelArea[];
  picks: HotelPick[];
  tips: string[];
  faqs: FAQ[];
  relatedHotelSlugs: string[];
  featured?: boolean;
}

export interface GettingThereStep {
  method: string;
  detail: string;
  time: string;
  cost: string;
}

export interface AttractionPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  attractionName: string;
  tagline: string;
  overview: string;
  body: string[];
  distanceFromPort: string;
  travelTime: string;
  timeNeeded: string;
  gettingThere: GettingThereStep[];
  highlights: string[];
  tips: string[];
  faqs: FAQ[];
  relatedAttractionSlugs: string[];
  relatedExcursionSlug?: string;
}

export interface ScheduleEntry {
  date: string;
  ship: string;
  cruiseLine: string;
  arrival: string;
  departure: string;
  timeInPort?: string;
  terminal?: string;
  callType?: string;
  notes?: string;
}

export interface ShipSchedulePort {
  slug: string;
  name: string;
  country: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  scheduleOverview: string;
  planningTips?: string[];
  faqs?: FAQ[];
}

export interface VisitorType {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  href: string;
  cta: string;
}

export type EditorialCategory =
  | "editors-choice"
  | "best-first-time"
  | "best-short-port"
  | "best-full-day"
  | "best-food"
  | "best-multicultural"
  | "best-active"
  | "best-calanques"
  | "best-local-culture"
  | "best-provence"
  | "best-seasonal"
  | "best-private"
  | "best-premium-food"
  | "best-coastal"
  | "best-value"
  | "best-repeat";

export type EditorialBadge =
  | "Editor’s Choice"
  | "Best for First-Time Visitors"
  | "Best Short Port Call"
  | "Best Full-Day Overview"
  | "Best for Food Lovers"
  | "Best for Multicultural Marseille"
  | "Best Active City Option"
  | "Best Calanques Adventure"
  | "Best Local Culture"
  | "Best for Provence"
  | "Best Coastal Day"
  | "Best Seasonal Experience"
  | "Best Private Option"
  | "Best Premium Food & Wine"
  | "Best for Repeat Visitors"
  | "Best Value"
  | "Best Active Adventure";

export type CruiseSuitability =
  | "Works well for a standard port call"
  | "Easy to combine with Old Port time"
  | "Better for longer calls"
  | "Uses most of the day"
  | "Seasonal itinerary"
  | "Active travellers only"
  | "Requires careful return planning"
  | "Private premium choice";
export interface EditorialRecommendation {
  category: EditorialCategory;
  title: string;
  description: string;
  href: string;
  signature?: boolean;
}

export interface GuidePage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  tagline: string;
  overview: string;
  body: string[];
  highlights: string[];
  tips: string[];
  faqs: FAQ[];
  recommendations?: EditorialRecommendation[];
  relatedSlugs: string[];
  imageKey: string;
  hubPath: string;
}

export interface ComparisonTableRow {
  category: string;
  optionA: string;
  optionB: string;
}

export interface ComparisonGuideItem {
  name: string;
  slug: string;
  href: string;
  reason: string;
  topExcursion: string;
  returnConfidence: string;
  walkingDifficulty: string;
}

export interface Comparison {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  kind: "versus" | "guide";
  optionA?: string;
  optionB?: string;
  summary: string;
  verdict: string;
  overview: string[];
  comparisonTable?: ComparisonTableRow[];
  guideItems?: ComparisonGuideItem[];
  faqs: FAQ[];
  relatedSlugs: string[];
  imageKey: string;
}

export interface ExperienceCard {
  slug: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  imageKey: string;
}
