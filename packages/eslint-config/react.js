const base = require('.')

module.exports = {
  ...base,
  extends: [
    ...base.extends,
    "plugin:react-hooks/recommended",
  ],
  plugins: [
    ...base.plugins,
    "react"
  ],
  rules: {
    "react/button-has-type": "warn",
    "react/jsx-key": "error",
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        reservedFirst: ["key", "dangerouslySetInnerHTML", "ref"],
      },
    ],
    "react/self-closing-comp": "warn",
  },
}
