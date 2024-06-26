import { utils, writeFile } from 'xlsx'

interface DataItem {
  // readonly id: string;
  [propName: string]: string ;
}

interface Columns {
  prop: string;
  key: string;
  label: string;
  width?: number;
  [propName: string]: string | number |undefined;
}

type TableData = {
  tableColumn: Columns[],
  tableData:DataItem[]
}

/**
 * 导出表格中的数据
 * @param fileName
 * @param data
 */
export const exportExcel = ({ tableColumn, tableData }:TableData, fileName?:string) => {
  const xlsxData: string[][] = tableData.map((item: DataItem) => {
    const arr:string[] = []
    tableColumn.forEach((column: Columns) => {
      arr.push(item[column.prop])
    })
    return arr
  })
  const titleList: string[] = []
  tableColumn.forEach((column: Columns) => {
    titleList.push(column.label)
  })
  xlsxData.unshift(titleList)
  const workSheet = utils.aoa_to_sheet(xlsxData)
  const workBook = utils.book_new()
  utils.book_append_sheet(workBook, workSheet, '数据报表')

  writeFile(workBook, fileName || '导出文件.xlsx')
}
