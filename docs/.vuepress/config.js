module.exports = {
  title: 'OpenAPI Guide',
  description: 'OpenAPI design and style guide',
  base: "/",
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
    docsRepo: 'ocular-d/openapi-guide',
    docsDir: 'docs',
    docsBranch: 'main',
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
          'linting/rulesets',
        ]
    },
  ]
  }
}
