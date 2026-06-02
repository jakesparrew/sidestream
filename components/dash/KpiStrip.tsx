"use client";

import { CountUp } from "@/components/motion/CountUp";
import { useI18n } from "@/components/i18n/LanguageProvider";
import type { PortfolioTotals } from "@/lib/projects/index";

export function KpiStrip({ totals }: { totals: PortfolioTotals }) {
  const { t } = useI18n();
  const kpis = [
    { label: t.dash.kpis.liveProducts, value: totals.liveProducts, prefix: "" },
    { label: t.dash.kpis.totalUsers, value: totals.totalUsers, prefix: "" },
    { label: t.dash.kpis.ticketsSold, value: totals.ticketsSold, prefix: "" },
    { label: t.dash.kpis.visitors, value: totals.totalVisitors, prefix: "" },
    { label: t.dash.kpis.revenue, value: totals.totalRevenue, prefix: "€" },
  ];
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      {kpis.map((k) => (
        <div key={k.label} className="bg-surface p-5">
          <div className="mono text-2xl font-semibold text-fg">
            <CountUp value={k.value} prefix={k.prefix} />
          </div>
          <div className="eyebrow mt-1">{k.label}</div>
        </div>
      ))}
    </div>
  );
}
