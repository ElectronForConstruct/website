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
    ],
  },
};
