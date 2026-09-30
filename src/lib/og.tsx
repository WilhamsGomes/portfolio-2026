import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

type OgImageInput = {
  eyebrow: string;
  title: string;
  description: string;
  withPortrait?: boolean;
};

/** Gera a imagem de compartilhamento (Open Graph / Twitter) no build. */
export async function renderOgImage({ eyebrow, title, description, withPortrait = false }: OgImageInput) {
  const assets = join(process.cwd(), "src/assets/og");
  const [regular, semibold] = await Promise.all([
    readFile(join(assets, "fonts/Geist-Regular.ttf")),
    readFile(join(assets, "fonts/Geist-SemiBold.ttf")),
  ]);

  const portrait = withPortrait
    ? `data:image/jpeg;base64,${(
        await readFile(join(assets, "wilhams-gomes.jpg"))
      ).toString("base64")}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0b0b0f",
          color: "#ededf2",
          padding: "72px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#8f96ff", letterSpacing: 2 }}>
            {eyebrow.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2 }}>
              {title}
            </div>
            <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.4, color: "#a3a3b1", maxWidth: 720 }}>
              {description}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#8b8b99" }}>
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
        {portrait ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={portrait}
            alt=""
            width={320}
            height={401}
            style={{ marginLeft: 48, alignSelf: "center", borderRadius: 28, border: "1px solid #23232d" }}
          />
        ) : null}
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
