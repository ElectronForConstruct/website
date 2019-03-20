# Using the module

The module is extremely easy to use:
- It's interactive
- No complex flags to pass to the cli
- Adapt to its environment
- **Cross-Platform**
 
All the following demonstrations will be made using cmder on Windows 10

## Creating the project
After the installation of the module using the `npm` command, it was registered a new command inside your terminal: `efc` \
Try now by yourself:
- Create an empty directory e.g. ElectronForConstruct
- Open a console and navigate to your freshly created directory
- Type `efc` and watch the magic happening

If the module does not detect the current folder as a project, it prompt you to create one

<!-- 
<video width="100%" controls>
  <source src="/init_project.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
-->

After your folder is fully ready, the module will start showing its features:

<!-- 
<video width="100%" controls>
  <source src="/full_options.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
-->

Your project is now completely setup. You can now go on to the next section where we'll look into how to preview your game using you favorite engine.

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
