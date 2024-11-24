/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  env: {
    DATABASE_URL: process.env.DATABASE_URL || "",
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || "",
    JWT_SECRET: process.env.JWT_SECRET || "",
  },
  // images: {
  //   minimumCacheTTL: 900,
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'api-greenmile.liara.run',
  //     },
  //   ],
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/auth",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
