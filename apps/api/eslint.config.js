module.exports = [
  {
    ignores: [
      'node_modules',
      'dist',
      'build'
    ],
    languageOptions: {
      parser: require.resolve('@typescript-eslint/parser'),
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // Add any custom rules here if needed
    },
  },
  require('eslint-plugin-eslint-recommended').configs.recommended,
  require('@typescript-eslint/eslint-plugin').configs.recommended,
];
