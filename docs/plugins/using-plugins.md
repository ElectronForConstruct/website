# Using plugins

## Installing a plugin

There are several plugins available. You can find a complete list of plugins [here](/plugins/available-plugins).

To add a plugin to your project, you can use the `dependencies` key of the `config.js`. \
It takes an array of dependency. To add `@electronforconstruct/plugin-efc-itch` plugin, do: 
```js
{
  dependencies: [
		'@electronforconstruct/plugin-efc-itch',
  ]
}
```

The use the `Update dependencies` cli command.

Once installed, you also need to enable it. To do so, use the `plugin` key of the `config.js`. \
It is also an array of strings but take the id of the plugin you want to enable. To enable `@electronforconstruct/plugin-efc-itch` plugin, do:
```js
{
  plugin: [
		'itch',
  ]
}
```

That's it! Run `efc` again and you should see the plugin available in the CLI.
