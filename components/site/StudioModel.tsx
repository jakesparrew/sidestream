"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function StudioModel() {
  const { t } = useI18n();
  return (
    <section id="studio" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.studio.eyebrow}</p>
          <p className="mt-6 text-2xl font-medium leading-snug text-fg md:text-3xl">
            {t.studio.quote}
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">{t.studio.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
