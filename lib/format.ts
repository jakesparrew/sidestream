import type { MetricFormat } from "./projects/types";

const nf = new Intl.NumberFormat("en-US");

/** Compact form: 124300 -> "124.3k", 1840 -> "1,840". */
export function compact(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 10_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return nf.format(n);
}

export function formatMetric(value: number | string, format: MetricFormat): string {
  if (typeof value === "string") return value;
  switch (format) {
    case "currency":
      return "€" + compact(value);
    case "percent":
      return value + "%";
    case "number":
    default:
      return nf.format(value);
  }
}

/** Percentage change cur vs prev. Returns null when no baseline. */
export function pctChange(cur: number, prev?: number): number | null {
  if (prev === undefined || prev === 0) return null;
  return ((cur - prev) / prev) * 100;
}

/** ISO -> "2m", "3h", "2d". */
export function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60_000);
  if (min < 1) return "now";
  if (min < 60) return `${min}m`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h`;
  return `${Math.floor(hr / 24)}d`;
}
