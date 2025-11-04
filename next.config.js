/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // 🔥 Mantém o SSR funcionando na Vercel
  experimental: {
    appDir: true
  }
};

export default nextConfig;
