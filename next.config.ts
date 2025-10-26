import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "your-api-domain.com",
      'thumbs.dreamstime.com',
    'api.watertank6tons.com'
    ],
    unoptimized: true,
     minimumCacheTTL: 86400,
  
  },
 output: 'export',
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
    experimental: {
    scrollRestoration: false,
  },eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
