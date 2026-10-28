import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
