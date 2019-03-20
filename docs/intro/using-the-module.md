# Using the module

The module is extremely easy to use:
- It's interactive
- No complex flags to pass to the cli
- Adapt to its environment
- **Cross-Platform**
 
All the following demonstrations will be made using cmder on Windows 10

## Creating a new project folder
After the installation of the module using the `npm` command, a new command is registered inside your terminal: `efc` \

Try it now by yourself:
- Open your preferred command prompt tool (e.g. run CMD on Windows)
- Type `efc` and press enter
- A menu will open up where you can press up and down to select an option. Select **Create a New Project** and press `ENTER`
- Type your project's name and press `ENTER` to create it's folder
- USE GIT: If false, this option will generate a standard .gitignore file that excludes common folders from the electron project
- INCLUDE STANDALONE PREVIEW TOOL: The preview tool downloads a standalone exe that allow you to preview with Construct 2 or Steam since it only accepts .exe files

<!-- 
<video width="100%" controls>
  <source src="/init_project.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
-->

After you're done, a new folder will be created with some basic files. You can go directly to it by typing `cd` and the folder name. Then create a new folder inside of it named `app` - this is where your HTML5 exported game will go into. \

Now you can either [configure your project options](/configuration/general.html) or [build your game](/build/building.html). \

<!--
## Previewing a Construct 2 project

To preview a Construct 2 project, you need to make some changes to your Construct 2 editor.

<video width="100%" controls>
  <source src="/set_custom_browser.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

Make this option point to the `preview.exe` file inside your game directory.\
After that, define your preview browser to "Custom" and hit "Preview".

<video width="100%" controls>
  <source src="/set_custom_and_preview.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
-->

## Previewing a Construct project

To preview a Construct project, you can use the `efc preview` command. \
Under Contruct 2, start a regular preview then paste the link inside the cli. \
Under Construct 3, you need to use the remote preview url. (Found under the preview menu).

<!--
<video width="100%" controls>
  <source src="/c3_preview.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
-->

::: tip Tip from the official documentation

" The game is no longer available from the provided URL as soon as you close the Remote Preview dialog. You can open the Remote Preview dialog to its own window to help keep it out of the way, by right-clicking on its caption and selecting Open to popup window. "

:::
