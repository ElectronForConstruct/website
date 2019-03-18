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

## plugins
This key takes an array of strings of plugin ids to enable. To know more about plugins, go to the [Plugins](/plugins/using-plugins) section.


## developer
| key | type | default | description|
|-----|------|---------|------------|
| showChromeDevTools | boolean | *dev* | Whether to open the chrome console developer tools on start.
| showConstructDevTools | boolean | *dev* | Whether to enable the construt developer tools on start.
| autoClose | boolean | *dev* | Whether to auto close the window when the construct 3 remote preview connection is lost. `showConstructDevTools` must be true.
| autoReload | boolean | *dev* | Whether to auto reload the window when the construct 3 remote preview project is updated. `showConstructDevTools` must be true.
| __**overlay**__ | | | |
| .position | {top\|bottom}-{left\|right} | null | xxx |
| .content | string/html | null | xxx |


## project
| key | type | default | description|
|-----|------|---------|------------|
| name | string | 'My name' | Your project name |
| description | string | 'My description' | Your project description |
| author | string | 'Me' | Your name |
| version | string | '0.0.0' | The current version of your project |

## flags
Read more at [Flags](/configuration/flags)

## build
| key | type | default | description|
|-----|------|---------|------------|
| dir | string | Current active directory | The directory to use as source for the build |
| asar | boolean | true | Whether or not packaging game sources inside an asar compressed file |
| out | string | 'dist' | The directory where to put your builds |
| overwrite | boolean | true | Whether or not to override builds already present in the `out` directory |
| extraResource | Array\<string\> | [] | Extra resources that needs to be included alongside your game files |
| ignore | Array\<string\> | preview*, node_modules\/greenworks, node_modules\/app-builder-bin, node_modules\/app-builder-lib | Path from `dir` to be excluded from the build |
| icon | string | projectDirectory/build | Path to the icon that should be used for the final executable

The whole build configuration is available at the [electron-packager official documentation](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md).

For more information on the building process, read more at [Build](/build/)
  
## Other
| key | type | default | description|
|-----|------|---------|------------|
| electron | string | 3.1.6 | Override build and preview electron version
| errorLogging | boolean | true | Whether or not to send us error reports
| singleInstance | boolean | false | If true, only one instance of your application can be run at the same time

::: tip Note
The mention to *dev* or *prod* means that for:
- *dev*, the value is true when previewing, false after building.
- *prod*, the value is false when previewing, true after building.
:::
