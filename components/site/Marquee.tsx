"use client";

import { ProjectLogo } from "@/components/ProjectLogo";
import { useI18n } from "@/components/i18n/LanguageProvider";
import type { ProjectData } from "@/lib/projects";

export function Marquee({ projects }: { projects: ProjectData[] }) {
  const { t } = useI18n();
  const row = [...projects, ...projects]; // duplicate for seamless loop

  return (
    <section className="border-b border-line py-10">
      <div className="container-edge">
        <p className="eyebrow text-center">{t.marquee}</p>
      </div>
      <div className="marquee-mask mt-6 overflow-hidden">
        <div className="animate-marquee flex w-max gap-10 pr-10">
          {row.map((p, i) => (
            <div key={`${p.id}-${i}`} className="flex shrink-0 items-center gap-3 opacity-70">
              <ProjectLogo logo={p.logo} name={p.name} size={28} />
              <span className="mono whitespace-nowrap text-sm text-muted">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
