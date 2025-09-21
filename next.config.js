/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // IMAGE CONFIGURATION
  images: { 
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128],
    minimumCacheTTL: 86400,
  },
  // PERFORMANCE OPTIMIZATIONS
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // LIGHTHOUSE-FOCUSED EXPERIMENTAL FEATURES
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@heroicons/react'
    ],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP'],
  },
  
  // WEBPACK OPTIMIZATIONS FOR LIGHTHOUSE SCORES
  webpack: (config, { isServer, dev }) => {
    // Production optimizations only
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 100000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              maxSize: 100000,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              maxSize: 100000,
            },
          },
        },
      };
    }
    
    // Reduce bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
