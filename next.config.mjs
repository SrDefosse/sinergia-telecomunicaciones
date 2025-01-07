/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  // Configuración de dominio
  env: {
    DOMAIN: 'sinergia-telecomunicaciones.com.mx',
  },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ]
  },

  // Optimizaciones de imágenes
  images: {
    domains: ['sinergia-telecomunicaciones.com.mx'],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },

  // Configuración de webpack
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },

  // Redirecciones
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Configuración del sitemap
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  }
};

export default nextConfig;
