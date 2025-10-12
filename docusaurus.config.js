// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lotfollahi',
  tagline: 'Machine learning for cellular biology',
  favicon: 'img/favicon.ico',

  url: 'https://lotfollahi.com',
  baseUrl: '/',
  trailingSlash: true,


  organizationName: 'M0hammadL',
  projectName: 'lotfollahi.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
        disableSwitch: false,
      },
      navbar: {
        logo: {
          alt: 'Lotfollahi Lab',
          src: 'img/lotfollahiLab.jpg',
          // srcDark: 'img/logo-dark.svg',
          width: 140,
          height: 40,
        },
        items: [
          { to: '/', label: 'Home', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          { to: '/Lab', label: 'The Lab', position: 'left' },
          { to: '/research', label: 'Research', position: 'left' },
          { to: '/publications', label: 'Publications', position: 'left' },
          { to: '/blog', label: 'News', position: 'left' },
          { to: '/software', label: 'Software', position: 'left' },
          { to: '/talks', label: 'Talks', position: 'left' },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Mo Lotfollahi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
