"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function ToolsTeaser() {
  const { t } = useI18n();
  return (
    <section className="border-b border-line">
      <div className="container-edge py-14 md:py-16">
        <Reveal>
          <Link
            href="/tools"
            className="group flex flex-col gap-5 rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-dim hover:bg-surface-2 md:flex-row md:items-center md:justify-between md:p-9"
          >
            <div className="max-w-xl">
              <p className="eyebrow">{t.tools.teaser.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-fg md:text-3xl">
                {t.tools.teaser.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{t.tools.teaser.body}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition-transform group-hover:-translate-y-0.5 md:self-auto">
              {t.tools.teaser.cta}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
