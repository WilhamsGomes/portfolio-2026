import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { homeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <Hero />
      <FeaturedProjects />
      <Experience />
      <About />
      <TechStack />
      <Contact />
    </>
  );
}
