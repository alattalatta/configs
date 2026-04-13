import tselint from 'typescript-eslint'

import js from './js.mjs'

export default tselint.config(js, {
  extends: [tselint.configs.recommendedTypeChecked],
  languageOptions: {
    ecmaVersion: 'latest',
    parser: tselint.parser,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/method-signature-style': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+', ignoreRestSiblings: true }],
  },
})
