    - Add steam SDK to node_modules/greenworks/deps/steamworks_sdk
    - npm install // installs Greenworks
    - npm install --save-dev electron-rebuild // installs electron-rebuild
    - node_modules\.bin\electron-rebuild // builds greenworks binaries
    - Create steam_appid.txt with steam_appid ('480' is a test ID, make sure file is text only.)
### Preview app
-   Use e4c in project dir to do remote preview ( see [https://electronforconstruct.armaldio.xyz](https://electronforconstruct.armaldio.xyz/) for instructions)    
-   Overlay will not work (requires Steam to launch app, see below for work around.
    -   Experimental: if 'preview.exe' exists in the project dir, add that 'game' to steam. Before running game, right click on game in left plane, go to properties, change 'Set Launch Options' to the URL of the remote preview. Now remote preview will also work with overlay.
-   Other Greenworks APIs will work (Init, Auth, Cloud, etc.)
### Switches to enable overlay in config.js
-   Add switches[] to config.js, experiment with them, less may be required (fewer the better for compatability, but test on different GPU/OS configs for production), also note requires rendering to be continual, if needed place small transparent rotating sprite if needed.
-   'enable-unsafe-es3-apis',
-   'in-process-gpu',
-   'disable-transparency',
-   'disable-renderer-backgrounding'
###   Build game
-   Export HTML5 to app folder (see [https://electronforconstruct.armaldio.xyz](https://electronforconstruct.armaldio.xyz/) for instructions)
-   Edit Package.json
-   under " build" add the below //removes unneeded dependencies from build and includes steam_appid.txt in builds)
files: [
"!node_modules/greenworks/deps/**/*"
]

extraFiles: [ "steam_appid.txt" ] // installs steam_appid.txt'
-   Build using e4c
-   Launch Steam, Games->Add non steam Game, add game exe in dist\win-unpacked
-   Launch Game from Steam, Overlay and other Steam functionality should work.
###   How to access Greenworks APIs from C3
-   Method One: use Valery Prof Javascript plugin, see: [https://readymag.com/valerypopoff/valerypopoff-js-plugin/](https://readymag.com/valerypopoff/valerypopoff-js-plugin/)
    - Create scriptfile in C3, e.g. greenworks.js    
    -  In a C3 project javascript file, instantiate greenworks object, create functions that you can call from JS plugin which in turn call greenworks APIs    
    -  Use self.c2_callFunction in JS to call back to C3 functions as needed (e.g. on data return or logging)   
    -  This pattern will allow you to have full access to the Greenworks API. However, requries dev to do JS coding and create C3 functions for callbacks. 
    -  See example project for this pattern (also requires installation of VP JS addon.
-   Method Two: Use 'Official' C3 Greenworks Plugin.
    - Requires one modification in c3runtime/domSide.js, change "./greenworks" to "greenworks" (download addon, change to *.zip open archive, edit file, rezip and change back to *.c3addon)
    - Official C3 Greenworks addon is limited in terms of APIs / ACEs.