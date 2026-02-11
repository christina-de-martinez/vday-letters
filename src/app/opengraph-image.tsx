import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Send Your Valentine a Love Letter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFF8F0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Scattered hearts background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "280px",
            opacity: 0.04,
            color: "#be123c",
          }}
        >
          ♥
        </div>
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "100px",
            fontSize: "60px",
            opacity: 0.08,
            color: "#be123c",
          }}
        >
          ♥
        </div>
        <div
          style={{
            position: "absolute",
            top: "120px",
            right: "140px",
            fontSize: "40px",
            opacity: 0.06,
            color: "#be123c",
          }}
        >
          ♥
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "200px",
            fontSize: "50px",
            opacity: 0.07,
            color: "#be123c",
          }}
        >
          ♥
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "180px",
            fontSize: "35px",
            opacity: 0.06,
            color: "#be123c",
          }}
        >
          ♥
        </div>

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#be123c",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "72px", marginBottom: "8px" }}>💌</div>
          <div
            style={{
              fontSize: "64px",
              color: "#881337",
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "800px",
            }}
          >
            Send Your Valentine
          </div>
          <div
            style={{
              fontSize: "64px",
              color: "#881337",
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            a Love Letter
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#be8a8a",
              fontFamily: "sans-serif",
              marginTop: "12px",
            }}
          >
            You don&apos;t need AI to write something from the heart.
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#be123c",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
