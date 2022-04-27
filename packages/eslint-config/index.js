module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:prettier/recommended",
  ],
  plugins: ["import"],
  rules: {
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent", "index"],
        ],
      },
    ],
    "prettier/prettier": "warn",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: {
          memberTypes: [
            "signature",

            // Fields
            "public-static-field",
            "protected-static-field",
            "private-static-field",

            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",

            "public-abstract-field",
            "protected-abstract-field",
            "private-abstract-field",

            "field",

            // Getters
            "public-static-get",
            "protected-static-get",
            "private-static-get",

            "public-decorated-get",
            "protected-decorated-get",
            "private-decorated-get",

            "public-instance-get",
            "protected-instance-get",
            "private-instance-get",

            "public-abstract-get",
            "protected-abstract-get",
            "private-abstract-get",

            "get",

            // Setters
            "public-static-set",
            "protected-static-set",
            "private-static-set",

            "public-decorated-set",
            "protected-decorated-set",
            "private-decorated-set",

            "public-instance-set",
            "protected-instance-set",
            "private-instance-set",

            "public-abstract-set",
            "protected-abstract-set",
            "private-abstract-set",

            "set",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            "constructor",

            // Methods
            "public-static-method",
            "protected-static-method",
            "private-static-method",

            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",

            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",

            "public-abstract-method",
            "protected-abstract-method",
            "private-abstract-method",

            "method",
          ],
          order: "alphabetically",
        },
        typeLiterals: {
          memberTypes: ["signature", "field", "constructor", "method"],
          order: "alphabetically",
        },
      },
    ],
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_+", ignoreRestSiblings: true },
    ]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  }
}
