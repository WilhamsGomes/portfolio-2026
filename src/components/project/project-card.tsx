import Link from "next/link";

import { ProjectMedia } from "@/components/project/project-media";
import { ArrowRightIcon, ExternalIcon, GitBranchIcon } from "@/components/ui/icons";
import { cx } from "@/components/ui/primitives";
import { projectPath, statusLabel, type Project, type ProjectTone } from "@/content/projects";

const toneClasses: Record<ProjectTone, { text: string; dot: string; hoverBorder: string }> = {
  emerald: { text: "text-emerald-400", dot: "bg-emerald-400", hoverBorder: "hover:border-emerald-400/40" },
  amber: { text: "text-amber-300", dot: "bg-amber-300", hoverBorder: "hover:border-amber-300/40" },
  sky: { text: "text-sky-400", dot: "bg-sky-400", hoverBorder: "hover:border-sky-400/40" },
  rose: { text: "text-rose-300", dot: "bg-rose-300", hoverBorder: "hover:border-rose-300/40" },
  accent: { text: "text-accent", dot: "bg-accent", hoverBorder: "hover:border-accent/40" },
};

const VISIBLE_TAGS = 4;

function displayHost(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `projeto-${project.slug}`;
  const tone = toneClasses[project.tone];
  const visibleTags = project.stack.slice(0, VISIBLE_TAGS);
  const hiddenCount = project.stack.length - visibleTags.length;

  return (
    <article
      aria-labelledby={titleId}
      className={cx(
        "flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300",
        tone.hoverBorder,
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5 font-mono text-sm">
        <span className="inline-flex items-center gap-2.5 text-muted">
          <GitBranchIcon className={cx("text-base", tone.text)} />
          {project.techLabel}
        </span>
        <span className="text-subtle">{project.context}</span>
      </div>

      <ProjectMedia
        project={project}
        variant="card"
        sizes="(min-width: 1152px) 540px, (min-width: 1024px) calc(50vw - 56px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
      />

      <div className="flex flex-1 flex-col px-6 pb-7 pt-7 sm:px-8">
        <div className="flex items-start justify-between gap-4">
          <h3 id={titleId} className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {project.name}
          </h3>
          <span className="mt-2 inline-flex shrink-0 items-center gap-2 text-xs text-muted">
            <span aria-hidden="true" className={cx("size-2 rounded-full", tone.dot)} />
            {statusLabel[project.status]}
          </span>
        </div>
        <p className={cx("mt-3 text-base font-medium", tone.text)}>{project.tagline}</p>
        <p className="mt-3 leading-relaxed text-pretty text-muted">{project.description}</p>

        <dl className="mt-6 grid gap-4 border-t border-border pt-6 text-sm leading-relaxed">
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Problema</dt>
            <dd className="mt-1 text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
              Minha contribuição
            </dt>
            <dd className="mt-1 text-muted">{project.contribution}</dd>
          </div>
        </dl>

        <ul aria-label={`Tecnologias do ${project.name}`} className="mt-6 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
          {hiddenCount > 0 ? (
            <li className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-subtle">
              +{hiddenCount}
              <span className="sr-only">
                {" "}
                tecnologias: {project.stack.slice(VISIBLE_TAGS).join(", ")}
              </span>
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
          <Link
            href={projectPath(project.slug)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-white"
          >
            Explorar projeto<span className="sr-only">: {project.name}</span>
            <ArrowRightIcon className="text-base" />
          </Link>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border-strong px-5 text-sm text-fg transition-colors hover:bg-surface-2"
            >
              {displayHost(project.url)}
              <ExternalIcon className="text-base" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
