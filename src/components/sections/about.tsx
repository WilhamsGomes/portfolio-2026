import { Container, SectionHeading } from "@/components/ui/primitives";
import { about, education } from "@/content/profile";

export function About() {
  return (
    <section aria-labelledby="sobre-titulo" id="sobre" className="border-t border-border py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <SectionHeading id="sobre-titulo" index={3} eyebrow="Sobre" title="Da regra de negócio à produção" />
          <div className="mt-8 grid max-w-2xl gap-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:pt-24">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">Formação</h3>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {education.map((item) => (
              <li key={item.course} className="bg-surface p-5">
                <p className="font-medium text-fg">{item.course}</p>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="mt-2 font-mono text-xs text-subtle">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
