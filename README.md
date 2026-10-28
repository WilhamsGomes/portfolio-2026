# Portfólio — Wilhams Gomes

Site pessoal em Next.js 16 (App Router), TypeScript estrito e Tailwind CSS 4. Todas as páginas são geradas estaticamente no build. Os únicos componentes de cliente são o menu mobile e o destaque da seção ativa no header.

## Instalar e executar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:3000
```

## Build e verificações

```bash
npm run lint       # ESLint
npm run typecheck  # gera os tipos de rotas e roda o tsc
npm run build      # build de produção
npm run start      # serve o build localmente
npm run check      # lint + typecheck + build
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, cargo, domínio, descrição padrão, stack do hero | `src/content/site.ts` (`siteConfig`) |
| E-mail, GitHub, LinkedIn, currículo | `src/content/site.ts` (`contactLinks`) |
| Projetos e estudos de caso (inclui `tagline`, `techLabel` e `tone`, a cor do card) | `src/content/projects.ts` |
| Números abaixo do hero (`stats`), contribuições, trajetória, formação, "Sobre", tecnologias | `src/content/profile.ts` |
| Itens do menu | `src/content/navigation.ts` |
| Cores e fontes | `src/app/globals.css` (bloco `@theme`) e `src/app/layout.tsx` |

Links de contato ausentes ficam como `undefined` e simplesmente não são renderizados — nenhum botão aponta para `#` ou para um destino vazio.

### Currículo

O currículo publicado é `public/curriculo-wilhams-gomes.pdf`. Para atualizar, substitua o arquivo mantendo o nome. O nome sugerido no download fica em `resumeFileName`, em `src/content/site.ts`; para remover o botão, deixe `resume` como `undefined`.

O botão de download aparece no header (desktop e mobile) e na seção de contato. O PDF inclui telefone e e-mail.

## Imagens

As imagens ficam em `src/assets/` e são importadas estaticamente, o que dá dimensões, `srcset` e placeholder de desfoque automáticos via `next/image`.

- **Retrato:** substitua `src/assets/wilhams-gomes-avatar.webp` (quadrado, rosto centralizado; é exibido em círculo no cartão do hero). Para a imagem de compartilhamento e o JSON-LD, substitua também `src/assets/og/wilhams-gomes.jpg` e `public/images/wilhams-gomes.jpg`.
- **Projetos:** adicione o arquivo em `src/assets/projetos/<slug>/`, importe-o em `src/content/projects.ts` e use-o em `cover` (capa, proporção 16:10 recomendada) ou em `caseStudy.gallery`.
- Sem `cover`, o card exibe um placeholder identificado como tal. Sem itens em `gallery`, o estudo de caso informa que ainda não há imagens.

As imagens atuais foram capturadas dos sites públicos de cada projeto, e as legendas do Proponi e do Cátedra indicam isso. Troque por prints do aplicativo quando quiser.

## Adicionar um projeto

1. Inclua um novo objeto no array `projects` em `src/content/projects.ts`, com um `slug` único.
2. Preencha os campos obrigatórios do tipo `Project` (o TypeScript aponta o que faltar).
3. Rode `npm run build`. A rota `/projetos/<slug>`, a imagem de Open Graph e a entrada no sitemap são geradas automaticamente.

Deixe `url` vazio quando não houver link público. O JSON-LD `SoftwareApplication` só é gerado quando existe `url`.

## Domínio e metadados

- O domínio fica em `siteConfig.url` (`https://www.wilhamsdev.com.br`). Ele alimenta `metadataBase`, canonicals, Open Graph, `sitemap.xml`, `robots.txt` e JSON-LD.
- Títulos seguem o template `%s | Wilhams Gomes`. A home usa título absoluto.
- Metadados por página: `pageMetadata()` em `src/lib/metadata.ts`.
- Imagens de compartilhamento são geradas no build por `src/app/opengraph-image.tsx` e `src/app/projetos/[slug]/opengraph-image.tsx`. As fontes usadas nelas (Geist, licença OFL) estão em `src/assets/og/fonts/`.
- Dados estruturados (`Person`, `WebSite`, `BreadcrumbList`, `SoftwareApplication`): `src/lib/structured-data.ts`.
- Atualize `siteConfig.updatedAt` ao revisar o conteúdo; a data vai para o sitemap.

### Impedir a indexação de previews

A regra fica em `src/lib/env.ts`:

- `SITE_ENV=production` libera a indexação; qualquer outro valor (ex.: `SITE_ENV=preview`) bloqueia.
- Sem `SITE_ENV`, na Vercel, somente `VERCEL_ENV=production` é indexável. Deploys de preview ficam bloqueados automaticamente.
- Fora da Vercel e sem variável, o build é tratado como produção.

Quando bloqueado, o site publica `robots.txt` com `Disallow: /`, a meta tag `noindex, nofollow` e o cabeçalho `X-Robots-Tag: noindex, nofollow`. Como a decisão é tomada no build, defina a variável antes de rodar `npm run build`.

## Informações pendentes

- **Prints internos** do Proponi e do Cátedra, se quiser substituir os recortes dos sites públicos.
- **Mais prints do Criaviz Studio.** O hero do site é um vídeo e os renders demoram a carregar, então só a seção de portfólio foi capturada.
- **Stack e atuação no BoraAli:** só o Next.js foi confirmado pelo HTML publicado. Complete backend, banco, provedor de IA e o seu papel em `src/content/projects.ts`.
- **Stack do FutData:** o frontend foi identificado como React pelo HTML publicado; confirme e complete (ex.: framework, banco de dados).
- **Decisões de arquitetura** dos produtos. Os estudos de caso descrevem os desafios como problemas a resolver, sem afirmar como foram implementados; acrescente detalhes reais quando quiser.
- **Mentoria full stack:** instituição e período, se quiser citá-los.
- **Datas a conferir:** a entrada na Single Point Technology aparece como abril de 2022 no LinkedIn e maio de 2022 no currículo (o site usa abril). A graduação na UNINASSAU aparece com início em 2022 e em 2023; o site mostra apenas a conclusão, em 2025.
