import { PROJECTS } from "./registry";
import type { Metric, ProjectData } from "./types";

export type { Metric, ProjectData, ProjectStatus } from "./types";

/** Fetch every project in parallel. One failing project never breaks the page —
 *  it's surfaced as a `down` card instead. */
export async function getAllProjects(): Promise<ProjectData[]> {
  const results = await Promise.allSettled(PROJECTS.map((p) => p.fetch()));
  return results.map((res, i) => {
    if (res.status === "fulfilled") return res.value;
    return {
      id: PROJECTS[i].id,
      name: PROJECTS[i].id,
      category: { nl: "Onbekend", en: "Unknown" },
      blurb: { nl: "Databron onbereikbaar.", en: "Data source unreachable." },
      url: "#",
      logo: null,
      status: "down" as const,
      source: "mock" as const,
      lastUpdate: new Date().toISOString(),
      metrics: [],
    };
  });
}

export async function getProject(id: string): Promise<ProjectData | null> {
  const entry = PROJECTS.find((p) => p.id === id);
  if (!entry) return null;
  try {
    return await entry.fetch();
  } catch {
    return null;
  }
}

export type TotalsSnapshot = {
  totalUsers: number;
  ticketsSold: number;
  totalRevenue: number;
  totalVisitors: number;
  totalMrr: number;
};

export type PortfolioTotals = TotalsSnapshot & {
  liveProducts: number;
  /** Same roll-up, computed from each metric's prevValue (one week ago). */
  prev: TotalsSnapshot;
};

const num = (m: Metric | undefined): number =>
  m && typeof m.value === "number" ? m.value : 0;

const prevNum = (m: Metric | undefined): number =>
  m ? (m.prevValue ?? (typeof m.value === "number" ? m.value : 0)) : 0;

const find = (p: ProjectData, key: string) => p.metrics.find((m) => m.key === key);

/** Roll-up numbers for the dash KPI strip (includes private metrics). */
export function getPortfolioTotals(projects: ProjectData[]): PortfolioTotals {
  const blank = (): TotalsSnapshot => ({
    totalUsers: 0,
    ticketsSold: 0,
    totalRevenue: 0,
    totalVisitors: 0,
    totalMrr: 0,
  });
  const cur = blank();
  const prev = blank();
  let liveProducts = 0;

  for (const p of projects) {
    if (p.status !== "down") liveProducts += 1;
    cur.totalUsers += num(find(p, "users")) + num(find(p, "accounts"));
    prev.totalUsers += prevNum(find(p, "users")) + prevNum(find(p, "accounts"));
    cur.ticketsSold += num(find(p, "tickets_sold"));
    prev.ticketsSold += prevNum(find(p, "tickets_sold"));
    cur.totalRevenue += num(find(p, "revenue"));
    prev.totalRevenue += prevNum(find(p, "revenue"));
    cur.totalVisitors += num(find(p, "visitors"));
    prev.totalVisitors += prevNum(find(p, "visitors"));
    cur.totalMrr += num(find(p, "mrr"));
    prev.totalMrr += prevNum(find(p, "mrr"));
  }

  return { liveProducts, ...cur, prev };
}

/** Public-site metric: a project's single headline non-private stat. */
export function publicHeadline(p: ProjectData): Metric | null {
  const order = ["users", "tickets_sold", "generations", "visitors", "accounts", "orders", "reservations", "requests"];
  for (const key of order) {
    const m = p.metrics.find((mm) => mm.key === key && !mm.private);
    if (m) return m;
  }
  return p.metrics.find((m) => !m.private) ?? null;
}
