/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
       serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
      domains:['occ-0-116-448.1.nflxso.net']
    }
  }
  
  module.exports = nextConfig