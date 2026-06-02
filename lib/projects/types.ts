export type MetricFormat = "number" | "currency" | "percent" | "text";

export type Metric = {
  key: string;
  label: string;
  value: number | string;
  format: MetricFormat;
  /** Private metrics (e.g. revenue) render on /dash but never on the public site. */
  private?: boolean;
};

export type ProjectStatus = "live" | "warn" | "down" | "mock";
export type DataSource = "api" | "rss" | "mock";

export type Localized = { nl: string; en: string };

export type ProjectData = {
  id: string;
  name: string;
  category: Localized;
  /** One-line description of what it is + Sidestream's role. */
  blurb: Localized;
  url: string;
  /** Path under /public, or null to fall back to a text monogram. */
  logo: string | null;
  status: ProjectStatus;
  source: DataSource;
  /** ISO timestamp of the underlying data. */
  lastUpdate: string;
  metrics: Metric[];
};

/** A project entry in the registry: static display config + a fetcher.
 *  Today every fetcher returns mock data. Wiring a project "live" later means
 *  replacing its fetcher body with a real API/RSS call — nothing else changes. */
export type ProjectEntry = {
  id: string;
  fetch: () => Promise<ProjectData>;
};
