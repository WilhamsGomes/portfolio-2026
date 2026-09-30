"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cx } from "@/components/ui/primitives";
import type { NavItem } from "@/content/navigation";

function sectionId(href: string) {
  return href.split("#")[1] ?? "";
}

/** Destaca o link da seção visível na home. Sem JavaScript, os links funcionam normalmente. */
function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    function update() {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(ids[ids.length - 1] ?? null);
        return;
      }

      // Seção ativa: a última cujo topo já passou de 35% da altura da janela.
      const threshold = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, enabled]);

  return enabled ? active : null;
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [ids] = useState(() => items.map((item) => sectionId(item.href)));
  const active = useActiveSection(ids, pathname === "/");

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const isActive = active === sectionId(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={cx(
                "rounded-md px-3 py-2 text-sm transition-colors",
                isActive ? "bg-accent-soft text-accent" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
