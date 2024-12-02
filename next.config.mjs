/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    minimumCacheTTL: 900,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emdadfori.storage.c2.liara.space",
      },
    ],
  },
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
