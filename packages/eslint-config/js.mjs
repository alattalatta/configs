import eslint from '@eslint/js'
import importX from 'eslint-plugin-import-x'
import prettier from 'eslint-plugin-prettier/recommended'
import tselint from 'typescript-eslint'

export default tselint.config(
  {
    extends: [eslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: importX,
    },
    rules: {
      'import/no-duplicates': 'warn',
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent', 'index']],
        },
      ],
      'no-undef': 'off',
    },
  },
  prettier,
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
)
