/**
 * Define se o build atual pode ser indexado por buscadores.
 *
 * - `SITE_ENV=production` libera a indexação; qualquer outro valor bloqueia.
 * - Sem `SITE_ENV`, na Vercel, apenas `VERCEL_ENV=production` é indexável.
 * - Fora da Vercel e sem variável definida, o build é tratado como produção.
 */
export function isIndexable(): boolean {
  const siteEnv = process.env.SITE_ENV;
  if (siteEnv) return siteEnv === "production";

  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv) return vercelEnv === "production";

  return true;
}
