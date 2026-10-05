import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${SITE_CONFIG.name} - Software Engineer & Frontend Developer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c0c0b",
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(217, 185, 120, 0.15) 0%, transparent 60%)",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          color: "#FAF7F2",
          border: "2px solid #282723",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "10px 22px",
              backgroundColor: "rgba(35, 34, 30, 0.8)",
              border: "1px solid rgba(217, 185, 120, 0.35)",
              borderRadius: "9999px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#34D399",
              }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#E1E0CC",
                letterSpacing: "0.05em",
              }}
            >
              {SITE_CONFIG.domain}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "18px",
              color: "#9E9C8F",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Portfolio • 2026
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#FAF7F2",
            }}
          >
            {SITE_CONFIG.name}
          </h1>
          <p
            style={{
              fontSize: "30px",
              fontWeight: 500,
              margin: 0,
              color: "#D9B978",
            }}
          >
            Software Engineer & Frontend Developer
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#9E9C8F",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Crafting high-performance, responsive web & mobile digital products with clean code and modern aesthetics.
          </p>
        </div>

        {/* Bottom Tech Stack Tags */}
        <div
          style={{
            display: "flex",
            gap: "14px",
          }}
        >
          {["Next.js", "TypeScript", "React", "Flutter", "Tailwind CSS"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  backgroundColor: "#181715",
                  border: "1px solid #38362F",
                  color: "#E1E0CC",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
