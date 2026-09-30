import type { StaticImageData } from "next/image";

import proponiEditor from "@/assets/projetos/proponi/editor-de-proposta.webp";
import proponiHome from "@/assets/projetos/proponi/pagina-inicial.webp";
import proponiDashboard from "@/assets/projetos/proponi/painel-comercial.webp";
import proponiPipeline from "@/assets/projetos/proponi/pipeline.webp";
import catedraDiagnostico from "@/assets/projetos/catedra/diagnostico.webp";
import catedraHome from "@/assets/projetos/catedra/pagina-inicial.webp";
import catedraSimulados from "@/assets/projetos/catedra/simulados.webp";
import catedraSmartExam from "@/assets/projetos/catedra/smart-exam.webp";
import catedraTutor from "@/assets/projetos/catedra/tutor-ia.webp";
import criavizPortfolio from "@/assets/projetos/criaviz/portfolio.webp";
import futdataDashboard from "@/assets/projetos/futdata/dashboard.webp";
import futdataRankings from "@/assets/projetos/futdata/rankings.webp";
import futdataSelecoes from "@/assets/projetos/futdata/selecoes.webp";

export type ProjectStatus = "em-testes" | "em-desenvolvimento" | "publicado";

export const statusLabel: Record<ProjectStatus, string> = {
  "em-testes": "Em testes",
  "em-desenvolvimento": "Em desenvolvimento",
  publicado: "Publicado",
};

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type ProjectFeature = {
  title: string;
  description?: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

/** Cor de destaque do card. Cada projeto usa uma para se diferenciar na grade. */
export type ProjectTone = "emerald" | "amber" | "sky" | "rose" | "accent";

export type Project = {
  slug: string;
  name: string;
  /** Frase curta exibida em destaque no card. */
  tagline: string;
  /** Rótulo técnico da barra superior do card (ex.: "React + NestJS"). */
  techLabel: string;
  tone: ProjectTone;
  /** Descrição curta, usada no card e como resumo. */
  description: string;
  /** Contexto do produto (ex.: produto próprio, fase atual). */
  context: string;
  /** Problema resolvido, em uma frase para o card. */
  problem: string;
  /** Minha contribuição, em uma frase para o card. */
  contribution: string;
  /** Papel resumido, exibido no cabeçalho do estudo de caso. */
  roleLabel: string;
  /**
   * Categoria schema.org do produto (ex.: "BusinessApplication"). Quando
   * definida junto com `url`, o estudo de caso publica um SoftwareApplication.
   */
  applicationCategory?: string;
  status: ProjectStatus;
  stack: string[];
  /** Link externo confirmado. Omitir quando não houver. */
  url?: string;
  /** Imagem de capa. Sem capa, o card exibe um placeholder identificado. */
  cover?: ProjectImage;
  seo: {
    title: string;
    description: string;
  };
  caseStudy: {
    overview: string[];
    audience: string[];
    role: string[];
    featuresNote?: string;
    features: ProjectFeature[];
    stackGroups: StackGroup[];
    challenges: ProjectFeature[];
    gallery: ProjectImage[];
    statusNote: string;
  };
};

const proponiCaption = "Interface exibida no site público do Proponi.";
const catedraCaption = "Seção do site público do Cátedra.";

export const projects: Project[] = [
  {
    slug: "proponi",
    name: "Proponi",
    tagline: "Propostas que viram negociações acompanhadas.",
    techLabel: "React + NestJS",
    tone: "emerald",
    description:
      "Plataforma de gestão comercial que reúne propostas digitais, clientes e acompanhamento de negociações em um só lugar.",
    context: "Produto próprio",
    problem:
      "Propostas enviadas como anexo e acompanhadas por mensagens e planilhas deixam a negociação sem visibilidade: não se sabe se o cliente abriu, e o follow-up depende da memória.",
    contribution:
      "Arquitetura e desenvolvimento full stack, com ferramentas de IA como apoio à implementação e validação técnica.",
    roleLabel: "Arquitetura e desenvolvimento full stack",
    applicationCategory: "BusinessApplication",
    status: "em-testes",
    stack: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    url: "https://proponi.com.br/",
    cover: {
      src: proponiHome,
      alt: "Página inicial do Proponi, com uma proposta comercial aberta e o painel de atividade do cliente ao lado.",
    },
    seo: {
      title: "Proponi — estudo de caso",
      description:
        "Estudo de caso do Proponi, plataforma de gestão comercial com propostas digitais, pipeline e acompanhamento de leitura, desenvolvida por Wilhams Gomes com React, NestJS e PostgreSQL.",
    },
    caseStudy: {
      overview: [
        "O Proponi transforma a proposta comercial em uma página acompanhada. Em vez de um PDF enviado por mensagem, o cliente recebe um link, lê a proposta no navegador e pode aceitá-la ali mesmo.",
        "Em volta da proposta estão os recursos de gestão comercial: cadastro de clientes, pipeline de negociações, atividades com data e responsável e um painel com a visão geral das vendas.",
      ],
      audience: [
        "Quem vende serviços costuma montar a proposta em um arquivo, enviar por WhatsApp ou e-mail e acompanhar o resto de memória. Depois do envio, não há como saber se o cliente abriu, o que leu ou quando retomar o contato.",
        "O produto é voltado a agências, estúdios criativos, escritórios de arquitetura, consultorias, produtoras e times comerciais B2B.",
      ],
      role: [
        "Sou responsável pela arquitetura e pelo desenvolvimento full stack: interface, API e modelagem de dados.",
        "Uso ferramentas de IA como apoio à implementação e faço a validação técnica das entregas.",
      ],
      features: [
        {
          title: "Propostas digitais com link público",
          description:
            "A proposta abre no navegador, no celular ou no computador, com aceite digital na própria página.",
        },
        {
          title: "Acompanhamento de abertura e leitura",
          description:
            "Visualizações, tempo de leitura e as seções que o cliente mais leu.",
        },
        {
          title: "Gestão de clientes",
          description: "Clientes e histórico de negociações centralizados.",
        },
        {
          title: "Pipeline comercial",
          description: "Negociações organizadas por etapa, com valor e responsável.",
        },
        {
          title: "Atividades e follow-ups",
          description: "Próxima ação com data, hora e responsável.",
        },
        {
          title: "Dashboard comercial",
          description: "Receita, conversão e o que precisa de atenção em um só painel.",
        },
        {
          title: "Equipes e permissões",
          description: "Contas com vários usuários e permissões de acesso.",
        },
        {
          title: "Billing e assinaturas",
          description: "Planos com limites de usuários, propostas e modelos.",
        },
        { title: "Integração de e-mails" },
      ],
      stackGroups: [
        { label: "Frontend", items: ["React", "TypeScript"] },
        { label: "Backend", items: ["NestJS", "Prisma"] },
        { label: "Dados", items: ["PostgreSQL"] },
        { label: "Infraestrutura", items: ["Docker"] },
      ],
      challenges: [
        {
          title: "Uma proposta que funciona sem conta",
          description:
            "O cliente abre a proposta por um link público, sem cadastro. A mesma página precisa apresentar escopo, investimento e condições, funcionar bem no celular e registrar o aceite.",
        },
        {
          title: "Transformar leitura em sinal comercial",
          description:
            "Aberturas, tempo de leitura e seções mais lidas só têm valor quando se conectam à próxima ação e à etapa da negociação no pipeline.",
        },
        {
          title: "Equipes, permissões e planos",
          description:
            "Cada oportunidade tem um responsável, e cada plano define limites de usuários, propostas e modelos. Permissões e assinaturas precisam ser coerentes entre si.",
        },
      ],
      gallery: [
        {
          src: proponiEditor,
          alt: "Editor de proposta do Proponi, com a lista de seções à esquerda, a prévia da proposta ao centro e as propriedades da seção à direita.",
          caption: `Editor de proposta. ${proponiCaption}`,
        },
        {
          src: proponiPipeline,
          alt: "Pipeline do Proponi com negociações nas colunas Qualificação, Proposta e Negociação.",
          caption: `Pipeline comercial. ${proponiCaption}`,
        },
        {
          src: proponiDashboard,
          alt: "Painel comercial do Proponi com receita fechada, taxa de conversão, gráfico semanal e lista de propostas recentes.",
          caption: `Painel comercial. ${proponiCaption}`,
        },
      ],
      statusNote:
        "Em fase de testes. O site do produto está publicado em proponi.com.br.",
    },
  },
  {
    slug: "catedra",
    name: "Cátedra",
    tagline: "Descubra onde focar os estudos para o vestibular.",
    techLabel: "React + NestJS",
    tone: "amber",
    description:
      "Plataforma de simulados e provas anteriores do ENEM e de vestibulares, com diagnóstico de desempenho e tutor com IA.",
    context: "Produto próprio",
    problem:
      "Estudantes passam horas estudando sem saber em quais conteúdos estão perdendo pontos, e a preparação vira cobertura sem critério.",
    contribution:
      "Definição da arquitetura e desenvolvimento full stack, com IA como apoio à construção e validação técnica das entregas.",
    roleLabel: "Arquitetura e desenvolvimento full stack",
    applicationCategory: "EducationalApplication",
    status: "em-desenvolvimento",
    stack: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    url: "https://catedra.wilhamsdev.com.br/",
    cover: {
      src: catedraHome,
      alt: "Página inicial do Cátedra, com a chamada principal à esquerda e um painel de desempenho por área do conhecimento à direita.",
    },
    seo: {
      title: "Cátedra — estudo de caso",
      description:
        "Estudo de caso do Cátedra, plataforma de simulados do ENEM e vestibulares com diagnóstico de desempenho e tutor com IA, desenvolvida por Wilhams Gomes com React, NestJS e PostgreSQL.",
    },
    caseStudy: {
      overview: [
        "O Cátedra reúne provas anteriores do ENEM e de vestibulares como a FUVEST em simulados próximos da prova real, com cronômetro, navegação livre entre as questões e resultado com correção.",
        "A partir das respostas, a plataforma mostra o desempenho por área e por tópico, aponta os conteúdos que merecem prioridade e monta simulados focados nesses assuntos. Um tutor com IA usa o histórico do estudante para orientar o que estudar em seguida.",
      ],
      audience: [
        "Quem se prepara para vestibulares costuma medir o esforço em horas de estudo, sem saber onde está perdendo pontos. O resultado é revisar de tudo um pouco, sem critério.",
        "O Cátedra é voltado a estudantes que querem treinar no formato das provas e usar o próprio desempenho para decidir onde investir o tempo.",
      ],
      role: [
        "Defini a arquitetura e desenvolvo o produto de ponta a ponta: interface, API e modelagem de dados.",
        "Uso IA como apoio à construção e faço a validação técnica das entregas.",
      ],
      featuresNote:
        "O produto segue em desenvolvimento. A lista combina recursos apresentados no site público e itens do escopo atual.",
      features: [
        {
          title: "Provas anteriores e simulados",
          description: "ENEM, FUVEST e simulados personalizados a partir do banco de questões.",
        },
        {
          title: "Experiência próxima da prova",
          description: "Cronômetro fiel ao tempo da prova e navegação livre entre as questões.",
        },
        {
          title: "Pausa e retomada",
          description: "O estudante continua a tentativa de onde parou.",
        },
        {
          title: "Diagnóstico de desempenho",
          description: "Acerto por área e por tópico, com os conteúdos de maior prioridade.",
        },
        {
          title: "Smart Exam",
          description: "Simulados montados a partir do histórico de resultados.",
        },
        {
          title: "Tutor com IA",
          description: "Orientação de estudo baseada nos resultados e erros do estudante.",
        },
        { title: "Explicações de questões e alternativas com IA" },
        { title: "Administração de questões e alternativas" },
        { title: "Importação de questões em PDF" },
      ],
      stackGroups: [
        { label: "Frontend", items: ["React", "TypeScript"] },
        { label: "Backend", items: ["NestJS", "Prisma"] },
        { label: "Dados", items: ["PostgreSQL"] },
      ],
      challenges: [
        {
          title: "Da prova em PDF para dados estruturados",
          description:
            "Provas são publicadas em PDF. A importação precisa transformar enunciados e alternativas em registros que possam ser revisados e administrados.",
        },
        {
          title: "Do resultado à prioridade de estudo",
          description:
            "Cada resposta precisa estar ligada à área e ao tópico da questão para que o desempenho vire um diagnóstico e alimente os próximos simulados.",
        },
        {
          title: "Tentativas que podem ser interrompidas",
          description:
            "Um simulado pode ser pausado e retomado depois. As respostas e o progresso precisam ser registrados ao longo da tentativa.",
        },
        {
          title: "IA com contexto do estudante",
          description:
            "O tutor e as explicações precisam partir do histórico de desempenho e de cada questão e alternativa do banco.",
        },
      ],
      gallery: [
        {
          src: catedraDiagnostico,
          alt: "Seção de desempenho do Cátedra, com acerto geral de 72%, barras por área do conhecimento e a lista de tópicos prioritários.",
          caption: `Diagnóstico de desempenho. ${catedraCaption}`,
        },
        {
          src: catedraSimulados,
          alt: "Seção de simulados do Cátedra, com o cartão da prova ENEM 2025: 90 questões e 5 horas de prova.",
          caption: `Simulados com provas anteriores. ${catedraCaption}`,
        },
        {
          src: catedraSmartExam,
          alt: "Cartão do Smart Exam do Cátedra, com um simulado de 18 questões dividido entre Física, Química e Matemática.",
          caption: `Smart Exam. ${catedraCaption}`,
        },
        {
          src: catedraTutor,
          alt: "Conversa com o Tutor Cátedra, que sugere um bloco de estudo com tempo definido para cada tópico.",
          caption: `Tutor com IA. ${catedraCaption}`,
        },
      ],
      statusNote:
        "Em desenvolvimento, com versão pública disponível em catedra.wilhamsdev.com.br.",
    },
  },
  {
    slug: "futdata",
    name: "FutData",
    tagline: "Dados do ciclo da Copa do Mundo 2026, seleção por seleção.",
    techLabel: "NestJS + React",
    tone: "sky",
    description:
      "Plataforma de análise de dados das seleções nacionais no ciclo da Copa do Mundo 2026, com competições, jogos, rankings e comparação entre seleções.",
    context: "Projeto próprio",
    problem:
      "Os dados do ciclo estão espalhados entre eliminatórias, copas continentais e fontes externas diferentes, o que dificulta acompanhar o desempenho de cada seleção.",
    contribution:
      "Coleta de dados em APIs externas com NestJS, integração e tratamento das informações e desenvolvimento da plataforma de análise.",
    roleLabel: "Coleta de dados e desenvolvimento full stack",
    applicationCategory: "SportsApplication",
    status: "publicado",
    stack: ["NestJS", "TypeScript", "React", "APIs externas"],
    url: "http://fut-data.wilhamsdev.com.br/",
    cover: {
      src: futdataDashboard,
      alt: "Dashboard do FutData com totais de competições, seleções, jogos, gols e eventos do ciclo e um gráfico de jogos e gols por competição.",
    },
    seo: {
      title: "FutData — estudo de caso",
      description:
        "Estudo de caso do FutData, plataforma de análise de dados das seleções no ciclo da Copa do Mundo 2026, com coleta em APIs externas feita em NestJS por Wilhams Gomes.",
    },
    caseStudy: {
      overview: [
        "O FutData reúne dados das seleções nacionais ao longo do ciclo da Copa do Mundo 2026: competições, partidas, placares, gols, cartões e outros eventos de jogo.",
        "A plataforma traz um resumo do ciclo de todas as seleções, com dashboard geral, páginas de competições, seleções e jogos, rankings e um comparador entre duas seleções.",
        "É a versão 2.0 de uma aplicação acadêmica criada em 2022, na época da Copa do Catar.",
      ],
      audience: [
        "Acompanhar uma seleção durante o ciclo exige juntar resultados de eliminatórias de várias confederações e de torneios continentais, cada um com a sua fonte.",
        "O FutData organiza esses dados em uma base única para quem quer comparar seleções e entender o caminho de cada uma até a Copa.",
      ],
      role: [
        "Fiz toda a coleta de dados em APIs externas, com integrações construídas em NestJS.",
        "Também desenvolvi o tratamento das informações e as telas de análise da plataforma.",
      ],
      features: [
        {
          title: "Dashboard do ciclo",
          description:
            "Totais de competições, seleções, jogos, gols e eventos, com gráficos por competição e por ano.",
        },
        {
          title: "Seleções",
          description:
            "Jogos, vitórias, empates, derrotas, aproveitamento e saldo de gols, com filtro por confederação.",
        },
        {
          title: "Jogos",
          description: "Partidas registradas com placar e eventos, com filtros por competição e seleção.",
        },
        {
          title: "Rankings",
          description: "Seleções com mais jogos, mais gols e outras métricas do ciclo.",
        },
        { title: "Comparador de seleções", description: "Análise lado a lado entre duas seleções." },
        {
          title: "Competições monitoradas",
          description: "Eliminatórias e torneios continentais do ciclo.",
        },
      ],
      stackGroups: [
        { label: "Backend e coleta", items: ["NestJS", "TypeScript", "APIs externas"] },
        { label: "Frontend", items: ["React"] },
      ],
      challenges: [
        {
          title: "Várias fontes, uma base",
          description:
            "Os dados chegam de APIs externas e cobrem competições diferentes. A coleta precisa reunir tudo em um formato único para permitir comparações entre seleções.",
        },
        {
          title: "Eventos de jogo em volume",
          description:
            "Além dos placares, a plataforma registra gols, cartões e lances de VAR de cada partida, que alimentam os totais e os rankings.",
        },
        {
          title: "De projeto acadêmico a plataforma",
          description:
            "A aplicação original, de 2022, foi retomada e ampliada para cobrir o ciclo até a Copa de 2026.",
        },
      ],
      gallery: [
        {
          src: futdataSelecoes,
          alt: "Página de seleções do FutData com cartões de desempenho por seleção e filtro por confederação.",
          caption: "Seleções nacionais, com aproveitamento e saldo de gols.",
        },
        {
          src: futdataRankings,
          alt: "Página de rankings do FutData com as seleções com mais jogos e com mais gols no ciclo.",
          caption: "Rankings do ciclo.",
        },
      ],
      statusNote: "Publicado em fut-data.wilhamsdev.com.br.",
    },
  },
  {
    slug: "criaviz-studio",
    name: "Criaviz Studio",
    tagline: "Landing page para um estúdio de visualização arquitetônica.",
    techLabel: "React + Vite",
    tone: "rose",
    description:
      "Landing page do Criaviz Studio, estúdio de renderização 3D e visualização arquitetônica para projetos residenciais, comerciais e imobiliários.",
    context: "Projeto para cliente",
    problem:
      "Um estúdio de visualização 3D precisa de uma página que valorize os renders, apresente os serviços e leve arquitetos e incorporadoras a pedir um orçamento.",
    contribution: "Desenvolvimento da landing page com React e Vite.",
    roleLabel: "Desenvolvimento frontend",
    status: "publicado",
    stack: ["React", "Vite"],
    url: "https://www.criavizstudio.com.br/",
    cover: {
      src: criavizPortfolio,
      alt: "Seção de portfólio do Criaviz Studio com filtros Todos, Projetos e Produtos e uma grade de renders de casas e mobiliário.",
    },
    seo: {
      title: "Criaviz Studio — estudo de caso",
      description:
        "Estudo de caso da landing page do Criaviz Studio, estúdio de visualização arquitetônica, desenvolvida por Wilhams Gomes com React e Vite.",
    },
    caseStudy: {
      overview: [
        "O Criaviz Studio cria imagens, plantas humanizadas e animações 3D para projetos de arquitetura. A landing page apresenta os serviços, o portfólio e os diferenciais do estúdio e concentra os pedidos de orçamento.",
      ],
      audience: [
        "O público são escritórios de arquitetura, construtoras e incorporadoras que precisam apresentar projetos antes de construí-los.",
        "Para esse público, a qualidade das imagens é o argumento de venda, então a página precisa mostrar o trabalho do estúdio com destaque.",
      ],
      role: ["Desenvolvi a landing page com React e Vite."],
      features: [
        {
          title: "Serviços",
          description: "Modelagem 3D, imagens renderizadas, planta baixa humanizada e animações 3D.",
        },
        {
          title: "Portfólio com filtros",
          description: "Entregas separadas entre projetos e produtos.",
        },
        { title: "Depoimentos de clientes" },
        {
          title: "Formulário de orçamento",
          description: "Pedido de orçamento com os detalhes do projeto.",
        },
        { title: "Diferenciais e apresentação do estúdio" },
      ],
      stackGroups: [{ label: "Frontend", items: ["React", "Vite"] }],
      challenges: [
        {
          title: "O trabalho do cliente em primeiro plano",
          description:
            "Os renders são o produto do estúdio. A página precisa exibi-los em destaque, com vídeo no topo e portfólio em grade.",
        },
        {
          title: "Da vitrine ao orçamento",
          description:
            "A navegação leva de serviços e portfólio até o formulário de contato, que é o objetivo da página.",
        },
      ],
      gallery: [],
      statusNote: "Publicado em criavizstudio.com.br.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectPath(slug: string) {
  return `/projetos/${slug}`;
}
