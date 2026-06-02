import type { ProjectData, ProjectEntry } from "./types";

/**
 * MOCK DATA REGISTRY
 * ------------------
 * Every project below returns mock data flagged `source: "mock"`. The dash shows
 * a visible "mock" badge so these numbers are never mistaken for live data.
 *
 * To take a project live later: replace its `fetch()` body with a real call to
 * that project's read-only metrics URL (Trapspotter already has this pattern),
 * map the response into the `ProjectData` shape, and set `source: "api"` (or
 * "rss"). The dash, registry shape, and UI stay untouched.
 *
 * `category` and `blurb` are localized (nl/en). Metric labels are translated at
 * render time from the central dictionary in lib/i18n.ts.
 */

function minutesAgo(min: number): string {
  return new Date(Date.now() - min * 60_000).toISOString();
}

const MOCK: ProjectData[] = [
  {
    id: "ticketbalie",
    name: "Ticketbalie",
    category: { nl: "Ticketing", en: "Ticketing" },
    blurb: {
      nl: "Self-service ticketingplatform voor events en organisatoren. Gebouwd en gedraaid door Sidestream.",
      en: "Self-serve ticketing platform for events and organizers. Built and operated by Sidestream.",
    },
    url: "https://ticketbalie.com",
    logo: "/logos/ticketbalie.png",
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(2),
    metrics: [
      { key: "tickets_sold", label: "Tickets sold", value: 124_300, format: "number" },
      { key: "active_events", label: "Active events", value: 38, format: "number" },
      { key: "organizers", label: "Organizers", value: 27, format: "number" },
      { key: "revenue", label: "Revenue", value: 184_200, format: "currency", private: true },
    ],
  },
  {
    id: "trapspotter",
    name: "Trapspotter",
    category: { nl: "Civiele app", en: "Civic app" },
    blurb: {
      nl: "Mobiele app om in het veld te spotten en te melden, met premium-tiers en controles.",
      en: "Mobile app for spotting and reporting in the field, with premium tiers and inspections.",
    },
    url: "https://trapspotter.be",
    logo: "/logos/trapspotter.jpeg",
    status: "warn",
    source: "mock",
    lastUpdate: minutesAgo(1),
    metrics: [
      { key: "users", label: "Users", value: 12_480, format: "number" },
      { key: "premium_users", label: "Premium users", value: 842, format: "number" },
      { key: "controles", label: "Inspections", value: 3_210, format: "number" },
      { key: "revenue", label: "Revenue", value: 4_180, format: "currency", private: true },
    ],
  },
  {
    id: "supershift",
    name: "Supershift",
    category: { nl: "SaaS · Planning", en: "SaaS · Scheduling" },
    blurb: {
      nl: "SaaS voor personeelsplanning en shiftbeheer voor horeca- en eventteams.",
      en: "Staff scheduling and shift management SaaS for hospitality and events teams.",
    },
    url: "https://supershift.work",
    logo: "/logos/supershift.png",
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(5),
    metrics: [
      { key: "organisations", label: "Organisations", value: 54, format: "number" },
      { key: "staff", label: "Staff", value: 1_920, format: "number" },
      { key: "reservations", label: "Reservations", value: 28_400, format: "number" },
      { key: "revenue", label: "Revenue", value: 9_140, format: "currency", private: true },
    ],
  },
  {
    id: "houseoftalents",
    name: "House of Talents",
    category: { nl: "AI-product", en: "AI product" },
    blurb: {
      nl: "AI-gedreven generatieproduct dat prompts omzet in afgewerkt creatief werk.",
      en: "AI-powered generation product turning prompts into finished creative output.",
    },
    url: "https://houseoftalents.ai",
    logo: null,
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(11),
    metrics: [{ key: "generations", label: "Generations", value: 86_500, format: "number" }],
  },
  {
    id: "barbassie",
    name: "Barbassie",
    category: { nl: "Locatie", en: "Venue" },
    blurb: {
      nl: "Hospitality-locatie met een digitale boekings- en bezoekerservaring door Sidestream.",
      en: "Hospitality venue with a digital booking and visitor experience by Sidestream.",
    },
    url: "https://barbassie.be",
    logo: "/logos/barbassie.png",
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(18),
    metrics: [{ key: "visitors", label: "Visitors", value: 14_200, format: "number" }],
  },
  {
    id: "flesjesfabriek",
    name: "De Flesjesfabriek",
    category: { nl: "Locatie · Events", en: "Venue · Events" },
    blurb: {
      nl: "Eventlocatie met ticketing en bezoekersstroom van A tot Z afgehandeld.",
      en: "Event location with ticketing and visitor flow handled end-to-end.",
    },
    url: "https://deflesjesfabriek.be",
    logo: "/logos/flesjesfabriek.png",
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(26),
    metrics: [
      { key: "events", label: "Events", value: 12, format: "number" },
      { key: "visitors", label: "Visitors", value: 8_640, format: "number" },
    ],
  },
  {
    id: "oliosalerno",
    name: "Oliosalerno",
    category: { nl: "E-commerce", en: "E-commerce" },
    blurb: {
      nl: "Direct-to-consumer olijfoliewinkel met een geautomatiseerde bestelpijplijn.",
      en: "Direct-to-consumer olive oil shop with an automated order pipeline.",
    },
    url: "https://oliosalerno.be",
    logo: null,
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(43),
    metrics: [{ key: "orders", label: "Orders", value: 1_284, format: "number" }],
  },
  {
    id: "investorclub",
    name: "DCA · Investorclub",
    category: { nl: "Community · Content", en: "Community · Content" },
    blurb: {
      nl: "Crypto-educatiecommunity en content-engine — cursussen, events en een podcast.",
      en: "Crypto education community and content engine — courses, events and a podcast.",
    },
    url: "https://investorclub.be",
    logo: "/logos/investorclub.png",
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(9),
    metrics: [
      { key: "visitors", label: "Visitors", value: 23_800, format: "number" },
      { key: "podcast_listeners", label: "Podcast listeners", value: 4_120, format: "number" },
    ],
  },
  {
    id: "investeren",
    name: "Investeren.org",
    category: { nl: "Platform", en: "Platform" },
    blurb: {
      nl: "Kennisplatform over beleggen met ledenaccounts en een groeiend publiek.",
      en: "Investing knowledge platform with member accounts and a growing audience.",
    },
    url: "https://investeren.org",
    logo: null,
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(14),
    metrics: [
      { key: "accounts", label: "Accounts", value: 3_240, format: "number" },
      { key: "visitors", label: "Visitors", value: 41_500, format: "number" },
    ],
  },
  {
    id: "sidestream",
    name: "Sidestream · Superstream",
    category: { nl: "Studio", en: "Studio" },
    blurb: {
      nl: "Onze eigen sites — de studio en haar streaming/merk-oppervlak.",
      en: "Our own sites — the studio and its streaming/brand surface.",
    },
    url: "https://sidestream.be",
    logo: "/logos/sidestream.png",
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(3),
    metrics: [{ key: "visitors", label: "Visitors", value: 6_300, format: "number" }],
  },
  {
    id: "morgann",
    name: "Morgann",
    category: { nl: "Dienst", en: "Service" },
    blurb: {
      nl: "Aanvraag-gedreven serviceproduct met een geautomatiseerde intake-pijplijn.",
      en: "Request-driven service product with an automated intake pipeline.",
    },
    url: "https://morgann.be",
    logo: null,
    status: "warn",
    source: "mock",
    lastUpdate: minutesAgo(58),
    metrics: [{ key: "requests", label: "Requests", value: 540, format: "number" }],
  },
];

export const PROJECTS: ProjectEntry[] = MOCK.map((data) => ({
  id: data.id,
  fetch: async () => ({ ...data }),
}));

export const PROJECT_IDS = MOCK.map((p) => p.id);
