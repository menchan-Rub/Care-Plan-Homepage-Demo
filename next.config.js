/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: "/Care-Plan-Homepage-Demo", // Cloudflareの場合は不要なのでコメントアウト
}

module.exports = nextConfig 
