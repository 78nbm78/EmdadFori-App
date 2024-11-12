import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "standalone",
  env: {
    DATABASE_URL: process.env.DATABASE_URL || "",
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || "",
    NEXT_PUBLIC_JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET || "",
  },
};

export default nextConfig;
