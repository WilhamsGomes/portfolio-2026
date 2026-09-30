import { cx } from "@/components/ui/primitives";

type CodeSymbol = {
  text: string;
  /** Posição horizontal e vertical dentro da faixa decorativa, em %. */
  x: number;
  y: number;
  size: string;
  tone: "accent" | "muted";
  delay: number;
  /** Oculta em telas pequenas para não poluir a área do título. */
  desktopOnly?: boolean;
};

const symbols: CodeSymbol[] = [
  { text: "</>", x: 0, y: 30, size: "text-2xl lg:text-4xl", tone: "accent", delay: 0 },
  { text: "{ }", x: 26, y: 70, size: "text-lg lg:text-2xl", tone: "muted", delay: 1.2 },
  { text: "=>", x: 48, y: 15, size: "text-xl lg:text-3xl", tone: "accent", delay: 2.4 },
  { text: "( )", x: 70, y: 60, size: "text-base lg:text-xl", tone: "muted", delay: 0.6 },
  { text: "[ ]", x: 88, y: 20, size: "text-lg lg:text-2xl", tone: "muted", delay: 1.8, desktopOnly: true },
  { text: "&&", x: 14, y: 0, size: "text-sm lg:text-base", tone: "muted", delay: 3, desktopOnly: true },
  { text: ";", x: 60, y: 95, size: "text-lg lg:text-2xl", tone: "accent", delay: 2, desktopOnly: true },
];

/**
 * Símbolos de código flutuando acima do título do hero. Puramente decorativo:
 * CSS apenas, oculto para leitores de tela e parado com prefers-reduced-motion.
 */
export function HeroCodeDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-full mb-6 h-16 select-none font-mono sm:h-20 lg:mb-10 lg:h-32"
    >
      {symbols.map((symbol) => (
        // O símbolo vem de um pseudo-elemento para não entrar no conteúdo textual da página.
        <span
          key={symbol.text}
          data-symbol={symbol.text}
          className={cx(
            "absolute leading-none before:content-[attr(data-symbol)] motion-safe:animate-float",
            symbol.size,
            symbol.tone === "accent" ? "text-accent/45" : "text-subtle/40",
            symbol.desktopOnly && "hidden lg:block",
          )}
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            animationDelay: `${symbol.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
