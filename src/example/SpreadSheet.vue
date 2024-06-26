<template>
  <div class="spreadsheet">
    <fan-table style="word-break: break-word" fixed-header :scroll-width="0" :max-height="500" border-y :columns="columns"
      :table-data="tableData" row-key-field-name="rowKey" :virtual-scroll-option="virtualScrollOption"
      :cell-autofill-option="cellAutofillOption" :edit-option="editOption"
      :contextmenu-body-option="contextmenuBodyOption" :contextmenu-header-option="contextmenuHeaderOption"
      :row-style-option="rowStyleOption" :column-width-resize-option="columnWidthResizeOption" />
  </div>
</template>

<script lang="tsx">
import { FanTable } from 'vue-fantable'
const COLUMN_KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
interface ColumnType {
  field: string,
  title: string,
  key: string,
  // is operation column
  operationColumn?: boolean,
  edit?: true,
  width: number,
  fixed?: 'left' | 'right',
  renderBodyCell?: any
}
export default {
  name: 'SpreadSheet',
  components: {
    FanTable
  },
  data() {
    return {
      // start row index
      startRowIndex: 0,
      columnWidthResizeOption: {
        enable: true,
      },
      virtualScrollOption: {
        // 是否开启
        enable: true,
        scrolling: this.scrolling,
      },
      cellAutofillOption: {
        directionX: true,
        directionY: true,
        beforeAutofill: ({
          direction,
          sourceSelectionRangeIndexes,
          targetSelectionRangeIndexes,
          sourceSelectionData,
          targetSelectionData,
        }: any) => { },
        afterAutofill: ({
          direction,
          sourceSelectionRangeIndexes,
          targetSelectionRangeIndexes,
          sourceSelectionData,
          targetSelectionData,
        }: any) => { },
      },
      // edit option 可控单元格编辑
      editOption: {
        beforeCellValueChange: ({ row, column, changeValue }: any) => { },
        afterCellValueChange: ({ row, column, changeValue }: any) => { },
      },
      // contextmenu header
      contextmenuHeaderOption: {
        //  before contextmenu show. 你可以在这里更改 contextmenu 配置
        beforeShow: ({
          isWholeColSelection,
          selectionRangeKeys,
          selectionRangeIndexes,
        }: any) => {
          // do something
        },
        afterMenuClick: ({
          type,
          selectionRangeKeys,
          selectionRangeIndexes,
        }: any) => {
          // do something
        },
        contextmenus: [
          { type: 'CUT', },
          { type: 'COPY', },
          { type: 'SEPARATOR', },
          { type: 'EMPTY_COLUMN', },
          { type: 'SEPARATOR', },
          { type: 'LEFT_FIXED_COLUMN_TO', },
          { type: 'CANCEL_LEFT_FIXED_COLUMN_TO', },
          { type: 'RIGHT_FIXED_COLUMN_TO', },
          { type: 'CANCEL_RIGHT_FIXED_COLUMN_TO', },
        ],
      },
      contextmenuBodyOption: {
        //  before contextmenu show. 你可以在这里更改 contextmenu 配置
        beforeShow: ({
          isWholeRowSelection,
          selectionRangeKeys,
          selectionRangeIndexes,
        }: any) => {
          console.log('---contextmenu body beforeShow--')
          console.log('isWholeRowSelection::', isWholeRowSelection)
          console.log('selectionRangeKeys::', selectionRangeKeys)
          console.log(
            'selectionRangeIndexes::',
            selectionRangeIndexes,
          )
        },
        afterMenuClick: ({
          type,
          selectionRangeKeys,
          selectionRangeIndexes,
        }: any) => {
          console.log('---contextmenu body afterMenuClick--')
          console.log('type::', type)
          console.log('selectionRangeKeys::', selectionRangeKeys)
          console.log('selectionRangeIndexes::', selectionRangeIndexes)
        },
        contextmenus: [
          { type: 'CUT', },
          { type: 'COPY', },
          { type: 'SEPARATOR', },
          { type: 'INSERT_ROW_ABOVE', },
          { type: 'INSERT_ROW_BELOW', },
          { type: 'SEPARATOR', },
          { type: 'REMOVE_ROW', },
          { type: 'EMPTY_ROW', },
          { type: 'EMPTY_CELL', },
        ],
      },
      rowStyleOption: {
        clickHighlight: false,
        hoverHighlight: false,
      },
      tableData: [],
    }
  },
  computed: {
    // current local
    columns() {
      const columns: ColumnType[] = [
        {
          field: 'index',
          key: 'index',
          // is operation column
          operationColumn: true,
          title: '',
          width: 55,
          fixed: 'left',
          renderBodyCell: this.renderRowIndex,
        },
      ]
      COLUMN_KEYS.forEach((keyValue) => {
        columns.push({
          field: keyValue,
          key: keyValue,
          title: keyValue,
          width: 90,
          edit: true,
        })
      })
      return columns
    },
  },
  created() {
    this.initTableData()
  },
  methods: {
    // 渲染 row index
    renderRowIndex({ row, column, rowIndex }: any) {
      return (<span>{rowIndex + this.startRowIndex + 1}</span>)
    },
    scrolling({
      startRowIndex,
      visibleStartIndex,
      visibleEndIndex,
      visibleAboveCount,
      visibleBelowCount,
    }: any) {
      this.startRowIndex = startRowIndex
    },
    initTableData() {
      const tableData = []
      for (let i = 0; i < 5000; i++) {
        const dataItem: any = {
          rowKey: i,
        }
        COLUMN_KEYS.forEach((keyValue) => {
          dataItem[keyValue] = ''
        })
        if (i === 1 || i === 3) {
          dataItem.C = 'YOU'
          dataItem.D = 'CAN'
          dataItem.E = 'TRY'
          dataItem.F = 'ENTER'
          dataItem.G = 'SOME'
          dataItem.H = 'WORDS'
          dataItem.I = '!!!'
        }
        tableData.push(dataItem)
      }
      this.tableData = tableData as any
    },
  },
}
</script>
<style lang="scss">
.spreadsheet {
  height: 880px;
  width: 1200;
  padding: 0 100px;
  margin: 30px 0;
}
</style>
