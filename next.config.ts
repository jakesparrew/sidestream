import type { NextConfig } from "next";

// When served under a subpath (e.g. supershift.work/sidestream) set
// NEXT_PUBLIC_BASE_PATH=/sidestream at build time. Empty = served at root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
