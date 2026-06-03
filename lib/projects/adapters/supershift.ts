import type { ProjectData } from "../types";

type MetricResponse = {
  project: string;
  updatedAt: string;
  metrics: Record<string, { value: number; prev?: number }>;
};

/**
 * Live Supershift adapter. Fetches the token-protected /api/metrics endpoint on
 * supershift.work and maps it into the dashboard shape. Falls back to the mock
 * `base` (kept flagged source:"mock") if the env vars are missing or the call
 * fails — so the dash degrades gracefully and never shows stale numbers as live.
 *
 * Required env on the dashboard's Vercel project:
 *   SUPERSHIFT_METRICS_URL   = https://supershift.work/api/metrics
 *   SUPERSHIFT_METRICS_TOKEN = <shared secret, also set as METRICS_TOKEN on supershift>
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
    const data = (await res.json()) as MetricResponse;
    const m = data.metrics;
    if (!m?.organisations) return base;

    return {
      ...base,
      status: "live",
      source: "api",
      lastUpdate: data.updatedAt ?? new Date().toISOString(),
      metrics: [
        { key: "organisations", label: "Organisations", value: m.organisations.value, prevValue: m.organisations.prev, format: "number" },
        { key: "staff", label: "Staff", value: m.staff.value, prevValue: m.staff.prev, format: "number" },
        { key: "reservations", label: "Reservations", value: m.reservations.value, prevValue: m.reservations.prev, format: "number" },
        { key: "mrr", label: "Recurring revenue", value: m.mrr.value, format: "currency", private: true },
      ],
    };
  } catch {
    return base;
  }
}
