import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Products } from "@/components/site/Products";
import { Capabilities } from "@/components/site/Capabilities";
import { Process } from "@/components/site/Process";
import { StudioModel } from "@/components/site/StudioModel";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
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

  const metrics = {
    liveProducts: projects.filter((p) => p.status !== "down").length,
    usersServed: sumMetric(projects, ["users", "accounts"]),
    ticketsSold: sumMetric(projects, ["tickets_sold"]),
    visitors: sumMetric(projects, ["visitors"]),
  };

  return (
    <>
      <Nav />
      <main>
        <Hero metrics={metrics} />
        <Marquee projects={projects} />
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
