/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
    PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
    PUSHER_TLS: process.env.PUSHER_TLS,
    BROADCAST_URL: process.env.BROADCAST_URL,
    SECRET_KEY: process.env.SECRET_KEY,
  },
  images: { domains: ["payment-gateway.test"] },
};

module.exports = nextConfig;
