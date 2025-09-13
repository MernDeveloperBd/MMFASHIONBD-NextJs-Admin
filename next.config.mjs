/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dpd5xwjqp/**', // 👈 your cloud name + allow all paths under it
      },
    ],
  },
};

export default nextConfig;
