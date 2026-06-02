"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold md:text-4xl">
            {t.process.heading}
          </h2>
        </Reveal>

        <ol className="mt-12 divide-y divide-line overflow-hidden rounded-xl border border-line">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="grid gap-2 bg-surface p-6 transition-colors hover:bg-surface-2 md:grid-cols-[80px_240px_1fr] md:items-baseline md:gap-8 md:p-7">
                <span className="mono text-sm text-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-fg">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
