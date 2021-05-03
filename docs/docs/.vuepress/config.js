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
      title: 'kitstrap v0.6',
    },
    // '/0.7/': {
    //   title: 'kitstrap v0.7',
    // }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#e2f0d9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/kitstrap.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/mtsgi/kitstrap/d/kitstrap-font.css' }]
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
          '/elements',
          '/form',
          '/fonts',
          '/layouts',
          '/util'
        ]
      },
      '/0.6/': {
        selectText: 'バージョン',
        label: '0.6',
        sidebar: [
          '/0.6/',
          '/0.6/guide',
          '/0.6/reference',
          '/0.6/elements',
          '/0.6/fonts',
          '/0.6/layouts',
          '/0.6/util'
        ]
      },
      // '/0.7/': {
      //   selectText: 'バージョン',
      //   label: '0.7',
      //   sidebar: [
      //     '/0.7/',
      //     '/0.7/guide',
      //     '/0.7/reference',
      //     '/0.7/elements',
      //     '/0.7/fonts',
      //     '/0.7/layouts',
      //     '/0.7/util'
      //   ]
      // },
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
