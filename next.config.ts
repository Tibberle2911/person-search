import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
import path from 'path';

const config = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  return {
    reactStrictMode: true,
    // Place dev artifacts in a different folder to reduce OneDrive locking collisions
    distDir: isDev ? '.next-dev' : undefined,
    // Migrate from deprecated experimental.turbo to top-level turbopack config
    turbopack: {
      // Silence root inference warning by explicitly setting the root
      root: __dirname,
    },
    webpack: (config, { isServer }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname),
      };
      return config;
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
  }
}

export default config;

