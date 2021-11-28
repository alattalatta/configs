# @alattalatta/eslint-config

## Usage

```js
// .eslintrc.js
require('@alattalatta/eslint-config/patch')

module.exports = {
  extends: ['@alattalatta/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```
