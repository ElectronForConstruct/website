# Minifier plugin

This plugin aims to minify your project sources to reduce the final size and prevent thiefs from stealing your code

## Installing
Please refer to [this section](/plugins/using-plugins.html#installing-a-plugin) to get help on how to install this plugin.

## Configuration
The entry to add to the `plugins` key to enable it is `minifier`
This addon support configuration under the `minify` key

| key | type | default | description |
| --- | ---- | ------- | ----------- |
| ignore | Array\<string\> | ['data.js', 'offline.js'] | An array of strings that should not be minified |

## Using this plugin
This plugin runs automatically before the build and preview steps.
