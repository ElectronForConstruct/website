# Steam integration with Construct 3

## Prerequisites

1. First [prepare](/intro/getting-started.html) and [create](/intro/using-the-module.html#creating-the-project) a new Construct 3 project and an Electron project.

2. If you're on Windows, install the required tools. Either: 
    - Visual Studio Build Tools and Python 2.7
    - `npm install --global --production windows-build-tools`
        - Must run cmd prompt or Power shell as Administator

3. Add Greenworks node module:
    - `npm install --save --ignore-scripts git+https://github.com/greenheartgames/greenworks.git`
    - [Download](https://partner.steamgames.com/?goto=%2Fdownloads%2Flist) Steam SDK
    - Extract sdk to `node_modules/greenworks/deps/steamworks_sdk`

4. Add other dependencies: 
    - `npm install --save-dev electron-rebuild`

5. Rebuild greenworks for the current Electron version:
    - `.\node_modules\.bin\electron-rebuild` 

6. Create the required Steam files:
    - Create `steam_appid.txt` with `480` as content. 480 is a test ID (SpaceWar game on Steam)

## Preview

While previewing usin `e4c`, you will now have access to Greenworks features. Though, the overlay will only work as long as you launch Electron through Steam.

To do so, you need to make use of the `preview` executable located in your app. Go to your steam app, add a **non-steam** game and select this executable.
Right click on the entry, go to properties, click on **Set Set Launch Options**. If using Construct 3, enter the remote review url, otherwise enter the Construct 2 regular preview url. Finally, launch your app from steam to have all the benefits: Testing greenworks, live-reload and overlay.

## The overlay is not working!

Sometimes, you need to configure more things for the overlay to work.
In `config.js`, there is a special key `switches`, wich allow you to pass different Chrome/Electron switches to your app. In our case: 

```json
{
    "switches": {
        "in-process-gpu",
        "disable-transparency",
        "disable-renderer-backgrounding"'
    }
}
```

::: tip NOTE
In the case of not moving or rendering every frame, the overlay will be buggy. Place a small (1x1 px) rotating sprite, for example in a corner. That will fix the overlay being not corectly responsive.
:::

For more infos on switches, head over to the Electron [documentation]().

## Building

Before building, you need to add some properties to the `config.js` file. Under the `build` key, specify:

```json
{
    files: [
        "!node_modules/greenworks/deps/**/*"
    ],
    extraFiles: [ "steam_appid.txt" ]
}
```

[`files`](https://www.electron.build/configuration/contents.html#files) will tell the build to not include files under `!node_modules/greenworks/deps/**/*` (which are our dependencies only to build the addon, once done, we don"t need them anymore)

In the contrary, [`extraFiles`](https://www.electron.build/configuration/contents.html#extrafiles) will tell the build to automatically include the `steam_appid.txt` file located at the root of the folder.

You can now use the regular `build` command from `e4c`.

## Using greenworks

### The default Construt 3 plugin
- [Download](https://www.construct.net/en/make-games/addons/84/greenworks) and modify the original addon to work: 
    1. Download the addon
    2. Rename the extension to zip
    3. Extract it
    4. Edit `c3runtime/domSide.js` and replace `./greenworks` to `greenworks`
    5. Rename it back to `.c3p`, zip it again and install it.
- Create a Construct 3 project
- Use the addon's ACEs to interact with Greenworks

::: tip Note
The downsides of this method is that you are required to modify an original file for the build to work.
The addon also have a very limited set of features.
::: 

### Valery Popoff's Javascript plugin
If you are familiar with Javascript development, you can make calls to Greenworks yourself using the [official Greenworks documentation](https://github.com/greenheartgames/greenworks/tree/master/docs).

- Create a Construct 3 project
- Download and install the [plugin](https://www.construct.net/en/make-games/addons/1/javascript)
- Create a scriptfile e.g. greenworks.js
- Instantiate greenworks object, create functions that you can call from JS plugin which in turn call greenworks APIs    
-  Use `self.c2_callFunction` in JS to call back to C3 functions as needed (e.g. on data return or logging)   

See [example project](/GreenWorksTest.c3p) for more information.

::: warn NOTE
Currently, no tests were made for Construct 2
:::

::: tip Note about Steam4C2
I'm sure people are wondering what's about Steam4C2.
There is work in progress with the original author to support the plugin
:::
