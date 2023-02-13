module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // ts 会使用类型检查，检查未使用的变量，如果不想使用 ts 的类型检查，可以启用 globals，选择忽略一些全局定义的变量
  // 定义 vue 自动引入的全局变量，防止 eslint 报错
  // globals: {
  //   defineProps: true,
  //   defineEmits: true,
  //   ref: true,
  //   watch: true,
  //   reactive: true
  // },
  // 后面的配置会覆盖前者
  extends: ['standard', 'plugin:vue/vue3-strongly-recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-undef': 0, // 使用未命名变量的检查交给 ts 类型检查器
    // 'no-unused-vars': 0, // 未命名变量检查交给 ts
    'vue/first-attribute-linebreak': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-indent': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 5,
        multiline: 4
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'never'],
    'no-irregular-whitespace': 2,
    '@typescript-eslint/no-explicit-any': 1
  }
}
