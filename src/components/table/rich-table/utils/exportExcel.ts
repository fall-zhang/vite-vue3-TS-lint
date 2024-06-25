import { utils, writeFile } from 'xlsx'

interface DataItem {
  readonly id: string;
  [propName: string]: string;
}

interface Columns {
  dataKey: string;
  key: string;
  title: string;
  width?: number;
  [propName: string]: string | number;
}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 1000)

export const exportExcel = (fileName:string) => {
  const res: string[][] = data.map((item: DataItem) => {
    const arr:string[] = []
    columns.forEach((column: Columns) => {
      arr.push(item[column.dataKey])
    })
    return arr
  })
  const titleList: string[] = []
  columns.forEach((column: Columns) => {
    titleList.push(column.title)
  })
  res.unshift(titleList)
  const workSheet = utils.aoa_to_sheet(res)
  const workBook = utils.book_new()
  utils.book_append_sheet(workBook, workSheet, '数据报表')

  writeFile(workBook, fileName || '导出文件.xlsx')
}
