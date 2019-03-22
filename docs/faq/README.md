# FAQ

## During build, I got an error `Unable to commit changes`
> While setting icons, the `rcedit` tool is invoqued and often flaged as a virus. \
Since it's a false positive, you should disable your antivirus or add an exception.

## My app crashes with `--in-process-gpu`
> This is a known issue for Electron 4.x. \
The solution is to use the generated shortcut for windows. \
Fr other platforms, there is no other ways than passing the argument directly to the executable.
