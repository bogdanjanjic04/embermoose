import { readFileSync } from "node:fs";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ember Moose · Bogdan Janjić";

const moose = `data:image/svg+xml;base64,${readFileSync(
  process.cwd() + "/public/images/brand/embermoose_large_nobackground.svg",
).toString("base64")}`;

export default function OpengraphImage() {

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#16100e",
          padding: "72px",
          color: "#efe6e2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={moose} width={96} height={96} alt="" />
          <div style={{ fontSize: 44, fontWeight: 700, color: "#a9564e" }}>EMBER MOOSE</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>
            Software, games, tools &amp; other experiments.
          </div>
          <div style={{ fontSize: 30, color: "#a99b95", marginTop: 24 }}>
            …and things that probably should have been separate projects.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#86766f",
            borderTop: "2px solid #83352f",
            paddingTop: 24,
          }}
        >
          <div>Bogdan Janjić</div>
          <div>embermoose.github.io</div>
        </div>
      </div>
    ),
    size,
  );
}
