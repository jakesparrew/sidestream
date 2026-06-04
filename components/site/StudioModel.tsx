"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { NodeOrbit } from "@/components/visuals/NodeOrbit";

export function StudioModel() {
  const { t } = useI18n();
  return (
    <section id="studio" className="border-b border-line">
      <div className="container-edge grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1fr_320px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow flex items-center gap-2">
            <span className="text-dim">05</span> {t.studio.eyebrow}
          </p>
          <p className="mt-8 text-[26px] font-medium leading-[1.25] tracking-[-0.02em] text-fg md:text-[34px]">
            {t.studio.quote}
          </p>
          <p className="mt-8 max-w-xl leading-relaxed text-muted">{t.studio.body}</p>
          <p className="mono mt-6 text-xs uppercase tracking-widest text-dim">— Sidestream</p>
        </Reveal>
        <Reveal delay={0.1} className="hidden justify-self-center lg:block">
          <NodeOrbit className="w-[300px]" />
        </Reveal>
      </div>
    </section>
  );
}
