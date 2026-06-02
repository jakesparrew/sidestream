import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Capabilities } from "@/components/site/Capabilities";
import { Process } from "@/components/site/Process";
import { StudioModel } from "@/components/site/StudioModel";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { compact } from "@/lib/format";
import { getAllProjects } from "@/lib/projects";

export const revalidate = 300;

function sumMetric(projects: Awaited<ReturnType<typeof getAllProjects>>, keys: string[]) {
  return projects.reduce((acc, p) => {
    for (const k of keys) {
      const m = p.metrics.find((mm) => mm.key === k && !mm.private);
      if (m && typeof m.value === "number") acc += m.value;
    }
    return acc;
  }, 0);
}

export default async function Home() {
  const projects = await getAllProjects();

  const stats = [
    { label: "Live products", value: String(projects.filter((p) => p.status !== "down").length) },
    { label: "Users served", value: compact(sumMetric(projects, ["users", "accounts"])) },
    { label: "Tickets sold", value: compact(sumMetric(projects, ["tickets_sold"])) },
    { label: "Monthly visitors", value: compact(sumMetric(projects, ["visitors"])) },
  ];

  return (
    <>
      <Nav />
      <main>
        <Hero stats={stats} />
        <Products projects={projects} />
        <Capabilities />
        <Process />
        <StudioModel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
