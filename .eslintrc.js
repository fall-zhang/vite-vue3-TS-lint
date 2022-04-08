module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: 1,
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, 'never'],
    'no-irregular-whitespace': 2,
  },
}
