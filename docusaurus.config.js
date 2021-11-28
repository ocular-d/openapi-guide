/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OpenAPI Guide',
  tagline: 'Docs are cool',
  url: 'https://sven.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  customFields: {
    description:
      'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
  },
  organizationName: 'ocular-d', // Usually your GitHub org/user name.
  projectName: 'openapi-guide', // Usually your repo name.
  // plugins: [
  //   require.resolve('@cmfcmf/docusaurus-search-local')
  // ],
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    //hideableSidebar: true,
    prism: {
      additionalLanguages: ['ini', 'graphql', 'git', 'docker', 'makefile', 'bash', 'python'],
    },
    navbar: {
      title: 'OpenAPI Guide',
      logo: {
        alt: 'Logo',
        src: 'img/ocld-logo.png',
      },
      items: [
        {
          //type: 'doc',
          docId: 'overview',
          to: '/overview',
          position: 'left',
          label: 'Overview',
        },
        {
          //type: 'doc',
          docId: 'upload',
          to: '/tutorials/upload',
          position: 'left',
          label: 'Guides',
        },
        {
          label: 'API Explorer',
          to: '/api',
          target: '_self',
          position: 'right',
          className: 'btn btn-primary',
          //className: 'button button--secondary button--lg'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
          className: 'header-github-link',
          
        },
        //{to: '/help', label: 'Support', position: 'left'},

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Editorial Style Guide',
              href: 'https://editorial.ocular-d.tech/',
            },
            {
              label: 'Markdown Style Guide',
              href: 'https://ocular-d.github.io/styleguide-markdown/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Awesome Docs',
              href: 'https://github.com/testthedocs/awesome-docs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ocular-d',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ocular-d. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateTime: true,
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: 'changelog',
          routeBasePath: 'changelog',
          blogSidebarTitle: 'Documentation updates',
          blogTitle: 'Docs updates',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            routePath: '/api/',
            spec: 'openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#474c55',
          redocOptions: { hideDownloadButton: false },
        },
      },
    ],
  ],

  themes: [
    '@saucelabs/theme-github-codeblock',
  ],
};