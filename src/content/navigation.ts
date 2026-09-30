export type NavItem = {
  label: string;
  href: string;
};

/** Links do menu principal. Âncoras com "/" funcionam também nas páginas internas. */
export const navItems: NavItem[] = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Contato", href: "/#contato" },
];
