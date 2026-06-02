const STEPS = [
  { n: "01", title: "Find the bottleneck", body: "We map where time and money actually leak, and pick the few fixes worth building first." },
  { n: "02", title: "Architect the workflow", body: "A concrete plan: data flow, integrations, where AI helps and where it shouldn't." },
  { n: "03", title: "Design, build, test", body: "We ship a working system against your real data — and break it before your users do." },
  { n: "04", title: "Approve the plan", body: "You sign off on the implementation before we scale it. No surprises, no scope drift." },
  { n: "05", title: "Deploy & operate", body: "We launch, monitor, refine, and keep it running. Because usually, we're running it too." },
];

export function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-3xl font-semibold text-fg md:text-4xl">
            From idea to a thing that runs in production.
          </h2>
        </div>

        <ol className="mt-12 divide-y divide-line overflow-hidden rounded-xl border border-line">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="grid gap-2 bg-surface p-6 md:grid-cols-[80px_240px_1fr] md:items-baseline md:gap-8 md:p-7"
            >
              <span className="mono text-sm text-dim">{s.n}</span>
              <h3 className="text-lg font-semibold text-fg">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
