> 开箱即用的 vue3 模板

## 起步

- `git clone https://github.com/fall-zhang/vite-vue3-TS-lint` 克隆当前包到本地
- `cd vite-vue3-TS-lint`
- `pnpm i` & `npm i` 安装所需依赖
- 尝试使用 `pnpm commit` 进行提交代码

**线上地址**

- 暂无

## 特性

- 主要框架集成：Vite + TypeScript + Vue3 + Element-plus
- git hook，在提交代码时的钩子
  - husky + commitlint + lint-staged 实现推送代码的时候进行强制检查推送内容
- 自定义推送内容
  - husky + commitizen + cz-customizable 实现统一化推送消息内容
  - commitizen 实现自定义提交内容（需要配合 `pnpm commit` 代替 `git commit -m "message"` 使用
- 使用 ESlint 对代码规范约束（使用 VSCode 开发，建议安装 eslint 插件，并打开 eslint 的代码格式化功能，可作为代码格式化工具）
  - 配置了 `.eslintrc.js` 保证尽量不与 volar 冲突
- 组件的使用
  - 所有自定义组件，都使用 PascalCase 命名并在文件中使用，例如：`MyButton.vue` -> `<MyButton />`
  - 所有全局组件，包括原生和引入的 element-pluse，都使用 kebab-case，例如：`<el-input />`
  - 所有组建的属性，都使用 kebab-case，例如：`<el-input allow-clear />`

## 施工中

**该项目只用于实现模板，提供必要的内容，不提供具体的实现（会有一些页面辅助开发）**

- [ ] 从 playground 中添加一部分通用组件内容
- [ x ] 特殊路由 components，收集所有 components 中的组件，仅在开发环境下可见
- [ x ] 默认解析 `src/views` 下的文件为路由，文件夹以 `_` 开头时会忽略解析。
- [ x ] 读取 Component 下的所有文件，在 `components` 路由下面展示，可自行跳转到 `components` 路由下面查看
- [ x ] 添加一些已经预设好的 Component 该路由支持
- [ x ] css 预处理器为 sass，统一为 element 的 css 样式编辑器
- [ x ] 将自动导入功能进行提取放入其它文件夹内
- [ x ] 添加 collection 收集器，用来收集所有组件
- [ ] 预设一些 icon 提供到另一个文件夹，供用户自行使用

- 该项目只提供组件内容，以及展示组件，不包括页面逻辑之类（只有展示组件的页面，菜单逻辑等，可根据需要自行实现）
- 默认解析 `src/views` 下的文件为路由，文件夹以 `_` 开头时会忽略解析。
- 读取 Component 下的所有文件，在 `components` 路由下面展示，可自行跳转到 `components` 路由下面查看
- 添加一些已经预设好的 Component 该路由支持
- 配置 vue-router 路由
- css 预处理器为 sass，统一为 element 的 css 样式编辑器
- 将自动导入功能进行提取放入其它文件夹内
- 添加 collection 收集器，用来收集所有组件

## FAQ

- 问：为什么不内置 tailwindcss？
- 答：因为 tailwindcss 的出发点是避免重复书写 css 样式，从而导致 css 包体积过大（减小 CSS 体积）。
  因此和 element-plus 配合不是很好，element-plus 本身使用 sass 进行编写，需要引入一些 css 文件，这些文件 tailwindcss 无法优化。
  并且 element-plus 本身可以通过 auto-import-plugin 进行引入，是无需引入 css 文件，但使用 tailwindcss 会引入一些默认文件，导致 element-plus 一些内容失效，需要全量引入 element-plus 的 css 文件解决。（全量引用增加了体积）
  tailwindcss 拥有额外学习成本，并且样式写在 class 内，可能优先级并不足以覆盖原样式看，还需要行内，或者穿透处理，如果强行使用，甚至会增加 css 体积，以及系统运行出错的概率，只有简化 css 书写这一方面值得推荐。
  综上所述，不建议搭配 element-plus 进行使用，当不存在 element-plus 冲突后，再行解决。