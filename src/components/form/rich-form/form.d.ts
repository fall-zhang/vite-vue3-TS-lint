// 简单类型，同 form 表单
type SimpleSetters = 'input' | 'textarea' | 'color' | 'switch' | 'slider' | 'select' | 'number'

// 复杂类型
// function，会提供并且创建一个函数进行书写
// json 会使用 JSON.parse 进行解析的复杂数据
export enum AllSetterType {

}
type SettersComplex = 'function' | 'json'

type SettersDate = 'date-picker' | 'date-range' | 'time-picker' | 'time-range' | 'datetime-range' | 'datetime-range'

// 其它自定义的类型
type SetterCustom = 'custom-array-list' | 'json'
// 一个值的类型是对象还是数组
type SetterRich = 'array' | 'object' | 'flat'

// 嵌套类型，组件嵌套组件
// 以 children 的 keyId 作为 key 的对象构成

type OptionalSelect = Array<{ label: string, value: string | number }>


export interface OptionItem {
  // 属性的 key
  prop: string,
  // 字段描述
  label: string,
  // 设置字段的类型
  setters: Array<SimpleSetters | SettersComplex | SettersDate | SetterRich>,
  optionalValue?: OptionalSelect,
  tips?: string,
  children?: Array<OptionItem>,
  // 默认提供的默认值
  default?: unknown
}

export type FormConfig = {
  name: string
  theme: string
  globalConfig: {
    labelWidth: string | number
  }
  optionList: OptionItem | OptionItem[]
}

// 示例
// {
//   keyId: "show",
//   keyName: "显示",
//   setters: ['switch'], // 多个设置方式，如果是数值，可以采用 slider，滑块
//   optionalVal: [], // 提供 select 或者级联选择调取，可选值
//   tips: "", // 提供的详情介绍
//   default: "",
//   children: [], // 子属性节点
//   当某些属性启动时，可以使用
//   optionEnable: ['!xAxis.max', 'xAxis.min']
//   当想要使用默认填充的时候，可以使用
//   fillValue:[213, 461, 124, 342, 197]
// }