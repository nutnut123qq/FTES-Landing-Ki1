const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Parent folder has multiple Next apps; pin Turbopack to this app's node_modules.
  turbopack: {
    root: path.resolve(__dirname)
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**"
      }
    ]
  }
};

module.exports = nextConfig;
