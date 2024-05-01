/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_HOST_URL: process.env.REACT_APP_HOST_URL,
  },
};

export default nextConfig;
