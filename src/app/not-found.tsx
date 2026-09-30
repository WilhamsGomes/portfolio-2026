import type { Metadata } from "next";

import { ArrowRightIcon } from "@/components/ui/icons";
import { ButtonLink, Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "O endereço acessado não existe ou foi movido.",
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-mono text-sm text-accent">Erro 404</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance text-fg sm:text-5xl">
        Esta página não existe
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        O endereço pode ter sido digitado incorretamente ou o conteúdo mudou de lugar.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">
          Ir para o início
          <ArrowRightIcon className="text-base" />
        </ButtonLink>
        <ButtonLink href="/#projetos" variant="secondary">
          Ver projetos
        </ButtonLink>
      </div>
    </Container>
  );
}
