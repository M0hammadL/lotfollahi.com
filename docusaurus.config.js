// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lotfollahi',
  tagline: 'Machine learning and AI for biomedical science',
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
          editUrl: 'https://github.com/M0hammadL/lotfollahi.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/M0hammadL/lotfollahi.com/tree/main/',
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
        respectPrefersColorScheme: true,
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
          {
            label: 'More',
            position: 'left',
            items: [
              { to: '/software', label: 'Software' },
              { to: '/talks', label: 'Talks' },
            ],
          },
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
      metadata: [
        { name: 'description', content: 'Mo Lotfollahi - Faculty at Wellcome Sanger Institute & Cambridge. Machine learning for single-cell biology, perturbation modeling, and drug discovery.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://lotfollahi.com' },
        { property: 'og:title', content: 'Mo Lotfollahi | Machine Learning and AI for Biomedical Science' },
        { property: 'og:description', content: 'Faculty at Wellcome Sanger Institute & Cambridge. ML for single-cell biology, perturbation modeling, and drug discovery.' },
        { property: 'og:image', content: 'https://lotfollahi.com/img/lotfollahiLab.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mo Lotfollahi | Machine Learning and AI for Biomedical Science' },
        { name: 'twitter:description', content: 'Faculty at Wellcome Sanger Institute & Cambridge. ML for single-cell biology and drug discovery.' },
      ],
    }),
};

module.exports = config;
