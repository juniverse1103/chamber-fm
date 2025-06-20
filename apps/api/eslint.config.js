module.exports = {
  ignores: [
    'node_modules',
    'dist',
    'build'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    node: true,
    es2021: true
  }
};
