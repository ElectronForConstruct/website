# Steam integration with Construct 3
> [BETA] - Written by MikalDev

## Prerequisites

1. First [prepare](/intro/getting-started.html) and [create](/intro/using-the-module.html#creating-the-project) a new Construct 3 project and an Electron project.

2. If you're on Windows, install the required tools. Either: 
    - Visual Studio Build Tools and Python 2.7
    - `npm install --global --production windows-build-tools`
        - Must run cmd prompt or PowerShell as Administator
    - If not already installed, install [git](https://git-scm.com/download/win)

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

While previewing usin `efc`, you will now have access to Greenworks features. Though, the overlay will only work as long as you launch Electron through Steam.

To do so, you need to make use of the `preview` executable located in your app. Go to your steam app, add a **non-steam** game and select this executable.
Right click on the entry, go to properties, click on **Set Set Launch Options**. If using Construct 3, enter the remote review url, otherwise enter the Construct 2 regular preview url. Finally, launch your app from steam to have all the benefits: Testing greenworks, live-reload and overlay.

## The overlay is not working!

Sometimes, you need to configure more things for the overlay to work.
In `config.js`, there is a special key `switches`, wich allow you to pass different Chrome/Electron switches to your app. In our case: 

```json
{
    "switches": {
        "in-process-gpu",
    }
}
```

::: tip NOTE
In the case of not moving or rendering every frame, the overlay will be buggy. Place a small (1x1 px) rotating sprite, for example in a corner. That will fix the overlay being not corectly responsive.
:::

For more infos on switches, head over to the Electron [documentation]().

## Building

Update `config.js` for your app like below (used for GreengrindsExtendedTest project):
```json
module.exports = {
	"build" : {
		"asarUnpack": [
		"**/greenworks/**"
		],
 
		files: [
			"!**/node_modules/greenworks/**",
			"!**/node_modules/app-builder-bin/**",
			"!**/node_modules/app-builder-lib/**",
		],
		appId: 'com.yourcompany.grindstest',
		productName: 'GrindsTest',
		copyright: 'Copyright © 2018 YourCompany',
	},
	"greenworks" : {
		"steamId" : 480, // Your App ID (480 is a test app id)
		"sdkPath" : "./node_modules/greenworks/deps/steamworks_sdk", // Path to downloaded SDK
		"useLocalBuild" : true,
	},

	"switches": [
		"in-process-gpu",
	],

	"project" : {
		name: "GrindsTest",
		description : "GrindsTest",
		author : "YourCompany",
		branch : "master",
	},

	window: {
		width: 800,
		height: 600,
		fullscreen: false,
		frame: false,
		transparent: false,
		toolbar: false,
		alwaysOnTop: false,
	},

	developer: {
		showConstructDevTools: true, // Turn off for build
		autoClose: true,
		autoReload: true,
		showChromeDevTools: false,
	},

	dependencies: [
		'@electronforconstruct/plugin-efc-greenworks',
	],

	plugins: [
		'greenworks',
	]
}
;
```
```
efc install-deps
```

Install greenworks libraries to top level of project in greenworks dir
```
efc greenworks
```


Construct 3: Export GreengrindsExtendedTest project to html5
Download, unzip project zip and put contents in GrindsTest\app
```
efc build
```

## Using greenworks, two methods

### Use The Greengrinds plugin (includes example project)
[Greengrinds Addon](https://www.construct.net/en/make-games/addons/244/greengrinds) 

### Valery Popoff's Javascript plugin
If you are familiar with Javascript development, you can make calls to Greenworks yourself using the [official Greenworks documentation](https://github.com/greenheartgames/greenworks/tree/master/docs).

- Create a Construct 3 project
- Download and install the [plugin](https://www.construct.net/en/make-games/addons/1/javascript)
- Create a scriptfile e.g. greenworks.js
- In greenwork.js, require the greenworks modules, instantiate greenworks object, create functions that you can call from JS plugin which in turn call greenworks APIs.
- For some guidance in this see the official greenworks docs and unzip the Greengrinds plugin and look at the domSide.js code.
-  Use `self.c2_callFunction` in JS to call back to C3 functions as needed (e.g. on data return or logging)   


::: warning NOTE
Currently, no tests were made for Construct 2
:::

::: tip Note about Steam4C2
I'm sure people are wondering what's about Steam4C2.
There is work in progress with the original author to support the plugin
:::
