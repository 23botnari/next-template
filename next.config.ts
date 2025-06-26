import type { NextConfig } from 'next'
import '@src/config/env/server.config'
import '@src/config/env/client.config'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
  serverExternalPackages: ['pino-pretty', 'lokijs', 'encoding'],
  reactStrictMode: true,
}

export default nextConfig
