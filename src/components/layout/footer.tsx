import { Container } from "@/components/ui/primitives";
import { siteConfig } from "@/content/site";
import { getContactItems } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  const contacts = getContactItems();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        {contacts.length > 0 ? (
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {contacts.map((item) => (
              <li key={item.kind}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-fg sm:min-h-0"
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                  {item.external ? <span className="sr-only"> (abre em nova aba)</span> : null}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </footer>
  );
}
