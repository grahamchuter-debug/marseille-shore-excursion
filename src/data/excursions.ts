import type { ExcursionPage } from "./types";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
};

const PORT_LOGISTICS =
  "Marseille cruise ships typically berth at the main cruise terminals outside the historic centre, with some smaller vessels using berths closer to the city. Meeting points are published on the supplier confirmation — do not assume a single fixed pier pickup for every product. Allow sensible return time to your ship and confirm all-aboard, not merely published departure. Check current port and cruise-line information before travelling.";

export const excursions: ExcursionPage[] = [
  {
    slug: "highlights-of-marseille",
    title: "Highlights of Marseille",
    seoTitle: "Highlights of Marseille Shore Excursion — Vieux Port & Notre-Dame from the Cruise Port",
    metaDescription:
      "A half-day Marseille shore excursion covering Vieux Port, Palais Longchamp and Notre-Dame de la Garde — sized for a standard cruise call.",
    category: "Editor's Choice · Best for First-Time Visitors",
    tagline:
      "The city's signature landmarks in one manageable half-day — harbour, hilltop basilica and civic grandeur without a full-day Provence commitment.",
    duration: "4 Hours",
    pace: "Relaxed",
    bestFor:
      "First-time visitors who want Marseille's headline sights without spending the entire port day on a Provence circuit",
    overview:
      "Highlights of Marseille is our Editor's Choice because it answers the first-call question cleanly: how to see the city's signature landmarks without locking yourself into a full-day Provence itinerary. The published route covers Vieux Port, Palais Longchamp and Notre-Dame de la Garde in a half-day window that leaves room for your own afternoon ashore — or simply a calmer return to the ship.",
    body: [
      "Marseille rewards a first visit that stays in the city rather than racing inland. The Vieux Port remains the emotional centre of the place — working harbour, café terraces and the daily rhythm of a Mediterranean port that never became a museum piece. From there the itinerary moves to Palais Longchamp, the 19th-century water-palace complex that still reads as one of the city's grandest civic statements.",
      "Notre-Dame de la Garde sits above everything. The hilltop basilica is the landmark most visitors recognise from postcards, and the published stop gives you the panoramic view over harbour, islands and rooftops that defines Marseille from above. Treat the climb and viewpoint as the emotional peak of the half-day rather than a rushed photo stop.",
      "What makes this product useful for cruise passengers is the published duration. Four hours is long enough to cover the signature trio without consuming a standard port call. That leaves flexibility — Old Port wandering, a late lunch, or simply buffer time back to the terminal — that full-day Provence options cannot offer.",
      "If you want Aix as well as Marseille, look at Exclusive Aix-en-Provence and Marseille instead. If food is the priority, A Taste of Marseille goes deeper into neighbourhoods rather than landmarks. This one is the cleanest first-time city overview.",
    ],
    highlights: [
      "Vieux Port harbour and waterfront",
      "Palais Longchamp civic complex",
      "Notre-Dame de la Garde hilltop viewpoint",
      "Published half-day duration suited to a standard port call",
    ],
    included: [
      "Guided sightseeing as published on the supplier listing",
      "Transport between published stops as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "The supplier states the meeting point is roughly a 5–7 minute walk from the pier — confirm the exact point on your booking voucher",
      "The supplier states the tour can accommodate a collapsible wheelchair with companion assistance — verify details for your party before booking",
      "No food is included, supplier states — eat before departure or plan a stop afterwards",
      "Check current price and confirmed inclusions on the supplier listing before booking",
      "Planning caveat: confirm all-aboard with your ship, not only the published sailing time, and leave a sensible return margin from the terminal",
    ],
    faqs: [
      {
        question: "Is this enough for a first visit to Marseille?",
        answer:
          "For a first call focused on the city's signature landmarks, yes — it covers the headline trio in a published half-day. It is an overview, not a deep neighbourhood walk; food-focused or Calanques products go in different directions.",
      },
      {
        question: "How far is the meeting point from the ship?",
        answer:
          "The supplier states roughly a 5–7 minute walk from the pier. Exact berths vary, so treat that as guidance and confirm the meeting point on your confirmation.",
      },
      {
        question: "Can someone using a wheelchair join?",
        answer:
          "The supplier states the tour can accommodate a collapsible wheelchair with companion assistance. Confirm accessibility details for your specific date and party before booking.",
      },
    ],
    relatedExcursionSlugs: [
      "exclusive-aix-and-marseille",
      "a-taste-of-marseille",
      "marseille-and-cassis",
    ],
    featured: true,
    editorialBadge: "Editor’s Choice",
    whyRecommend:
      "It covers Marseille's signature landmarks in a manageable half-day, leaving more flexibility than a full-day Provence itinerary on a standard port call.",
    cruiseSuitability: ["Works well for a standard port call"],
    groupType: "Standard group tour — Easy activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Vieux Port", "Palais Longchamp", "Notre-Dame de la Garde"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/highlights-of-marseilles-sightseeing-vieux-port/eumrhilits",
      productId: "eumrhilits",
    },
  },
  {
    slug: "exclusive-aix-and-marseille",
    title: "Exclusive Aix-en-Provence and Marseille",
    seoTitle: "Aix-en-Provence and Marseille Shore Excursion — Full-Day Provence Overview",
    metaDescription:
      "A full-day shore excursion pairing Aix-en-Provence free time with a Marseille panorama including Notre-Dame — best for longer port calls.",
    category: "Best Full-Day Overview",
    tagline:
      "Provence's elegant inland capital and Marseille's hilltop skyline in one published full-day circuit.",
    duration: "7 Hours 30 Minutes",
    pace: "Moderate",
    bestFor:
      "Travellers who want both Aix and Marseille on a single longer port day and are willing to use most of their time ashore",
    overview:
      "Exclusive Aix-en-Provence and Marseille is our Best Full-Day Overview because it pairs the inland elegance of Aix with a panoramic Marseille finish — including Notre-Dame de la Garde — in one published itinerary. It uses most of a standard port day, so treat it as a commitment rather than a flexible half-day add-on.",
    body: [
      "Aix-en-Provence sits inland from the cruise terminals, and the supplier's published routing allows roughly fifty minutes for the transfer. Once there, free time is the point: Cours Mirabeau, the old-town lanes and the café culture that make Aix feel distinct from working-port Marseille. You set the pace within the published window rather than following a stop-by-stop city march.",
      "The Marseille half shifts the register. A panoramic circuit with Notre-Dame de la Garde puts the harbour city back in view after the inland morning — useful if this is your only call and you want both Provence polish and Marseille drama on the same day.",
      "The published duration of seven and a half hours means this product consumes most of a typical port call. That is a feature if you want breadth; it is a constraint if you also hoped for unstructured Old Port time or a late return buffer. Plan against all-aboard, not against the brochure clock alone.",
      "If you prefer to stay in Marseille only, Highlights of Marseille is the cleaner half-day choice. If Cassis and the coast matter more than Aix, Marseille and Cassis is the coastal alternative.",
    ],
    highlights: [
      "Transfer inland to Aix-en-Provence (supplier states roughly 50 minutes)",
      "Free time in Aix within the published window",
      "Panoramic Marseille with Notre-Dame de la Garde",
      "Full-day overview of inland Provence and the port city",
    ],
    included: [
      "Guided full-day itinerary as published on the supplier listing",
      "Transport between Aix and Marseille as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "This uses most of a standard port day — confirm all-aboard and leave a return margin",
      "No food is included, supplier states — plan meals around the published free-time windows",
      "Free time in Aix is self-directed; decide your priorities before you arrive",
      "Check current price and confirmed inclusions on the supplier listing before booking",
      "Planning caveat: longer inland transfers leave less recovery time if traffic runs late — build buffer into your return",
    ],
    faqs: [
      {
        question: "How long is the drive to Aix?",
        answer:
          "The supplier states roughly fifty minutes. Traffic and exact berth location can affect door-to-door timing, so treat that as published guidance rather than a guarantee.",
      },
      {
        question: "Is this suitable for a short port call?",
        answer:
          "Generally no. The published duration uses most of the day. Prefer Highlights of Marseille or A Taste of Marseille when hours ashore are limited.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No. Food is not included, supplier states. Use free time in Aix or plan around the itinerary windows.",
      },
    ],
    relatedExcursionSlugs: [
      "highlights-of-marseille",
      "private-aix-and-marseille",
      "discover-aix-countryside",
    ],
    featured: true,
    editorialBadge: "Best Full-Day Overview",
    whyRecommend:
      "It is the strongest single-day pairing of Aix free time and a Marseille panorama when you have a longer call and want inland Provence plus the port city.",
    cruiseSuitability: ["Better for longer calls", "Uses most of the day"],
    groupType: "Standard group tour — Moderate activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Aix-en-Provence", "Marseille", "Notre-Dame de la Garde"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/ain-en-provence-marseille/eumrpraixmrs",
      productId: "eumrpraixmrs",
    },
  },
  {
    slug: "marseille-and-cassis",
    title: "Marseille and Cassis",
    seoTitle: "Marseille and Cassis Shore Excursion — Cape Canaille & Coastal Free Time",
    metaDescription:
      "A coastal shore excursion to Cassis and Marseille with Cape Canaille views — Calanques boat is an optional extra, not included.",
    category: "Best Coastal Day",
    tagline:
      "Cassis harbour free time, Cape Canaille drama and a Marseille panorama — with the Calanques boat kept honestly optional.",
    duration: "7 Hours",
    pace: "Relaxed",
    bestFor:
      "Travellers who want a coastal day focused on Cassis and Marseille views without assuming a Calanques boat is part of the ticket",
    overview:
      "Marseille and Cassis is our Best Coastal Day because it puts the fishing-port charm of Cassis and Marseille's panoramic outlook on one published small-group itinerary. Critically, the Calanques boat is an optional extra — roughly €19 on the supplier listing — and is not included in the base product. Do not book this expecting boat access to the Calanques as standard.",
    body: [
      "Cassis is the coastal counterpoint to Marseille's urban energy: a compact harbour town under Cap Canaille's cliffs, with free time in the published window to walk the waterfront, browse or simply sit with a view. Cape Canaille itself is one of the more dramatic coastal lookouts in the region when the itinerary includes it.",
      "The Marseille element brings the day back to the port city's skyline and viewpoints. Together the two stops give a coastal narrative — harbour town and big city — without requiring you to commit to a hiking or e-bike Calanques product.",
      "The optional Calanques boat is the detail that most marketing copy blurs. On this listing it is an add-on, not a core inclusion. Weather, season and local conditions can also affect whether boat departures run. If a Calanques boat is essential to your day, verify the optional purchase and conditions on the supplier page before you treat it as part of the plan.",
      "For a dedicated Calanques hike, see Calanques National Park Hike and Swim. For an active coastal e-bike day, see Full Day E-Bike Tour to the Calanques. This product is the scenic coastal overview with honest optional-boat language.",
    ],
    highlights: [
      "Cape Canaille coastal viewpoint as published",
      "Free time in Cassis harbour town",
      "Marseille panorama on the published route",
      "Small-group coastal day — Calanques boat optional, not included",
    ],
    included: [
      "Guided coastal itinerary as published on the supplier listing",
      "Transport between Marseille and Cassis as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "The Calanques boat is an optional extra (supplier indicates around €19) and is not included — do not assume boat access",
      "No food is included, supplier states — plan around free time in Cassis",
      "Published duration is seven hours; confirm all-aboard before committing to optional add-ons",
      "Check current price, optional boat availability and inclusions on the supplier listing",
      "Planning caveat: optional boat timing can compress your return buffer — decide before you buy the add-on",
    ],
    faqs: [
      {
        question: "Is the Calanques boat included?",
        answer:
          "No. The supplier lists it as an optional extra (around €19). The base excursion covers the published land itinerary; boat access is not included.",
      },
      {
        question: "Is this a small group?",
        answer:
          "Yes — the supplier lists this as a small-group product with Easy activity level. Confirm current group-size details on the listing for your date.",
      },
      {
        question: "Will we see the Calanques from land?",
        answer:
          "The published focus is Cassis, Cape Canaille and Marseille panorama. Do not assume Calanques boat scenery unless you purchase and can take the optional boat under local conditions.",
      },
    ],
    relatedExcursionSlugs: [
      "calanques-hike-and-swim",
      "full-day-e-bike-calanques",
      "private-cassis-and-marseille",
    ],
    featured: true,
    editorialBadge: "Best Coastal Day",
    whyRecommend:
      "It is the clearest coastal day pairing Cassis free time with Marseille views, provided you treat the Calanques boat as the optional extra it is.",
    cruiseSuitability: ["Better for longer calls", "Uses most of the day"],
    groupType: "Small group — Easy activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Cassis", "Cape Canaille", "Marseille"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/marseille-and-cassis/eumrmarscassis",
      productId: "eumrmarscassis",
    },
  },
  {
    slug: "a-taste-of-marseille",
    title: "A Taste of Marseille",
    seoTitle: "A Taste of Marseille Shore Excursion — Old Port Food Walk for Cruise Passengers",
    metaDescription:
      "A small-group Marseille food tasting walk through Old Port, Le Panier and Noailles — easy to combine with extra time ashore.",
    category: "Best for Food Lovers",
    tagline:
      "Markets, neighbourhood streets and tastings — Marseille through what people actually eat, not only what they photograph.",
    duration: "3 Hours 30 Minutes",
    pace: "Moderate",
    bestFor:
      "Food-focused travellers who want a compact tasting walk and still have time left for the Old Port afterwards",
    overview:
      "A Taste of Marseille is our Best for Food Lovers pick because it trades landmark checklists for neighbourhood flavour — Old Port, Le Panier and Noailles — on a published small-group tasting walk. At three and a half hours with tastings and beverage included (supplier states), it is easy to combine with unstructured Old Port time on the same call.",
    body: [
      "Marseille's food story is not a single restaurant strip. The published route moves through the Old Port edge, the stepped lanes of Le Panier and the market energy of Noailles — three registers of the same city in one walk. Tastings and a beverage are included per the supplier listing; exact items can vary, so read the current product page rather than assuming a fixed menu.",
      "Group size is capped at a published maximum of twelve, which keeps the walk closer to a neighbourhood outing than a megaphone tour. Moderate activity level means expect walking between stops rather than a seated tasting room.",
      "Meeting is at Hôtel de Ville Pavillon Daviel, supplier states — not at the cruise terminal itself. Plan a taxi or shuttle from your berth and confirm the exact point on your voucher. That transfer is part of the real timing for this product.",
      "If you want a fuller meal-led cultural day, North African Cuisine and Culture of Marseille goes longer with a meal included. If landmarks matter more than tastings, Highlights of Marseille is the better first-time overview.",
    ],
    highlights: [
      "Small group — supplier lists a maximum of 12 travellers",
      "Old Port, Le Panier and Noailles on the published route",
      "Tastings and beverage included, supplier states",
      "Published 3.5-hour duration that leaves room for more Old Port time",
    ],
    included: [
      "Guided food walk as published on the supplier listing",
      "Tastings and beverage as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Meeting point is Hôtel de Ville Pavillon Daviel, supplier states — allow taxi or shuttle time from the cruise terminal",
      "Tastings and beverage are included; exact items can vary — check the current listing",
      "Moderate walking between neighbourhood stops — wear comfortable shoes",
      "Check current price and confirmed inclusions on the supplier listing before booking",
      "Planning caveat: terminal-to-meeting transfer is on you — build that into your departure and return timing",
    ],
    faqs: [
      {
        question: "Does the tour meet at the cruise terminal?",
        answer:
          "No. The supplier states the meeting point is Hôtel de Ville Pavillon Daviel. Plan a taxi or shuttle from your berth and confirm the exact location on your confirmation.",
      },
      {
        question: "Is a full meal included?",
        answer:
          "The supplier states tastings and a beverage are included. That is not the same as a sit-down lunch — read the current listing for what is served on your date.",
      },
      {
        question: "Can I still explore the Old Port afterwards?",
        answer:
          "Yes — the published duration leaves room to combine this walk with extra Old Port time, which is why we flag it as easy to pair on a standard call.",
      },
    ],
    relatedExcursionSlugs: [
      "north-african-cuisine-culture",
      "le-panier-petanque",
      "highlights-of-marseille",
    ],
    featured: true,
    editorialBadge: "Best for Food Lovers",
    whyRecommend:
      "It is the strongest compact tasting walk for cruise passengers who want neighbourhood flavour and still have time left for the Old Port.",
    cruiseSuitability: ["Easy to combine with Old Port time", "Works well for a standard port call"],
    groupType: "Small group — maximum 12, supplier listing",
    foodInclusion: "Tastings and beverage included, supplier states",
    keyLocations: ["Old Port", "Le Panier", "Noailles", "Hôtel de Ville Pavillon Daviel (meeting)"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/a-taste-of-marseille/eumrtasteof",
      productId: "eumrtasteof",
    },
  },
  {
    slug: "north-african-cuisine-culture",
    title: "North African Cuisine and Culture of Marseille",
    seoTitle: "North African Cuisine and Culture of Marseille — Shore Excursion Food Day",
    metaDescription:
      "A small-group Marseille shore excursion exploring North African food culture with a meal and beverage included, supplier states.",
    category: "Best for Multicultural Marseille",
    tagline:
      "Marseille's Maghrebi food culture on a guided small-group outing — markets, stories and a shared meal.",
    duration: "5 Hours",
    pace: "Relaxed",
    bestFor:
      "Travellers who want to understand Marseille's North African culinary culture beyond a quick tasting stop",
    overview:
      "North African Cuisine and Culture of Marseille is our Best for Multicultural Marseille pick because it treats the city's Maghrebi food traditions as the main subject, not a side note. The supplier lists a five-hour small-group outing with meal and beverage included — a fuller cultural frame than a short tasting walk.",
    body: [
      "Marseille's identity is inseparable from the communities that have shaped its markets and kitchens. This published itinerary focuses on North African cuisine and culture as lived in the city — guided context plus a meal and beverage included per the supplier listing. Exact venues and dishes can vary; verify current details on the product page.",
      "At five hours and Easy activity level, the day is longer than A Taste of Marseille but still leaves some margin on a generous port call. It is less about landmark photography and more about how the city actually eats and gathers.",
      "Meeting and routing details sit on the supplier confirmation. Do not assume terminal-side pickup; Marseille berths vary and many city products meet inland. Confirm the point and allow transfer time.",
      "If you want a shorter tasting circuit through Old Port neighbourhoods, choose A Taste of Marseille. If cooking hands-on appeals more than a cultural meal tour, see Marseille Culinary Workshop with Lunch.",
    ],
    highlights: [
      "Focus on North African cuisine and culture in Marseille",
      "Meal and beverage included, supplier states",
      "Small-group format, Easy activity level",
      "Published five-hour cultural food outing",
    ],
    included: [
      "Guided cultural food itinerary as published on the supplier listing",
      "Meal and beverage as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Meal and beverage are included, supplier states — confirm dietary needs with the supplier before booking",
      "Confirm the meeting point on your voucher; do not assume pier pickup",
      "Five published hours still need a return buffer to all-aboard",
      "Check current price and confirmed inclusions on the supplier listing",
    ],
    faqs: [
      {
        question: "Is this just a restaurant booking?",
        answer:
          "No. The supplier frames it as a guided cultural and cuisine outing with a meal and beverage included. Exact stops can vary — read the current listing.",
      },
      {
        question: "How does this differ from A Taste of Marseille?",
        answer:
          "This product runs longer, includes a meal and beverage rather than tastings only, and focuses specifically on North African cuisine and culture rather than a broader Old Port tasting circuit.",
      },
      {
        question: "Is alcohol included?",
        answer:
          "The supplier states meal and beverage are included. Confirm what is served on your date on the product page if that matters to you.",
      },
    ],
    relatedExcursionSlugs: [
      "a-taste-of-marseille",
      "culinary-workshop",
      "le-panier-petanque",
    ],
    editorialBadge: "Best for Multicultural Marseille",
    whyRecommend:
      "It gives cruise passengers a focused window into Marseille's North African food culture with a meal included, rather than a brief tasting stop.",
    cruiseSuitability: ["Works well for a standard port call"],
    groupType: "Small group — Easy activity level, supplier listing",
    foodInclusion: "Meal and beverage included, supplier states",
    keyLocations: ["Marseille (North African cuisine and culture focus)"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/north-african-cuisine-and-culture-of-marseille/eumrmarseillenorthaf",
      productId: "eumrmarseillenorthaf",
    },
  },
  {
    slug: "half-day-e-bike-gadjo",
    title: "Half-Day E-Bike Gadjo Tour",
    seoTitle: "Half-Day E-Bike Gadjo Tour Marseille — Active City Shore Excursion",
    metaDescription:
      "A four-hour small-group e-bike tour of Marseille for active cruise passengers — fitness and safety restrictions apply, supplier states.",
    category: "Best Active City Option",
    tagline:
      "Marseille on two wheels — a half-day e-bike circuit for travellers who would rather ride the city than sit through it.",
    duration: "4 Hours",
    pace: "Moderate",
    bestFor:
      "Active travellers comfortable cycling in traffic who want a half-day city outing without a full Calanques commitment",
    overview:
      "Half-Day E-Bike Gadjo Tour is our Best Active City Option because it covers Marseille by e-bike in a published four-hour small-group format — more ground than a walking tour, without the full-day Calanques distance. Fitness and safety restrictions apply; this is not a casual sit-down sightseeing product.",
    body: [
      "E-bikes change the geometry of a port day: hills and harbour edges become reachable without turning the outing into a hike. The published Gadjo half-day keeps the focus on the city itself rather than a long coastal transfer to the Calanques.",
      "Moderate activity level still means real cycling. The supplier states participants must know how to bike, meet a minimum height of 4'5\", stay under a maximum weight of 120 kg, and that the tour is not suitable for those with back or knee issues or for pregnancy. You will be cycling in traffic. A helmet is included per the supplier.",
      "Four published hours fit a standard call more easily than the full-day Calanques e-bike product, but you still need transfer and return margins from your berth. Confirm meeting details on the voucher.",
      "If you want e-bikes plus Calanques scenery, see Full Day E-Bike Tour to the Calanques. If you prefer hiking and an optional swim, see Calanques National Park Hike and Swim.",
    ],
    highlights: [
      "Half-day e-bike circuit focused on the city",
      "Small-group format, Moderate activity level",
      "Helmet included, supplier states",
      "Published four-hour duration suited to many standard calls",
    ],
    included: [
      "Guided e-bike tour as published on the supplier listing",
      "Helmet as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "You must know how to bike — this is not a learn-to-ride outing",
      "Supplier restrictions: minimum height 4'5\", maximum weight 120 kg; not suitable for back/knee issues or pregnancy",
      "Expect cycling in traffic; a helmet is included per the supplier",
      "No food is included, supplier states",
      "Check current price and confirmed inclusions on the supplier listing",
      "Planning caveat: active products need honest fitness self-assessment before you book against a ship deadline",
    ],
    faqs: [
      {
        question: "Do I need prior cycling experience?",
        answer:
          "Yes. The supplier states you must know how to bike. If you are not confident in traffic, choose a walking or coach-based product instead.",
      },
      {
        question: "Are there height or weight limits?",
        answer:
          "The supplier states a minimum height of 4'5\" and a maximum weight of 120 kg. Confirm current restrictions on the listing before booking.",
      },
      {
        question: "Is this the same as the Calanques e-bike day?",
        answer:
          "No. This is a half-day city-focused Gadjo tour. The full-day Calanques e-bike product is a longer coastal outing with different distance and timing demands.",
      },
    ],
    relatedExcursionSlugs: [
      "full-day-e-bike-calanques",
      "calanques-hike-and-swim",
      "highlights-of-marseille",
    ],
    editorialBadge: "Best Active City Option",
    whyRecommend:
      "It is the strongest half-day active option for seeing Marseille by e-bike without committing to a full Calanques day.",
    cruiseSuitability: ["Works well for a standard port call", "Active travellers only"],
    groupType: "Small group — Moderate activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Marseille (e-bike city circuit)"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/half-day-e-bike-gadjo-tour/eumrebikehalf",
      productId: "eumrebikehalf",
    },
  },
  {
    slug: "calanques-hike-and-swim",
    title: "Calanques National Park Hike and Swim",
    seoTitle: "Calanques National Park Hike and Swim — Marseille Shore Excursion",
    metaDescription:
      "A six-hour Calanques hike from Marseille with optional swim — minimum age 18; access can be affected by weather and fire risk.",
    category: "Best Calanques Adventure",
    tagline:
      "Limestone coves on foot — a serious Calanques hike with an optional swim, not a coach photo stop.",
    duration: "6 Hours",
    pace: "Moderate",
    bestFor:
      "Fit adult travellers who want a real Calanques hike and will plan return timing carefully",
    overview:
      "Calanques National Park Hike and Swim is our Best Calanques Adventure because it is an on-foot park day — roughly 7 km round trip and about 250 m elevation on the supplier's published figures — not a drive-by viewpoint. Minimum age is 18. Swimming is optional. Park access can be restricted by weather, fire risk and seasonal rules; always check current conditions.",
    body: [
      "The Calanques between Marseille and Cassis are a national park of limestone inlets, not a guaranteed swimming pool with a coach park. This product is built around hiking into that landscape. The supplier's published distance and elevation make clear it is a physical outing; Moderate on the listing still means trail time, heat exposure and sure footing.",
      "Swimming is optional, not the core deliverable. Water access depends on conditions, your group's pace and local rules on the day. Do not book solely for a guaranteed swim.",
      "Access to the Calanques can be closed or limited for fire risk, wind, weather or seasonal management. That is normal park practice, not a rare exception. Verify current park and trail status before you travel, and treat the itinerary as subject to local conditions.",
      "Cruise suitability is narrow: active travellers only, with careful return planning. Six published hours plus transfers leave less margin than a city half-day. If you want coastal scenery with less trail demand, Marseille and Cassis is the gentler coastal overview — remembering its boat is optional.",
    ],
    highlights: [
      "Calanques National Park hike — supplier states roughly 7 km round trip",
      "About 250 m elevation, supplier figures",
      "Optional swim — not guaranteed",
      "Minimum age 18, supplier states",
    ],
    included: [
      "Guided Calanques hike as published on the supplier listing",
      "Optional swim opportunity when conditions and itinerary allow, supplier framing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Minimum age 18, supplier states",
      "Expect roughly 7 km round trip and about 250 m elevation — assess fitness honestly",
      "Swimming is optional; bring suitable gear only if you intend to enter the water",
      "Calanques access can be affected by weather, fire risk and seasonal restrictions — check current conditions",
      "No food is included, supplier states — carry water and plan snacks",
      "Planning caveat: trail delays and park restrictions can compress return time — confirm all-aboard and keep a hard turnaround",
    ],
    faqs: [
      {
        question: "Is swimming guaranteed?",
        answer:
          "No. The supplier frames swimming as optional, and conditions on the day can change what is sensible or permitted.",
      },
      {
        question: "Can teenagers join?",
        answer:
          "The supplier states a minimum age of 18. Do not assume younger travellers can be accommodated.",
      },
      {
        question: "What if the Calanques are closed for fire risk?",
        answer:
          "Park access can be restricted. Check current conditions before travelling and follow the supplier's guidance if the itinerary must change.",
      },
    ],
    relatedExcursionSlugs: [
      "full-day-e-bike-calanques",
      "marseille-and-cassis",
      "coastal-cave-snorkeling",
    ],
    editorialBadge: "Best Calanques Adventure",
    whyRecommend:
      "It is the clearest on-foot Calanques day for fit adults — with honest limits on age, swim expectations and park-access variability.",
    cruiseSuitability: ["Active travellers only", "Requires careful return planning"],
    groupType: "Small group — Moderate activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Calanques National Park"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/calanques-national-park-hike-swim-marseille/eumrcalanqunationhik",
      productId: "eumrcalanqunationhik",
    },
  },
  {
    slug: "full-day-e-bike-calanques",
    title: "Full Day E-Bike Tour to the Calanques",
    seoTitle: "Full Day E-Bike Tour to the Calanques — Marseille Active Shore Excursion",
    metaDescription:
      "A six-hour e-bike outing toward the Calanques from Marseille — roughly 40 km, optional swim, with the same bike fitness restrictions as the half-day.",
    category: "Best Active Adventure",
    tagline:
      "E-bike distance and Calanques coastline — a full active day for riders who want more than a city loop.",
    duration: "6 Hours",
    pace: "Moderate",
    bestFor:
      "Confident cyclists who want a longer coastal e-bike day with optional swimming at Maronaise Beach when conditions allow",
    overview:
      "Full Day E-Bike Tour to the Calanques is our secondary Best Active Adventure for coastal riding — a published six-hour small-group outing covering roughly 40 km, with an optional swim at Maronaise Beach. The same bike restrictions as the half-day Gadjo tour apply. Treat it as an endurance-minded port day, not a gentle harbour spin.",
    body: [
      "Where the half-day Gadjo tour stays with the city, this product pushes toward Calanques coastal terrain on e-bikes. The supplier's published distance of around 40 km explains the six-hour window: this is about covering ground with electric assist, not a short scenic loop.",
      "An optional swim at Maronaise Beach appears on the supplier framing. Optional means conditions, timing and group pace decide whether it happens — not a guaranteed beach club stop.",
      "Restrictions match the half-day product: you must know how to bike; minimum height 4'5\"; maximum weight 120 kg; not suitable for back or knee issues or pregnancy; traffic cycling is part of the reality; helmet included per the supplier.",
      "For hiking instead of riding, choose Calanques National Park Hike and Swim. For a shorter active city ride, choose Half-Day E-Bike Gadjo Tour.",
    ],
    highlights: [
      "Full-day e-bike routing toward the Calanques",
      "Supplier states roughly 40 km",
      "Optional swim at Maronaise Beach when conditions allow",
      "Small-group Moderate activity level",
    ],
    included: [
      "Guided full-day e-bike tour as published on the supplier listing",
      "Helmet as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Same bike rules as the half-day: must know how to bike; min height 4'5\"; max weight 120 kg; not for back/knee issues or pregnancy",
      "Expect traffic cycling and a long published distance — around 40 km",
      "Optional swim at Maronaise Beach is not guaranteed",
      "Confirm food and water arrangements on the current listing; do not assume meals are included",
      "Planning caveat: six hours of riding plus transfers needs a disciplined return plan to all-aboard",
    ],
    faqs: [
      {
        question: "How far do we ride?",
        answer:
          "The supplier indicates roughly 40 km. Exact routing can vary with conditions — confirm details on the listing for your date.",
      },
      {
        question: "Is the swim included as a fixed stop?",
        answer:
          "It is framed as optional at Maronaise Beach. Do not treat a swim as guaranteed.",
      },
      {
        question: "Can beginners join?",
        answer:
          "You must already know how to bike, and the distance is substantial. If you are unsure in traffic or over longer rides, choose a non-cycling product.",
      },
    ],
    relatedExcursionSlugs: [
      "half-day-e-bike-gadjo",
      "calanques-hike-and-swim",
      "marseille-and-cassis",
    ],
    editorialBadge: "Best Active Adventure",
    whyRecommend:
      "It is the stronger active coastal e-bike day when you want Calanques-direction distance rather than a city-only half-day loop.",
    cruiseSuitability: ["Active travellers only", "Requires careful return planning", "Uses most of the day"],
    groupType: "Small group — Moderate activity level, supplier listing",
    foodInclusion: "Confirm on supplier listing — do not assume inclusion",
    keyLocations: ["Calanques coastline", "Maronaise Beach (optional swim)"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/full-day-e-bike-the-calanques-marseille/eumrebikefull",
      productId: "eumrebikefull",
    },
  },
  {
    slug: "le-panier-petanque",
    title: "Le Panier Guided Walk and Pétanque",
    seoTitle: "Le Panier Guided Walk and Pétanque — Marseille Local Culture Shore Excursion",
    metaDescription:
      "A four-hour Le Panier walk with pétanque and tastings — best for travellers who want local culture beyond the landmark circuit.",
    category: "Best Local Culture · Best for Repeat Visitors",
    tagline:
      "Le Panier's lanes, a game of pétanque and tastings — Marseille at street level for people who have already seen the postcard views.",
    duration: "4 Hours",
    pace: "Moderate",
    bestFor:
      "Repeat visitors or culture-minded travellers who want neighbourhood time and a local game rather than another basilica stop",
    overview:
      "Le Panier Guided Walk and Pétanque earns Best Local Culture / Best for Repeat Visitors because it trades the landmark circuit for Marseille's oldest quarter, a pétanque session and tastings. Minimum age is 16; alcohol service is 18+. Meeting may require a walk or taxi from the terminal.",
    body: [
      "Le Panier is where Marseille feels most layered — painted façades, stepped streets and a village density inside the bigger port city. A guided walk here is about texture and everyday life more than monumental checklist tourism.",
      "Pétanque is the social hinge of the outing: a local game rather than a spectator stop. Tastings are included per the supplier; alcohol, where offered, is for guests 18 and over. Minimum participant age is 16 on the supplier listing.",
      "Moderate activity means walking the quarter's gradients and standing for the game. Confirm the meeting point carefully — the supplier indicates you may need to walk or take a taxi from the cruise terminal rather than stepping off the gangway into the group.",
      "First-time visitors who still need Notre-Dame and Vieux Port orientation may prefer Highlights of Marseille first. Food-first travellers might pair or prefer A Taste of Marseille.",
    ],
    highlights: [
      "Guided walk in Le Panier",
      "Pétanque session as published",
      "Tastings included, supplier states",
      "Small-group local-culture format",
    ],
    included: [
      "Guided Le Panier walk as published on the supplier listing",
      "Pétanque as stated by the supplier",
      "Tastings as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Minimum age 16; alcohol 18+, supplier states",
      "Meeting may require a walk or taxi from the terminal — confirm on your voucher",
      "Tastings are included; exact items can vary",
      "Check current price and confirmed inclusions on the supplier listing",
      "Planning caveat: allow extra time for the terminal-to-meeting transfer before the published start",
    ],
    faqs: [
      {
        question: "Is this suitable for first-time visitors?",
        answer:
          "It works well if you care more about neighbourhood culture than landmarks. If you still need the classic Marseille overview, do Highlights of Marseille on another call or choose that instead.",
      },
      {
        question: "Can under-16s join?",
        answer:
          "The supplier states a minimum age of 16. Alcohol-related tastings are for 18+.",
      },
      {
        question: "Do we meet at the ship?",
        answer:
          "Not necessarily. The supplier indicates the meeting may require a walk or taxi from the terminal — confirm the exact point on your confirmation.",
      },
    ],
    relatedExcursionSlugs: [
      "a-taste-of-marseille",
      "highlights-of-marseille",
      "north-african-cuisine-culture",
    ],
    editorialBadge: "Best Local Culture",
    whyRecommend:
      "It is the best local-culture alternative to landmark touring — Le Panier, pétanque and tastings for travellers who want Marseille beyond the basilica view.",
    cruiseSuitability: ["Works well for a standard port call", "Easy to combine with Old Port time"],
    groupType: "Small group — Moderate activity level, supplier listing",
    foodInclusion: "Tastings included, supplier states",
    keyLocations: ["Le Panier"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/le-panier-district-guided-walk-local-play-petanque/eumrmarseillepani",
      productId: "eumrmarseillepani",
    },
  },
  {
    slug: "provencal-towns-castellet-bandol-cassis",
    title: "Le Castellet, Bandol and Cassis",
    seoTitle: "Le Castellet, Bandol and Cassis Shore Excursion — Provence Towns & Wine",
    metaDescription:
      "A six-hour small-group shore excursion to Le Castellet, Bandol and Cassis with wine tastings included — alcohol 18+.",
    category: "Best for Provence",
    tagline:
      "Hill village, Bandol wine country and Cassis harbour — a Provence towns day with tastings built in.",
    duration: "6 Hours",
    pace: "Moderate",
    bestFor:
      "Travellers who want Provençal villages and wine tasting without committing to a full Luberon circuit",
    overview:
      "Le Castellet, Bandol and Cassis is our Best for Provence pick among the nearer coastal-and-village circuits: a published six-hour small-group day linking a hill town, Bandol wine country and Cassis, with wine tastings included. Alcohol is for guests 18 and over.",
    body: [
      "Le Castellet offers the perched-village silhouette many visitors picture when they say Provence. Bandol shifts the day into wine country — tastings are included per the supplier, with the usual 18+ rule for alcohol. Cassis closes the loop on the coast, tying inland stone lanes back to harbour light.",
      "Six published hours is substantial but shorter than the deeper Luberon village days. That makes this a Provence sampler for travellers who want wine and villages without the longest inland transfer pattern.",
      "Moderate activity covers walking in village streets and standing for tastings. Confirm meeting and return details on the voucher; do not invent a pier-side assumption.",
      "For ochre villages deeper inland, see Villages of Luberon or Charming Villages of Luberon Valley. For Cassis with Marseille panorama and an optional boat, see Marseille and Cassis.",
    ],
    highlights: [
      "Le Castellet hill village",
      "Bandol wine country with tastings included, supplier states",
      "Cassis harbour stop on the published route",
      "Small-group Provence towns circuit",
    ],
    included: [
      "Guided towns itinerary as published on the supplier listing",
      "Wine tastings as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Alcohol tastings are 18+, supplier framing",
      "Six published hours still need a return buffer to all-aboard",
      "Wear comfortable shoes for village walking",
      "Check current price and confirmed inclusions on the supplier listing",
    ],
    faqs: [
      {
        question: "Are wine tastings included?",
        answer:
          "Yes — the supplier states wine tastings are included. Alcohol service is for guests 18 and over.",
      },
      {
        question: "Is this the same as a Luberon villages tour?",
        answer:
          "No. This circuit focuses on Le Castellet, Bandol and Cassis. Luberon products go further inland to different villages.",
      },
      {
        question: "Is lunch included?",
        answer:
          "The supplier highlights wine tastings as included. Do not assume a full lunch unless the current listing explicitly says so — verify before booking.",
      },
    ],
    relatedExcursionSlugs: [
      "villages-of-luberon",
      "charming-luberon-valley",
      "marseille-and-cassis",
    ],
    editorialBadge: "Best for Provence",
    whyRecommend:
      "It is the strongest nearer Provence towns-and-wine day when you want Le Castellet, Bandol and Cassis without a full Luberon commitment.",
    cruiseSuitability: ["Better for longer calls", "Uses most of the day"],
    groupType: "Small group — Moderate activity level, supplier listing",
    foodInclusion: "Wine tastings included, supplier states",
    keyLocations: ["Le Castellet", "Bandol", "Cassis"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/charming-towns-of-le-castellet-bandol-cassis/eumrlecastebandobea",
      productId: "eumrlecastebandobea",
    },
  },
  {
    slug: "villages-of-luberon",
    title: "Villages of Luberon",
    seoTitle: "Villages of Luberon Shore Excursion — Bonnieux, Lourmarin & Roussillon",
    metaDescription:
      "A seven-hour small-group Luberon villages day from Marseille covering Bonnieux, Lourmarin and Roussillon — better for longer port calls.",
    category: "Provence Villages",
    tagline:
      "Bonnieux, Lourmarin and Roussillon — three Luberon signatures on one inland day from the Marseille call.",
    duration: "7 Hours",
    pace: "Relaxed",
    bestFor:
      "Travellers on a longer port call who want classic Luberon villages rather than a Marseille city day",
    overview:
      "Villages of Luberon is the straightforward inland villages circuit: Bonnieux, Lourmarin and Roussillon on a published seven-hour small-group day. Food is not included. It uses most of the day and suits longer calls more than tight ones.",
    body: [
      "The Luberon sits well inland from Marseille's terminals. Bonnieux and Lourmarin bring the hill-village and market-town characters many visitors associate with Provence; Roussillon adds the ochre cliffs and coloured façades that make it visually distinct.",
      "Easy activity level on the supplier listing still means village walking and time on the coach between stops. Seven published hours leave limited unstructured ship-side time — plan meals and return buffer deliberately.",
      "No food is included, supplier states. Use free moments in the villages or eat before departure.",
      "If you want wine tastings woven through a different Luberon set (Ménerbes, Lacoste, Gordes, Roussillon), see Charming Villages of Luberon Valley. For a private version of a Luberon day, see Private Full Day Luberon Villages.",
    ],
    highlights: [
      "Bonnieux hill village",
      "Lourmarin",
      "Roussillon ochre village",
      "Published seven-hour small-group inland day",
    ],
    included: [
      "Guided Luberon villages itinerary as published on the supplier listing",
      "Transport between published stops as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Better for longer calls — seven published hours use most of the day",
      "No food is included, supplier states",
      "Confirm all-aboard and keep a return margin after the inland drive",
      "Check current price and confirmed inclusions on the supplier listing",
      "Planning caveat: inland Provence distance means traffic delays matter more — do not cut return timing fine",
    ],
    faqs: [
      {
        question: "Which villages are visited?",
        answer:
          "The published focus is Bonnieux, Lourmarin and Roussillon. Confirm the current itinerary on the supplier listing for your date.",
      },
      {
        question: "Is this suitable for a short port call?",
        answer:
          "Generally no. The published duration uses most of the day and involves significant inland transfer time.",
      },
      {
        question: "Are wine tastings included?",
        answer:
          "Not on this product as framed here — food is not included, supplier states. For a Luberon day with wine tastings included, see Charming Villages of Luberon Valley.",
      },
    ],
    relatedExcursionSlugs: [
      "charming-luberon-valley",
      "private-luberon",
      "valensole-lavender",
    ],
    whyRecommend:
      "It is the clearest small-group circuit for Bonnieux, Lourmarin and Roussillon when you have a long enough Marseille call for inland Provence.",
    cruiseSuitability: ["Better for longer calls", "Uses most of the day"],
    groupType: "Small group — Easy activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Bonnieux", "Lourmarin", "Roussillon"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/villages-of-luberon/eumrvillages",
      productId: "eumrvillages",
    },
  },
  {
    slug: "charming-luberon-valley",
    title: "Charming Villages of Luberon Valley",
    seoTitle: "Charming Villages of Luberon Valley — Ménerbes, Lacoste, Gordes & Roussillon",
    metaDescription:
      "A seven-hour Luberon valley shore excursion from Marseille with wine tastings included — Ménerbes, Lacoste, Gordes and Roussillon.",
    category: "Provence Villages",
    tagline:
      "Ménerbes, Lacoste, Gordes and Roussillon — a Luberon valley day with wine tastings on the published itinerary.",
    duration: "7 Hours",
    pace: "Relaxed",
    bestFor:
      "Travellers who want a Luberon village set with wine tastings included and a full inland day from Marseille",
    overview:
      "Charming Villages of Luberon Valley covers Ménerbes, Lacoste, Gordes and Roussillon on a published seven-hour small-group day, with wine tastings included. It is a different village mix from Villages of Luberon and leans into tasting time as part of the published offer.",
    body: [
      "Gordes and Ménerbes are among the Luberon's most photographed perched villages; Lacoste adds another hill-town stop; Roussillon again brings ochre colour into the day. The published routing is about variety across the valley rather than a deep single-village stay.",
      "Wine tastings are included per the supplier. Alcohol service follows normal age rules — verify on the listing if travelling with younger guests.",
      "Seven hours inland from a Marseille berth is a full commitment. Easy activity level still involves walking village streets and time in the vehicle between stops.",
      "Compare with Villages of Luberon if you prefer Bonnieux and Lourmarin without assuming tastings. Private Full Day Luberon Villages is the private-format alternative.",
    ],
    highlights: [
      "Ménerbes, Lacoste, Gordes and Roussillon",
      "Wine tastings included, supplier states",
      "Small-group Luberon valley circuit",
      "Published seven-hour inland day",
    ],
    included: [
      "Guided Luberon valley itinerary as published on the supplier listing",
      "Wine tastings as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wine tastings are included — confirm age rules and dietary notes on the listing",
      "Uses most of a port day; confirm all-aboard before booking",
      "No assumption of a full lunch unless the current listing says so",
      "Check current price and confirmed inclusions on the supplier listing",
    ],
    faqs: [
      {
        question: "How is this different from Villages of Luberon?",
        answer:
          "The village set differs — this product lists Ménerbes, Lacoste, Gordes and Roussillon, and wine tastings are included. Villages of Luberon focuses on Bonnieux, Lourmarin and Roussillon without food included.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Wine tastings are included, supplier states. Do not assume a full lunch unless the current product page explicitly includes one.",
      },
      {
        question: "Is Gordes definitely visited?",
        answer:
          "Gordes is on the published village list for this product. Always re-check the supplier itinerary for your date in case of operational changes.",
      },
    ],
    relatedExcursionSlugs: [
      "villages-of-luberon",
      "private-luberon",
      "provencal-towns-castellet-bandol-cassis",
    ],
    whyRecommend:
      "It pairs a classic Luberon village set with wine tastings included — a strong inland day when your Marseille call is long enough.",
    cruiseSuitability: ["Better for longer calls", "Uses most of the day"],
    groupType: "Small group — Easy activity level, supplier listing",
    foodInclusion: "Wine tastings included, supplier states",
    keyLocations: ["Ménerbes", "Lacoste", "Gordes", "Roussillon"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/charming-villages-of-luberon-valley-from-marseille/eumrluberontophillmo",
      productId: "eumrluberontophillmo",
    },
  },
  {
    slug: "valensole-lavender",
    title: "Valensole Lavender Fields and Provence Countryside",
    seoTitle: "Valensole Lavender Fields Shore Excursion from Marseille — Seasonal Provence",
    metaDescription:
      "A seasonal Valensole lavender fields day from Marseille — bloom is not guaranteed; verify operating dates on the supplier listing.",
    category: "Best Seasonal Experience",
    tagline:
      "Valensole's plateau and Provence countryside — a seasonal itinerary where bloom is hoped for, never promised.",
    duration: "7 Hours",
    pace: "Relaxed",
    bestFor:
      "Travellers specifically seeking a seasonal lavender-fields day who will verify operating dates and accept that bloom is not guaranteed",
    overview:
      "Valensole Lavender Fields and Provence Countryside is our Best Seasonal Experience — and the emphasis is on seasonal. This is not a year-round purple landscape product. Bloom is not guaranteed. The supplier page does not lock specific bloom dates in the materials we rely on here; verify operating dates before you book, and never assume lavender colour on demand.",
    body: [
      "Valensole's plateau is famous for summer lavender, which is exactly why cruise passengers ask for it — and exactly why honest planning matters. Flowering depends on weather, farming cycles and the calendar. A tour operating in a lavender-oriented season is not the same thing as a guarantee you will stand in peak bloom.",
      "The published duration is seven hours on a small-group Easy activity outing, with food not included. That is a full inland day from Marseille, better suited to longer calls.",
      "If your dates fall outside the supplier's operating window, do not force this product into the plan. Choose a Luberon villages day or an Aix circuit that runs more consistently across the season.",
      "Photographers and first-time Provence visitors should hold two truths at once: Valensole can be extraordinary in bloom, and it can also be green fields, harvested rows or simply not operating on your call. Plan for the countryside day; treat purple as a bonus if it appears.",
    ],
    highlights: [
      "Valensole plateau and Provence countryside focus",
      "Seasonal itinerary — verify operating dates",
      "Bloom not guaranteed",
      "Published seven-hour small-group day",
    ],
    included: [
      "Guided seasonal countryside itinerary as published on the supplier listing",
      "Transport as stated by the supplier for operating dates",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Seasonal product only — verify operating dates on the supplier listing before booking",
      "Lavender bloom is not guaranteed; never expect purple fields year-round",
      "No food is included, supplier states",
      "Better for longer calls; seven published hours use most of the day",
      "Planning caveat: if bloom matters to you, check recent field reports and the supplier's date availability — do not rely on marketing imagery alone",
    ],
    faqs: [
      {
        question: "Will the fields definitely be in bloom?",
        answer:
          "No. Bloom is not guaranteed. Weather and timing affect flowering, and you should verify whether the product is even operating on your cruise date.",
      },
      {
        question: "When does this tour run?",
        answer:
          "Treat it as seasonal. Specific dates are not fixed in our editorial notes from the supplier page — check the current listing for operating dates before you book.",
      },
      {
        question: "What if my call is outside lavender season?",
        answer:
          "Choose a non-seasonal Provence option such as Villages of Luberon, Charming Villages of Luberon Valley, or Exclusive Aix-en-Provence and Marseille.",
      },
    ],
    relatedExcursionSlugs: [
      "villages-of-luberon",
      "charming-luberon-valley",
      "exclusive-aix-and-marseille",
    ],
    editorialBadge: "Best Seasonal Experience",
    whyRecommend:
      "It is the clearest Valensole-focused day in the collection — provided you accept seasonal operation and that bloom is never guaranteed.",
    cruiseSuitability: ["Seasonal itinerary", "Better for longer calls", "Uses most of the day"],
    groupType: "Small group — Easy activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Valensole", "Provence countryside"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/small-group-valensole-lavender-fields-and-provence/eumrlavender",
      productId: "eumrlavender",
    },
  },
  {
    slug: "private-aix-and-marseille",
    title: "Private Aix-en-Provence and Marseille by Minivan",
    seoTitle: "Private Aix-en-Provence and Marseille by Minivan — Shore Excursion",
    metaDescription:
      "A private seven-hour Aix and Marseille minivan day for cruise passengers who want a dedicated vehicle without assuming total customisation.",
    category: "Best Private Option",
    tagline:
      "Aix and Marseille with your own vehicle and party — private format, published itinerary bones, not a blank-cheque custom tour.",
    duration: "7 Hours",
    pace: "Moderate",
    bestFor:
      "Parties who want a private vehicle for Aix and Marseille on a longer call without sharing a coach",
    overview:
      "Private Aix-en-Provence and Marseille by Minivan is our Best Private Option for the classic Aix-plus-Marseille pairing. Private means your party and vehicle — it does not mean complete customisation of every stop. Work from the supplier's published framework and confirm what can flex on your booking.",
    body: [
      "The appeal of private format is pacing and privacy: you are not tied to a coach group's lowest common denominator. Aix free time and Marseille highlights still need realistic transfer time from the cruise terminals; seven published hours remain a full-day shape.",
      "Do not read 'private' as 'design the entire day from scratch.' Suppliers typically run a defined product with some room to adjust emphasis. Ask before booking if a specific stop matters to you; do not assume it.",
      "Food is not included, supplier states. Moderate activity covers walking in both places.",
      "The shared-group counterpart is Exclusive Aix-en-Provence and Marseille. For a private Cassis focus, see Private Cassis and Marseille.",
    ],
    highlights: [
      "Private minivan for your party",
      "Aix-en-Provence and Marseille on a published private day",
      "Seven-hour full-day shape",
      "Premium format without claiming total customisation",
    ],
    included: [
      "Private vehicle and guided itinerary as published on the supplier listing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Private does not automatically mean fully custom — confirm flexibility with the supplier before booking",
      "No food is included, supplier states",
      "Better for longer calls; seven hours use most of the day",
      "Check current price and confirmed inclusions on the supplier listing",
    ],
    faqs: [
      {
        question: "Can we change the itinerary completely?",
        answer:
          "Do not assume complete customisation. This is a published private product; ask the supplier what can be adjusted for your party before you book.",
      },
      {
        question: "How does this differ from the non-private Aix and Marseille tour?",
        answer:
          "Format and privacy. The shared Exclusive Aix-en-Provence and Marseille product is a standard group departure; this one is private by minivan for your party.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No. Food is not included, supplier states.",
      },
    ],
    relatedExcursionSlugs: [
      "exclusive-aix-and-marseille",
      "private-cassis-and-marseille",
      "discover-aix-countryside",
    ],
    editorialBadge: "Best Private Option",
    whyRecommend:
      "It is the strongest private-format take on the Aix and Marseille pairing for parties who want their own vehicle on a longer call.",
    cruiseSuitability: ["Private premium choice", "Better for longer calls", "Uses most of the day"],
    groupType: "Private — Moderate activity level, supplier listing",
    foodInclusion: "Not included, supplier states",
    keyLocations: ["Aix-en-Provence", "Marseille"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/aix-en-provence-marseille/eumrpraixpri",
      productId: "eumrpraixpri",
    },
  },
  {
    slug: "private-cassis-wine-food",
    title: "Private Marseille and Cassis Luxury Wine and Food",
    seoTitle: "Private Marseille and Cassis Luxury Wine and Food — Shore Excursion",
    metaDescription:
      "A private 4.5-hour Marseille and Cassis wine and food outing — verify inclusions on the listing; do not overstate what is served.",
    category: "Best Premium Food & Wine",
    tagline:
      "A shorter private coastal food-and-wine outing — premium framing, with inclusions checked on the live listing rather than assumed.",
    duration: "4 Hours 30 Minutes",
    pace: "Relaxed",
    bestFor:
      "Small parties wanting a private food-and-wine focused Marseille and Cassis outing without a full eight-hour day",
    overview:
      "Private Marseille and Cassis Luxury Wine and Food is our Best Premium Food & Wine pick for a shorter private format. Food and beverage are included per the supplier framing — but do not overstate the menu. Verify exactly what is served on the current listing before you book.",
    body: [
      "At four and a half published hours, this sits between a quick tasting walk and a full private Cassis day. Private format keeps the party together; Easy activity level keeps the physical demand lower than hiking or e-bike products.",
      "Luxury positioning in a product title is marketing language. Our editorial stance is simpler: private vehicle, wine and food focus, inclusions as stated on the live page. Read that page for the real offer on your date.",
      "Meeting and routing details belong on the confirmation. Build terminal transfer time into the plan.",
      "For a longer private Cassis and Marseille day without the luxury food framing, see Private Cassis and Marseille. For a shared tasting walk in the city, see A Taste of Marseille.",
    ],
    highlights: [
      "Private Marseille and Cassis food-and-wine focus",
      "Food and beverage included, supplier states — verify details",
      "Published 4.5-hour duration",
      "Easy activity level, private format",
    ],
    included: [
      "Private itinerary as published on the supplier listing",
      "Food and beverage as stated by the supplier — verify current details on the listing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Verify exact food and wine inclusions on the supplier listing — do not rely on the product title alone",
      "Shorter than full-day private Cassis products; still confirm all-aboard timing",
      "Alcohol service typically has age limits — confirm if travelling with younger guests",
      "Check current price on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Exactly what food is included?",
        answer:
          "Confirm on the current supplier listing. We note food and beverage as included per the supplier, without inventing a menu here.",
      },
      {
        question: "Is this a full Calanques day?",
        answer:
          "No. It is a private Marseille and Cassis wine-and-food outing at a published 4.5 hours — not a Calanques hike or boat day.",
      },
      {
        question: "How many people can join?",
        answer:
          "It is a private product for your party. Confirm vehicle capacity and pricing rules on the supplier listing.",
      },
    ],
    relatedExcursionSlugs: [
      "private-cassis-and-marseille",
      "a-taste-of-marseille",
      "provencal-towns-castellet-bandol-cassis",
    ],
    editorialBadge: "Best Premium Food & Wine",
    whyRecommend:
      "It is the strongest shorter private food-and-wine option linking Marseille and Cassis — when you verify inclusions on the live listing rather than assuming them.",
    cruiseSuitability: ["Private premium choice", "Works well for a standard port call"],
    groupType: "Private — Easy activity level, supplier listing",
    foodInclusion: "Food and beverage included, supplier states — verify on listing",
    keyLocations: ["Marseille", "Cassis"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-marseille-cassis-luxury-wine-food-provence/eumrmarsecassfoodwin",
      productId: "eumrmarsecassfoodwin",
    },
  },
  {
    slug: "discover-aix-countryside",
    title: "Discover Aix-en-Provence Countryside Walk",
    seoTitle: "Discover Aix-en-Provence Countryside Walk — Shore Excursion from Marseille",
    metaDescription:
      "A five-hour Aix-en-Provence countryside walk shore excursion from Marseille — Moderate pace, standard group format.",
    category: "Aix-en-Provence",
    tagline:
      "Aix's countryside on foot — a published walk beyond the Cours Mirabeau café circuit.",
    duration: "5 Hours",
    pace: "Moderate",
    bestFor:
      "Travellers who want Aix with a countryside walking emphasis rather than free time alone in the centre",
    overview:
      "Discover Aix-en-Provence Countryside Walk is the Aix option for passengers who want a guided countryside walk rather than only town free time. Published duration is five hours at Moderate activity on a standard group format — expect walking, not a coach-only panorama.",
    body: [
      "Aix's old centre is famous; the countryside around it is why many visitors linger. This product's published framing is a picturesque countryside walk tied to an Aix day from Marseille — more trail-and-landscape than shopping-street circuit.",
      "Five hours sits between a short city tasting walk and the longer Aix-plus-Marseille full days. Confirm whether your call has enough margin after transfers.",
      "Inclusions beyond the guided walk should be read from the live supplier listing; do not assume meals or tickets.",
      "For Aix free time plus a Marseille panorama on one longer day, see Exclusive Aix-en-Provence and Marseille. For private format, see Private Aix-en-Provence and Marseille by Minivan.",
    ],
    highlights: [
      "Aix-en-Provence countryside walk focus",
      "Published five-hour duration",
      "Standard group, Moderate activity level",
      "Landscape emphasis beyond the town centre alone",
    ],
    included: [
      "Guided countryside walk itinerary as published on the supplier listing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Moderate walking — wear suitable shoes",
      "Confirm meeting point and whether meals are included on the current listing",
      "Five hours plus transfers still need an all-aboard buffer",
      "Check current price on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Is this only in the town centre?",
        answer:
          "The published emphasis is a countryside walk connected to Aix, not a pure old-town shopping stroll. Confirm the exact route on the supplier listing.",
      },
      {
        question: "How hard is the walk?",
        answer:
          "The supplier lists Moderate activity. If you need a low-walking day, choose a coach-based overview instead.",
      },
      {
        question: "Is food included?",
        answer:
          "Do not assume it. Verify inclusions on the current supplier listing before booking.",
      },
    ],
    relatedExcursionSlugs: [
      "exclusive-aix-and-marseille",
      "private-aix-and-marseille",
      "villages-of-luberon",
    ],
    whyRecommend:
      "It is the clearest Aix day for travellers who want guided countryside walking rather than only free time in the centre.",
    cruiseSuitability: ["Works well for a standard port call"],
    groupType: "Standard group tour — Moderate activity level, supplier listing",
    foodInclusion: "Confirm on supplier listing",
    keyLocations: ["Aix-en-Provence countryside"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/aix-en-provence-picturesque-countryside-walk/eumraixenprovtour",
      productId: "eumraixenprovtour",
    },
  },
  {
    slug: "avignon-and-wine",
    title: "Avignon and Wine",
    seoTitle: "Avignon and Wine Shore Excursion — Châteauneuf-du-Pape from Marseille",
    metaDescription:
      "A seven-hour Avignon and wine shore excursion with Châteauneuf-du-Pape tasting — lunch and Palais des Papes entrance not included.",
    category: "Avignon & Wine",
    tagline:
      "Papal Avignon and Châteauneuf-du-Pape tasting — a Rhône day that stays honest about what tickets and lunch do not include.",
    duration: "7 Hours",
    pace: "Moderate",
    bestFor:
      "Travellers who want Avignon plus a Châteauneuf-du-Pape tasting and will budget separately for lunch and palace entry",
    overview:
      "Avignon and Wine pairs time in the papal city with a Châteauneuf-du-Pape tasting on a published seven-hour small-group day. Wine tasting is included; lunch is not. Palais des Papes entrance is not included — budget time and tickets separately if that interior matters to you.",
    body: [
      "Avignon's skyline is defined by the Palais des Papes and the broken bridge of legend, but a shore excursion stop is not the same as a full museum day inside the palace. Because entrance is not included on this product, treat exterior context and town time as the baseline unless you arrange tickets yourself within free time.",
      "Châteauneuf-du-Pape brings the wine chapter. Tasting is included per the supplier; lunch is not. Plan food around the itinerary windows.",
      "Seven hours from Marseille is a long inland commitment. Moderate activity covers walking in Avignon and standing for the tasting.",
      "For a private Avignon focus, see Private Papal City of Avignon. For Les Baux with wine instead, see Les Baux-de-Provence and Wine Tasting.",
    ],
    highlights: [
      "Avignon on a published inland day",
      "Châteauneuf-du-Pape wine tasting included, supplier states",
      "Lunch not included",
      "Palais des Papes entrance not included",
    ],
    included: [
      "Guided Avignon and wine itinerary as published on the supplier listing",
      "Wine tasting as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Palais des Papes entrance is not included — arrange tickets yourself if you want the interior during free time",
      "Lunch is not included; wine tasting is",
      "Seven hours use most of the day — confirm all-aboard",
      "Check current price and confirmed inclusions on the supplier listing",
    ],
    faqs: [
      {
        question: "Is Palais des Papes entry included?",
        answer:
          "No. Entrance is not included on this product. Budget separately if you want to go inside during free time.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No. Wine tasting is included, supplier states; lunch is not.",
      },
      {
        question: "Is this suitable for a short call?",
        answer:
          "Generally no. The published seven-hour duration and inland distance suit longer calls.",
      },
    ],
    relatedExcursionSlugs: [
      "private-avignon",
      "les-baux-wine",
      "exclusive-aix-and-marseille",
    ],
    whyRecommend:
      "It is the clearest shared-group Avignon-plus-Châteauneuf day when you accept that lunch and palace entry are separate.",
    cruiseSuitability: ["Better for longer calls", "Uses most of the day"],
    groupType: "Small group — Moderate activity level, supplier listing",
    foodInclusion: "Wine tasting included; lunch not included, supplier states",
    keyLocations: ["Avignon", "Châteauneuf-du-Pape"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/avignon-and-wine/eumravignon",
      productId: "eumravignon",
    },
  },
  {
    slug: "les-baux-wine",
    title: "Les Baux-de-Provence and Wine Tasting",
    seoTitle: "Les Baux-de-Provence and Wine Tasting — Shore Excursion from Marseille",
    metaDescription:
      "A six-hour small-group Les Baux-de-Provence shore excursion with wine tasting — minimum age 18, supplier states.",
    category: "Provence Villages",
    tagline:
      "The perched village of Les Baux and a wine tasting — a Provence hill-town day with an adult-only age floor.",
    duration: "6 Hours",
    pace: "Moderate",
    bestFor:
      "Adult travellers who want Les Baux-de-Provence and a wine tasting on a mid-length inland day",
    overview:
      "Les Baux-de-Provence and Wine Tasting is a published six-hour small-group day built around the dramatic hill village and a tasting stop. Minimum age is 18. Tastings are part of the supplier framing; confirm exact inclusions on the live listing.",
    body: [
      "Les Baux sits on a rocky spur with the kind of silhouette that defines inland Provence photography. A shore-day visit is about the village lanes and views within the published window, not an exhaustive ruins deep-dive unless the listing says otherwise.",
      "Wine tasting anchors the second beat of the day. With a minimum age of 18, this is not a family default product.",
      "Six hours is long enough to feel inland, short enough to be more manageable than the deepest Luberon or Avignon days — still confirm return margins from Marseille.",
      "For Avignon and Châteauneuf instead, see Avignon and Wine. For broader village circuits, see the Luberon products.",
    ],
    highlights: [
      "Les Baux-de-Provence hill village",
      "Wine tasting as published",
      "Minimum age 18, supplier states",
      "Small-group six-hour inland day",
    ],
    included: [
      "Guided Les Baux itinerary as published on the supplier listing",
      "Tastings as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Minimum age 18, supplier states",
      "Expect village walking on uneven surfaces — Moderate activity",
      "Confirm tasting details and any meal inclusions on the current listing",
      "Check current price on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Can under-18s join?",
        answer:
          "The supplier states a minimum age of 18. Do not assume exceptions.",
      },
      {
        question: "Is a full meal included?",
        answer:
          "Tastings are part of the published framing. Verify on the current listing whether anything beyond tasting is included.",
      },
      {
        question: "How long is the day?",
        answer:
          "Published duration is six hours. Add transfer reality from your Marseille berth when judging fit against all-aboard.",
      },
    ],
    relatedExcursionSlugs: [
      "avignon-and-wine",
      "provencal-towns-castellet-bandol-cassis",
      "villages-of-luberon",
    ],
    whyRecommend:
      "It is the clearest Les Baux-plus-tasting day for adult travellers who want a hill-village focus without a full Avignon circuit.",
    cruiseSuitability: ["Better for longer calls", "Uses most of the day"],
    groupType: "Small group — Moderate activity level, supplier listing",
    foodInclusion: "Tastings included, supplier states — verify meal details on listing",
    keyLocations: ["Les Baux-de-Provence"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/les-baux-provence-medieval-village-wine-tasting/eumrbauxprovsainrem",
      productId: "eumrbauxprovsainrem",
    },
  },
  {
    slug: "coastal-cave-snorkeling",
    title: "Marseille Coastal Cave Snorkeling Adventure",
    seoTitle: "Marseille Coastal Cave Snorkeling Adventure — Active Shore Excursion",
    metaDescription:
      "A demanding six-hour coastal cave snorkeling day from Marseille — ~1 hour hike each way; taxi to Endoume not included; active travellers only.",
    category: "Active Adventure",
    tagline:
      "Hike, cove and snorkel — a difficult coastal day that asks for fitness, planning and honest expectations about transfers.",
    duration: "6 Hours",
    pace: "Active",
    bestFor:
      "Fit active travellers who want a snorkeling adventure and accept a long hike plus a self-arranged taxi to Endoume",
    overview:
      "Marseille Coastal Cave Snorkeling Adventure is for active travellers only. Published duration is six hours at Difficult activity level, with picnic and drink included. A taxi to Endoume is not included. Expect roughly an hour's hike each way. Not recommended under 12. Return planning must be careful.",
    body: [
      "This is not a boat-drop snorkel with minimal walking. The supplier framing includes substantial hiking — about an hour each way — to reach the coastal cave setting. Difficult activity level means heat, uneven paths and swimming fitness all matter.",
      "Picnic and drink are included per the supplier. The taxi to Endoume is not — budget and time that transfer yourself from the cruise terminal area.",
      "Under-12s are not recommended. Even for older children and teens, assess swimming ability and hike stamina honestly before booking against a ship deadline.",
      "If you want Calanques scenery with optional swim but less snorkel-specific framing, see Calanques National Park Hike and Swim. If you want coastal views without the hike, see Marseille and Cassis.",
    ],
    highlights: [
      "Coastal cave snorkeling focus",
      "Picnic and drink included, supplier states",
      "Roughly one hour hike each way, supplier framing",
      "Difficult activity level — active travellers only",
    ],
    included: [
      "Guided snorkeling adventure as published on the supplier listing",
      "Picnic and drink as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Taxi to Endoume is not included — arrange and time it yourself",
      "Expect about one hour of hiking each way",
      "Not recommended under 12",
      "Difficult activity — assess fitness and swimming ability honestly",
      "Planning caveat: hike duration plus taxi transfers can erase return margin quickly — confirm all-aboard and set an early turnaround",
    ],
    faqs: [
      {
        question: "Is transport from the cruise terminal included?",
        answer:
          "The taxi to Endoume is not included, supplier framing. Plan that transfer separately and include it in your timing.",
      },
      {
        question: "How much hiking is involved?",
        answer:
          "The supplier indicates roughly one hour each way. This is a hiking-plus-snorkel day, not a short stroll to the water.",
      },
      {
        question: "Is this suitable for children?",
        answer:
          "It is not recommended under 12. Even above that age, fitness and swimming ability matter — and the Difficult rating is serious.",
      },
    ],
    relatedExcursionSlugs: [
      "calanques-hike-and-swim",
      "full-day-e-bike-calanques",
      "marseille-and-cassis",
    ],
    whyRecommend:
      "It is the most snorkel-specific coastal adventure in the set — only for fit travellers who will plan the Endoume taxi and hike timing carefully.",
    cruiseSuitability: ["Active travellers only", "Requires careful return planning"],
    groupType: "Standard group — Difficult activity level, supplier listing",
    foodInclusion: "Picnic and drink included, supplier states",
    keyLocations: ["Endoume area", "Marseille coastal caves"],
    activityLevel: "Difficult, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/marseille-coastal-cave-snorkeling-adventure/eumrsnorkelingshore",
      productId: "eumrsnorkelingshore",
    },
  },
  {
    slug: "culinary-workshop",
    title: "Marseille Culinary Workshop with Lunch",
    seoTitle: "Marseille Culinary Workshop with Lunch — Shore Excursion Cooking Class",
    metaDescription:
      "A six-hour Marseille cooking workshop with lunch and wine included — minimum age 16, small-group format.",
    category: "Food & Cooking",
    tagline:
      "Cook, then eat — a hands-on Marseille kitchen workshop with lunch and wine on the published offer.",
    duration: "6 Hours",
    pace: "Relaxed",
    bestFor:
      "Travellers who want a hands-on cooking class with lunch rather than a walking tasting tour",
    overview:
      "Marseille Culinary Workshop with Lunch is the hands-on kitchen alternative to walking food tours. Published duration is six hours in a small-group Easy format, with lunch and wine included. Minimum age is 16.",
    body: [
      "A workshop day swaps street-by-street tasting for time in a kitchen — techniques, a shared meal and wine as stated by the supplier. Exact dishes vary; read the current listing for what your date prepares.",
      "Six hours is a substantial block of the port call. Easy activity level still means standing, prep work and attention rather than a passive lunch booking.",
      "Minimum age 16 keeps this from being a young-children default. Confirm meeting location and terminal transfer needs on your voucher.",
      "For a shorter tasting walk, see A Taste of Marseille. For North African food culture with a meal, see North African Cuisine and Culture of Marseille.",
    ],
    highlights: [
      "Hands-on culinary workshop",
      "Lunch and wine included, supplier states",
      "Small-group format, Easy activity level",
      "Minimum age 16, supplier states",
    ],
    included: [
      "Culinary workshop as published on the supplier listing",
      "Lunch and wine as stated by the supplier",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Minimum age 16, supplier states",
      "Lunch and wine are included — confirm dietary requirements with the supplier before booking",
      "Six hours use a large share of the port day — confirm all-aboard",
      "Check current price and menu details on the supplier listing",
    ],
    faqs: [
      {
        question: "Do we walk between restaurants?",
        answer:
          "This is framed as a culinary workshop with lunch, not a multi-stop tasting walk. Confirm the exact format on the supplier listing.",
      },
      {
        question: "Is wine included?",
        answer:
          "Yes — lunch and wine are included, supplier states. Age rules for alcohol still apply.",
      },
      {
        question: "Can children join?",
        answer:
          "The supplier states a minimum age of 16.",
      },
    ],
    relatedExcursionSlugs: [
      "a-taste-of-marseille",
      "north-african-cuisine-culture",
      "private-cassis-wine-food",
    ],
    whyRecommend:
      "It is the strongest hands-on cooking option when you want to spend the port day in a kitchen with lunch and wine included.",
    cruiseSuitability: ["Works well for a standard port call", "Uses most of the day"],
    groupType: "Small group — Easy activity level, supplier listing",
    foodInclusion: "Lunch and wine included, supplier states",
    keyLocations: ["Marseille (culinary workshop)"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/marseille-workshop-french-cooking-class-with-lunch/eumrcookingclasschef",
      productId: "eumrcookingclasschef",
    },
  },
  {
    slug: "private-cassis-and-marseille",
    title: "Private Cassis and Marseille",
    seoTitle: "Private Cassis and Marseille Shore Excursion — Full Private Coastal Day",
    metaDescription:
      "An eight-hour private Cassis and Marseille day — optional Calanques boat if weather permits, not stated as included.",
    category: "Private Tours",
    tagline:
      "Cassis and Marseille on your own clock — a long private coastal day with the Calanques boat kept optional and weather-dependent.",
    duration: "8 Hours",
    pace: "Moderate",
    bestFor:
      "Private parties wanting a full Cassis and Marseille day with flexibility, without assuming a Calanques boat is included",
    overview:
      "Private Cassis and Marseille is the long-form private coastal pairing — eight published hours for your party. An optional Calanques boat may be possible if weather permits; it is not stated as included. Do not book expecting boat access as standard.",
    body: [
      "Eight hours gives a private party room to breathe in Cassis and still see Marseille without a coach group's timetable. Moderate activity covers walking and transfers rather than a trail day.",
      "The Calanques boat question needs the same honesty as on the shared Marseille and Cassis product: optional, weather-dependent, not a core inclusion on the framing we use here. Confirm add-on status and cost on the live listing if a boat matters to you.",
      "Private format helps with pacing; it does not remove the need for all-aboard discipline on a long day.",
      "For a shorter private food-and-wine Cassis angle, see Private Marseille and Cassis Luxury Wine and Food. For shared-group coastal overview, see Marseille and Cassis.",
    ],
    highlights: [
      "Private Cassis and Marseille full day",
      "Published eight-hour duration",
      "Optional Calanques boat if weather permits — not stated as included",
      "Private vehicle for your party",
    ],
    included: [
      "Private Cassis and Marseille itinerary as published on the supplier listing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Optional Calanques boat is weather-dependent and not stated as included — verify before assuming boat access",
      "Eight hours use essentially a full port day — confirm all-aboard early",
      "Confirm food arrangements on the current listing",
      "Check current price on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Is the Calanques boat included?",
        answer:
          "It is not stated as included. An optional boat may be possible if weather permits — confirm on the supplier listing for your date.",
      },
      {
        question: "How does this differ from the shared Marseille and Cassis tour?",
        answer:
          "Format and length. This is a private eight-hour day for your party; the shared product is a seven-hour small-group departure with its own optional-boat rules.",
      },
      {
        question: "Is this customisable?",
        answer:
          "Private format often allows some pacing flexibility, but do not assume a fully custom itinerary unless the supplier confirms it for your booking.",
      },
    ],
    relatedExcursionSlugs: [
      "marseille-and-cassis",
      "private-cassis-wine-food",
      "private-aix-and-marseille",
    ],
    whyRecommend:
      "It is the fullest private Cassis and Marseille day when you want your own vehicle and will treat any Calanques boat as optional and weather-dependent.",
    cruiseSuitability: ["Private premium choice", "Better for longer calls", "Uses most of the day"],
    groupType: "Private — Moderate activity level, supplier listing",
    foodInclusion: "Confirm on supplier listing",
    keyLocations: ["Cassis", "Marseille"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-cassis-and-marseille/eumrpvtcassmars",
      productId: "eumrpvtcassmars",
    },
  },
  {
    slug: "private-luberon",
    title: "Private Full Day Luberon Villages",
    seoTitle: "Private Full Day Luberon Villages — Shore Excursion from Marseille",
    metaDescription:
      "An eight-hour private Luberon villages day from Marseille for parties who want inland Provence without a shared coach.",
    category: "Private Tours",
    tagline:
      "Luberon villages at private pace — a full inland day for parties who want the hill towns without a group coach.",
    duration: "8 Hours",
    pace: "Moderate",
    bestFor:
      "Private parties on a long Marseille call who want a full Luberon villages day in their own vehicle",
    overview:
      "Private Full Day Luberon Villages is the private-format inland villages day — eight published hours at Moderate activity. Use it when the shared Luberon products' village sets appeal but you want privacy and pacing control for your party.",
    body: [
      "The Luberon's value is the string of hill villages and valley light; the constraint from Marseille is always distance and clock. Eight private hours acknowledge that reality better than pretending it is a half-day add-on.",
      "Exact village order should be confirmed on the supplier listing and voucher. Do not invent a fixed stop list beyond what the live product publishes for your date.",
      "Moderate activity means village walking between vehicle stages. Meals are not assumed — check the listing.",
      "Shared alternatives include Villages of Luberon and Charming Villages of Luberon Valley.",
    ],
    highlights: [
      "Private full-day Luberon villages format",
      "Published eight-hour duration",
      "Your party only — no shared coach",
      "Inland Provence focus from a Marseille call",
    ],
    included: [
      "Private Luberon villages itinerary as published on the supplier listing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Eight hours inland — better for longer calls only",
      "Confirm which villages are on your date's published routing",
      "Do not assume meals are included",
      "Check current price on the supplier listing before booking",
      "Planning caveat: private pacing helps, but distance to the Luberon still punishes late returns",
    ],
    faqs: [
      {
        question: "Which villages will we visit?",
        answer:
          "Confirm on the current supplier listing and your voucher. Private products can vary by booking — do not rely on another tour's village list.",
      },
      {
        question: "Is this suitable for a short port call?",
        answer:
          "No. Eight published hours plus inland transfers need a long day ashore.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Do not assume it. Verify inclusions on the supplier listing.",
      },
    ],
    relatedExcursionSlugs: [
      "villages-of-luberon",
      "charming-luberon-valley",
      "private-aix-and-marseille",
    ],
    whyRecommend:
      "It is the private full-day answer for parties who want Luberon villages without sharing a coach on a long Marseille call.",
    cruiseSuitability: ["Private premium choice", "Better for longer calls", "Uses most of the day"],
    groupType: "Private — Moderate activity level, supplier listing",
    foodInclusion: "Confirm on supplier listing",
    keyLocations: ["Luberon villages"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-full-day-luberon-village/eumrpvtlub",
      productId: "eumrpvtlub",
    },
  },
  {
    slug: "private-avignon",
    title: "Private Papal City of Avignon",
    seoTitle: "Private Papal City of Avignon — Shore Excursion from Marseille",
    metaDescription:
      "An eight-hour private Avignon day from Marseille for parties who want the papal city without a shared group schedule.",
    category: "Private Tours",
    tagline:
      "Avignon as a private day — papal skyline and town time on your party's schedule, not a coach megaphone tour.",
    duration: "8 Hours",
    pace: "Relaxed",
    bestFor:
      "Private parties wanting a full Avignon focus from Marseille without combining it with a fixed wine-stop group itinerary",
    overview:
      "Private Papal City of Avignon is the private full-day Avignon option — eight published hours at Easy activity. It suits parties who want the papal city as the main subject rather than a shared Avignon-and-wine circuit.",
    body: [
      "Avignon rewards unhurried town time: palace exteriors, bridge views and the denser old centre. Private format lets your party set emphasis within the supplier's published framework — still confirm ticket inclusions, because palace entry is often separate on Avignon products.",
      "Eight hours from Marseille is a long inland day. Easy activity level keeps the physical ask lower than hiking products, but walking the centre is still part of the experience.",
      "Compare with Avignon and Wine if you specifically want Châteauneuf-du-Pape tasting on a shared departure.",
      "Do not assume lunch or monument tickets without checking the live listing.",
    ],
    highlights: [
      "Private full-day Avignon focus",
      "Published eight-hour duration",
      "Easy activity level",
      "Papal city as the main subject",
    ],
    included: [
      "Private Avignon itinerary as published on the supplier listing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Confirm whether palace or monument tickets are included on the current listing — often they are not",
      "Eight hours need a long call and a firm return plan",
      "Easy pace still means town walking — wear comfortable shoes",
      "Check current price on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Is Palais des Papes entry included?",
        answer:
          "Do not assume it. Verify ticket inclusions on the supplier listing for this private product.",
      },
      {
        question: "Does this include wine tasting?",
        answer:
          "This product is framed as a private Avignon day. For a shared itinerary that includes Châteauneuf-du-Pape tasting, see Avignon and Wine.",
      },
      {
        question: "Is it fully customisable?",
        answer:
          "Private format may allow pacing flexibility, but confirm any must-see stops with the supplier rather than assuming a blank itinerary.",
      },
    ],
    relatedExcursionSlugs: [
      "avignon-and-wine",
      "private-luberon",
      "les-baux-wine",
    ],
    whyRecommend:
      "It is the clearest private full-day Avignon option when the papal city itself is the priority for your party.",
    cruiseSuitability: ["Private premium choice", "Better for longer calls", "Uses most of the day"],
    groupType: "Private — Easy activity level, supplier listing",
    foodInclusion: "Confirm on supplier listing",
    keyLocations: ["Avignon"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-papal-city-of-avignon/eumrpvtavig",
      productId: "eumrpvtavig",
    },
  },
  {
    slug: "private-camargue",
    title: "Private Ride Through Camargue Park",
    seoTitle: "Private Ride Through Camargue Park — Shore Excursion from Marseille",
    metaDescription:
      "A private 7.5-hour Camargue day from Marseille including Pont de Gau and Saintes-Maries — horse ride mentioned on the supplier page.",
    category: "Private Tours",
    tagline:
      "Wetlands, white horses and Saintes-Maries — a private Camargue day west of the Marseille call.",
    duration: "7 Hours 30 Minutes",
    pace: "Relaxed",
    bestFor:
      "Private parties who want a Camargue wetlands and Saintes-Maries day rather than Provence hill villages",
    overview:
      "Private Ride Through Camargue Park is the private wetlands alternative to inland village circuits — a published seven-and-a-half-hour Easy day. The supplier page mentions Pont de Gau, Saintes-Maries and a horse ride; confirm exactly what is included for your booking on the live listing.",
    body: [
      "The Camargue is a different Provence: lagoons, reed beds and a coastal culture centred on Saintes-Maries-de-la-Mer rather than ochre hill towns. A private day from Marseille makes that geography reachable within a long port call.",
      "Pont de Gau is a known wildlife-park stop in the region; a horse ride is mentioned on the supplier page. Treat both as elements to verify for your date — duration, inclusion status and any age or fitness notes belong on the current product details.",
      "Easy activity level suits travellers who want landscape and culture without a Difficult hike rating, but the day is still long. Return planning matters.",
      "If hill villages are the goal instead, choose a Luberon product. If wine and Avignon matter more, choose those inland options.",
    ],
    highlights: [
      "Private Camargue park day",
      "Pont de Gau on the supplier framing",
      "Saintes-Maries on the supplier framing",
      "Horse ride mentioned on the supplier page — verify inclusion details",
    ],
    included: [
      "Private Camargue itinerary as published on the supplier listing",
      "Elements such as park time or horse ride only as confirmed on the current listing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Verify horse-ride inclusion, duration and any restrictions on the current supplier listing",
      "7.5 hours — better for longer calls",
      "Bring sun protection; Camargue landscapes can be exposed",
      "Check current price and confirmed inclusions on the supplier listing",
      "Planning caveat: wildlife and ride timing can shift — keep a conservative return buffer to the ship",
    ],
    faqs: [
      {
        question: "Is a horse ride definitely included?",
        answer:
          "A horse ride is mentioned on the supplier page. Confirm whether it is included for your date, and note any age or fitness restrictions, on the live listing before booking.",
      },
      {
        question: "Will we see flamingos?",
        answer:
          "Wildlife sightings are never guaranteed. Pont de Gau is a known park stop on the supplier framing; what you see depends on season and conditions.",
      },
      {
        question: "Is this a short outing?",
        answer:
          "No. Published duration is seven and a half hours. It needs a longer Marseille call.",
      },
    ],
    relatedExcursionSlugs: [
      "private-avignon",
      "private-luberon",
      "exclusive-aix-and-marseille",
    ],
    whyRecommend:
      "It is the clearest private Camargue day from Marseille when you want wetlands and Saintes-Maries instead of another hill-village circuit — with horse-ride details verified on the listing.",
    cruiseSuitability: ["Private premium choice", "Better for longer calls", "Uses most of the day"],
    groupType: "Private — Easy activity level, supplier listing",
    foodInclusion: "Confirm on supplier listing",
    keyLocations: ["Camargue", "Pont de Gau", "Saintes-Maries-de-la-Mer"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-ride-through-camargue-park/eumrpvtvanridecamarg",
      productId: "eumrpvtvanridecamarg",
    },
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((excursion) => excursion.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((excursion) => excursion.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.featured);
}
