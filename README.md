## Vite+TypeScript+Vue3+Element

### 配置好工具包，开箱即用

- 内置代码检查工具 eslint
- husky + commitlint + lint-staged 实现推送代码的时候进行强制检查推送内容
- 配置好 element-plus + vue-router
- commitizen 实现自定义提交内容（需要配合 `yarn commit` 使用）
- 后续 vue3 项目可在此基础上进行开发

## 起步

- 克隆当前包到本地
- `yarn` 安装所需依赖
- `yarn prepare` 准备 husky 相关的内容
- 使用 `yarn commit` 进行提交代码

## 施工中

- 添加一些已经预设好的 Component
- [ x ] 更新依赖包，将 Vite 升级到 3.0
- 将自动导入功能进行提取放入其它文件夹内
- 添加 mock 模拟后端
- 将 less 改为 sass，统一为 element 的 css 样式编辑器
