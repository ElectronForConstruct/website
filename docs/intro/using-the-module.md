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

<video width="100%" controls>
  <source src="/init_project.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

Once you have one and you're located in it, you need to install `node_modules`.

If not already done manually, the module will help you:

<video width="100%" controls>
  <source src="/install_deps.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

After your folder is fully ready, the module will start showing its features:

<video width="100%" controls>
  <source src="/full_options.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

You're ready, you project is setup. You can now go on to the next section where we'll look into how to preview your game using you favorite engine.

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

## Previewing a Construct 3 project

To preview a Construct 3 project, you need to use the "Remote Preview" feature, which required a paid license. \
Start by opening a project and select "Remote Preview" under the preview menu. \
A small window with a QR code or n URL appear. \
Copy this url. \
Within the `efc` cli, select "Preview Construct 3" and paste the URL previously copied.

<video width="100%" controls>
  <source src="/c3_preview.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

::: tip Tip from the official doc

" The game is no longer available from the provided URL as soon as you close the Remote Preview dialog. You can open the Remote Preview dialog to its own window to help keep it out of the way, by right-clicking on its caption and selecting Open to popup window. "

:::
