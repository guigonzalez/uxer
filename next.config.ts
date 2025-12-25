import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/uxer",
  assetPrefix: "/uxer",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
