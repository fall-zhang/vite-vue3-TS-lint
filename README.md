> 开箱即用的 vue3 模板

## 起步

- 克隆当前包到本地
- `pnpm i` 安装所需依赖
- `pnpm prepare` 准备 husky 相关的内容
- 使用 `pnpm commit` 进行提交代码

## 特性

- Vite+TypeScript+Vue3+Element
- 内置代码检查工具 eslint
- husky + commitlint + lint-staged 实现推送代码的时候进行强制检查推送内容
- husky + commitizen + cz-customizable 实现统一化推送消息内容
- 配置好 element-plus + vue-router
- commitizen 实现自定义提交内容（需要配合 `yarn commit`，或者 `npm run commit` 使用）
- 后续 vue3 项目可在此基础上进行开发

## 开发规范

- 所有包，都通过大写进行引入，例如：`MyButton.vue`
- 使用 ESlint 代码规范（如果是 vscode 建议在配置中打开 eslint 的代码格式化功能，作为代码格式化工具）
- 所有的包，名称都是 MyButton，使用大写字母

## 施工中

- 该项目只提供组件内容，以及展示组件，不包括页面逻辑之类（只有展示组件的页面，菜单逻辑等，可根据需要自行实现）
- 默认解析 `src/views` 下的文件为路由，文件夹以 `_` 开头时会忽略解析。
- 读取 Component 下的所有文件，在 `components` 路由下面展示，可自行跳转到 `components` 路由下面查看
- 添加一些已经预设好的 Component 该路由支持
- 配置 vue-router 路由
- css 预处理器为 sass，统一为 element 的 css 样式编辑器
- 并且支持 tailwind 支持
- 将自动导入功能进行提取放入其它文件夹内
- 添加 collection 收集器，用来收集所有组件

## 预设 Component

- [ ] 预设一些 icon 提供到另一个文件夹，供用户自行使用
- [ x ] 更新依赖包，将 Vite 升级到 3.0
- [ x ] 特殊路由 components 打包内容仅在开发环境下可见
