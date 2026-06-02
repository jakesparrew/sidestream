"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { CountUp } from "@/components/motion/CountUp";

export type HeroMetrics = {
  liveProducts: number;
  usersServed: number;
  ticketsSold: number;
  visitors: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ metrics }: { metrics: HeroMetrics }) {
  const { t } = useI18n();
  const stats = [
    { label: t.hero.stats.liveProducts, value: metrics.liveProducts },
    { label: t.hero.stats.usersServed, value: metrics.usersServed },
    { label: t.hero.stats.ticketsSold, value: metrics.ticketsSold },
    { label: t.hero.stats.visitors, value: metrics.visitors },
  ];

  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* monochrome aurora + glow + grain */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="aurora-1 absolute -top-1/3 left-1/4 h-[120%] w-[55%] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.09), transparent 60%)" }}
        />
        <div
          className="aurora-2 absolute -top-1/4 right-1/5 h-[110%] w-[45%] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 60%)" }}
        />
      </div>
      <div className="grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="container-edge relative py-28 md:py-36">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="text-gradient mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] md:text-[64px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease }}
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease }}
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease }}
        >
          <a
            href="#contact"
            className="rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#products"
            className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-dim hover:bg-surface-2"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mono text-2xl font-semibold text-fg md:text-3xl">
                <CountUp value={s.value} />
              </div>
              <div className="eyebrow mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
