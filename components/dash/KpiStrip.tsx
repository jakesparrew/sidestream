import { compact } from "@/lib/format";
import type { PortfolioTotals } from "@/lib/projects/index";

export function KpiStrip({ totals }: { totals: PortfolioTotals }) {
  const kpis = [
    { label: "Live products", value: String(totals.liveProducts) },
    { label: "Total users", value: compact(totals.totalUsers) },
    { label: "Tickets sold", value: compact(totals.ticketsSold) },
    { label: "Visitors", value: compact(totals.totalVisitors) },
    { label: "Portfolio revenue", value: "€" + compact(totals.totalRevenue) },
  ];
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      {kpis.map((k) => (
        <div key={k.label} className="bg-surface p-5">
          <div className="mono text-2xl font-semibold text-fg">{k.value}</div>
          <div className="eyebrow mt-1">{k.label}</div>
        </div>
      ))}
    </div>
  );
}
