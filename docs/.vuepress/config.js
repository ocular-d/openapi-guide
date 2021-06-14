module.exports = {
  title: 'OpenAPI Guide',
  description: 'OpenAPI design and style guide',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    sidebar: [
      {
        title: 'Design Guide',
        path: '/design/',
        collapsable: false,
        children: [
          'design/about',
        ]
      },
      {
        title: 'Style Guide',
        path: '/style-guide/',
        collapsable: false,
        children: [
          'style-guide/foo',
        ]
      },
      {
        title: 'Validation & Linting',
        path: '/linting/',
        collapsable: false,
        children: [
          'linting/about',
        ]
    },
  ]
  }
}
