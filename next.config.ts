import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fjord.dropboxstatic.com",
      },
    ],
  },
}

export default nextConfig
