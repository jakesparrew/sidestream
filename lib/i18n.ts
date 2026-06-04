export type Lang = "nl" | "en";

export const LANGS: Lang[] = ["nl", "en"];
export const DEFAULT_LANG: Lang = "nl";

type Dict = {
  nav: { products: string; capabilities: string; process: string; studio: string; faq: string; tools: string; book: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
    stats: { liveProducts: string; usersServed: string; ticketsSold: string; visitors: string };
  };
  forClients: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: { situation: string; outcome: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  tools: {
    nav: string;
    eyebrow: string;
    heading: string;
    sub: string;
    teaser: { eyebrow: string; title: string; body: string; cta: string };
    disclaimer: string;
    build: {
      title: string;
      sub: string;
      typeLabel: string;
      types: { id: string; label: string }[];
      sizeLabel: string;
      sizes: { id: string; label: string }[];
      addonsLabel: string;
      addonList: { id: string; label: string }[];
      rushLabel: string;
      estimateLabel: string;
      timelineLabel: string;
      weeks: string;
      cta: string;
    };
    savings: {
      title: string;
      sub: string;
      peopleLabel: string;
      hoursLabel: string;
      costLabel: string;
      autoLabel: string;
      hoursSavedLabel: string;
      moneySavedLabel: string;
      perYear: string;
      cta: string;
    };
    lead: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  marquee: string;
  products: { eyebrow: string; heading: string; sub: string; visit: string };
  capabilities: {
    eyebrow: string;
    heading: string;
    lead: string;
    items: { title: string; body: string }[];
    security: { eyebrow: string; title: string; body: string; points: string[] };
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; body: string }[];
  };
  studio: { eyebrow: string; quote: string; body: string };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    cta: string;
    whatNext: string;
    namePlaceholder: string;
    projectPlaceholder: string;
    send: string;
    trust: string;
  };
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
    nav: { products: "Producten", capabilities: "Wat we doen", process: "Hoe we werken", studio: "Studio", faq: "FAQ", tools: "Tools", book: "Plan een gesprek" },
    hero: {
      eyebrow: "Sidestream · Venture Studio",
      headline: "Een engineering­studio die echte producten bouwt én draait.",
      sub: "Geen slide-deck. Wij bouwen software én draaien ze zelf — live producten met echte gebruikers en omzet.",
      ctaPrimary: "Plan een kennismaking",
      ctaSecondary: "Bekijk wat we bouwden",
      trust: ["Gratis scoping-gesprek", "Antwoord binnen een dag", "Jij bezit alle code"],
      stats: { liveProducts: "Live producten", usersServed: "Gebruikers bereikt", ticketsSold: "Tickets verkocht", visitors: "Bezoekers / maand" },
    },
    marquee: "Gebouwd en gedraaid door Sidestream",
    forClients: {
      eyebrow: "Voor jou",
      heading: "Wat we voor jou kunnen bouwen.",
      sub: "Bijna alles wat we zelf draaien, bouwen we ook voor jou.",
      items: [
        { situation: "Je hebt een idee, geen product.", outcome: "We bouwen het hele ding — design, build, infra, lancering." },
        { situation: "Een handmatig proces vreet uren van je team.", outcome: "We automatiseren het met AI-agents die in productie draaien." },
        { situation: "Je hebt een app, maar security houdt je wakker.", outcome: "We auditen, harden en bewaken ze alsof het de onze zijn." },
        { situation: "Je hebt iets gelanceerd, maar niemand draait het.", outcome: "Wij draaien het — uptime, support, iteratie." },
      ],
    },
    faq: {
      eyebrow: "Veelgestelde vragen",
      heading: "Wat je waarschijnlijk wil weten.",
      items: [
        { q: "Hoe lang duurt een project?", a: "Een gerichte MVP is 4–8 weken. We leveren in kleine stappen, dus je ziet vroeg werkende software." },
        { q: "Hoe prijzen jullie?", a: "Vaste scope, vaste prijs. Doorlopend werk is een maandelijkse retainer. Geen lock-in." },
        { q: "Wie bezit de code?", a: "Jij — volledig. Jouw repo, infra en accounts. We dragen alles over." },
        { q: "Onderhouden jullie wat je bouwt?", a: "Als je dat wil. We draaien onze eigen producten, dus de jouwe draaien is de standaard." },
        { q: "Kunnen jullie met onze stack werken?", a: "Meestal wel. We werken in jouw stack in plaats van een rewrite te forceren." },
        { q: "Waar zijn jullie gevestigd?", a: "België. We werken door heel Europa, in het Nederlands of Engels." },
      ],
    },
    tools: {
      nav: "Tools",
      eyebrow: "Gratis tools",
      heading: "Reken het even uit.",
      sub: "Twee snelle rekentools — wat je product kost om te bouwen, en wat automatisering je bespaart. Geen account nodig.",
      teaser: {
        eyebrow: "Gratis tools",
        title: "Bereken je build of je besparing.",
        body: "Schat in een minuut wat je product kost, of hoeveel uur automatisering je team scheelt.",
        cta: "Open de tools",
      },
      disclaimer: "Indicatief — een echte offerte scopen we samen in een kort gesprek.",
      build: {
        title: "Wat kost het om te bouwen?",
        sub: "Kies type, omvang en extra's voor een richtprijs en doorlooptijd.",
        typeLabel: "Wat bouwen we?",
        types: [
          { id: "mvp", label: "MVP" },
          { id: "product", label: "Volledig product" },
          { id: "ai", label: "AI-agent" },
          { id: "automation", label: "Automatisering" },
          { id: "security", label: "Security-audit" },
        ],
        sizeLabel: "Omvang",
        sizes: [
          { id: "s", label: "Klein" },
          { id: "m", label: "Gemiddeld" },
          { id: "l", label: "Groot" },
        ],
        addonsLabel: "Extra's",
        addonList: [
          { id: "auth", label: "Accounts & login" },
          { id: "payments", label: "Betalingen" },
          { id: "ai", label: "AI-functies" },
          { id: "dashboard", label: "Admin-dashboard" },
          { id: "mobile", label: "Mobiele app" },
          { id: "integrations", label: "Integraties" },
        ],
        rushLabel: "Versneld opleveren",
        estimateLabel: "Richtprijs",
        timelineLabel: "Doorlooptijd",
        weeks: "weken",
        cta: "Stuur me deze schatting",
      },
      savings: {
        title: "Wat bespaart automatisering je?",
        sub: "Schat de jaarlijkse winst van één handmatig proces automatiseren.",
        peopleLabel: "Mensen op de taak",
        hoursLabel: "Uur per week elk",
        costLabel: "Kost per uur (€)",
        autoLabel: "Te automatiseren",
        hoursSavedLabel: "Bespaarde uren",
        moneySavedLabel: "Bespaard",
        perYear: "per jaar",
        cta: "Laten we dit automatiseren",
      },
      lead: {
        title: "Dit op maat krijgen?",
        namePlaceholder: "Je naam",
        emailPlaceholder: "Je e-mail",
        send: "Verstuur",
        sending: "Versturen…",
        success: "Top — we nemen binnen een dag contact op.",
        error: "Er ging iets mis. Mail ons gerust op hello@sidestream.be.",
      },
    },
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
      security: {
        eyebrow: "Beveiliging & bescherming",
        title: "Beveiliging die ingebouwd zit — niet erop geplakt.",
        body: "Wij draaien producten die betalingen en persoonsgegevens raken, dus beveiliging is basis, geen meerprijs. We auditen die van jou zoals die van ons.",
        points: [
          "Security- & penetratie-audits",
          "Auth-, toegang- & secrets-hardening",
          "GDPR-waardige gegevensbescherming",
          "Monitoring, alerting & incident response",
        ],
      },
    },
    process: {
      eyebrow: "Hoe we werken",
      heading: "Van idee tot iets dat in productie draait.",
      steps: [
        { title: "Vind het knelpunt", body: "We brengen in kaart waar tijd en geld echt weglekken." },
        { title: "Architecteer de workflow", body: "Een concreet plan: dataflow, integraties, waar AI past." },
        { title: "Ontwerp, bouw, test", body: "Een werkend systeem op jouw échte data, gebroken voor je gebruikers dat doen." },
        { title: "Keur het plan goed", body: "Jij tekent af voor we opschalen. Geen scope drift." },
        { title: "Deploy & operate", body: "We lanceren, monitoren en houden het draaiend." },
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
      whatNext: "Je hoort binnen een dag iets terug — meestal met een paar scherpe vragen, geen verkooppraatje.",
      namePlaceholder: "Je naam",
      projectPlaceholder: "Wat wil je bouwen, automatiseren of beveiligen?",
      send: "Verstuur",
      trust: "Gratis scoping-gesprek · Antwoord binnen een dag · Jij bezit alle code",
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
    nav: { products: "Products", capabilities: "What we do", process: "How we work", studio: "Studio", faq: "FAQ", tools: "Tools", book: "Book a call" },
    hero: {
      eyebrow: "Sidestream · Venture Studio",
      headline: "An engineering studio that ships and operates real products.",
      sub: "No deck. We build software and run it ourselves — live products with real users and revenue.",
      ctaPrimary: "Book an intro call",
      ctaSecondary: "See what we've shipped",
      trust: ["Free scoping call", "Reply within a day", "You own all the code"],
      stats: { liveProducts: "Live products", usersServed: "Users served", ticketsSold: "Tickets sold", visitors: "Monthly visitors" },
    },
    marquee: "Built and operated by Sidestream",
    forClients: {
      eyebrow: "For you",
      heading: "What we can build for you.",
      sub: "Almost everything we run ourselves, we'll build for you too.",
      items: [
        { situation: "You have an idea, not a product.", outcome: "We ship the whole thing — design, build, infra, launch." },
        { situation: "A manual process eats your team's hours.", outcome: "We automate it with AI agents that run in production." },
        { situation: "You've got an app, but security worries you.", outcome: "We audit it, harden it, and watch it like it's ours." },
        { situation: "You shipped something, but no one runs it.", outcome: "We operate it — uptime, support, iteration." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "What you're probably wondering.",
      items: [
        { q: "How long does a project take?", a: "A focused MVP is 4–8 weeks. We ship in small increments, so you see working software early." },
        { q: "How do you price?", a: "Fixed scope, fixed price. Ongoing work is a monthly retainer. No lock-in." },
        { q: "Who owns the code?", a: "You do — fully. Your repo, infra and accounts. We hand it all over." },
        { q: "Do you maintain what you build?", a: "If you want. We run our own products, so operating yours is the default." },
        { q: "Can you work with our stack?", a: "Usually yes. We work in your stack rather than force a rewrite." },
        { q: "Where are you based?", a: "Belgium. We work across Europe, in English or Dutch." },
      ],
    },
    tools: {
      nav: "Tools",
      eyebrow: "Free tools",
      heading: "Run the numbers.",
      sub: "Two quick calculators — what your product costs to build, and what automation saves you. No account needed.",
      teaser: {
        eyebrow: "Free tools",
        title: "Estimate your build, or your savings.",
        body: "In a minute, get a ballpark on what your product costs to build, or how many hours automation frees up.",
        cta: "Open the tools",
      },
      disclaimer: "Indicative only — we scope a real quote together on a short call.",
      build: {
        title: "What will it cost to build?",
        sub: "Pick a type, size and add-ons for a ballpark price and timeline.",
        typeLabel: "What are we building?",
        types: [
          { id: "mvp", label: "MVP" },
          { id: "product", label: "Full product" },
          { id: "ai", label: "AI agent" },
          { id: "automation", label: "Automation" },
          { id: "security", label: "Security audit" },
        ],
        sizeLabel: "Size",
        sizes: [
          { id: "s", label: "Small" },
          { id: "m", label: "Medium" },
          { id: "l", label: "Large" },
        ],
        addonsLabel: "Add-ons",
        addonList: [
          { id: "auth", label: "Accounts & login" },
          { id: "payments", label: "Payments" },
          { id: "ai", label: "AI features" },
          { id: "dashboard", label: "Admin dashboard" },
          { id: "mobile", label: "Mobile app" },
          { id: "integrations", label: "Integrations" },
        ],
        rushLabel: "Rushed delivery",
        estimateLabel: "Ballpark price",
        timelineLabel: "Timeline",
        weeks: "weeks",
        cta: "Send me this estimate",
      },
      savings: {
        title: "What does automation save you?",
        sub: "Estimate the yearly gain of automating one manual process.",
        peopleLabel: "People on the task",
        hoursLabel: "Hours per week each",
        costLabel: "Cost per hour (€)",
        autoLabel: "Automatable",
        hoursSavedLabel: "Hours saved",
        moneySavedLabel: "Saved",
        perYear: "per year",
        cta: "Let's automate this",
      },
      lead: {
        title: "Want this tailored?",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        send: "Send",
        sending: "Sending…",
        success: "Great — we'll be in touch within a day.",
        error: "Something went wrong. Email us at hello@sidestream.be.",
      },
    },
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
      security: {
        eyebrow: "Security & protection",
        title: "Security that's built in — not bolted on.",
        body: "We run products that touch payments and personal data, so security is table stakes, not an upsell. We audit yours the way we audit ours.",
        points: [
          "Security & penetration audits",
          "Auth, access & secrets hardening",
          "GDPR-grade data protection",
          "Monitoring, alerting & incident response",
        ],
      },
    },
    process: {
      eyebrow: "How we work",
      heading: "From idea to a thing that runs in production.",
      steps: [
        { title: "Find the bottleneck", body: "We map where time and money actually leak." },
        { title: "Architect the workflow", body: "A concrete plan: data flow, integrations, where AI fits." },
        { title: "Design, build, test", body: "A working system on your real data, broken before your users break it." },
        { title: "Approve the plan", body: "You sign off before we scale. No scope drift." },
        { title: "Deploy & operate", body: "We launch, monitor, and keep it running." },
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
      whatNext: "You'll hear back within a day — usually with a couple of sharp questions, not a sales script.",
      namePlaceholder: "Your name",
      projectPlaceholder: "What do you want to build, automate or secure?",
      send: "Send",
      trust: "Free scoping call · Reply within a day · You own all the code",
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
