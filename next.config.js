/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['i.scdn.co'], formats: ['image/avif', 'image/webp'], },
}

module.exports = nextConfig
