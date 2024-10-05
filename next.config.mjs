/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pandorasawakening.com',
        port: '',
        pathname: '/**',
    },
    ],
  },
};

export default nextConfig;
