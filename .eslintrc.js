module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    camelcase: 'off',
    'comma-dangle': [2, 'always-multiline'],
  },
  overrides: [{
    files: ['*.spec.js'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'no-console': 0,
    },
  }],
}
