module.exports = [
  {
    ignores: [
      'node_modules',
      'dist',
      'build'
    ],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // Add any custom rules here if needed
      // Example: '@typescript-eslint/no-unused-vars': 'warn',
    },
  }
];
