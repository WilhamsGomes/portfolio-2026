/**
 * Dados profissionais: contribuições, trajetória, formação e tecnologias.
 * Fontes: currículo e perfil do LinkedIn fornecidos por Wilhams Gomes.
 */

export type Contribution = {
  title: string;
  description: string;
};

export const contributions: Contribution[] = [
  {
    title: "Plataformas usadas em mais de cinco países",
    description:
      "Evolução de uma plataforma de dados em tempo real utilizada em mais de cinco países, com indicadores consultados diariamente por equipes de negócio, risco e gestão.",
  },
  {
    title: "Dados em tempo real para decisões",
    description:
      "Dashboards e relatórios de receita, desempenho, afiliados e comportamento de usuários, além de funcionalidades de análise de risco com indicadores, filtros e fluxos de investigação.",
  },
  {
    title: "APIs e integrações",
    description:
      "Construção e evolução de APIs, integrações com fontes e serviços externos e processos de tratamento de dados que alimentam os produtos.",
  },
  {
    title: "Soluções financeiras e comerciais",
    description:
      "Funcionalidades que automatizaram processos das áreas financeira e comercial, como o cálculo de rentabilidade por contrato, produto a produto, considerando custos e impostos.",
  },
  {
    title: "Sistemas do setor farmacêutico",
    description:
      "Regras de negócio e funcionalidades para um CRM da indústria farmacêutica, envolvendo controle de estoque, custos e logística de entrega de materiais.",
  },
  {
    title: "Cache e otimização de consultas",
    description:
      "Estratégias de cache para disponibilizar indicadores com rapidez e otimização de consultas SQL em produção, incluindo a investigação de divergências de indicadores.",
  },
];

export type Role = {
  title: string;
  period: string;
};

export type Experience = {
  company: string;
  roles: Role[];
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "BSA Tech",
    roles: [
      { title: "Desenvolvedor Full Stack Pleno", period: "fev. 2024 — set. 2026" },
      { title: "Desenvolvedor Full Stack Júnior", period: "dez. 2022 — mar. 2024" },
    ],
    summary:
      "Desenvolvimento de plataformas de dados para o setor de entretenimento, que transformam grandes volumes de informações operacionais em indicadores usados diariamente por equipes de negócio, risco e gestão. Também desenvolvi páginas de jogos, templates de jogos, sites institucionais e plataformas internas de gestão de colaboradores.",
    highlights: [
      "Atuei na evolução de uma plataforma de dados em tempo real utilizada em mais de cinco países, apoiando as decisões de negócio dos clientes.",
      "Desenvolvi e implementei uma estratégia de cache que reduziu os custos de infraestrutura em mais de US$ 10 mil por mês.",
      "Criei funcionalidades que automatizaram processos das áreas financeira e comercial, como o cálculo do lucro por contrato, com apuração produto a produto e desconto de impostos.",
    ],
    stack: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "Python",
      "C#",
      ".NET",
      "SQL Server",
      "Docker",
    ],
  },
  {
    company: "Single Point Technology",
    roles: [{ title: "Desenvolvedor Full Stack", period: "abr. 2022 — out. 2022" }],
    summary:
      "Desenvolvimento e manutenção de sistemas de CRM para a indústria farmacêutica, com funcionalidades de controle de estoque, custos e logística de entrega de materiais.",
    highlights: [
      "Desenvolvi funcionalidades e personalizei regras de negócio conforme a necessidade de cada cliente.",
      "Participei da evolução de sistemas de controle de estoque e de uma plataforma voltada à adequação à LGPD.",
      "Comecei no backend e passei a atuar também no frontend, implementando soluções de ponta a ponta.",
    ],
    stack: ["Java", "Groovy", "jQuery", "Vue.js", "APIs REST", "Oracle"],
  },
  {
    company: "Giz Mídia",
    roles: [{ title: "Designer gráfico", period: "jul. 2021 — abr. 2022" }],
    summary:
      "Criação de peças para redes sociais e campanhas para datas especiais, antes da transição para o desenvolvimento.",
    highlights: [],
    stack: ["Photoshop"],
  },
];

export type Education = {
  course: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    course: "Pós-graduação em Engenharia de Software",
    institution: "PUC Minas",
    period: "Em andamento",
  },
  {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UNINASSAU",
    period: "Concluído em 2025",
  },
  {
    course: "Técnico em Desenvolvimento de Sistemas",
    institution: "ETE Miguel Batista",
    period: "2018 — 2020",
  },
];

export const about = {
  paragraphs: [
    "Estudo desenvolvimento desde 2018, quando comecei o curso técnico em Desenvolvimento de Sistemas. Atuo profissionalmente desde 2021: primeiro como designer gráfico e, a partir de 2022, como desenvolvedor full stack.",
    "Trabalho de ponta a ponta, do entendimento das regras de negócio à interface, à API, ao banco de dados e à sustentação em produção. Boa parte da minha experiência está em plataformas de dados, CRMs e sistemas de gestão, com integrações entre serviços e consultas em bases relacionais.",
    "Por dois anos, atuei como mentor full stack com Node.js e React. Hoje também desenvolvo produtos próprios, o Proponi e o Cátedra, conduzindo cada um da arquitetura à entrega.",
  ],
};

export type TechGroup = {
  label: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { label: "Backend", items: ["Node.js", "NestJS", "Java", "Spring Boot", "Python"] },
  { label: "Dados", items: ["PostgreSQL", "SQL Server", "MongoDB"] },
  { label: "Infraestrutura e ferramentas", items: ["Docker", "Git", "CI/CD"] },
  {
    label: "Engenharia",
    items: [
      "APIs REST",
      "Integração de sistemas",
      "Arquitetura multi-tenant",
      "Controle de acesso",
      "Cache",
      "Otimização de SQL",
    ],
  },
];

/** Tecnologias usadas em experiências anteriores, fora do foco atual. */
export const otherTech = ["Vue.js", "C# / .NET", "Groovy", "jQuery", "Oracle"];

export type Stat = {
  value: string;
  label: string;
};

/** Números exibidos logo abaixo do hero. */
export const stats: Stat[] = [
  { value: "+5", label: "países usam sistemas que desenvolvi" },
  { value: "+30", label: "projetos entregues em produção" },
  { value: "2 anos", label: "como mentor full stack com Node.js e React" },
];
