"use client";

import { motion } from "framer-motion";
import { ProjectLogo } from "@/components/ProjectLogo";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { formatMetric } from "@/lib/format";
import { metricLabel } from "@/lib/i18n";
import { publicHeadline, type ProjectData } from "@/lib/projects";

function spotlightMove(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function Products({ projects }: { projects: ProjectData[] }) {
  const { t, lang } = useI18n();

  return (
    <section id="products" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.products.eyebrow}</p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold md:text-4xl">
            {t.products.heading}
          </h2>
          <p className="mt-4 text-muted">{t.products.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const headline = publicHeadline(p);
            return (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={spotlightMove}
                className="spotlight group flex flex-col bg-surface p-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start justify-between">
                  <ProjectLogo logo={p.logo} name={p.name} size={40} />
                  <span className="eyebrow">{p.category[lang]}</span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-fg transition-colors group-hover:text-white">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.blurb[lang]}
                </p>

                {headline && (
                  <div className="mt-5 flex items-baseline gap-2 border-t border-line pt-4">
                    <span className="mono text-xl font-semibold text-fg">
                      {formatMetric(headline.value, headline.format)}
                    </span>
                    <span className="text-xs text-dim">
                      {metricLabel(headline.key, lang, headline.label).toLowerCase()}
                    </span>
                    <span className="ml-auto text-xs text-dim transition-all group-hover:translate-x-0.5 group-hover:text-fg">
                      {t.products.visit} ↗
                    </span>
                  </div>
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
