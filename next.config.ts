import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true, // Enable SWC minification for faster builds
  output: 'standalone',
};

export default nextConfig;
