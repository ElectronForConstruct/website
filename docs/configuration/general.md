# General

Configuration file is located inside your project's folder and is called `config.js`.\
It's a javascript file that have the same format as a simple JSON file but advanced users have the possibility to include dynamic configurations. \

The default configuration looks like:

![Default configuration](/default_config.png)

## window

All available options for this key are located in the [Electron official documentation](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions).

## developer
`show_dev_tools`: boolean - true. Whether to open the console developer tools on start.

## project
`name`: string - 'My name'. This string is used as a reference to your project.
  
## Other
`type`: string - null. Has no usage yet.
