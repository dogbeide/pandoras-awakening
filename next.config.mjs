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
      {
        protocol: 'https',
        hostname: 'b1122150.smushcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
