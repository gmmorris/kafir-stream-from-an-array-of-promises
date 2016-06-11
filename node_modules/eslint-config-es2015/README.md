eslint-config-es2015
==================
A [eslint](http://eslint.org/) config for enabling es2015 ecma features in eslint.

## Usage
Extend config in your `.eslintrc`
```json
{
    "extends": "es2015"
}
```

If you want only the es2015 features that are enabled by default in node extend `es2015/node` instead.
```json
{
    "extends": "es2015/node"
}
```

If you also use the `--staging` flag with node extend the `es2015/staging` config.