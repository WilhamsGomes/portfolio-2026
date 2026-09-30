import { education } from "@/content/profile";
import { projectPath, type Project } from "@/content/projects";
import { contactLinks, siteConfig, socialProfiles } from "@/content/site";

type JsonLdObject = Record<string, unknown>;

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

export function personJsonLd(): JsonLdObject {
  return {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/wilhams-gomes.jpg`,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    ...(contactLinks.email ? { email: `mailto:${contactLinks.email}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    alumniOf: education
      .filter((item) => item.period !== "Em andamento")
      .map((item) => ({ "@type": "EducationalOrganization", name: item.institution })),
    knowsAbout: ["TypeScript", "Node.js", "React", "Next.js", "NestJS", "PostgreSQL"],
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.description,
    author: { "@id": personId },
  };
}

export function homeJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": [personJsonLd(), websiteJsonLd()],
  };
}

export function projectJsonLd(project: Project): JsonLdObject {
  const pageUrl = `${siteConfig.url}${projectPath(project.slug)}`;

  const graph: JsonLdObject[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Projetos", item: `${siteConfig.url}/#projetos` },
        { "@type": "ListItem", position: 3, name: project.name, item: pageUrl },
      ],
    },
  ];

  // Só descreve o produto como aplicação quando há página pública e categoria definida.
  if (project.url && project.applicationCategory) {
    graph.push({
      "@type": "SoftwareApplication",
      name: project.name,
      description: project.description,
      url: project.url,
      applicationCategory: project.applicationCategory,
      operatingSystem: "Web",
      inLanguage: siteConfig.language,
      creator: { "@type": "Person", "@id": personId, name: siteConfig.name },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
