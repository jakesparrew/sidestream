"use client";

import { motion } from "framer-motion";
import { ProjectLogo } from "@/components/ProjectLogo";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { formatMetric } from "@/lib/format";
import { metricLabel } from "@/lib/i18n";
import { publicHeadline, type ProjectData } from "@/lib/projects";

export function Products({ projects }: { projects: ProjectData[] }) {
  const { t, lang } = useI18n();

  return (
    <section id="products" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2">
            <span className="text-dim">01</span> {t.products.eyebrow}
          </p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            {t.products.heading}
          </h2>
          <p className="mt-4 text-muted">{t.products.sub}</p>
        </Reveal>

        {/* Editorial index — metadata rows, not a card grid */}
        <div className="mt-12 divide-y divide-line border-y border-line">
          {projects.map((p, i) => {
            const headline = publicHeadline(p);
            return (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.2), ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-[1.75rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-[3rem_minmax(0,2.2fr)_minmax(0,1fr)_auto_1.25rem] md:gap-6"
              >
                <span className="mono text-xs text-dim transition-colors group-hover:text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex min-w-0 items-center gap-3">
                  <ProjectLogo logo={p.logo} name={p.name} size={32} />
                  <div className="min-w-0">
                    <div className="font-semibold text-fg transition-colors group-hover:text-white">
                      {p.name}
                    </div>
                    <div className="truncate text-sm text-muted">{p.blurb[lang]}</div>
                  </div>
                </div>

                <span className="mono hidden text-xs uppercase tracking-wider text-dim md:block">
                  {p.category[lang]}
                </span>

                {headline && (
                  <div className="whitespace-nowrap text-right">
                    <span className="mono text-base font-semibold text-fg">
                      {formatMetric(headline.value, headline.format)}
                    </span>{" "}
                    <span className="text-xs text-dim">
                      {metricLabel(headline.key, lang, headline.label).toLowerCase()}
                    </span>
                  </div>
                )}

                <span className="mono hidden text-dim transition-all group-hover:translate-x-1 group-hover:text-fg md:block">
                  →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
