# SDK
This part will describe how you could write your own `efc` command.

## Plugin types
There are 3 plugin types that are supported by `efc`:
- [Local Single File](#local-single-file)
- [Local Module Folder](#local-module-folder)
- [Npm Module](#npm-module)

## Local Single File
Local Single Files are single javascript class that represent a command. They are very limited in possibility, but can be enough in certain cases. 

### Create a Local Single File
- Create a `plugin` directory in your project
- Download the [`Single File` template from Github](https://github.com/ElectronForConstruct/plugin-templates/single-file_module)
- Develop you plugin
- Enable it and test it

## Local Module Folder
Local Module Folder are complete node modules that export a class that represent a command. \
Contrary to Single Files, They can be extended using node modules, have a build step or anything else that a complete node module can have.

### Create a Local Module Folder
- Create a `plugin` directory in your project
- Create a folder with your plugin id inside the `plugin` directory
- Download the [`Module` template from Github](https://github.com/ElectronForConstruct/plugin-templates/folder_module)
- Develop you plugin
- Enable it and test it

## Npm Module
This is exactly the same as a [Local Module Folder](#local-module-folder) but this one is available on npm.
For the modules to be compatible/searchable, you need to name your plugin `plugin-efc-{id}` and give your command this exact same id.

## API

This part will remain undocumented until the API is stable. Currently the API will change very frequently.
If you're brave enough to start developping a module now, just head over to the [source code of the currently supported plugins](https://github.com/ElectronForConstruct/cli/tree/master/src/actions), [itch](https://github.com/ElectronForConstruct/plugin-efc-itch), [greenworks](https://github.com/ElectronForConstruct/plugin-efc-greenworks).
