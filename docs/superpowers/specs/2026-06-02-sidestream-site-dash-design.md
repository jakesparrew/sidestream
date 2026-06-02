# Sidestream — New Site + /dash Command Center

**Date:** 2026-06-02
**Status:** Approved design, pending spec review
**Domain:** sidestream.be (Vercel)

## Summary

Replace the current generic Framer AI-agency template at sidestream.be with a
custom-coded site that (a) showcases Sidestream as a **venture studio that ships
and operates real products**, to attract customers, and (b) hosts an internal
**`/dash`** portfolio command center that monitors every project's metrics.

One codebase. Dark, monochrome, data-forward design ("dark command" direction —
no accent colors). All dashboard data is **mock** for now; real per-project
endpoints are wired in later, one project at a time, without dash changes.

## Positioning

Sidestream is a venture studio: we build software products and then run them.
The portfolio of live products **is** the pitch — not a deck, real traction.
The site's job is to convert that proof into customer interest.

## Stack & Deploy

- **Next.js (App Router) + TypeScript + Tailwind**, deployed on Vercel,
  replacing the Framer deploy on the existing domain.
- Rationale over the current Vite SPA: `/dash` needs **server-side data
  aggregation** — fetch each project's API, hold secret keys in env vars,
  normalize, and cache. Next API routes / server components do this; a pure SPA
  cannot (CORS + exposed credentials).
- Shared dark monochrome design system across site and dash.

## Part A — Marketing Site (public)

Direction: **dark command** — dark background, mono/technical type, data-forward,
generous screen-edge padding, no accent colors. The dash aesthetic bleeds into
the site so they feel like one product.

**Content rule:** real content only. **No invented team, testimonials, or
pricing.** Reuse the legitimate, non-placeholder material from the current Framer
site for tone and structure (service categories, the build process, FAQ themes),
discard the stock/fake parts.

Sections (single page, anchor nav; sub-pages only if a section outgrows the page):

1. **Hero** — "An engineering studio that ships and operates real products" +
   a **live aggregate metric ticker** that reuses the dash data layer but shows
   **real, non-private metrics only** (revenue excluded). With mock data today,
   the ticker shows mock aggregates flagged honestly until real data lands.
2. **Products / Portfolio** — the core showcase, customer-facing. Each project a
   card/mini-case-study: **logo**, what it is, Sidestream's role, one live public
   stat, link out. Reuse design/context mined from the current site where useful.
3. **What we do** — capabilities, seeded from the current site's real service
   categories: AI Agent Development, AI Chatbots & Support Bots, Data & Workflow
   Automation, AI Consulting & Training. Framed as "what we can build for you."
4. **How we work** — the build process, seeded from the current site: identify
   opportunities → map architecture → design/build/test → approve plan →
   deploy/monitor/support.
5. **The studio model** — short: why "we run our own products" is the credential.
6. **Contact / book a call** — primary CTA (reuse "Book an intro call"). Footer.

## Part B — /dash Command Center (internal)

Layout **A**: a KPI strip of portfolio totals above a project **card grid**.
Each card → `/dash/[id]` detail view. **Not linked from public nav.** Revenue is
shown here (internal). Auth gating is a later add — design leaves a clean seam
(middleware-ready route group) but ships unprotected now.

### Data contract (normalized)

Every project conforms to one shape:

```ts
type Metric = {
  key: string;
  label: string;
  value: number | string;
  format: "number" | "currency" | "percent" | "text";
  private?: boolean; // e.g. revenue — hidden on public site ticker
};

type ProjectData = {
  id: string;
  name: string;
  category: string;
  url: string;
  logo: string;            // path to project logo asset
  status: "live" | "warn" | "down" | "mock";
  source: "api" | "rss" | "mock";
  lastUpdate: string;      // ISO
  metrics: Metric[];
};
```

### Architecture

- **One adapter per project** — `lib/projects/<id>.ts`, exports
  `fetchMetrics(): Promise<ProjectData>`. Today **every adapter returns mock
  data** with `source:"mock"` and a visible **"mock" badge** on the card, so the
  dash never pretends mock numbers are live.
- **Registry** — `lib/projects/index.ts` lists all projects, display order,
  category, logo, and which metric keys are `private`.
- **Server-side aggregator** — fetches all adapters in parallel with
  `Promise.allSettled` (one failure never breaks the page); caches via Next
  `revalidate` (~5 min).
- **Wiring a project live later** = replace its mock adapter body with a real
  fetch against that project's read-only metrics URL. No dash/UI changes. The
  reference pattern already exists in Trapspotter ("API via link"); each other
  project's endpoint is a separate follow-on task in that project's own repo.

### Project + metric registry (seed, mock values)

| Project | Category | Metrics |
|---|---|---|
| Ticketbalie | Ticketing | tickets sold, active events, organizers, revenue*, last update |
| Trapspotter | Civic app | users, premium users, controles, revenue* |
| Supershift | SaaS scheduling | organisations, staff, reservations, revenue* |
| House of Talents | AI product | generations |
| Barbassie | Venue | visitors |
| De Flesjesfabriek | Venue | events, visitors |
| Oliosalerno | E-commerce | orders |
| DCA / Investorclub | Community/content | visitors, podcast listeners |
| Investeren.org | Platform | accounts, visitors |
| Sidestream / Superstream | Site | visitors |
| Morgann | Service | requests |

`*` = `private` (revenue) — shown on /dash, never on the public site.

### Logos

Each project's **logo** appears on its dash card and its portfolio card. Source
from each project's local repo assets or live site; store under `public/logos/`.
Collecting/optimizing logos is an implementation task.

## Sequencing (one codebase)

1. **Foundation** — Next.js scaffold, Tailwind, dark design system, layout shell.
2. **Marketing site** — all sections (Part A) with real/reused content + logos.
3. **/dash** — data contract, registry, mock adapters (all 12), aggregator,
   Layout A grid + KPI strip + `/dash/[id]` detail. Logos on cards.
4. **Populate & polish dash** with the full mock dataset per the metric registry.
5. **(Later, per-repo, separate specs)** real read-only endpoints in each
   project; swap mock adapters for real fetches one at a time.

## Out of scope (for now)

- Authentication on /dash (seam left, not built).
- Real project API endpoints (follow-on, per project).
- Historical time-series storage (detail view shows current values; history when
  a real source provides it).

## Non-negotiables (from user preferences)

- No accent colors — monochrome dark.
- No AI-slop / templated SaaS copy — specific, concrete, opinionated.
- No fake content — no invented events, testimonials, team, or stats. Mock dash
  data is explicitly labeled "mock."
- Moderate button sizing, visible gaps between nav items, screen-edge padding.
- Commit only when the user explicitly asks.
