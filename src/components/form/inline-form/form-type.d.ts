export type FormListItem = {
  prop: string
  label: string
  // type: 'input' | 'number' | 'color' | 'select' | 'radio-group' | 'checkbox-group' | 'date-picker' | 'date-range' | 'month-picker' | 'month-range' | 'time-picker' | 'time-range'
  type: string
  options?: Record<'label' | 'value', string>[]
  required?: boolean
  style?: ElementCSSInlineStyle
  // bind: {max:99 min:0}
}

export type FormListType = Array<FormListItem | FormListItem[]>
