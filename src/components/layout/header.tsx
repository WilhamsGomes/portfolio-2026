import Link from "next/link";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { SocialIcon } from "@/components/layout/social-icon";
import { DownloadIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/primitives";
import { navItems } from "@/content/navigation";
import { contactLinks, resumeFileName, siteConfig } from "@/content/site";
import { getSocialLinks } from "@/lib/contact";

export function Header() {
  const resume = contactLinks.resume;
  const socialLinks = getSocialLinks();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="-mx-1 rounded px-1 py-2 font-mono text-[15px] font-semibold tracking-tight text-fg"
        >
          {siteConfig.name}
          <span aria-hidden="true" className="ml-0.5 text-accent">
            _
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <DesktopNav items={navItems} />
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border-strong text-muted transition-colors hover:border-subtle hover:text-fg"
            >
              <SocialIcon icon={link.icon} />
              <span className="sr-only">{link.label} (abre em nova aba)</span>
            </a>
          ))}
          {resume ? (
            <a
              href={resume}
              download={resumeFileName}
              className="ml-1 inline-flex h-10 items-center gap-2 rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-colors hover:bg-white"
            >
              Currículo
              <DownloadIcon className="text-base" />
              <span className="sr-only">(PDF, baixar)</span>
            </a>
          ) : null}
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          {resume ? (
            <a
              href={resume}
              download={resumeFileName}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-fg px-3.5 text-sm font-medium text-bg"
            >
              Currículo
              <DownloadIcon className="text-base" />
              <span className="sr-only">(PDF, baixar)</span>
            </a>
          ) : null}
          <MobileMenu items={navItems} socialLinks={socialLinks} />
        </div>
      </Container>
    </header>
  );
}
