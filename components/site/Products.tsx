import { ProjectLogo } from "@/components/ProjectLogo";
import { formatMetric } from "@/lib/format";
import { publicHeadline, type ProjectData } from "@/lib/projects";

export function Products({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="products" className="border-b border-line">
      <div className="container-edge py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">The portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold text-fg md:text-4xl">
            Products we built — and still run.
          </h2>
          <p className="mt-4 text-muted">
            Ticketing, scheduling, civic apps, e-commerce, AI tools. Different
            markets, one operator. Each of these is live today.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const headline = publicHeadline(p);
            return (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-surface p-6 transition-colors hover:bg-surface-2"
              >
                <div className="flex items-start justify-between">
                  <ProjectLogo logo={p.logo} name={p.name} size={40} />
                  <span className="eyebrow">{p.category}</span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-fg">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>

                {headline && (
                  <div className="mt-5 flex items-baseline gap-2 border-t border-line pt-4">
                    <span className="mono text-xl font-semibold text-fg">
                      {formatMetric(headline.value, headline.format)}
                    </span>
                    <span className="text-xs text-dim">{headline.label.toLowerCase()}</span>
                    <span className="ml-auto text-xs text-dim transition-colors group-hover:text-fg">
                      visit ↗
                    </span>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
