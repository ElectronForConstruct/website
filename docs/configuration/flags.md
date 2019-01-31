# Flags

The list of supported flags is available in the [Electron official documentation](https://electronjs.org/docs/api/chrome-command-line-switches#--ignore-connections-limitdomains)

All flags go under the switches key

```js
{
  switches: [],  
}
```

## Simple flags

To add a new flag, simple do the following:

```js
{
  switches: [
    'disable-http-cache',
  ],  
}
```

::: tip
Note that flags are added without the preceding double dashes
:::

## Flags with arguments

If you need to pass a flag with an argument, just do the following:

```js
{
  switches: [
    ['--remote-debugging-port', 'port'],
  ],  
}
```
