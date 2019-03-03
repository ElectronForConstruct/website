# General

Configuration file is located inside your project's folder and is called `config.js`.\
It's a javascript file that have the same format as a simple JSON file but advanced users have the possibility to include dynamic configurations.

The default configuration looks like:

```js
module.exports = {
  // your configuration here
}
```

It's an empty javascript definition of a module. There is already a default configuration for all keys built inside the cli, you jut have to *override* the one you want to change. \
A complete list of options is available below.

## window

All available options for this key are located in the [Electron official documentation](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions).

## dependencies
When you update the template using the built-in command, the `package.json` file is overriden. If you want to have a custom dependency or override the version of an existing one, you can do it with this key. \
It takes an array of strings of this format: 
- `'electron'`: will install the lastest stable version of electron package from npm
- `'electron@4.0.0'`: will install a specific version of electron package from npm

## plugins
This key take an array of strings of plugin ids to enable. To know more about plugins, go to the [Plugins](/plugins/using-plugins) section.


## developer
- `showChromeDevTools`: boolean - true. Whether to open the chrome console developer tools on start.
- `showConstructDevTools`: boolean - true. Whether to enable the construt developer tools on start.
- `autoClose`: boolean - true. Whether to auto close the window when the construct 3 remote preview connection is lost. `showConstructDevTools` must be true.
- `autoReload`: boolean - true. Whether to auto reload the window when the construct 3 remote preview project is updated. `showConstructDevTools` must be true.


## project
- `name`: string - 'My name'. Not used yet. Can be usefull for plugins or a later usage.
- `description`: string - 'My description'. Not used yet. Can be usefull for plugins or a later usage.
- `author`: string - 'Me'. Not used yet. Can be usefull for plugins or a later usage.
- `branch`: string - 'master'. What Github branch to used when updating the template. Keep 'master' for stable releases or use 'develop' if you want to try new features before everyone else (⚠ Use with caution, it may contain more bugs than master).

## flags
Read more at [Flags](/configuration/flags)

## build
Read more at [Build](/build/)
  
## Other
`type`: string - null. Has no usage yet.
