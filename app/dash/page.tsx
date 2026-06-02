import type { Metadata } from "next";
import { DashView } from "@/components/dash/DashView";
import { getAllProjects, getPortfolioTotals } from "@/lib/projects/index";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Command center — Sidestream",
  robots: { index: false, follow: false },
};

export default async function DashPage() {
  const projects = await getAllProjects();
  const totals = getPortfolioTotals(projects);
  return <DashView projects={projects} totals={totals} />;
}
