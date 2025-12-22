/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
  formats: ['image/webp'],           // Use WebP format
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],  // Breakpoints
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon sizes
  minimumCacheTTL: 60,               // Cache for 60 seconds
},
  
  // ADD THIS:
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig