/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    path: "http://localhost:8080/_next/image", // Chemin personnalisé pour l'optimisation des images
    domains: [],
    deviceSizes: [320, 420, 768, 1024, 1200], // Tailles d'appareil prises en charge
    imageSizes: [16, 32, 48, 64, 96], // Tailles d'image prises en charge
    minimumCacheTTL: 60, // Durée minimale de mise en cache
    formats: ["image/webp", "image/avif"], // Seuls les formats 'image/avif' et 'image/webp' sont pris en charge
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
