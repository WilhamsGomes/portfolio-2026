/**
 * Configuração central do site: identidade, domínio e links de contato.
 *
 * Links ausentes devem ficar como `undefined`. Os componentes só renderizam
 * links que existem — nunca um destino vazio ou "#".
 */

export const siteConfig = {
  name: "Wilhams Gomes",
  role: "Desenvolvedor Full Stack",
  /** Domínio de produção. Usado em metadataBase, canonical, sitemap e JSON-LD. */
  url: "https://www.wilhamsdev.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  location: {
    city: "Recife",
    region: "PE",
    country: "BR",
  },
  description:
    "Wilhams Gomes, desenvolvedor Full Stack em Recife. Construo aplicações web, APIs e produtos digitais com TypeScript, Node.js, React e Next.js, da arquitetura à produção.",
  mainStack: ["TypeScript", "Node.js", "React", "Next.js"],
  /** Data da última revisão de conteúdo. Usada no sitemap. */
  updatedAt: "2026-09-29",
} as const;

export type ContactLinks = {
  email?: string;
  github?: string;
  linkedin?: string;
  /** Caminho de um PDF em /public (ex.: "/curriculo-wilhams-gomes.pdf"). */
  resume?: string;
};

export const contactLinks: ContactLinks = {
  email: "wilhamsgoomes@gmail.com",
  github: "https://github.com/WilhamsGomes",
  linkedin: "https://www.linkedin.com/in/wilhamsgomes",
  resume: "/curriculo-wilhams-gomes.pdf",
};

/** Nome sugerido ao baixar o currículo. */
export const resumeFileName = "Wilhams Gomes - Desenvolvedor Full Stack.pdf";

/** Perfis públicos confirmados, usados em `sameAs` no JSON-LD. */
export const socialProfiles = [contactLinks.linkedin, contactLinks.github].filter(
  (url): url is string => Boolean(url),
);
