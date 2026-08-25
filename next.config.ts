import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All routes static – no server needed after build
  output: "export",
  // Disable next/image remote optimization for static export
  images: { unoptimized: true },
};

export default nextConfig;
