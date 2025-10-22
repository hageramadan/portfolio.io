import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "your-api-domain.com",
      'thumbs.dreamstime.com',
    'api.watertank6tons.com'
    ],
  
  },
    experimental: {
    scrollRestoration: false,
  },eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
