//next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dclaevazetcjjkrzczpc.supabase.co',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
      {
        protocol: 'https',
        hostname: 'nflqlmosaxtmwsqaqokx.supabase.co',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
    ],
  },
  //output: "export",
};

export default nextConfig;

