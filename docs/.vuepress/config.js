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
    displayAllHeaders: true,
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
        children: [
          '/intro/',
          '/intro/getting-started',
          '/intro/project-structure',
          '/intro/using-the-module',
        ],
      },
      {
        title   : 'Configuration',
        children: [
          '/configuration/',
          '/configuration/general',
          '/configuration/flags',
        ],
      },
      {
        title   : 'Build',
        children: [
          '/build/',
          '/build/building',
        ],
      },
      {
        title   : 'CLI Plugins',
        children: [
          '/plugins/',
          '/plugins/using-plugins',
          '/plugins/sdk',
          '/plugins/available-plugins',
          '/plugins/itch',
          '/plugins/minifier',
          '/plugins/greenworks',
          '/plugins/installer',
          '/plugins/rich-presence',
          '/plugins/crash-reporter',
        ],
      },
      {
        title   : 'Editor Plugins',
        children: [
          '/editor-plugins/',
          '/editor-plugins/construct-2',
          '/editor-plugins/construct-3',
        ],
      },
      {
        title   : 'Recipes',
        children: [
          '/recipes/construct3'
        ],
      },
      {
        title   : 'FAQ',
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
