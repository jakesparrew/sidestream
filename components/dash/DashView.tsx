"use client";

import Link from "next/link";
import { KpiStrip } from "./KpiStrip";
import { TreasuryStrip } from "./TreasuryStrip";
import { ProjectCard } from "./ProjectCard";
import { useI18n, LangToggle } from "@/components/i18n/LanguageProvider";
import type { ProjectData } from "@/lib/projects";
import type { PortfolioTotals } from "@/lib/projects/index";

export function DashView({
  projects,
  totals,
}: {
  projects: ProjectData[];
  totals: PortfolioTotals;
}) {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="container-edge flex flex-wrap items-center justify-between gap-3 py-5">
          <div>
            <div className="mono text-sm font-semibold tracking-tight text-fg">
              sidestream<span className="text-dim">.be</span> / dash
            </div>
            <p className="eyebrow mt-1">{t.dash.subtitle}</p>
          </div>
          <div className="flex items-center gap-4">
            <LangToggle />
            <Link href="/" className="mono text-xs text-dim transition-colors hover:text-fg">
              {t.dash.back}
            </Link>
          </div>
        </div>
      </header>

      <main className="container-edge space-y-8 py-8">
        <KpiStrip totals={totals} />

        <TreasuryStrip totalMrr={totals.totalMrr} prevMrr={totals.prev.totalMrr} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <p className="mono mt-8 text-xs text-dim">{t.dash.note}</p>
      </main>
    </div>
  );
}
