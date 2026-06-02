const CAPABILITIES = [
  {
    n: "01",
    title: "Full products, end to end",
    body: "Not a feature, the whole thing — auth, payments, dashboards, infra, the boring 80%. We've shipped ticketing, scheduling and e-commerce platforms that handle real money.",
  },
  {
    n: "02",
    title: "AI agents & automation",
    body: "Context-aware agents that handle operations, support and multi-step work. We build the pipeline, wire it to your tools, and keep a human in the loop where it matters.",
  },
  {
    n: "03",
    title: "Support & ops bots",
    body: "Brand-matched chatbots with automated knowledge routing. Tested in production, not in a demo — one of ours runs at 95% answer accuracy on live tickets.",
  },
  {
    n: "04",
    title: "Consulting that ends in shipped code",
    body: "We'll map your bottlenecks and prioritise the high-impact ones. But the deliverable is working software, not a slide deck and an invoice.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-3xl font-semibold text-fg md:text-4xl">
            We build the software other people only spec.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <div key={c.n} className="bg-surface p-7 md:p-8">
              <span className="mono text-sm text-dim">{c.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-fg">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
