import vue from 'eslint-plugin-vue'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...compat.extends(
    'eslint-config-standard',
    'plugin:vue/vue3-recommended',
  ),
  js.configs.recommended,
  {
    plugins: {
      vue,
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: typescriptParser,
        // parser: typescriptParser,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'no-undef': 0, // 未命名变量不报错：当未命名变量的检查交给 ts 类型检查器时使用
      'no-unused-vars': 1, // 未使用的变量
      'comma-dangle': 0,
      'func-call-spacing': 1,
      'space-before-function-paren': 0, // 需要 function 前面加空格

      quotes: [2, 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],

      semi: [2, 'never'],
      'no-irregular-whitespace': 2, // 不能有不规则的空格
      'eol-last': 0, // 所有文件结尾必须包括换行
      'no-promise-executor-return': 2, // 禁止 promise 中使用 return
      'no-await-in-loop': 2,
      'max-nested-callbacks': ['error', 3], // 异步最大回调数
      'no-return-await': 2, // 禁止循环中使用 await
      'prefer-promise-reject-errors': 2, // 使用 new Error 追踪错误
      // vue 错误
      'vue/no-unused-vars': 1,
      'vue/component-tags-order': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/multiline-html-element-content-newline': 0,
      'vue/first-attribute-linebreak': 0,
      'vue/html-closing-bracket-newline': 0,
      'vue/html-indent': 0,
      'vue/no-multiple-template-root': 0,
      'vue/html-self-closing': 0,
      'vue/max-attributes-per-line': 0,
      // ts 相关配置
      '@typescript-eslint/no-explicit-any': 1,
      // 这些是适配相关的配置
      'vue/valid-v-for': 0 // vue 的 v-for 读取不到对应 v-for 中的内容
    },
  }]