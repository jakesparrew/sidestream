import { pctChange } from "@/lib/format";

/** Week-over-week trend chip. Up = green, down = red, both functional/desaturated.
 *  `invert` flips the color meaning for metrics where down is good (none today). */
export function Delta({
  value,
  prev,
  size = "sm",
}: {
  value: number;
  prev?: number;
  size?: "sm" | "md";
}) {
  const pct = pctChange(value, prev);
  if (pct === null) return null;

  const up = pct >= 0;
  const flat = Math.abs(pct) < 0.05;
  const color = flat ? "var(--color-dim)" : up ? "var(--color-live)" : "var(--color-down)";
  const arrow = flat ? "→" : up ? "▲" : "▼";
  const text = `${arrow} ${Math.abs(pct).toFixed(pct >= 10 || pct <= -10 ? 0 : 1)}%`;

  return (
    <span
      className={`mono inline-flex items-center font-medium ${size === "md" ? "text-xs" : "text-[10px]"}`}
      style={{ color }}
      title={`${up ? "+" : ""}${pct.toFixed(1)}% vs last week`}
    >
      {text}
    </span>
  );
}
