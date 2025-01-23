/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll use
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Add any redirects here
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ]
  },
  async rewrites() {
    return [
      // Add any rewrites here
      // {
      //   source: '/api/:path*',
      //   destination: 'http://localhost:5001/api/:path*',
      // },
    ]
  },
  env: {
    // Add any public environment variables here
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig
