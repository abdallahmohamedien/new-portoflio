import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as static files from the CDN — no Vercel Image Optimization
    // (avoids Hobby-plan transformation quota / 402 errors). Assets are pre-optimized.
    unoptimized: true,
  },
};

export default nextConfig;
