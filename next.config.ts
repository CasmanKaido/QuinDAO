import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@reown/appkit', '@reown/appkit-adapter-wagmi', 'wagmi', 'viem'],
  reactCompiler: true,
  webpack: (config, { isServer }) => {
    // Externalize problematic dependencies
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    // Externalize optional wallet SDKs that cause build issues
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@gemini-wallet/core': false,
        '@metamask/sdk': false,
        'porto': false,
        '@solana/kit': false,
      };
    }

    // Add fallbacks for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
      path: false,
      os: false,
    };

    return config;
  },
  turbopack: {},
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
