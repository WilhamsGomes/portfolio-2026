import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { ProjectMedia } from "@/components/project/project-media";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon } from "@/components/ui/icons";
import { Container, StatusBadge } from "@/components/ui/primitives";
import { getProject, projectPath, projects } from "@/content/projects";
import { contactLinks } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { projectJsonLd } from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  return pageMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: projectPath(project.slug),
    openGraphType: "article",
  });
}

const sections = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "problema", label: "Problema e público" },
  { id: "atuacao", label: "Minha atuação" },
  { id: "funcionalidades", label: "Principais funcionalidades" },
  { id: "stack", label: "Stack" },
  { id: "desafios", label: "Desafios técnicos" },
  { id: "galeria", label: "Galeria" },
  { id: "status", label: "Status atual" },
  { id: "links", label: "Links relacionados" },
] as const;

type SectionId = (typeof sections)[number]["id"];

function CaseSection({ id, children }: { id: SectionId; children: ReactNode }) {
  const index = sections.findIndex((section) => section.id === id);
  const label = sections[index]?.label ?? id;

  return (
    <section aria-labelledby={`${id}-titulo`} id={id} className="border-t border-border pt-10">
      <h2 id={`${id}-titulo`} className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-fg">
        <span aria-hidden="true" className="font-mono text-sm font-normal text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        {label}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default async function ProjectPage(props: PageProps<"/projetos/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <>
      <JsonLd data={projectJsonLd(project)} />

      <article>
        <Container className="pt-10 sm:pt-14">
          <nav aria-label="Trilha de navegação">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-subtle">
              <li>
                <Link href="/" className="hover:text-fg">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#projetos" className="hover:text-fg">
                  Projetos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" className="text-muted">
                  {project.name}
                </span>
              </li>
            </ol>
          </nav>

          <header className="mt-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                Estudo de caso
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-muted sm:text-xl">
              {project.description}
            </p>
          </header>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            <div className="bg-surface p-5">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Tipo</dt>
              <dd className="mt-2 text-sm text-fg">{project.context}</dd>
            </div>
            <div className="bg-surface p-5">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Papel</dt>
              <dd className="mt-2 text-sm text-fg">{project.roleLabel}</dd>
            </div>
            <div className="bg-surface p-5">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Stack</dt>
              <dd className="mt-2 text-sm text-fg">{project.stack.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <ProjectMedia
              project={project}
              eager
              sizes="(min-width: 1152px) 1088px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            />
          </div>
        </Container>

        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <nav aria-label="Nesta página" className="sticky top-24">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">Nesta página</p>
              <ol className="mt-4 grid gap-1 border-l border-border">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="grid max-w-3xl gap-16">
            <CaseSection id="visao-geral">
              <Paragraphs items={caseStudy.overview} />
            </CaseSection>

            <CaseSection id="problema">
              <Paragraphs items={caseStudy.audience} />
            </CaseSection>

            <CaseSection id="atuacao">
              <Paragraphs items={caseStudy.role} />
            </CaseSection>

            <CaseSection id="funcionalidades">
              {caseStudy.featuresNote ? (
                <p className="mb-6 rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
                  {caseStudy.featuresNote}
                </p>
              ) : null}
              <ul className="grid gap-3 sm:grid-cols-2">
                {caseStudy.features.map((feature) => (
                  <li key={feature.title} className="rounded-xl border border-border bg-surface p-5">
                    <h3 className="font-medium text-fg">{feature.title}</h3>
                    {feature.description ? (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="stack">
              <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {caseStudy.stackGroups.map((group) => (
                  <div key={group.label} className="bg-surface p-5">
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                      {group.label}
                    </dt>
                    <dd className="mt-2 text-fg">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </CaseSection>

            <CaseSection id="desafios">
              <ol className="grid gap-6">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={challenge.title} className="grid gap-2 sm:grid-cols-[40px_minmax(0,1fr)]">
                    <span aria-hidden="true" className="font-mono text-sm text-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-fg">{challenge.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-muted">{challenge.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CaseSection>

            <CaseSection id="galeria">
              {caseStudy.gallery.length > 0 ? (
                <div className="grid gap-10">
                  {caseStudy.gallery.map((image) => (
                    <figure key={image.alt}>
                      <div className="overflow-hidden rounded-xl border border-border bg-surface-2">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          sizes="(min-width: 1152px) 768px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                          placeholder="blur"
                          className="h-auto w-full"
                        />
                      </div>
                      {image.caption ? (
                        <figcaption className="mt-3 text-sm text-subtle">{image.caption}</figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : (
                <p className="rounded-xl border border-dashed border-border-strong bg-surface px-5 py-6 text-muted">
                  {project.cover
                    ? `Por enquanto, a imagem no topo desta página é o registro disponível do ${project.name}.`
                    : `Ainda não há imagens públicas do ${project.name}. A galeria será atualizada quando houver telas para mostrar.`}
                </p>
              )}
            </CaseSection>

            <CaseSection id="status">
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center">
                <StatusBadge status={project.status} />
                <p className="leading-relaxed text-muted">{caseStudy.statusNote}</p>
              </div>
            </CaseSection>

            <CaseSection id="links">
              <ul className="grid gap-3">
                {project.url ? (
                  <li>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      Site do {project.name}
                      <ExternalIcon className="text-base text-subtle" />
                      <span className="sr-only">(abre em nova aba)</span>
                    </a>
                  </li>
                ) : null}
                {otherProjects.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={projectPath(other.slug)}
                      className="inline-flex min-h-11 items-center gap-2 text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      Estudo de caso: {other.name}
                      <ArrowRightIcon className="text-base text-subtle" />
                    </Link>
                  </li>
                ))}
                {contactLinks.email ? (
                  <li>
                    <a
                      href={`mailto:${contactLinks.email}`}
                      className="inline-flex min-h-11 items-center gap-2 text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      Conversar sobre este projeto por e-mail
                    </a>
                  </li>
                ) : null}
              </ul>
            </CaseSection>
          </div>
        </Container>
      </article>

      <Container className="pb-20">
        <Link
          href="/#projetos"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong px-5 text-sm text-fg transition-colors hover:bg-surface-2"
        >
          <ArrowLeftIcon className="text-base" />
          Voltar para os projetos
        </Link>
      </Container>
    </>
  );
}
