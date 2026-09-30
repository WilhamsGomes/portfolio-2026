import Image from "next/image";

import avatar from "@/assets/wilhams-gomes-avatar.webp";
import { HeroCodeDecor } from "@/components/sections/hero-code-decor";
import { ArrowRightIcon, ExternalIcon, GitHubIcon } from "@/components/ui/icons";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { stats } from "@/content/profile";
import { contactLinks, siteConfig } from "@/content/site";

function githubHandle(url: string) {
  return url.replace(/\/+$/, "").split("/").pop() ?? url;
}

function ProfileCard() {
  const github = contactLinks.github;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="font-mono text-xs text-subtle">perfil.md</span>
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-accent" />
        </span>
      </div>

      <div className="flex flex-col items-center px-6 pb-8 pt-9">
        <div className="relative">
          <div className="rounded-full border border-accent/50 p-1.5">
            <Image
              src={avatar}
              alt="Foto de Wilhams Gomes, de camisa e blazer pretos, em fundo escuro."
              sizes="(min-width: 640px) 208px, 176px"
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              className="size-44 rounded-full object-cover sm:size-52"
            />
          </div>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 inline-flex size-11 items-center justify-center rounded-full border-4 border-surface bg-accent text-accent-fg transition-transform hover:scale-105"
            >
              <GitHubIcon className="text-lg" />
              <span className="sr-only">Perfil no GitHub (abre em nova aba)</span>
            </a>
          ) : null}
        </div>

        <p className="mt-6 text-lg font-semibold text-fg">{siteConfig.name}</p>
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex min-h-11 items-center gap-1.5 font-mono text-sm text-accent hover:underline hover:underline-offset-4"
          >
            @{githubHandle(github)}
            <ExternalIcon className="text-sm" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        ) : null}
      </div>

      <div className="border-t border-border bg-bg/60 px-6 py-5 font-mono text-[13px] leading-relaxed">
        <p>
          <span aria-hidden="true" className="text-accent">$ </span>
          <span className="text-fg">whoami</span>
        </p>
        <p className="text-muted">Full Stack · APIs · Produtos digitais</p>
        <p className="mt-3">
          <span aria-hidden="true" className="text-accent">$ </span>
          <span className="text-fg">cat stack.txt</span>
        </p>
        <p className="text-muted">
          <span className="sr-only">Stack principal: </span>
          {siteConfig.mainStack.join(" · ")}
        </p>
        <p className="mt-3" aria-hidden="true">
          <span className="text-accent">$ </span>
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent/80" />
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(55%_60%_at_15%_0%,var(--color-accent-soft),transparent_70%)]"
      />
      <Container className="grid items-center gap-14 pb-16 pt-28 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:pt-24">
        <div className="relative">
          <HeroCodeDecor />
          <h1 id="hero-title" className="text-balance">
            <span className="block font-mono text-sm tracking-wide text-muted">
              {siteConfig.name}
              <span className="text-subtle"> · </span>
              {siteConfig.location.city}, {siteConfig.location.region}
            </span>
            <span className="sr-only">, </span>
            <span className="mt-5 block text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              Desenvolvedor Full&nbsp;Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            Sou Wilhams Gomes. Desenvolvo aplicações web, APIs e produtos digitais, da
            arquitetura à produção, com foco em desempenho, confiabilidade e experiência do
            usuário.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#projetos">
              Conheça meus projetos
              <ArrowRightIcon className="text-base" />
            </ButtonLink>
            <ButtonLink href="/#contato" variant="secondary">
              Vamos conversar
            </ButtonLink>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[400px]">
          <ProfileCard />
        </div>
      </Container>

      <Container>
        <section aria-labelledby="numeros-titulo" className="border-t border-border py-12 sm:py-14">
          <h2 id="numeros-titulo" className="sr-only">
            Em números
          </h2>
          <dl className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted sm:text-base">
                  {stat.label}
                </dt>
                <dd className="font-mono text-4xl font-medium tracking-tight text-fg sm:text-5xl">
                  {stat.value}
                  <span aria-hidden="true" className="text-accent">
                    _
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </Container>
    </section>
  );
}
