// get env variable
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    loader: 'custom',
    loaderFile: './src/image.loader.js',
    unoptimized: true,
  },
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
