import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectLogo } from "@/components/ProjectLogo";
import { StatusDot, MockBadge } from "@/components/dash/primitives";
import { formatMetric, relativeTime } from "@/lib/format";
import { getProject } from "@/lib/projects";
import { PROJECT_IDS } from "@/lib/projects/registry";

export const revalidate = 300;

export function generateStaticParams() {
  return PROJECT_IDS.map((id) => ({ id }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="container-edge flex items-center justify-between py-5">
          <Link href="/dash" className="mono text-xs text-dim transition-colors hover:text-fg">
            ← all projects
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-xs text-dim transition-colors hover:text-fg"
          >
            {project.url.replace(/^https?:\/\//, "")} ↗
          </a>
        </div>
      </header>

      <main className="container-edge py-10">
        <div className="flex items-start gap-4">
          <ProjectLogo logo={project.logo} name={project.name} size={56} />
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-fg">{project.name}</h1>
              <StatusDot status={project.status} />
            </div>
            <p className="eyebrow mt-1">{project.category}</p>
          </div>
        </div>

        <p className="mt-6 max-w-xl leading-relaxed text-muted">{project.blurb}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.key} className="rounded-xl border border-line bg-surface p-6">
              <div className="mono text-3xl font-semibold text-fg">
                {formatMetric(m.value, m.format)}
              </div>
              <div className="eyebrow mt-2">
                {m.label}
                {m.private ? " · private" : ""}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          {project.source === "mock" && <MockBadge />}
          <span className="mono text-xs text-dim">
            updated {relativeTime(project.lastUpdate)} ago
          </span>
        </div>
      </main>
    </div>
  );
}
