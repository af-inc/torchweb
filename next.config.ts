import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't run ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail the build if there's a TypeScript error
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
