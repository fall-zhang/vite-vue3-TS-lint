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
