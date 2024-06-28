/**
 * 通过 FormOption 生成 tableColumn
 * @param formOption
 */
export const genColumn = (formOption) => {
  const result = formOption.map(item => {
    return {
      prop: item.prop,
      label: item.label
    }
  })
}

/**
 * 通过 tableColumn 生成 formOption
 * @param formOption
 */
export const genFormOption = (tableColumns) => {
  const result = tableColumns.map(item => {
    return {
      prop: item.prop,
      label: item.label
    }
  })
}