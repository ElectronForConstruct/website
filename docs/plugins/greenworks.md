# Greenworks plugin

This plugin aims to help you get your game to support Steam through the Greenworks addon.

## Installing
Please refer to [this section](/plugins/using-plugins.html#installing-a-plugin) to get help on how to install this plugin.

For greenworks self building, please see [Steam Integration with Construct 3](/advanced/c3-steam.html).

## Configuration
This addon support configuration under the `greenworks` key

| key | type | default | description |
| --- | ---- | ------- | ----------- |
| steamId | number | 480 | You game steamId. Default to 480 as it's a steam default game that everyone own. |
| sdkPath | string | "steam_sdk" | Path to your [steam sdk](https://partner.steamgames.com/downloads/list) | 
| localGreenworksPath | string | null | Path to the **root** of your [local greenworks installation](https://github.com/greenheartgames/greenworks) |

## Using this plugin
You can manually configure greenworks using the "Configure greenworks" command. However, it automatically run **before** the **build** command.
If you don't build greenworks yourself, prebuilds will be dowloaded from [my greenworks prebuilds repository](https://github.com/ElectronForConstruct/greenworks-prebuilds/releases) 
