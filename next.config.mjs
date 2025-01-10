/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  // Configuración de dominios
  images: {
    domains: [
      'sinergia-telecomunicaciones.com.mx',
      'sinergia-telecomunicaciones.mx'
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },

  // Redirecciones
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sinergia-telecomunicaciones.mx',
          },
        ],
        destination: 'https://sinergia-telecomunicaciones.com.mx/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
