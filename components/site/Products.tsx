"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ProjectLogo } from "@/components/ProjectLogo";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { formatMetric } from "@/lib/format";
import { metricLabel } from "@/lib/i18n";
import { publicHeadline, type ProjectData } from "@/lib/projects";

export function Products({ projects }: { projects: ProjectData[] }) {
  const { t, lang } = useI18n();
  const [hovered, setHovered] = useState<ProjectData | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 350, damping: 30, mass: 0.5 });
  const y = useSpring(my, { stiffness: 350, damping: 30, mass: 0.5 });

  function onMove(e: React.MouseEvent) {
    mx.set(e.clientX);
    my.set(e.clientY);
  }

  const hoveredHeadline = hovered ? publicHeadline(hovered) : null;

  return (
    <section id="products" className="border-b border-line">
      {/* Floating cursor preview (desktop) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        style={{ x, y }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.id}
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-60 -translate-y-1/2 translate-x-8 overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/50"
            >
              <div className="flex h-28 items-center justify-center bg-surface-2">
                <ProjectLogo logo={hovered.logo} name={hovered.name} size={56} />
              </div>
              <div className="border-t border-line p-4">
                <div className="font-semibold text-fg">{hovered.name}</div>
                <div className="eyebrow mt-1">{hovered.category[lang]}</div>
                {hoveredHeadline && (
                  <div className="mono mt-3 text-lg font-semibold text-fg">
                    {formatMetric(hoveredHeadline.value, hoveredHeadline.format)}{" "}
                    <span className="text-xs font-normal text-dim">
                      {metricLabel(hoveredHeadline.key, lang, hoveredHeadline.label).toLowerCase()}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

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
        <Reveal className="mt-12 border-y border-line" y={10}>
          <div onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          {projects.map((p) => {
            const i = projects.indexOf(p);
            const headline = publicHeadline(p);
            return (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(p)}
                className="group grid grid-cols-[1.75rem_1fr_auto] items-center gap-4 border-b border-line py-5 transition-opacity duration-300 last:border-0 md:grid-cols-[3rem_minmax(0,2.2fr)_minmax(0,1fr)_auto_1.25rem] md:gap-6"
                style={{ opacity: hovered && hovered.id !== p.id ? 0.4 : 1 }}
              >
                <span className="mono text-xs text-dim transition-colors group-hover:text-fg">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex min-w-0 items-center gap-3">
                  <ProjectLogo logo={p.logo} name={p.name} size={32} />
                  <div className="min-w-0">
                    <div className="font-semibold text-fg transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
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
              </a>
            );
          })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
