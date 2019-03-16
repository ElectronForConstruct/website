# Using plugins

::: warning
This feature is not ready yet
:::

## Installing a plugin

`efc` include its own plugin manager. 
You can add, update or remove a plugin with respectively `efc plugin add`, `efc plugin remove` and `efc plugin update`
Some plugins are also directly integrated inside `efc` and you only need to enable them.

To enable a plugin, use the `plugin` key of the `config.js`. \
It is an array of strings that take the id of the plugin you want to enable. To enable the greenworks plugin, just add `greenworks` to the array:
```js
{
  plugin: [
		'greenworks',
  ]
}
```

That's it! Run `efc` again and you should see the plugin available through the cli.
