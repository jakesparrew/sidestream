"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const block: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const bar = "rounded bg-line";

/** A product dashboard that assembles itself block-by-block — "app creation". */
export function AppAssembly({ className }: { className?: string }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40 ${className ?? ""}`}
    >
      {/* window chrome */}
      <motion.div
        variants={block}
        className="flex items-center gap-2 border-b border-line bg-surface-2 px-3.5 py-2.5"
      >
        <span className="h-2.5 w-2.5 rounded-full border border-line" />
        <span className="h-2.5 w-2.5 rounded-full border border-line" />
        <span className="h-2.5 w-2.5 rounded-full border border-line" />
        <span className="mono ml-3 rounded bg-surface px-2 py-0.5 text-[9px] text-dim">
          app.sidestream.be
        </span>
      </motion.div>

      <div className="flex">
        {/* sidebar */}
        <motion.div
          variants={block}
          className="hidden w-1/4 shrink-0 space-y-2.5 border-r border-line p-3 sm:block"
        >
          <div className="mb-3 h-5 w-5 rounded bg-fg/80" />
          <div className={`h-2 w-full ${bar}`} />
          <div className={`h-2 w-4/5 ${bar}`} />
          <div className={`h-2 w-full ${bar}`} />
          <div className={`h-2 w-3/5 ${bar}`} />
        </motion.div>

        {/* main */}
        <div className="min-w-0 flex-1 space-y-3 p-3.5">
          {/* header */}
          <motion.div variants={block} className="flex items-center justify-between">
            <div className="h-3 w-24 rounded bg-fg/30" />
            <div className="h-5 w-14 rounded bg-fg/80" />
          </motion.div>

          {/* stat tiles */}
          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <motion.div key={i} variants={block} className="rounded-lg border border-line p-2.5">
                <div className="h-3.5 w-10 rounded bg-fg/70" />
                <div className={`mt-1.5 h-1.5 w-8 ${bar}`} />
              </motion.div>
            ))}
          </div>

          {/* chart */}
          <motion.div variants={block} className="rounded-lg border border-line p-3">
            <svg viewBox="0 0 200 56" className="h-14 w-full">
              <defs>
                <linearGradient id="aa-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 44 L28 36 L56 40 L84 24 L112 28 L140 14 L168 18 L200 6"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M0 44 L28 36 L56 40 L84 24 L112 28 L140 14 L168 18 L200 6 L200 56 L0 56 Z"
                fill="url(#aa-area)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
              />
            </svg>
          </motion.div>

          {/* rows */}
          {[0, 1].map((i) => (
            <motion.div key={i} variants={block} className="flex items-center gap-2.5">
              <div className="h-5 w-5 shrink-0 rounded bg-line" />
              <div className={`h-2 flex-1 ${bar}`} />
              <div className="h-2 w-10 rounded bg-fg/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
