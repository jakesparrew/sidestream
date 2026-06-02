import Link from "next/link";
import type { Metadata } from "next";
import { KpiStrip } from "@/components/dash/KpiStrip";
import { ProjectCard } from "@/components/dash/ProjectCard";
import { getAllProjects, getPortfolioTotals } from "@/lib/projects/index";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Command center — Sidestream",
  robots: { index: false, follow: false },
};

export default async function DashPage() {
  const projects = await getAllProjects();
  const totals = getPortfolioTotals(projects);

  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="container-edge flex flex-wrap items-center justify-between gap-3 py-5">
          <div>
            <div className="mono text-sm font-semibold tracking-tight text-fg">
              sidestream<span className="text-dim">.be</span> / dash
            </div>
            <p className="eyebrow mt-1">Portfolio command center · internal</p>
          </div>
          <Link href="/" className="mono text-xs text-dim transition-colors hover:text-fg">
            ← back to site
          </Link>
        </div>
      </header>

      <main className="container-edge py-8">
        <KpiStrip totals={totals} />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <p className="mono mt-8 text-xs text-dim">
          All figures are mock data. Each project goes live by swapping its
          adapter for a real metrics endpoint — no dash changes required.
        </p>
      </main>
    </div>
  );
}
