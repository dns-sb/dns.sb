const withNextra = require('nextra');

module.exports = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})({
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});
