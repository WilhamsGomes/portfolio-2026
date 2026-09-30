import { Container, SectionHeading, TagList } from "@/components/ui/primitives";
import { contributions, experiences } from "@/content/profile";

export function Experience() {
  return (
    <section
      aria-labelledby="experiencia-titulo"
      id="experiencia"
      className="border-t border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="experiencia-titulo"
          index={2}
          eyebrow="Experiência"
          title="Sistemas reais, em produção"
          description="Desde 2022 desenvolvo interfaces, APIs, integrações e consultas para plataformas de dados, CRMs e sistemas de gestão."
        />

        <h3 className="sr-only">Áreas de contribuição</h3>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {contributions.map((item) => (
            <li key={item.title} className="bg-surface p-6 sm:p-7">
              <h4 className="text-base font-semibold text-fg">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-20 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
          Trajetória
        </h3>
        <ol className="mt-6 grid gap-4">
          {experiences.map((experience) => (
            <li
              key={experience.company}
              className="grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12"
            >
              <div>
                <h4 className="text-xl font-semibold tracking-tight text-fg">
                  {experience.company}
                </h4>
                <ul className="mt-3 grid gap-3">
                  {experience.roles.map((role) => (
                    <li key={role.title}>
                      <p className="text-sm text-fg">{role.title}</p>
                      <p className="font-mono text-xs text-subtle">{role.period}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="leading-relaxed text-pretty text-muted">{experience.summary}</p>
                {experience.highlights.length > 0 ? (
                  <ul className="mt-5 grid gap-2.5">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-accent/70"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-6">
                  <TagList
                    items={experience.stack}
                    label={`Tecnologias usadas na ${experience.company}`}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
