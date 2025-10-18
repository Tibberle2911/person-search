import type { NextConfig } from "next";
import path from 'path';
import fs from 'fs';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Configure Turbopack root to this workspace and silence inferred root warnings
  turbopack: {
    root: __dirname,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
  // Ensure Next traces files relative to this project (OneDrive nested folder can confuse it)
  outputFileTracingRoot: __dirname,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;

