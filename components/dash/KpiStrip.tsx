"use client";

import { CountUp } from "@/components/motion/CountUp";
import { Delta } from "./Delta";
import { useI18n } from "@/components/i18n/LanguageProvider";
import type { PortfolioTotals } from "@/lib/projects/index";

export function KpiStrip({ totals }: { totals: PortfolioTotals }) {
  const { t } = useI18n();
  const kpis = [
    { label: t.dash.kpis.liveProducts, value: totals.liveProducts, prev: undefined as number | undefined, prefix: "" },
    { label: t.dash.kpis.totalUsers, value: totals.totalUsers, prev: totals.prev.totalUsers, prefix: "" },
    { label: t.dash.kpis.ticketsSold, value: totals.ticketsSold, prev: totals.prev.ticketsSold, prefix: "" },
    { label: t.dash.kpis.visitors, value: totals.totalVisitors, prev: totals.prev.totalVisitors, prefix: "" },
    { label: t.dash.kpis.revenue, value: totals.totalRevenue, prev: totals.prev.totalRevenue, prefix: "€" },
  ];
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      {kpis.map((k) => (
        <div key={k.label} className="bg-surface p-5">
          <div className="mono text-2xl font-semibold text-fg">
            <CountUp value={k.value} prefix={k.prefix} />
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="eyebrow">{k.label}</span>
            <Delta value={k.value} prev={k.prev} />
          </div>
        </div>
      ))}
    </div>
  );
}
