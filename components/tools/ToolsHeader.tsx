"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";

export function ToolsHeader() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% -10%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />
      <div className="container-edge relative py-20 md:py-24">
        <p className="eyebrow">{t.tools.eyebrow}</p>
        <h1 className="text-gradient mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          {t.tools.heading}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.tools.sub}</p>
      </div>
    </section>
  );
}
