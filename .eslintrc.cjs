/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [0, 'always', { null: 'ignore' }],
    'handle-callback-err': [2, '^(err|error)$'],
    'new-cap': 1,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 0,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': [2, 'functions'],
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-lone-blocks': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-spaced-func': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-unmodified-loop-condition': 2, // 禁止未修改的循环条件
    'no-unneeded-ternary': [
      // 去除不必要的三元表达式
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-useless-call': 2, // 去除无效的.call()或者.apply()
    'no-useless-computed-key': 2, // 去除无效的计算键
    'no-useless-constructor': 1 // 去除class的无效的constructor方法
  }
})
