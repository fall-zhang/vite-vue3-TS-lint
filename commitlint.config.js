module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  // 自定义规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'issue', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        '新增', // 新功能（feature）
        '修复', // 修补bug
        '文档', // 文档（documentation）
        '格式', // 格式（不影响代码运行的变动）
        '重构', // 重构（即不是新增功能，也不是修改bug的代码变动）
        '性能', // 提升性能
        '测试', // 增加测试
        '工具', // 开发工具变动(构建、脚手架工具等)
        'fate', // 代码回退
      ]
    ]
  }
}