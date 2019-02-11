module.exports = {
  title      : 'ElectronForConstruct',
  description: 'A documentation website about the ElectronForContruct tool. Install it now and get the best performances!',
  themeConfig: {
    displayAllHeaders: true,
    nav    : [
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
        link: 'https://spectrum.chat/electron4construct'
      },
      {
        text: 'Github',
        link: 'https://github.com/ElectronForConstruct',
      },
      {
        text: 'Missing something ?',
        link: 'https://github.com/ElectronForConstruct/website/issues',
      },
    ],
    sidebar: [
      {
        title      : 'Guide',
        children   : [
          [ '/intro/', 'Introduction' ],
          [ '/intro/getting-started', 'Getting Started' ],

          [ '/intro/using-the-module', 'Using the module' ],
        ],
      },
      {
        title   : 'Advanced usage',
        children: [
          // ['/advanced/', "Introduction"],
          // ['/advanced/c3-steam', "Steam integration with Construct 3"]
        ],
      },
      {
        title   : 'Configuration',
        children: [
          [ '/configuration/', 'Introduction' ],
          [ '/configuration/general', 'General' ],
          [ '/configuration/flags', 'Flags' ],
          [ '/configuration/build', 'Build' ],
        ],
      },
      {
        title   : 'Build',
        children: [
          [ '/build/', 'Building your project' ],
        ],
      },
      {
        title   : 'Editor plugins',
        children: [
        ],
      },
      {
        title   : 'FAQ',
        children: [
        ],
      },
    ],
  },
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-85914929-3'
      }
    ]
  ]
};
