import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Products } from "@/components/site/Products";
import { ForClients } from "@/components/site/ForClients";
import { ToolsTeaser } from "@/components/site/ToolsTeaser";
import { Process } from "@/components/site/Process";
import { StudioModel } from "@/components/site/StudioModel";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
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
  const allProjects = await getAllProjects();
  // Public showcase: only active products (no inactive/down).
  const projects = allProjects.filter(
    (p) => p.status !== "down" && p.status !== "inactive",
  );

  const metrics = {
    liveProducts: projects.length,
    usersServed: sumMetric(projects, ["users", "accounts"]),
    ticketsSold: sumMetric(projects, ["tickets_sold"]),
    visitors: sumMetric(projects, ["visitors"]),
  };

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero metrics={metrics} />
        <Marquee projects={projects} />
        <Products projects={projects} />
        <ForClients />
        <ToolsTeaser />
        <Process />
        <StudioModel />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
