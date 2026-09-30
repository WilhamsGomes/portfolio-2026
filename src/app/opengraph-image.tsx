import { siteConfig } from "@/content/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `${siteConfig.name}, ${siteConfig.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: siteConfig.name,
    title: siteConfig.role,
    description: "Aplicações web, APIs e produtos digitais, da arquitetura à produção.",
    withPortrait: true,
  });
}
