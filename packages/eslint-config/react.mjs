import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tselint from 'typescript-eslint'

import base from './index.mjs'

export default tselint.config(base, reactHooks.configs['recommended-latest'], {
  plugins: {
    react,
  },
  rules: {
    'react/button-has-type': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'perfectionist/sort-jsx-props': [
      'warn',
      {
        customGroups: [
          {
            groupName: 'reserved',
            anyOf: [
              { elementNamePattern: 'key' },
              { elementNamePattern: 'dangerouslySetInnerHTML' },
              { elementNamePattern: 'ref' },
            ],
          },
        ],
        groups: ['reserved', 'unknown'],
      },
    ],
    'react/self-closing-comp': 'warn',
  },
})
