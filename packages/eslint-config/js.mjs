import eslint from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
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
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          newlinesBetween: 1,
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent', 'index']],
        },
      ],
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-classes': [
        'warn',
        {
          groups: [
            'index-signature',
            ['property', 'accessor-property', 'function-property'],
            'static-block',
            'constructor',
            ['get-method', 'set-method', 'method'],
          ],
        },
      ],
      'perfectionist/sort-object-types': [
        'warn',
        {
          groups: ['index-signature', 'property', 'method'],
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
