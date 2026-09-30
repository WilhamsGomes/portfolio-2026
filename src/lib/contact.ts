import { contactLinks } from "@/content/site";

export type ContactKind = "email" | "linkedin" | "github";

export type ContactItem = {
  kind: ContactKind;
  label: string;
  value: string;
  href: string;
  external: boolean;
};

function handleFromUrl(url: string) {
  return url.replace(/\/+$/, "").split("/").pop() ?? url;
}

/** Lista apenas os canais de contato configurados. */
export function getContactItems(): ContactItem[] {
  const items: ContactItem[] = [];

  if (contactLinks.email) {
    items.push({
      kind: "email",
      label: "E-mail",
      value: contactLinks.email,
      href: `mailto:${contactLinks.email}`,
      external: false,
    });
  }

  if (contactLinks.linkedin) {
    items.push({
      kind: "linkedin",
      label: "LinkedIn",
      value: `in/${handleFromUrl(contactLinks.linkedin)}`,
      href: contactLinks.linkedin,
      external: true,
    });
  }

  if (contactLinks.github) {
    items.push({
      kind: "github",
      label: "GitHub",
      value: `@${handleFromUrl(contactLinks.github)}`,
      href: contactLinks.github,
      external: true,
    });
  }

  return items;
}

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin";
};

/** Perfis exibidos como ícones no header e no menu mobile. */
export function getSocialLinks(): SocialLink[] {
  const links: SocialLink[] = [];
  if (contactLinks.github) links.push({ label: "GitHub", href: contactLinks.github, icon: "github" });
  if (contactLinks.linkedin) {
    links.push({ label: "LinkedIn", href: contactLinks.linkedin, icon: "linkedin" });
  }
  return links;
}
