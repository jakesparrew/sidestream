"use client";

type Node = { radius: number; angle: number; duration: number; size: number };

const NODES: Node[] = [
  { radius: 70, angle: 0, duration: 16, size: 8 },
  { radius: 70, angle: 140, duration: 16, size: 6 },
  { radius: 70, angle: 250, duration: 16, size: 7 },
  { radius: 118, angle: 40, duration: 26, size: 7 },
  { radius: 118, angle: 175, duration: 26, size: 9 },
  { radius: 118, angle: 300, duration: 26, size: 5 },
];

export function NodeOrbit({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className ?? ""}`} aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* rings */}
        <div className="absolute h-[140px] w-[140px] rounded-full border border-line" />
        <div
          className="absolute h-[236px] w-[236px] rounded-full border border-line"
          style={{ borderStyle: "dashed" }}
        />

        {/* glowing core */}
        <div
          className="core-pulse absolute flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/5"
          style={{ filter: "drop-shadow(0 0 14px rgba(255,255,255,0.4))" }}
        >
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>

        {/* orbiting nodes */}
        {NODES.map((n, i) => (
          <div
            key={i}
            className="orbit-node rounded-full bg-fg"
            style={
              {
                width: n.size,
                height: n.size,
                marginTop: -n.size / 2,
                marginLeft: -n.size / 2,
                "--radius": n.radius,
                "--angle": n.angle,
                "--duration": n.duration,
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
