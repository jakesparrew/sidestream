import type { ProjectStatus } from "@/lib/projects";

const STATUS_COLOR: Record<ProjectStatus, string> = {
  live: "var(--color-live)",
  warn: "var(--color-warn)",
  down: "var(--color-down)",
  mock: "var(--color-dim)",
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  warn: "Degraded",
  down: "Down",
  mock: "Mock",
};

export function StatusDot({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: STATUS_COLOR[status] }}
      />
      <span className="text-xs text-muted">{STATUS_LABEL[status]}</span>
    </span>
  );
}

/** Honest badge so mock numbers are never mistaken for live data. */
export function MockBadge() {
  return (
    <span className="mono rounded border border-line bg-surface-2 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-dim">
      mock data
    </span>
  );
}
