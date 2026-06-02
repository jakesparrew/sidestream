"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 120%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />
      <div className="container-edge relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2">
            <span className="text-dim">05</span> {t.contact.eyebrow}
          </p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            {t.contact.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@sidestream.be?subject=Project%20with%20Sidestream"
              className="rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {t.contact.cta}
            </a>
            <a
              href="mailto:hello@sidestream.be"
              className="mono text-sm text-muted transition-colors hover:text-fg"
            >
              hello@sidestream.be
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
