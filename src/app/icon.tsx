import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B0B12",
        color: "#D8FF45",
        fontFamily: "Arial, sans-serif",
        fontSize: 210,
        fontWeight: 900,
        letterSpacing: -22,
      }}
    >
      BQ
    </div>,
    size
  );
}
