import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Send Your Valentine a Love Letter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const instrumentSerif = await fetch(
    "https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fCjOQ3OCxRqoN6Lwqqh.woff2"
  ).then((res) => res.arrayBuffer());

  const dmSans = await fetch(
    "https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2"
  ).then((res) => res.arrayBuffer());

  // Scattered hearts at fixed positions (mimicking FloatingHearts)
  const hearts = [
    { top: 45, left: 80, size: 18, opacity: 0.1 },
    { top: 90, left: 920, size: 14, opacity: 0.07 },
    { top: 180, left: 160, size: 10, opacity: 0.08 },
    { top: 140, left: 1050, size: 16, opacity: 0.06 },
    { top: 400, left: 100, size: 12, opacity: 0.09 },
    { top: 480, left: 1000, size: 20, opacity: 0.07 },
    { top: 520, left: 300, size: 11, opacity: 0.06 },
    { top: 350, left: 850, size: 13, opacity: 0.08 },
    { top: 60, left: 550, size: 9, opacity: 0.05 },
    { top: 500, left: 700, size: 15, opacity: 0.06 },
    { top: 250, left: 50, size: 22, opacity: 0.05 },
    { top: 300, left: 1100, size: 17, opacity: 0.07 },
  ];

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
          overflow: "hidden",
        }}
      >
        {/* Floating hearts */}
        {hearts.map((h, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: h.top,
              left: h.left,
              fontSize: `${h.size}px`,
              opacity: h.opacity,
              color: "#be123c",
            }}
          >
            ♥
          </div>
        ))}

        {/* Content — matches homepage layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            position: "relative",
          }}
        >
          {/* Heart icon */}
          <div
            style={{
              fontSize: "64px",
              color: "#881337",
              marginBottom: "24px",
              lineHeight: 1,
            }}
          >
            ♥
          </div>

          {/* Title — Instrument Serif */}
          <div
            style={{
              fontSize: "62px",
              color: "#881337",
              fontFamily: "Instrument Serif",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            Send Your Valentine a Love Letter
          </div>

          {/* Subtitle — DM Sans */}
          <div
            style={{
              fontSize: "24px",
              color: "#fb7185",
              fontFamily: "DM Sans",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            You don&apos;t need AI to write something from the heart.
          </div>

          {/* Button */}
          <div
            style={{
              marginTop: "40px",
              background: "linear-gradient(to right, #be123c, #9f1239)",
              color: "white",
              fontFamily: "Instrument Serif",
              fontSize: "24px",
              padding: "16px 48px",
              borderRadius: "9999px",
              boxShadow: "0 4px 14px rgba(159, 18, 57, 0.3)",
            }}
          >
            Begin
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: instrumentSerif,
          style: "normal",
          weight: 400,
        },
        {
          name: "DM Sans",
          data: dmSans,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
