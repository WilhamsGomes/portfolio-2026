type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Renderiza dados estruturados no HTML, escapando `<` para evitar injeção. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
