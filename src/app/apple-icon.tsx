import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0b0f",
          color: "#ededf2",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -4,
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "#8f96ff" }}>W</span>
        <span>G</span>
      </div>
    ),
    size,
  );
}
