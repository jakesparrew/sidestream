"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { CpuChip } from "@/components/visuals/CpuChip";
import { ShieldScan } from "@/components/visuals/ShieldScan";

export function ForClients() {
  const { t } = useI18n();
  return (
    <section id="for-you" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow flex items-center gap-2">
              <span className="text-dim">02</span> {t.forClients.eyebrow}
            </p>
            <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {t.forClients.heading}
            </h2>
            <p className="mt-4 text-muted">{t.forClients.sub}</p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-[300px]">
            <CpuChip className="h-auto w-full" />
          </Reveal>
        </div>

        <div className="mt-12 border-y border-line">
          {t.forClients.items.map((item, i) => (
            <Reveal key={item.situation} delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid items-baseline gap-2 border-b border-line py-5 last:border-0 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.4fr)] md:gap-8">
                <span className="mono text-sm text-dim">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-semibold text-fg">{item.situation}</h3>
                <p className="flex gap-2.5 text-muted">
                  <span className="mono text-dim">→</span>
                  {item.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured offering — cybersecurity & protection */}
        <Reveal delay={0.05} className="mt-4">
          <div className="grid items-center gap-8 overflow-hidden rounded-xl border border-line bg-surface p-7 md:grid-cols-[1fr_auto] md:gap-12 md:p-10">
            <div className="max-w-xl">
              <p className="eyebrow">{t.capabilities.security.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-fg md:text-3xl">
                {t.capabilities.security.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{t.capabilities.security.body}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {t.capabilities.security.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-fg">
                    <span className="mono mt-0.5 text-dim">↳</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto w-full max-w-[180px] md:max-w-[200px]">
              <ShieldScan className="h-auto w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
