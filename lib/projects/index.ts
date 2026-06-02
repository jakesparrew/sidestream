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
      category: "Unknown",
      blurb: "Data source unreachable.",
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

export type PortfolioTotals = {
  liveProducts: number;
  totalUsers: number;
  ticketsSold: number;
  totalRevenue: number;
  totalVisitors: number;
};

const num = (m: Metric | undefined): number =>
  m && typeof m.value === "number" ? m.value : 0;

const find = (p: ProjectData, key: string) => p.metrics.find((m) => m.key === key);

/** Roll-up numbers for the dash KPI strip (includes private metrics). */
export function getPortfolioTotals(projects: ProjectData[]): PortfolioTotals {
  return projects.reduce<PortfolioTotals>(
    (acc, p) => {
      acc.liveProducts += p.status !== "down" ? 1 : 0;
      acc.totalUsers += num(find(p, "users")) + num(find(p, "accounts"));
      acc.ticketsSold += num(find(p, "tickets_sold"));
      acc.totalRevenue += num(find(p, "revenue"));
      acc.totalVisitors += num(find(p, "visitors"));
      return acc;
    },
    { liveProducts: 0, totalUsers: 0, ticketsSold: 0, totalRevenue: 0, totalVisitors: 0 },
  );
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
