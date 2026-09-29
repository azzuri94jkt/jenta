import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F2A1E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "#0F2A1E",
            border: "3px solid #c1ffcb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <span style={{ color: "white", fontSize: 130, fontWeight: 900, lineHeight: 1 }}>
            J
          </span>
        </div>
        <div
          style={{
            color: "white",
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: "-3px",
            marginBottom: 16,
          }}
        >
          JENTA
        </div>
        <div
          style={{
            color: "#c1ffcb",
            fontSize: 28,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Supporting Emerging Technology
        </div>
      </div>
    ),
    { ...size }
  );
}
