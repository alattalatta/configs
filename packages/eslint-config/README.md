# @alattalatta/eslint-config

## Usage

```js
// .eslintrc.js
require('@alattalatta/eslint-config/patch')

module.exports = {
  extends: ['@alattalatta/eslint-config'], // ['@alattalatta/eslint-config/react']
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
}
```
