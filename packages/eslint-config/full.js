const base = require('./index')

module.exports = {
  ...base,
  extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking', ...base.extends],
}
