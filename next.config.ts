// filepath: /c:/Users/Adriano-V-R/Desktop/apiDBD/dbd-api/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dbd.tricky.lol/api/:path*', // Proxy para o endpoint da API
      },
    ];
  },
};

export default nextConfig;
