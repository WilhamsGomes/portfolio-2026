import Image from "next/image";

import { cx } from "@/components/ui/primitives";
import type { Project } from "@/content/projects";

type ProjectMediaProps = {
  project: Project;
  sizes: string;
  /** "card": encaixada no card, sem borda própria. "framed": moldura arredondada. */
  variant?: "card" | "framed";
  /** Use apenas quando a imagem estiver acima da dobra. */
  eager?: boolean;
};

/**
 * Capa do projeto. Sem imagem cadastrada, exibe um placeholder identificado
 * como tal — nunca um print fictício.
 */
export function ProjectMedia({ project, sizes, variant = "framed", eager = false }: ProjectMediaProps) {
  const frame =
    variant === "framed"
      ? "overflow-hidden rounded-xl border border-border"
      : "overflow-hidden border-b border-border";

  if (project.cover) {
    return (
      <div className={cx(frame, "bg-surface-2")}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          sizes={sizes}
          placeholder="blur"
          className="aspect-[16/10] h-auto w-full object-cover object-top"
          {...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
        />
      </div>
    );
  }

  return (
    <div
      data-placeholder="true"
      role="img"
      aria-label={`Imagens do ${project.name} ainda não disponíveis.`}
      className={cx(
        frame,
        "relative flex aspect-[16/10] w-full flex-col justify-between bg-surface-2 p-6 sm:p-8",
        variant === "framed" && "border-dashed border-border-strong",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <span className="relative font-mono text-xs uppercase tracking-[0.18em] text-subtle">
        Placeholder
      </span>
      <p className="relative max-w-xs text-lg leading-snug text-muted">
        Imagens do {project.name} em breve.
      </p>
    </div>
  );
}
