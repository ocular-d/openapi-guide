module.exports = {
  plugins: [
    ['vuepress-plugin-element-tabs', true],
    ['vuepress-plugin-reading-time', true],
    ['@xiaopanda/vuepress-plugin-code-copy', true],
    ['vuepress-plugin-element-tabs', true],
  ],
  title: 'OpenAPI Guide',
  description: 'OpenAPI design, style and documentation guide',
  base: "/openapi-guide/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
  },],
  ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Miriam+Libre:400,700'
  },],
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
    editLinks: true,
    editLinkText: 'Is this doc out of date? Suggest a change!',
    lastUpdated: 'Last Updated',
    repo: 'ocular-d/openapi-guide',
    docsRepo: 'ocular-d/openapi-guide',
    docsDir: 'docs',
    docsBranch: 'main',
    nav: [
      { text: 'Editorial Style Guide', link: 'https://editorial.ocular-d.tech/' }
    ],
    sidebar: [
      {
        title: 'Overview',
        collapsable: false,
        children: [
          'about',
          'acknowledgements',
        ]
      },
      {
        title: 'Design Guide',
        // path: '/design/',
        collapsable: false,
        children: [
          'design/what-is-api-design',
          'design/design-first',
          'design/resources',
        ]
      },
      {
        title: 'Style Guide',
        // path: '/style-guide/',
        collapsable: false,
        children: [
          'style-guide/naming',
          'style-guide/resources-and-collections',
          'style-guide/descriptions',
          'style-guide/summaries',
          'style-guide/http-methods',
          'style-guide/status-codes',
          'style-guide/security',
        ]
      },
      {
        title: 'Validation & Linting',
        // path: '/linting/',
        collapsable: false,
        children: [
          'linting/validation',
          // 'linting/rulesets',
          'linting/ci-cd',
        ]
    },
    {
      title: 'Documentation',
      // path: '/documentation/',
      collapsable: false,
      children: [
        'documentation/api-reference',
        'documentation/quick-start',
        'documentation/how-to',
        'documentation/generate',
      ]
  },
    {
    title: 'Governance',
    // path: '/governance/',
    collapsable: false,
    children: [
      'governance/principles',
      'governance/versioning-deprecation',
    ]
},
  ]
  }
}
