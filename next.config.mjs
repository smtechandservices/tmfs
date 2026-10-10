/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/business-setup', destination: '/company-setup', permanent: true }];
  },
};

export default nextConfig;
