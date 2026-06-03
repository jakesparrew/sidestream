import type { ProjectData, ProjectEntry } from "./types";
import { fetchSupershift } from "./adapters/supershift";

/**
 * MOCK DATA REGISTRY
 * ------------------
 * Every project returns mock data flagged `source: "mock"`; the dash shows a
 * "mock" badge so these are never mistaken for live data. Each metric carries a
 * `prevValue` (one week ago) which drives the week-over-week delta on /dash.
 * `mrr` metrics are recurring revenue (EUR/month) and only exist on projects
 * that actually have a recurring model.
 *
 * To take a project live: replace its `fetch()` with a real call, map into the
 * `ProjectData` shape, set `source`. Nothing in the dash/UI changes.
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
      { key: "tickets_sold", label: "Tickets sold", value: 124_300, prevValue: 118_900, format: "number" },
      { key: "active_events", label: "Active events", value: 38, prevValue: 41, format: "number" },
      { key: "organizers", label: "Organizers", value: 27, prevValue: 25, format: "number" },
      { key: "mrr", label: "Recurring revenue", value: 2_100, prevValue: 1_980, format: "currency", private: true },
      { key: "revenue", label: "Revenue", value: 184_200, prevValue: 172_000, format: "currency", private: true },
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
      { key: "users", label: "Users", value: 12_480, prevValue: 11_800, format: "number" },
      { key: "premium_users", label: "Premium users", value: 842, prevValue: 880, format: "number" },
      { key: "controles", label: "Inspections", value: 3_210, prevValue: 3_050, format: "number" },
      { key: "mrr", label: "Recurring revenue", value: 3_900, prevValue: 4_100, format: "currency", private: true },
      { key: "revenue", label: "Revenue", value: 4_180, prevValue: 4_400, format: "currency", private: true },
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
      { key: "organisations", label: "Organisations", value: 54, prevValue: 49, format: "number" },
      { key: "staff", label: "Staff", value: 1_920, prevValue: 1_840, format: "number" },
      { key: "reservations", label: "Reservations", value: 28_400, prevValue: 26_100, format: "number" },
      { key: "mrr", label: "Recurring revenue", value: 8_200, prevValue: 7_700, format: "currency", private: true },
      { key: "revenue", label: "Revenue", value: 9_140, prevValue: 8_600, format: "currency", private: true },
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
    metrics: [
      { key: "generations", label: "Generations", value: 86_500, prevValue: 79_000, format: "number" },
    ],
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
    metrics: [
      { key: "visitors", label: "Visitors", value: 14_200, prevValue: 15_100, format: "number" },
    ],
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
      { key: "events", label: "Events", value: 12, prevValue: 10, format: "number" },
      { key: "visitors", label: "Visitors", value: 8_640, prevValue: 7_900, format: "number" },
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
    metrics: [
      { key: "orders", label: "Orders", value: 1_284, prevValue: 1_190, format: "number" },
    ],
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
      { key: "visitors", label: "Visitors", value: 23_800, prevValue: 22_400, format: "number" },
      { key: "podcast_listeners", label: "Podcast listeners", value: 4_120, prevValue: 3_800, format: "number" },
      { key: "mrr", label: "Recurring revenue", value: 9_100, prevValue: 8_600, format: "currency", private: true },
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
      { key: "accounts", label: "Accounts", value: 3_240, prevValue: 3_100, format: "number" },
      { key: "visitors", label: "Visitors", value: 41_500, prevValue: 39_000, format: "number" },
      { key: "mrr", label: "Recurring revenue", value: 1_200, prevValue: 1_100, format: "currency", private: true },
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
    metrics: [
      { key: "visitors", label: "Visitors", value: 6_300, prevValue: 5_400, format: "number" },
    ],
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
    metrics: [
      { key: "requests", label: "Requests", value: 540, prevValue: 610, format: "number" },
    ],
  },
  {
    id: "dazzap",
    name: "Dazzap",
    category: { nl: "Product", en: "Product" },
    // TODO: replace with the real description once confirmed — kept deliberately
    // factual (no invented features) per the no-placeholder rule.
    blurb: {
      nl: "Recente toevoeging aan de Sidestream-portfolio.",
      en: "Recent addition to the Sidestream portfolio.",
    },
    url: "https://dazzap.com",
    logo: null,
    status: "live",
    source: "mock",
    lastUpdate: minutesAgo(7),
    metrics: [
      { key: "users", label: "Users", value: 1_180, prevValue: 940, format: "number" },
    ],
  },
  {
    id: "keizerfest",
    name: "Keizerfest",
    category: { nl: "Festival", en: "Festival" },
    blurb: {
      nl: "Gratis driedaags stadsfestival in het Keizerpark in Gent — Back2Scratch, BDKMV, Wallhala en Wide Open.",
      en: "Free three-day city festival in Keizerpark, Ghent — Back2Scratch, BDKMV, Wallhala and Wide Open.",
    },
    url: "https://keizerfest.be",
    logo: null,
    status: "inactive",
    source: "mock",
    lastUpdate: minutesAgo(60 * 24 * 18), // seasonal — last edition wrapped
    metrics: [
      { key: "visitors", label: "Visitors", value: 18_400, format: "number" },
    ],
  },
];

/**
 * Live adapters by project id. A project listed here fetches real data (with the
 * mock entry as its fallback); everything else returns mock. To take another
 * project live, add its adapter here — nothing else in the dash changes.
 */
const LIVE: Record<string, (base: ProjectData) => Promise<ProjectData>> = {
  supershift: fetchSupershift,
};

export const PROJECTS: ProjectEntry[] = MOCK.map((data) => ({
  id: data.id,
  fetch: LIVE[data.id]
    ? () => LIVE[data.id](data)
    : async () => ({ ...data }),
}));

export const PROJECT_IDS = MOCK.map((p) => p.id);
