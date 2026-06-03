"use client";

import { motion } from "framer-motion";

const W = 760;
const Y = 70;
const NODES = [70, 300, 530, 690].map((x) => x); // x positions
const X0 = NODES[0];
const X1 = NODES[NODES.length - 1];

export function PipelineFlow({ className }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${W} 140`} className={className} role="img" aria-label="Pipeline">
      <defs>
        <motion.linearGradient
          id="flow"
          gradientUnits="userSpaceOnUse"
          x1={X0}
          y1={Y}
          x2={X0 + 140}
          y2={Y}
          initial={{ x1: X0 - 140, x2: X0 }}
          animate={{ x1: [X0 - 140, X1], x2: [X0, X1 + 140] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </motion.linearGradient>
      </defs>

      {/* base rail */}
      <line x1={X0} y1={Y} x2={X1} y2={Y} stroke="var(--color-line)" strokeWidth={1.5} />
      {/* draw-on + flowing pulse rail */}
      <motion.line
        x1={X0}
        y1={Y}
        x2={X1}
        y2={Y}
        stroke="url(#flow)"
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* nodes */}
      {NODES.map((x, i) => (
        <g key={i}>
          <motion.circle
            cx={x}
            cy={Y}
            r={16}
            fill="var(--color-surface)"
            stroke="var(--color-line)"
            strokeWidth={1.5}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
            style={{ transformOrigin: `${x}px ${Y}px` }}
          />
          <motion.circle
            cx={x}
            cy={Y}
            r={3.5}
            fill="#fff"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.12 }}
          />
          <text
            x={x}
            y={Y + 42}
            textAnchor="middle"
            className="mono"
            fontSize="11"
            fill="var(--color-dim)"
          >
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}

      {/* travelling bead */}
      <motion.circle
        r={3.2}
        cy={Y}
        fill="#fff"
        style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.9))" }}
        initial={{ cx: X0, opacity: 0 }}
        animate={{ cx: [X0, X1], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
