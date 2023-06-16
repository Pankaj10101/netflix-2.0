/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Specify other experimental options here if needed
  },
  output: 'export',
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
  // Add the 'export' option to enable static HTML export
};

module.exports = nextConfig;
