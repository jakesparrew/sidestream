import Link from "next/link";
import { ProjectLogo } from "@/components/ProjectLogo";
import { StatusDot, MockBadge } from "./primitives";
import { formatMetric, relativeTime } from "@/lib/format";
import type { ProjectData } from "@/lib/projects";

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Link
      href={`/dash/${project.id}`}
      className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-dim hover:bg-surface-2"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <ProjectLogo logo={project.logo} name={project.name} size={36} />
          <div>
            <div className="font-semibold text-fg">{project.name}</div>
            <div className="eyebrow mt-0.5">{project.category}</div>
          </div>
        </div>
        <StatusDot status={project.status} />
      </div>

      <dl className="mt-5 space-y-2">
        {project.metrics.map((m) => (
          <div key={m.key} className="flex items-baseline justify-between gap-3">
            <dt className="text-sm text-muted">{m.label}</dt>
            <dd className="mono text-sm font-semibold text-fg">
              {formatMetric(m.value, m.format)}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-3">
        {project.source === "mock" ? (
          <MockBadge />
        ) : (
          <span className="mono text-[10px] uppercase tracking-wider text-dim">
            {project.source}
          </span>
        )}
        <span className="mono text-xs text-dim">
          updated {relativeTime(project.lastUpdate)} ago
        </span>
      </div>
    </Link>
  );
}
