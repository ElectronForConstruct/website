## Construct 2

First, you need to export your project using C2.

![Export dialog](/export_dialog.png)

1. Open the "Export" dialog
2. Select **HTML5**
3. Export your game to the `app` folder of your Electron project
4. Run the `efc` command and select "Build" or directly `efc build`

## Construct 3

First, you need to export your project using C3.

![Export dialog](/export_dialog_c3.png)

1. Open the "Export" dialog
2. Select **HTML5**
3. Download the exported zip 
4. Extract its content to the `app` folder of your Electron project
5. Run the `efc` command and select "Build" or directly `efc build`

___

::: tip
The command will automatically take care of your `config.js` configuration.
:::

::: tip NOTE
Ticking "minify" is relatively useless for many reasons:
- The algorithm used is not performant and break some plugins
- In some cases, it can even reduce performances
- It greatly increase export time
- Someone who want to steal content will focus on your assets (that are not protected) instead of the code

Note that efc <u>_will include_</u> its own safe and performant minification step in the future.
:::


