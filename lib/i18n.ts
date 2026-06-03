export type Lang = "nl" | "en";

export const LANGS: Lang[] = ["nl", "en"];
export const DEFAULT_LANG: Lang = "nl";

type Dict = {
  nav: { products: string; capabilities: string; process: string; studio: string; book: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { liveProducts: string; usersServed: string; ticketsSold: string; visitors: string };
  };
  marquee: string;
  products: { eyebrow: string; heading: string; sub: string; visit: string };
  capabilities: {
    eyebrow: string;
    heading: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; body: string }[];
  };
  studio: { eyebrow: string; quote: string; body: string };
  contact: { eyebrow: string; heading: string; sub: string; cta: string };
  footer: { tagline: string };
  dash: {
    subtitle: string;
    back: string;
    allProjects: string;
    mock: string;
    updated: string;
    ago: string;
    private: string;
    note: string;
    vsLastWeek: string;
    treasury: string;
    cryptoPortfolio: string;
    bankBalance: string;
    totalMrr: string;
    via: string;
    kpis: { liveProducts: string; totalUsers: string; ticketsSold: string; visitors: string; revenue: string };
    status: { live: string; warn: string; down: string; inactive: string; mock: string };
  };
};

export const t: Record<Lang, Dict> = {
  nl: {
    nav: { products: "Producten", capabilities: "Wat we doen", process: "Hoe we werken", studio: "Studio", book: "Plan een gesprek" },
    hero: {
      eyebrow: "Sidestream · Venture Studio",
      headline: "Een engineering­studio die echte producten bouwt én draait.",
      sub: "Wij leveren geen slide-deck. Wij bouwen software en runnen ze daarna zelf — live producten met echte gebruikers, betalende klanten en uptime om te verdedigen. Dat is de portfolio hieronder.",
      ctaPrimary: "Plan een kennismaking",
      ctaSecondary: "Bekijk wat we bouwden",
      stats: { liveProducts: "Live producten", usersServed: "Gebruikers bereikt", ticketsSold: "Tickets verkocht", visitors: "Bezoekers / maand" },
    },
    marquee: "Gebouwd en gedraaid door Sidestream",
    products: {
      eyebrow: "Geselecteerd werk",
      heading: "Producten die we bouwden — en nog steeds draaien.",
      sub: "Ticketing, planning, civiele apps, e-commerce, AI-tools. Verschillende markten, één operator. Elk hiervan draait vandaag live.",
      visit: "bezoek",
    },
    capabilities: {
      eyebrow: "Wat we doen",
      heading: "Wij bouwen de software die anderen enkel uitschrijven.",
      lead: "Echte software, draaiend in productie — van de AI-laag tot de infrastructuur eronder.",
      items: [
        { title: "Volledige producten, end-to-end", body: "Niet één feature, het hele ding — auth, betalingen, dashboards, infra, de saaie 80%. We bouwden ticketing-, planning- en e-commerce­platformen die met echt geld werken." },
        { title: "AI-agents & automatisatie", body: "Context-bewuste agents die operations, support en taken in meerdere stappen afhandelen. Wij bouwen de pipeline, koppelen ze aan jouw tools, en houden een mens in de lus waar het telt." },
        { title: "Support- & ops-bots", body: "Chatbots in jouw huisstijl met automatische kennisrouting. Getest in productie, niet in een demo — eentje van ons draait op 95% antwoordnauwkeurigheid op live tickets." },
        { title: "Consulting die eindigt in code", body: "We brengen je knelpunten in kaart en prioriteren de impactvolle. Maar de oplevering is werkende software, geen slide-deck en een factuur." },
      ],
    },
    process: {
      eyebrow: "Hoe we werken",
      heading: "Van idee tot iets dat in productie draait.",
      steps: [
        { title: "Vind het knelpunt", body: "We brengen in kaart waar tijd en geld echt weglekken, en kiezen de paar fixes die het waard zijn om eerst te bouwen." },
        { title: "Architecteer de workflow", body: "Een concreet plan: dataflow, integraties, waar AI helpt en waar net niet." },
        { title: "Ontwerp, bouw, test", body: "We leveren een werkend systeem op jouw échte data — en breken het voor je gebruikers dat doen." },
        { title: "Keur het plan goed", body: "Jij tekent af op de implementatie voor we opschalen. Geen verrassingen, geen scope drift." },
        { title: "Deploy & operate", body: "We lanceren, monitoren, verfijnen en houden het draaiend. Want meestal draaien wij het mee." },
      ],
    },
    studio: {
      eyebrow: "Het studiomodel",
      quote: "De meeste bureaus leveren de code op en verdwijnen. Wij houden de onze — we bezitten en draaien de producten die we bouwen, dus we voelen elke bug, elke vertrokken gebruiker en elke trage query net zoals jij dat zou doen.",
      body: "Dat is het verschil als je ons inhuurt: je koopt geen aannemer die nog nooit gedraaid heeft wat hij verkoopt. Je koopt een team waarvan de eigen broodwinning afhangt van software die blijft draaien.",
    },
    contact: {
      eyebrow: "Start iets",
      heading: "Een product te bouwen, of een proces om te killen?",
      sub: "Vertel ons wat je wil shippen. Past het, dan scopen we het in een kort kennismakings­gesprek — geen deck nodig.",
      cta: "Plan een kennismaking",
    },
    footer: { tagline: "Een venture studio. We bouwen software, en draaien ze dan." },
    dash: {
      subtitle: "Portfolio command center · intern",
      back: "← terug naar site",
      allProjects: "← alle projecten",
      mock: "mock data",
      updated: "geüpdatet",
      ago: "geleden",
      private: "privé",
      note: "Alle cijfers zijn mock data. Elk project gaat live door zijn adapter te vervangen door een echt metrics-endpoint — geen aanpassingen aan het dashboard nodig.",
      vsLastWeek: "vs vorige week",
      treasury: "Treasury",
      cryptoPortfolio: "Crypto portfolio",
      bankBalance: "Banksaldo",
      totalMrr: "Totale MRR",
      via: "via",
      kpis: { liveProducts: "Live producten", totalUsers: "Totaal gebruikers", ticketsSold: "Tickets verkocht", visitors: "Bezoekers", revenue: "Portfolio omzet" },
      status: { live: "Live", warn: "Verstoord", down: "Offline", inactive: "Inactief", mock: "Mock" },
    },
  },
  en: {
    nav: { products: "Products", capabilities: "What we do", process: "How we work", studio: "Studio", book: "Book a call" },
    hero: {
      eyebrow: "Sidestream · Venture Studio",
      headline: "An engineering studio that ships and operates real products.",
      sub: "We don't hand you a deck. We build software, then run it — live products with real users, paying customers, and uptime to defend. That's the portfolio below.",
      ctaPrimary: "Book an intro call",
      ctaSecondary: "See what we've shipped",
      stats: { liveProducts: "Live products", usersServed: "Users served", ticketsSold: "Tickets sold", visitors: "Monthly visitors" },
    },
    marquee: "Built and operated by Sidestream",
    products: {
      eyebrow: "Selected work",
      heading: "Products we built — and still run.",
      sub: "Ticketing, scheduling, civic apps, e-commerce, AI tools. Different markets, one operator. Each of these is live today.",
      visit: "visit",
    },
    capabilities: {
      eyebrow: "What we do",
      heading: "We build the software other people only spec.",
      lead: "Real software, running in production — from the AI layer down to the infrastructure it sits on.",
      items: [
        { title: "Full products, end to end", body: "Not a feature, the whole thing — auth, payments, dashboards, infra, the boring 80%. We've shipped ticketing, scheduling and e-commerce platforms that handle real money." },
        { title: "AI agents & automation", body: "Context-aware agents that handle operations, support and multi-step work. We build the pipeline, wire it to your tools, and keep a human in the loop where it matters." },
        { title: "Support & ops bots", body: "Brand-matched chatbots with automated knowledge routing. Tested in production, not in a demo — one of ours runs at 95% answer accuracy on live tickets." },
        { title: "Consulting that ends in shipped code", body: "We'll map your bottlenecks and prioritise the high-impact ones. But the deliverable is working software, not a slide deck and an invoice." },
      ],
    },
    process: {
      eyebrow: "How we work",
      heading: "From idea to a thing that runs in production.",
      steps: [
        { title: "Find the bottleneck", body: "We map where time and money actually leak, and pick the few fixes worth building first." },
        { title: "Architect the workflow", body: "A concrete plan: data flow, integrations, where AI helps and where it shouldn't." },
        { title: "Design, build, test", body: "We ship a working system against your real data — and break it before your users do." },
        { title: "Approve the plan", body: "You sign off on the implementation before we scale it. No surprises, no scope drift." },
        { title: "Deploy & operate", body: "We launch, monitor, refine, and keep it running. Because usually, we're running it too." },
      ],
    },
    studio: {
      eyebrow: "The studio model",
      quote: "Most agencies hand off the code and disappear. We keep ours — we own and operate the products we build, so we feel every bug, every churned user and every slow query the same way you would.",
      body: "That's the difference when you hire us: you're not buying a contractor who's never run the thing they're selling. You're buying a team whose own livelihood depends on software that stays up.",
    },
    contact: {
      eyebrow: "Start something",
      heading: "Got a product to build, or a process to kill?",
      sub: "Tell us what you're trying to ship. If it's a fit, we'll scope it on a short intro call — no deck required.",
      cta: "Book an intro call",
    },
    footer: { tagline: "A venture studio. We build software, then run it." },
    dash: {
      subtitle: "Portfolio command center · internal",
      back: "← back to site",
      allProjects: "← all projects",
      mock: "mock data",
      updated: "updated",
      ago: "ago",
      private: "private",
      note: "All figures are mock data. Each project goes live by swapping its adapter for a real metrics endpoint — no dash changes required.",
      vsLastWeek: "vs last week",
      treasury: "Treasury",
      cryptoPortfolio: "Crypto portfolio",
      bankBalance: "Bank balance",
      totalMrr: "Total MRR",
      via: "via",
      kpis: { liveProducts: "Live products", totalUsers: "Total users", ticketsSold: "Tickets sold", visitors: "Visitors", revenue: "Portfolio revenue" },
      status: { live: "Live", warn: "Degraded", down: "Down", inactive: "Inactive", mock: "Mock" },
    },
  },
};

/** Metric labels keyed by metric `key`, translated. */
export const METRIC_LABELS: Record<string, Record<Lang, string>> = {
  tickets_sold: { nl: "Tickets verkocht", en: "Tickets sold" },
  active_events: { nl: "Actieve events", en: "Active events" },
  organizers: { nl: "Organisatoren", en: "Organizers" },
  revenue: { nl: "Omzet", en: "Revenue" },
  mrr: { nl: "Terugkerende omzet", en: "Recurring revenue" },
  users: { nl: "Gebruikers", en: "Users" },
  premium_users: { nl: "Premium gebruikers", en: "Premium users" },
  controles: { nl: "Controles", en: "Inspections" },
  organisations: { nl: "Organisaties", en: "Organisations" },
  staff: { nl: "Personeel", en: "Staff" },
  reservations: { nl: "Reservaties", en: "Reservations" },
  generations: { nl: "Generaties", en: "Generations" },
  visitors: { nl: "Bezoekers", en: "Visitors" },
  events: { nl: "Events", en: "Events" },
  orders: { nl: "Bestellingen", en: "Orders" },
  podcast_listeners: { nl: "Podcast luisteraars", en: "Podcast listeners" },
  accounts: { nl: "Accounts", en: "Accounts" },
  requests: { nl: "Aanvragen", en: "Requests" },
};

export function metricLabel(key: string, lang: Lang, fallback: string): string {
  return METRIC_LABELS[key]?.[lang] ?? fallback;
}
