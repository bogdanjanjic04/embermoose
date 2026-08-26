import type { NextConfig } from "next";
import path from "node:path";

// Root build: https://bogdanjanjic04.github.io (no basePath).
// Path build: https://bogdanjanjic04.github.io/embermoose/ (basePath /embermoose).
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
