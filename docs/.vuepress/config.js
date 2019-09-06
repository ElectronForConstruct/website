module.exports = {
  title      : 'Electron for Construct',
  description: 'A documentation website about the ElectronForContruct tool. Install it now and get the best performances for your games!',
  head       : [
    [ 'link', {
      rel : 'icon',
      href: '/favicon.ico',
    } ],
  ],
  themeConfig: {
    repo             : 'ElectronForConstruct',
    docsRepo         : 'ElectronForConstruct/website',
    editLinks        : true,
    editLinkText     : 'Help us improve this page!',
    docsDir          : 'docs',
    displayAllHeaders: false,
    nav              : [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/intro/',
      },
      {
        text: 'Chat with us!',
        link: 'https://spectrum.chat/electron4construct',
      },
      {
        text: 'Vote for new features',
        link: 'https://electronforconstruct.featureupvote.com',
      },
      {
        text: 'Found an issue ?',
        link: 'https://github.com/ElectronForConstruct/website/issues',
      },
    ],
    sidebar          : [
      {
        title   : 'Guide',
        path: '/intro/',
        children: [
          '/intro/',
          '/intro/getting-started',
          '/intro/using-the-module',
          '/intro/project-structure',
          '/intro/cyn-folder',
        ],
      },
      {
        title   : 'Configuration',
        path: '/configuration/',
        children: [
          '/configuration/',
          '/configuration/general',
          '/configuration/flags',
        ],
      },
      {
        title   : 'Build',
        path: '/build/',
        children: [
          '/build/',
          '/build/building',
        ],
      },
      {
        title   : 'CLI Plugins',
        path: '/plugins/',
        children: [
          '/plugins/',
        ],
      },
      {
        title   : 'Editor Plugins',
        path: '/editor-plugins/',
        children: [
          '/editor-plugins/',
          '/editor-plugins/construct2',
          '/editor-plugins/construct3',
        ],
      },
      {
        title   : 'Recipes',
        path: '/recipes/',
        children: [
          '/recipes/',
          '/recipes/construct2',
          '/recipes/construct3',
        ],
      },
      {
        title   : 'FAQ',
        path: '/faq/',
        children: [
          '/faq/',
        ],
      },
    ],
  },
  plugins    : [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-85914929-3',
      },
    ],
    '@vuepress/nprogress',
  ],
};
