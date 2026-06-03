"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { CpuChip } from "@/components/visuals/CpuChip";

export function Capabilities() {
  const { t } = useI18n();
  return (
    <section id="capabilities" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow flex items-center gap-2">
              <span className="text-dim">02</span> {t.capabilities.eyebrow}
            </p>
            <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {t.capabilities.heading}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              {t.capabilities.lead}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-[340px]">
            <CpuChip className="h-auto w-full" />
          </Reveal>
        </div>

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
