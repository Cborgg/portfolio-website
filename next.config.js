/*@type {import('next').NextConfig} 
const nextConfig = {}

module.exports = nextConfig*/
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['images.unsplash.com'],
  },
};


  
