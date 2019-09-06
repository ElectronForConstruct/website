# Project Structure

```
.
├── .cyn/
├── app/
├── dist/
├── .gitignore
└── config.js
```

## Folders
- `.cyn`: Contain various internal files related to cyn (see [cyn](/intro/cyn-folder))
- `app`: Contain **your** source files
- `dist`: Contain your app after it was built

## Files
- `.gitignore`: Predefined file to ignore files that should not be used with git
- `config.js`: A file containing your configuration. It's what you'll mostly use to customize your build
- `config.{profile}.js`: It's a configuration file, specific to a profile. To know more about profiles, see [Using profiles](/configuration/profiles)
