# @alattalatta/eslint-config

## Usage

```js
// eslint.config.mjs
import { defineConfig } from 'eslint/config'
import preset from '@alattalatta/eslint-config'

export default defineConfig(preset, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Presets

- `@alattalatta/eslint-config` - TypeScript preset
- `@alattalatta/eslint-config/js` - JavaScript preset
- `@alattalatta/eslint-config/react` - React + TypeScript preset

### JavaScript

```js
// eslint.config.mjs
import { defineConfig } from 'eslint/config'
import preset from '@alattalatta/eslint-config/js'

export default defineConfig(preset)
```

### React

```js
// eslint.config.mjs
import { defineConfig } from 'eslint/config'
import preset from '@alattalatta/eslint-config/react'

export default defineConfig(preset, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```
