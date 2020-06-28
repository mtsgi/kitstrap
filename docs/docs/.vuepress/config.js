const { description } = require('../../package')
const VERSIONS = [
  '1.0', '0.6'
]

module.exports = {
  title: 'kitstrapドキュメント',
  description: description,
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      title: 'kitstrap',
    },
    '/0.6/': {
      title: 'kitstrap 0.6',
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#e2f0d9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.6/kitstrap.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/0.6/kitstrap-font.css' }]
  ],
  themeConfig: {
    repo: 'mtsgi/kitstrap',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'はじめる',
        link: 'guide/',
      },
      {
        text: 'リファレンス',
        link: 'reference/'
      }
    ],
    locales: {
      '/': {
        selectText: 'バージョン',
        label: '最新',
        sidebar: [
          '/',
          '/guide',
          '/reference',
          '/elements'
        ]
      },
      '/0.6/': {
        selectText: 'バージョン',
        label: '0.6',
        sidebar: [
          '/0.6/',
          '/0.6/guide',
          '/0.6/reference',
          '/0.6/elements'
        ]
      },
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
