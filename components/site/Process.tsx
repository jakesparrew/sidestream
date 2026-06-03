"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { PipelineFlow } from "@/components/visuals/PipelineFlow";

export function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2">
            <span className="text-dim">03</span> {t.process.eyebrow}
          </p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            {t.process.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <PipelineFlow className="h-auto w-full max-w-3xl" />
        </Reveal>

        <ol className="mt-8 divide-y divide-line border-y border-line">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="grid gap-2 py-7 transition-colors md:grid-cols-[88px_260px_1fr] md:items-baseline md:gap-8">
                <span className="mono text-3xl font-medium text-dim md:text-4xl">
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
