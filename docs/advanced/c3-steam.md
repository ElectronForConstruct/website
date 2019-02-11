# Steam integration with Construct 3

1. First [prepare](http://localhost:8080/intro/getting-started.html) and [create](http://localhost:8080/intro/using-the-module.html#creating-the-project) a new Construct 3 project and an Electron project. \

2. If you're on Windows, install the required tools. Either: 
- Visual Studio Build Tools and Python 2.7
- `npm install --global --production windows-build-tools`

3. Add Greenworks node module:
- `npm install --save --ignore-scripts git+https://github.com/greenheartgames/greenworks.git`
- [Download](https://partner.steamgames.com/?goto=%2Fdownloads%2Flist) Steam SDK
- Extract sdk to 