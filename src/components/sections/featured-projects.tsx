import { ProjectCard } from "@/components/project/project-card";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section aria-labelledby="projetos-titulo" id="projetos" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="projetos-titulo"
          index={1}
          eyebrow="Projetos"
          title="Produtos, decisões e entregas"
          description="Produtos próprios e projetos para clientes, da coleta de dados à interface. Explore o problema, a atuação e os desafios de cada um."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
