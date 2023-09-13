/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
