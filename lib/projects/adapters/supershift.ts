import type { ProjectData } from "../types";

/** Shape of Supershift's /api/external/overview feed. */
type OverviewResponse = {
  generatedAt: string;
  totals: {
    organizations: number;
    users: number;
    members: number;
    reservations: number;
  };
  prev?: {
    organizations?: number;
    members?: number;
    reservations?: number;
  };
  mrrEstimate: number;
};

/**
 * Live Supershift adapter. Fetches the token-protected feed on supershift.work
 * and maps it into the dashboard shape. Falls back to the mock `base` (kept
 * flagged source:"mock") if env vars are missing or the call fails — so the dash
 * degrades gracefully and never shows stale numbers as live.
 *
 * Required env on the dashboard's Vercel project:
 *   SUPERSHIFT_METRICS_URL   = https://supershift.work/api/external/overview
 *   SUPERSHIFT_METRICS_TOKEN = <same value as FEED_API_TOKEN on supershift>
 */
export async function fetchSupershift(base: ProjectData): Promise<ProjectData> {
  const url = process.env.SUPERSHIFT_METRICS_URL;
  const token = process.env.SUPERSHIFT_METRICS_TOKEN;
  if (!url || !token) return base;

  try {
    const res = await fetch(url, {
      headers: { authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
    });
    if (!res.ok) return base;
    const data = (await res.json()) as OverviewResponse;
    const t = data.totals;
    if (!t || typeof t.organizations !== "number") return base;
    const p = data.prev ?? {};

    return {
      ...base,
      status: "live",
      source: "api",
      lastUpdate: data.generatedAt ?? new Date().toISOString(),
      metrics: [
        { key: "organisations", label: "Organisations", value: t.organizations, prevValue: p.organizations, format: "number" },
        { key: "staff", label: "Staff", value: t.members, prevValue: p.members, format: "number" },
        { key: "reservations", label: "Reservations", value: t.reservations, prevValue: p.reservations, format: "number" },
        { key: "mrr", label: "Recurring revenue", value: data.mrrEstimate, format: "currency", private: true },
      ],
    };
  } catch {
    return base;
  }
}
