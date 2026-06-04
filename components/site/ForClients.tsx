"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function ForClients() {
  const { t } = useI18n();
  return (
    <section id="for-you" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2">
            <span className="text-dim">02</span> {t.forClients.eyebrow}
          </p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            {t.forClients.heading}
          </h2>
          <p className="mt-4 text-muted">{t.forClients.sub}</p>
        </Reveal>

        <div className="mt-12 border-y border-line">
          {t.forClients.items.map((item, i) => (
            <Reveal key={item.situation} delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid gap-3 border-b border-line py-7 last:border-0 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.5fr)] md:gap-8">
                <span className="mono text-sm text-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-fg">{item.situation}</h3>
                <p className="flex gap-2.5 leading-relaxed text-muted">
                  <span className="mono mt-0.5 shrink-0 text-dim">→</span>
                  {item.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
