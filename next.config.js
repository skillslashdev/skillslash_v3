/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillslash-cdn.s3.ap-south-1.amazonaws.com",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
};

module.exports = nextConfig;
