import { ExternalIcon, FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { contactLinks, resumeFileName } from "@/content/site";
import { getContactItems, type ContactKind } from "@/lib/contact";

const icons: Record<ContactKind, typeof MailIcon> = {
  email: MailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export function Contact() {
  const items = getContactItems();

  return (
    <section aria-labelledby="contato-titulo" id="contato" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl border border-border bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <Eyebrow index={5}>Contato</Eyebrow>
          <h2
            id="contato-titulo"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-fg sm:text-5xl"
          >
            Vamos conversar sobre seu próximo projeto ou oportunidade?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Escolha o canal que preferir. O caminho mais direto é o e-mail.
          </p>

          {items.length > 0 ? (
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => {
                const Icon = icons[item.kind];
                return (
                  <li key={item.kind}>
                    <a
                      href={item.href}
                      className="group flex min-h-16 items-center gap-4 rounded-2xl border border-border-strong bg-bg px-5 py-4 transition-colors hover:border-accent/60"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <Icon className="shrink-0 text-xl text-muted group-hover:text-accent" />
                      <span className="min-w-0">
                        <span className="block text-xs text-subtle">{item.label}</span>
                        <span className="block truncate text-sm text-fg">{item.value}</span>
                      </span>
                      {item.external ? (
                        <>
                          <ExternalIcon className="ml-auto shrink-0 text-base text-subtle" />
                          <span className="sr-only">(abre em nova aba)</span>
                        </>
                      ) : null}
                    </a>
                  </li>
                );
              })}
              {contactLinks.resume ? (
                <li>
                  <a
                    href={contactLinks.resume}
                    download={resumeFileName}
                    className="group flex min-h-16 items-center gap-4 rounded-2xl border border-border-strong bg-bg px-5 py-4 transition-colors hover:border-accent/60"
                  >
                    <FileIcon className="shrink-0 text-xl text-muted group-hover:text-accent" />
                    <span>
                      <span className="block text-xs text-subtle">Currículo</span>
                      <span className="block text-sm text-fg">Baixar PDF</span>
                    </span>
                  </a>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
