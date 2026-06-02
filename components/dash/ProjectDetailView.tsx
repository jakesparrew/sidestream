"use client";

import Link from "next/link";
import { ProjectLogo } from "@/components/ProjectLogo";
import { StatusDot, MockBadge } from "./primitives";
import { Delta } from "./Delta";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { formatMetric, relativeTime } from "@/lib/format";
import { metricLabel } from "@/lib/i18n";
import type { ProjectData } from "@/lib/projects";

export function ProjectDetailView({ project }: { project: ProjectData }) {
  const { t, lang } = useI18n();
  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="container-edge flex items-center justify-between py-5">
          <Link href="/dash" className="mono text-xs text-dim transition-colors hover:text-fg">
            {t.dash.allProjects}
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
            <p className="eyebrow mt-1">{project.category[lang]}</p>
          </div>
        </div>

        <p className="mt-6 max-w-xl leading-relaxed text-muted">{project.blurb[lang]}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.key} className="rounded-xl border border-line bg-surface p-6">
              <div className="flex items-baseline gap-3">
                <span className="mono text-3xl font-semibold text-fg">
                  {formatMetric(m.value, m.format)}
                </span>
                {typeof m.value === "number" && (
                  <Delta value={m.value} prev={m.prevValue} size="md" />
                )}
              </div>
              <div className="eyebrow mt-2">
                {metricLabel(m.key, lang, m.label)}
                {m.key === "mrr" ? " /mo" : ""}
                {m.private ? ` · ${t.dash.private}` : ""}
              </div>
              {typeof m.value === "number" && m.prevValue !== undefined && (
                <div className="mt-1 text-xs text-dim">{t.dash.vsLastWeek}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          {project.source === "mock" && <MockBadge />}
          <span className="mono text-xs text-dim">
            {t.dash.updated} {relativeTime(project.lastUpdate)} {t.dash.ago}
          </span>
        </div>
      </main>
    </div>
  );
}
