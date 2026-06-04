"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { CountUp } from "@/components/motion/CountUp";
import { Magnetic } from "@/components/motion/Magnetic";
import { AppAssembly } from "@/components/visuals/AppAssembly";

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

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section
      onMouseMove={onMove}
      className="hero-surface relative overflow-hidden border-b border-line"
    >
      <div className="hero-dots" />
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
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_400px]">
        <div>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <div className="mt-6 max-w-3xl overflow-hidden pb-[0.12em]">
          <motion.h1
            className="text-gradient text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[68px]"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.headline}
          </motion.h1>
        </div>

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
          <Magnetic>
            <a
              href="#contact"
              className="inline-block rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-ink"
            >
              {t.hero.ctaPrimary}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#products"
              className="inline-block rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-dim hover:bg-surface-2"
            >
              {t.hero.ctaSecondary}
            </a>
          </Magnetic>
        </motion.div>

        <motion.ul
          className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.hero.trust.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-fg">✓</span>
              {item}
            </li>
          ))}
        </motion.ul>
        </div>

        <div className="hidden lg:block">
          <AppAssembly />
        </div>
        </div>

        {/* Live aggregate ticker — designed mono ledger strip, real non-private metrics */}
        <motion.dl
          className="mt-16 grid grid-cols-2 divide-line border-y border-line sm:grid-cols-4 sm:divide-x"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`py-6 ${i === 0 ? "sm:pr-6" : "px-6"}`}>
              <dt className="eyebrow flex items-center gap-1.5">
                <span className="text-dim">0{i + 1}</span>
                {s.label}
              </dt>
              <dd className="mono mt-2 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                <CountUp value={s.value} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
