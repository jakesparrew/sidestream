"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";
import type { ProjectStatus } from "@/lib/projects";

const STATUS_COLOR: Record<ProjectStatus, string> = {
  live: "var(--color-live)",
  warn: "var(--color-warn)",
  down: "var(--color-down)",
  inactive: "var(--color-dim)",
  mock: "var(--color-dim)",
};

export function StatusDot({ status }: { status: ProjectStatus }) {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: STATUS_COLOR[status] }}
      />
      <span className="text-xs text-muted">{t.dash.status[status]}</span>
    </span>
  );
}

/** Honest badge so mock numbers are never mistaken for live data. */
export function MockBadge() {
  const { t } = useI18n();
  return (
    <span className="mono rounded border border-line bg-surface-2 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-dim">
      {t.dash.mock}
    </span>
  );
}
