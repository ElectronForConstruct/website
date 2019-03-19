# Steam integration with Construct 3
> [BETA] - Written by MikalDev

See the greenworks plugin [documentation](/plugins/greenworks) on adding greenworks keys to the project config.js.

Currently use Electron 3.1.6 (Electron 4.x have had intermittent crash errors with greenworks/steam).

## Preview

While previewing using `efc`, you will now have access to Greenworks features. Though, the overlay will only work as long as you launch Electron through Steam.

To do so, you need to make use of the `preview` executable located in your app. Go to your steam app, add a **non-steam** game and select this executable.
Right click on the entry, go to properties, click on **Set Set Launch Options**. If using Construct 3, enter the remote review url, otherwise enter the Construct 2 regular preview url. Finally, launch your app from steam to have all the benefits: Testing greenworks, live-reload and overlay.

### Running executable
- Must have Steam running and user logged in
- Must have valid steam_appid.txt
- Must launch your executable from Steam for overlay to work (currently steam/greenworks/electron only have working overlay on Windows)

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

For more infos on switches, head over to the Electron [documentation](/configuration/flags).

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
