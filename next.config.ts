import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["jspdf", "html2canvas-pro"],
  },
};

export default nextConfig;
