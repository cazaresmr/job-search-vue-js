module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vitest-globals/env': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:vitest-globals/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
    // Disable any ESLint rules that conflict with Prettier
  }
}
