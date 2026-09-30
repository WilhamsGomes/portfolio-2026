import { getProject, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `Estudo de caso de projeto desenvolvido por ${siteConfig.name}`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return renderOgImage({
    eyebrow: `Estudo de caso · ${siteConfig.name}`,
    title: project?.name ?? siteConfig.name,
    description: project?.description ?? siteConfig.description,
  });
}
