import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { statusLabel, type ProjectStatus } from "@/content/projects";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
  );
}

type SectionHeadingProps = {
  id: string;
  /** Número da seção, exibido como "01". */
  index?: number;
  eyebrow: string;
  title: string;
  description?: string;
};

/** Cabeçalho de seção: rótulo discreto, título H2 e descrição opcional. */
export function SectionHeading({ id, index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-2xl">
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}

/** Rótulo de seção no formato "01 —— PROJETOS". */
export function Eyebrow({ index, children }: { index?: number; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
      {index !== undefined ? (
        <>
          <span className="text-accent">{String(index).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-px w-10 bg-border-strong" />
        </>
      ) : null}
      {children}
    </p>
  );
}

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200";

const buttonVariants = {
  primary: "bg-accent text-accent-fg hover:bg-[#a9aeff]",
  secondary:
    "border border-border-strong bg-surface text-fg hover:border-subtle hover:bg-surface-2",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof buttonVariants;
};

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={cx(buttonBase, buttonVariants[variant], className)} {...props} />;
}


export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border-strong bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
      <span
        aria-hidden="true"
        className={cx(
          "size-1.5 rounded-full",
          status === "publicado" ? "bg-emerald-400" : "bg-amber-300",
        )}
      />
      {statusLabel[status]}
    </span>
  );
}

type TagListProps = {
  items: string[];
  label: string;
  size?: "sm" | "md";
};

export function TagList({ items, label, size = "sm" }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={cx(
            "rounded-md border border-border bg-surface-2 font-mono text-muted",
            size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm text-fg/90",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export { cx };
