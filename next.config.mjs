/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
   ...(process.env.NODE_ENV === 'development'
     ? { typescript: { ignoreBuildErrors: true } }
     : {}),
  },
    images: { unoptimized: true },
  }
export default nextConfig
