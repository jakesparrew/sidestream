"use client";

import { motion } from "framer-motion";

const C = 180; // center
const HALF = 52; // chip half-size
const OUT = 150; // trace reach from center along axis

type Trace = { d: string; bead?: { from: [number, number]; to: [number, number] }; delay: number };

// Build straight traces fanning out from each chip edge to contact pads.
function buildTraces(): Trace[] {
  const offsets = [-34, 0, 34];
  const traces: Trace[] = [];
  offsets.forEach((o, i) => {
    // top
    traces.push({ d: `M ${C + o} ${C - HALF} L ${C + o} ${C - OUT}`, bead: i !== 1 ? { from: [C + o, C - OUT], to: [C + o, C - HALF] } : undefined, delay: i * 0.12 });
    // bottom
    traces.push({ d: `M ${C + o} ${C + HALF} L ${C + o} ${C + OUT}`, bead: i === 1 ? { from: [C + o, C + OUT], to: [C + o, C + HALF] } : undefined, delay: 0.1 + i * 0.12 });
    // left
    traces.push({ d: `M ${C - HALF} ${C + o} L ${C - OUT} ${C + o}`, bead: i === 0 ? { from: [C - OUT, C + o], to: [C - HALF, C + o] } : undefined, delay: 0.06 + i * 0.12 });
    // right
    traces.push({ d: `M ${C + HALF} ${C + o} L ${C + OUT} ${C + o}`, bead: i === 2 ? { from: [C + OUT, C + o], to: [C + HALF, C + o] } : undefined, delay: 0.14 + i * 0.12 });
  });
  return traces;
}

const TRACES = buildTraces();

// pad positions (trace endpoints)
const PADS = TRACES.map((t) => {
  const m = t.d.match(/L ([\d.]+) ([\d.]+)/);
  return m ? { x: +m[1], y: +m[2] } : { x: 0, y: 0 };
});

export function CpuChip({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={className} role="img" aria-label="Compute">
      {/* traces draw on */}
      {TRACES.map((t, i) => (
        <motion.path
          key={i}
          d={t.d}
          stroke="var(--color-line)"
          strokeWidth={1}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: t.delay, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* contact pads */}
      {PADS.map((p, i) => (
        <motion.rect
          key={i}
          x={p.x - 3}
          y={p.y - 3}
          width={6}
          height={6}
          rx={1}
          fill="var(--color-surface-2)"
          stroke="var(--color-line)"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + (i % 6) * 0.05 }}
        />
      ))}

      {/* signal beads travelling inward */}
      {TRACES.filter((t) => t.bead).map((t, i) => (
        <motion.circle
          key={`b${i}`}
          r={2.4}
          fill="#fff"
          style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.9))" }}
          initial={{ cx: t.bead!.from[0], cy: t.bead!.from[1], opacity: 0 }}
          animate={{
            cx: [t.bead!.from[0], t.bead!.to[0]],
            cy: [t.bead!.from[1], t.bead!.to[1]],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 1.8, delay: 1 + i * 0.5, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
        />
      ))}

      {/* chip body */}
      <motion.rect
        x={C - HALF}
        y={C - HALF}
        width={HALF * 2}
        height={HALF * 2}
        rx={10}
        fill="var(--color-surface)"
        stroke="var(--color-line)"
        strokeWidth={1.5}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: "center" }}
      />

      {/* glowing core */}
      <g className="core-pulse" style={{ transformOrigin: `${C}px ${C}px` }}>
        <rect
          x={C - 22}
          y={C - 22}
          width={44}
          height={44}
          rx={6}
          fill="#fff"
          fillOpacity={0.06}
          stroke="#fff"
          strokeOpacity={0.5}
          strokeWidth={1}
          style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.45))" }}
        />
        {/* die grid */}
        {[-10, 0, 10].map((dx) =>
          [-10, 0, 10].map((dy) => (
            <circle key={`${dx}-${dy}`} cx={C + dx} cy={C + dy} r={1.4} fill="#fff" fillOpacity={0.55} />
          )),
        )}
      </g>
    </svg>
  );
}
