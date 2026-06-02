type Stat = { label: string; value: string };

export function Hero({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative py-24 md:py-32">
        <p className="eyebrow">Sidestream · Venture Studio</p>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-fg md:text-6xl">
          An engineering studio that ships and operates real products.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          We don&apos;t hand you a deck. We build software, then run it — live
          products with real users, paying customers, and uptime to defend.
          That&apos;s the portfolio below.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Book an intro call
          </a>
          <a
            href="#products"
            className="rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-dim hover:bg-surface-2"
          >
            See what we&apos;ve shipped
          </a>
        </div>

        {/* Live aggregate ticker — real, non-private metrics only */}
        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mono text-2xl font-semibold text-fg md:text-3xl">
                {s.value}
              </div>
              <div className="eyebrow mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
