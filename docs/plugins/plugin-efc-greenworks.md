# Greenworks plugin

::: warning
This plugin is intended to support only prebuilt versions of greenworks.
For self building, please see [Steam Integration with Construct 3](/advanced/c3-steam.html).
:::

This plugin aims to help you get your game to support Steam through the Greenworks addon.

## Installing
Please refer to [this section](/plugins/using-plugins.html#installing-a-plugin) to get help on how to install this plugin.

## Configuration
This addon support configuration under the `greenworks` key

| key | type | default | description |
| --- | ---- | ------- | ----------- |
| steamId | number | 480 | You game steamId. Default to 480 as it's a steam default game that everyone own. |
| sdkPath | string | "" | Path to your [steam sdk](https://partner.steamgames.com/downloads/list) | 
