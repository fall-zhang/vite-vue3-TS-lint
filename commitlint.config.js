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
        'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
        // { value: '❌issue', name: '问题:    修复 issue 有专门的代号' },
        // { value: '✨新增', name: '新增:    新的内容' },
        // { value: '🐛修复', name: '修复:    修复一个Bug' },
        // { value: '📝文档', name: '文档:    变更的只有文档' },
        // { value: '💄格式', name: '格式:    空格, 分号等格式修复，不影响运行' },
        // { value: '♻️重构', name: '重构:    代码重构，注意和特性、修复区分开' },
        // { value: '⚡️性能', name: '性能:    提升性能' },
        // { value: '✅测试', name: '测试:    添加一个测试' },
        // { value: '🔧工具', name: '工具:    开发工具变动(构建、脚手架工具等)' },
        // { value: '⏪回滚', name: '回滚:    代码回退' }
      ]
    ]
  }
}