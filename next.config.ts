import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Canonicalize www -> apex domain (nclexprepnation.com) with a
      // permanent 301 so search engines consolidate ranking signals
      // onto a single host instead of splitting them across both.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nclexprepnation.com" }],
        destination: "https://nclexprepnation.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
