"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectLogo } from "@/components/ProjectLogo";
import { StatusDot, MockBadge } from "./primitives";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { formatMetric, relativeTime } from "@/lib/format";
import { metricLabel } from "@/lib/i18n";
import type { ProjectData } from "@/lib/projects";

export function ProjectCard({ project, index = 0 }: { project: ProjectData; index?: number }) {
  const { t, lang } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/dash/${project.id}`}
        className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-dim hover:bg-surface-2"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <ProjectLogo logo={project.logo} name={project.name} size={36} />
            <div>
              <div className="font-semibold text-fg">{project.name}</div>
              <div className="eyebrow mt-0.5">{project.category[lang]}</div>
            </div>
          </div>
          <StatusDot status={project.status} />
        </div>

        <dl className="mt-5 space-y-2">
          {project.metrics.map((m) => (
            <div key={m.key} className="flex items-baseline justify-between gap-3">
              <dt className="text-sm text-muted">{metricLabel(m.key, lang, m.label)}</dt>
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
            {t.dash.updated} {relativeTime(project.lastUpdate)} {t.dash.ago}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
