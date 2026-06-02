import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetailView } from "@/components/dash/ProjectDetailView";
import { getProject } from "@/lib/projects";
import { PROJECT_IDS } from "@/lib/projects/registry";

export const revalidate = 300;

export function generateStaticParams() {
  return PROJECT_IDS.map((id) => ({ id }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();
  return <ProjectDetailView project={project} />;
}
