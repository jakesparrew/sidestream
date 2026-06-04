"use client";

import { motion } from "framer-motion";

const SHIELD =
  "M100 14 L174 42 V108 C174 158 143 188 100 208 C57 188 26 158 26 108 V42 Z";

export function ShieldScan({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 222" className={className} role="img" aria-label="Security">
      <defs>
        <clipPath id="shield-clip">
          <path d={SHIELD} />
        </clipPath>
        <linearGradient id="scan-band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faint inner fill + dot grid, clipped to the shield */}
      <g clipPath="url(#shield-clip)">
        <rect x="0" y="0" width="200" height="222" fill="#fff" fillOpacity="0.02" />
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={36 + c * 22} cy={34 + r * 24} r={1} fill="#fff" fillOpacity="0.12" />
          )),
        )}
        {/* scanning band */}
        <motion.rect
          x="0"
          width="200"
          height="46"
          fill="url(#scan-band)"
          initial={{ y: -10 }}
          animate={{ y: [-10, 200, -10] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>

      {/* shield outline draws on */}
      <motion.path
        d={SHIELD}
        fill="none"
        stroke="#fff"
        strokeOpacity={0.55}
        strokeWidth={1.5}
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.28))" }}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* verification check draws on */}
      <motion.path
        d="M74 110 L93 131 L130 84"
        fill="none"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
