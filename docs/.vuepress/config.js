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

          [ '/cli/using-the-module', 'Using the module' ],
        ],
      },
      {
        title   : 'Advanced usage',
        children: [
        ],
      },
    ],
  },
};
