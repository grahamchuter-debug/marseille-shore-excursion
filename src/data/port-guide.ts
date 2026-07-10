import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Marseille Cruise Port Guide",
  subtitle:
    "Terminal context, berth differences, getting toward the Old Port, transfers and sensible return-to-ship planning for a Marseille cruise call.",
  terminals: [
    {
      name: "Main Marseille cruise terminals",
      quay: "Outside the historic centre — the berths most large cruise ships use",
      usedBy: "Most large cruise ships calling at Marseille",
      cityAccess:
        "Expect a transfer into the city rather than a short stroll to the Vieux-Port. Cruise lines often arrange shuttles on call days; taxis and public transport are also used. Confirm current arrangements for your ship before travelling.",
    },
    {
      name: "Smaller central berths",
      quay: "Closer to the city waterfront on some calls",
      usedBy: "Some smaller vessels, when assigned",
      cityAccess:
        "When your ship is assigned a more central berth, the Old Port and nearby neighbourhoods can feel more immediately reachable on foot or with a short local transfer. Always verify your actual berth on the day — assignments change.",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Marseille",
      paragraphs: [
        "Marseille is a major Mediterranean cruise call, and most large ships berth at the main cruise terminals outside the historic centre rather than beside the Vieux-Port itself. That distinction shapes the whole day: reaching Old Port energy, Le Panier or Notre-Dame usually involves a transfer first.",
        "Some smaller vessels may use berths closer to the city centre. Exact assignments depend on the ship, the day and port operations — check your ship's daily programme and any terminal signage on arrival rather than assuming a fixed layout from a previous call.",
        "Treat Marseille as a gateway: the city rewards a focused half-day ashore, while Aix, Cassis and deeper Provence need more usable hours and a clearer return plan.",
      ],
    },
    {
      heading: "Main terminals versus smaller central berths",
      paragraphs: [
        "The practical difference is distance and transfer complexity. From the main terminals, plan for a shuttle, taxi or public-transport leg before your sightseeing begins. From a more central berth, you may spend less of the day simply getting into town — but you should still confirm walking practicality, luggage rules and the route back.",
        "Do not rely on a single mental map of \"the Marseille cruise port.\" Meeting points for shore excursions are published on supplier confirmations and may not sit at the same place as an independent taxi rank or shuttle drop-off.",
      ],
    },
    {
      heading: "Distance to the historic centre",
      paragraphs: [
        "Qualitatively, the main cruise terminals sit away from the Old Port and Le Panier. The historic harbour is not typically a short waterfront walk from those berths. Central berths, when used, put you meaningfully closer to the city's core.",
        "Because distances and traffic conditions vary, avoid planning a tight independent itinerary around assumed walking times. Build the transfer into both ends of your day.",
      ],
    },
    {
      heading: "Shuttle possibilities",
      paragraphs: [
        "Many cruise lines offer a shuttle service between the terminal area and a city drop-off on call days. Availability, drop-off points and whether the service is complimentary or ticketed can change by ship and season — verify with your cruise line before travelling, and again on the morning of your call.",
        "Shuttles are useful for a city-focused day, but they run to their own rhythm. On busy multi-ship days, queues at both ends can stretch. Keep your ship's all-aboard time in mind when deciding whether a late shuttle is still a safe return option.",
      ],
    },
    {
      heading: "Taxi and transfer planning",
      paragraphs: [
        "Taxis and pre-booked transfers are a common way to move between the terminal and the Old Port, Notre-Dame, or onward destinations such as Aix and Cassis. Demand rises when several ships are in port, so allow extra time rather than assuming an immediate car.",
        "Keep your ship's name, berth or terminal details and all-aboard time written down for the return journey. If you are meeting a private driver or excursion, use the meeting instructions on your confirmation — not a generic \"cruise port\" pin.",
        "Check current port and cruise-line information before travelling; do not rely on remembered fares or journey times from another season.",
      ],
    },
    {
      heading: "Public transport at a high level",
      paragraphs: [
        "Marseille has a public transport network connecting the wider city, and some cruise passengers use it for independent days. Routes, tickets and how best to connect from a given terminal can change — confirm locally rather than planning around a specific bus or metro number from memory.",
        "Public transport can be cost-effective, but it puts return-timing responsibility entirely on you. If your call is short, or you are heading beyond the centre, an organised excursion or pre-booked transfer often reduces timing risk.",
      ],
    },
    {
      heading: "Reaching the Old Port",
      paragraphs: [
        "The Vieux-Port is Marseille's natural orientation point: cafés, the harbour basin, ferry kiosks and easy links toward Le Panier, the waterfront museums and the climb toward Notre-Dame de la Garde. Most independent city days begin or end here.",
        "How you arrive depends on your berth. From the main terminals, expect a shuttle or taxi drop near the centre rather than stepping off the gangway onto the quay. Once at the Old Port, the historic core is compact enough to explore on foot if you are comfortable with urban walking.",
      ],
    },
    {
      heading: "Walking practicality in the city",
      paragraphs: [
        "Central Marseille is walkable once you are there, but it is not flat everywhere. Le Panier is a hillside neighbourhood of stepped lanes and uneven surfaces. The approach to Notre-Dame de la Garde involves a meaningful climb or a local transport option up the hill.",
        "Wear comfortable shoes, carry water in warm weather, and treat slopes and steps as part of the day's effort — especially if you have already used energy on the transfer from the terminal.",
      ],
    },
    {
      heading: "Meeting-point cautions",
      paragraphs: [
        "Shore excursion meeting points are not always at the gangway. Some products meet a short walk from the pier; others meet in the city (for example near the Old Port) and expect you to reach that point by shuttle or taxi first.",
        "Read your supplier confirmation carefully. Arriving at the wrong end of the port area is a common way to lose the start of a tour. If instructions are unclear on the morning of your call, ask ship or terminal staff before wandering.",
      ],
    },
    {
      heading: "Traffic and return-to-ship timing",
      paragraphs: [
        "Road traffic between the historic centre, coastal routes and the main terminals can slow in the afternoon, particularly when several ships share the port. Build a buffer that accounts for congestion, not just the ideal journey.",
        "Always work back from all-aboard, which is earlier than published departure. Independent travellers are responsible for reaching the ship on time; if a Provence or Cassis day does not leave a comfortable margin, choose a shorter city-focused plan instead.",
      ],
    },
    {
      heading: "Multi-ship congestion",
      paragraphs: [
        "On busier days, Marseille can host more than one cruise ship. Expect more competition for taxis and shuttles, busier Old Port pavements and fuller queues at popular viewpoints such as Notre-Dame.",
        "Congestion tends to slow every stage of the day rather than just one. Start earlier where you can, keep plans simpler, and widen your return buffer.",
      ],
    },
    {
      heading: "Accessibility",
      paragraphs: [
        "Accessibility varies sharply by berth, transfer method and neighbourhood. The main terminals typically involve vehicle transfers; Le Panier and Notre-Dame involve slopes, steps or uneven historic surfaces that challenge wheelchairs and limited mobility.",
        "Discuss specific needs with your cruise line or tour operator before the call. Some organised excursions can accommodate collapsible mobility aids with advance notice; others explicitly cannot — check the product details rather than assuming.",
      ],
    },
    {
      heading: "Slopes, steps, heat and shade",
      paragraphs: [
        "Marseille's historic quarters and hillside basilica approaches include slopes and steps. In summer, open quays and upper viewpoints can be hot with limited shade in the middle of the day.",
        "Carry water, use sun protection, and consider tackling the most exposed climbs earlier. A café stop is a practical way to break a hot city day without abandoning the itinerary.",
      ],
    },
    {
      heading: "Independent sightseeing",
      paragraphs: [
        "A strong independent day often centres on the Old Port, a wander through Le Panier, waterfront time near MuCEM and — if energy allows — Notre-Dame de la Garde for the wide view across the city and sea.",
        "Independent exploring works best when your berth-to-centre transfer is clear and your return buffer is honest. For Cassis, Aix, the Calanques or lavender country, most cruise passengers prefer an organised excursion timed around the ship.",
      ],
    },
    {
      heading: "Currency, language and everyday practicalities",
      paragraphs: [
        "France uses the euro. Cards are widely accepted in restaurants and shops; a little cash still helps for smaller market stalls and informal purchases.",
        "French is the primary language. English is common in visitor-facing businesses around the Old Port, but less guaranteed in neighbourhood bakeries and markets — polite basics go a long way.",
        "Standard visitor customs and entry rules for France apply. Follow current guidance from your cruise line and official sources rather than informal advice.",
      ],
    },
    {
      heading: "Safety without alarmism",
      paragraphs: [
        "Marseille is a large, lively port city. Use the same common-sense habits you would in any major urban destination: stay aware in crowded areas, keep valuables secure, and prefer well-trafficked routes after dark.",
        "Tourist-focused zones around the Old Port are busy and generally straightforward to navigate by day. If something feels wrong, move toward staffed, well-lit areas and ask for help from official sources rather than strangers offering unsolicited services.",
      ],
    },
    {
      heading: "All-aboard discipline",
      paragraphs: [
        "Confirm your ship's all-aboard time before you leave the terminal area, and plan every onward destination against that clock. Published sailing time is not the deadline that matters.",
        "If you are on an organised shore excursion, understand what return guarantee the operator offers and what remains your responsibility. If you are independent, leave earlier than feels necessary — especially from Aix, Cassis or inland Provence.",
        "Check current port and cruise-line information before travelling; berth assignments, shuttle practices and local conditions can change between seasons.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Is the Marseille cruise terminal next to the Old Port?",
      answer:
        "Usually not for large ships. Most berth at the main cruise terminals outside the historic centre and need a shuttle, taxi or other transfer to reach the Vieux-Port. Some smaller vessels may use more central berths — verify your assignment on the day.",
    },
    {
      question: "Will there be a shuttle into the city?",
      answer:
        "Many cruise lines arrange a shuttle on Marseille call days, but availability and drop-off points vary. Confirm with your ship before travelling, and allow extra time on multi-ship days when queues build.",
    },
    {
      question: "Can I walk from the cruise port into Marseille?",
      answer:
        "It depends on your berth. From the main terminals, plan on a transfer rather than a casual walk into the Old Port. From a more central berth, walking may be more realistic — still confirm locally and leave a return buffer.",
    },
    {
      question: "Where should shore excursions meet?",
      answer:
        "Follow the meeting instructions on your supplier confirmation. Some tours meet near the pier; others meet in the city and expect you to reach that point independently. Do not assume every product picks up at the gangway.",
    },
    {
      question: "How early should I be back at the ship?",
      answer:
        "Work back from all-aboard, not published departure. Allow a larger buffer after Provence, Cassis or any road-based day, and on afternoons when several ships share the port.",
    },
    {
      question: "Is Marseille suitable for limited mobility?",
      answer:
        "Partially. Transfers from the main terminals are usually by vehicle, which can help, but Le Panier and Notre-Dame involve slopes and steps. Check each excursion's accessibility notes and discuss needs with your cruise line or operator in advance.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
