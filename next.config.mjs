/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/business-setup', destination: '/company-setup', permanent: true },
      // Company setup hubs aren't built yet; send them to their card on the
      // setup page until they are (temporary, so browsers don't cache it).
      { source: '/company-setup/mainland', destination: '/company-setup#mainland', permanent: false },
      { source: '/company-setup/free-zones', destination: '/company-setup#free-zone', permanent: false },
      { source: '/company-setup/offshore', destination: '/company-setup#offshore', permanent: false },
      // Practices have no hub pages; their URLs land on the matching section
      // of /services (the homepage service cards link here).
      { source: '/banking', destination: '/services#banking', permanent: false },
      { source: '/tax', destination: '/services#vat', permanent: false },
      { source: '/accounting-audit', destination: '/services#accounting', permanent: false },
      { source: '/corporate-services', destination: '/services#compliance', permanent: false },
    ];
  },
};

export default nextConfig;
