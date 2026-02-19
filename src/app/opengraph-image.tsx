import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Native School — Free Curriculum, Worksheets & Lesson Plans";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1a3a52",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(250,246,244,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Warm glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(228,156,149,0.30) 0%, transparent 70%)",
          }}
        />
        {/* Cool glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(122,158,139,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "64px 72px",
            position: "relative",
          }}
        >
          {/* Top: domain badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                background: "rgba(228,156,149,0.18)",
                border: "1.5px solid rgba(228,156,149,0.35)",
                borderRadius: 100,
                padding: "8px 20px",
                color: "#e49c95",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ainative.school
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(250,246,244,0.08)",
                border: "1.5px solid rgba(250,246,244,0.15)",
                borderRadius: 100,
                padding: "8px 20px",
                color: "rgba(250,246,244,0.7)",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Free · No Sign-Up · Australian Curriculum V9
            </div>
          </div>

          {/* Middle: headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#FAF6F4",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Free Homeschool
              <br />
              <span style={{ color: "#e49c95" }}>Worksheets &amp; Guides</span>
            </div>
            <div
              style={{
                fontSize: 26,
                color: "rgba(250,246,244,0.75)",
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: 720,
              }}
            >
              Australian Curriculum V9 · Foundation to Year 10 · Mathematics &amp; English
            </div>
          </div>

          {/* Bottom: stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              background: "rgba(250,246,244,0.07)",
              border: "1.5px solid rgba(250,246,244,0.12)",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            {[
              { value: "262+", label: "Printable Worksheets" },
              { value: "11", label: "Year Levels" },
              { value: "2", label: "Subjects" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  flex: 1,
                  padding: "24px 32px",
                  borderRight:
                    i < 2 ? "1.5px solid rgba(250,246,244,0.10)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: 42,
                    fontWeight: 700,
                    color: "#e49c95",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: "rgba(250,246,244,0.60)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
