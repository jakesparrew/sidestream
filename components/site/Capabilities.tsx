"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function Capabilities() {
  const { t } = useI18n();
  return (
    <section id="capabilities" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.capabilities.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-fg md:text-4xl">
            {t.capabilities.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          {t.capabilities.items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <div className="h-full bg-surface p-7 transition-colors hover:bg-surface-2 md:p-8">
                <span className="mono text-sm text-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-fg">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
