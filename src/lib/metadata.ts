import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type PageMetadataInput = {
  /** Título da página. Recebe o sufixo do template, exceto quando `absoluteTitle` for true. */
  title: string;
  description: string;
  /** Caminho canônico, começando com "/". */
  path: string;
  absoluteTitle?: boolean;
  openGraphType?: "website" | "article";
};

/**
 * Monta a metadata de uma página com canonical, Open Graph e Twitter Card.
 * Open Graph e Twitter são redefinidos por completo porque objetos aninhados
 * de metadata substituem os do layout em vez de serem mesclados.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: openGraphType,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
