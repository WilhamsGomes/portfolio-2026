import { Container, SectionHeading, TagList } from "@/components/ui/primitives";
import { otherTech, techGroups } from "@/content/profile";

export function TechStack() {
  return (
    <section
      aria-labelledby="tecnologias-titulo"
      id="tecnologias"
      className="border-t border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="tecnologias-titulo"
          index={4}
          eyebrow="Tecnologias"
          title="Stack e ferramentas"
          description="Organizadas por área. TypeScript, Node.js e React concentram a maior parte do meu trabalho atual."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
                <span aria-hidden="true" className="text-accent">
                  {"// "}
                </span>
                {group.label}
              </h3>
              <div className="mt-5">
                <TagList items={group.items} label={group.label} size="md" />
              </div>
            </div>
          ))}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              <span aria-hidden="true" className="text-accent">
                {"// "}
              </span>
              Também já utilizei
            </h3>
            <div className="mt-5">
              <TagList items={otherTech} label="Também já utilizei" size="md" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
