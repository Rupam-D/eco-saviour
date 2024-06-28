/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "static.vecteezy.com",
            port: "",
            // pathname: "/account123/**",
          },
          {
            protocol: "https",
            hostname: "utfs.io",
          },
          {
            protocol: "https",
            hostname: "gravatar.com",
          },
        ],
      },
};

export default nextConfig;
