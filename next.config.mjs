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
          {
            protocol: "https",
            hostname: "encrypted-tbn0.gstatic.com",
          },
          {
            protocol: "https",
            hostname:"as1.ftcdn.net"
          },
          {
            protocol:"https",
            hostname:"i.pinimg.com"
          },
          {
            protocol:"https",
            hostname:"d33wubrfki0l68.cloudfront.net"
          }
        ],
      },
};

export default nextConfig;
