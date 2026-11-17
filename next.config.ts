import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // keep turbopack from guessing the wrong workspace root (stray lockfiles up the tree)
    root: __dirname,
  },
};

export default nextConfig;
