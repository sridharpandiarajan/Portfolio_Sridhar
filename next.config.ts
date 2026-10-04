import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep the dev compiler cache separate from production builds.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
};
export default nextConfig;
