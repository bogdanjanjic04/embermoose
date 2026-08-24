import type { NextConfig } from "next";
import path from "node:path";

// Final home: https://embermoose.github.io (repo transferred to an "embermoose" account/org).
// Until then this builds for https://bogdanjanjic04.github.io/embermoose/ via basePath.
const isPages = process.env.PAGES_BUILD === "1";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isPages ? { basePath: "/embermoose" } : {}),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
