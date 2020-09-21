module.exports = {
  env: {
    'cypress/globals': true,
  },
  extends: [
    'plugin:cypress/recommended',
  ],
  plugins: [
    'cypress',
  ],
  rules: {
    'cypress/no-unnecessary-waiting': 1,
    'no-unused-expressions': 0,
  },
}
