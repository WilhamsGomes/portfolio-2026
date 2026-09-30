"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { SocialIcon } from "@/components/layout/social-icon";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import type { NavItem } from "@/content/navigation";
import type { SocialLink } from "@/lib/contact";

type MobileMenuProps = {
  items: NavItem[];
  socialLinks: SocialLink[];
};

export function MobileMenu({ items, socialLinks }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-fg"
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        {open ? <CloseIcon className="text-xl" /> : <MenuIcon className="text-xl" />}
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-bg"
      >
        <nav aria-label="Menu móvel" className="mx-auto max-w-6xl px-5 pb-6 pt-2 sm:px-8">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href} className="border-b border-border/60 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center text-base text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border-strong px-4 text-sm text-muted"
              >
                <SocialIcon icon={link.icon} />
                {link.label}
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
