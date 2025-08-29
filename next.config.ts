import type { NextConfig } from "next";

// Replace 'product-list-cart' with your actual repository name
const repoName = 'product-list-cart';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // The basePath is the sub-path where your site will be served.
  basePath: isProd ? `/${repoName}` : '',
  // The assetPrefix is for assets like CSS, images, and JS files.
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
