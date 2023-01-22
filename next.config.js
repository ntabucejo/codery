/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "fiverr-res.cloudinary.com",
      "assets-global.website-files.com"
    ],
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
