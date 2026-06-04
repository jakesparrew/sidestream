"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function Faq() {
  const { t } = useI18n();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section id="faq" className="border-b border-line">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="container-edge py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-2">
            <span className="text-dim">06</span> {t.faq.eyebrow}
          </p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            {t.faq.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          {t.faq.items.map((it, i) => (
            <Reveal key={it.q} delay={(i % 2) * 0.06}>
              <div className="h-full bg-surface p-7 md:p-8">
                <h3 className="text-base font-semibold text-fg">{it.q}</h3>
                <p className="mt-3 leading-relaxed text-muted">{it.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
