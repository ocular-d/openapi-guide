module.exports = {
  title: 'OpenAPI Guide',
  description: 'OpenAPI design and style guide',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated'
  },
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
  ]
}
