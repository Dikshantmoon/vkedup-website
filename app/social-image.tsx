import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageAlt =
  "VKEDUP — Business stories, simplified. Understand business. Think bigger.";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f4f1e8",
          color: "#191c18",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "68px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "760px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            VKEDUP<span style={{ color: "#b18a60" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "54px",
              color: "#727b63",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "4px",
            }}
          >
            BUSINESS STORIES · SIMPLIFIED
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "22px",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-3px",
            }}
          >
            <span>Understand business.</span>
            <span>Think bigger.</span>
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: "670px",
              marginTop: "24px",
              color: "#65675e",
              fontSize: "22px",
              lineHeight: 1.5,
            }}
          >
            Company stories, business models, and growth strategies—made simple.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "68px",
            right: "68px",
            bottom: "68px",
            width: "260px",
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "28px",
            backgroundColor: "#171b18",
            color: "#f4f1e8",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#a6ad91",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            STORIES THAT TEACH
          </div>
          <div
            style={{
              display: "flex",
              color: "#b18a60",
              fontSize: "74px",
              fontWeight: 800,
              letterSpacing: "-5px",
            }}
          >
            V<span style={{ color: "#f4f1e8" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              color: "#f4f1e8",
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            STARTUPS · BUSINESS · GROWTH
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
