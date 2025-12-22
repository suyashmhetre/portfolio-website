/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
   ...(process.env.NODE_ENV === 'development'
     ? { typescript: { ignoreBuildErrors: true } }
     : {}),
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
}
export default nextConfig
