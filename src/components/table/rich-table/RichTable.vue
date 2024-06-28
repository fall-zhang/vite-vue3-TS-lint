<!-- doc 文件和 docx 文件的预览功能 -->
<template>
  <div class="table-container">
    <el-button @click="onExportFile">导出表格配置（JSON）</el-button>
    <el-button @click="onExportFile">导出表格内容</el-button>
    <slot name="table-filter">
      <TableFilter @search="onTriggerSearch"></TableFilter>
    </slot>
    <el-table :data="tableData" border>
      <el-table-column label="id" type="index" width="100"></el-table-column>
      <!-- 只渲染一个对应的列 -->
      <template v-for="column in columnOptions" :key="column.props">
        <el-table-column v-if="column.slot === 'eye'" v-bind="column">
          <template #default="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column v-else-if="column.slot === 'option'" label="操作" width="100" fixed="right">
          <el-button type="primary">修改</el-button>
        </el-table-column>
        <el-table-column v-else v-bind="column">
          <!-- <el-button type="primary">修改</el-button> -->
        </el-table-column>
      </template>
    </el-table>
    <slot name="table-pagination">
      <TablePagination></TablePagination>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import TableFilter from './table-filter/TableFilter.vue'
import TablePagination from './table-pagination/TablePagination.vue'
import { exportExcel } from './utils/exportExcel'

defineProps({
  // 默认主题色
  theme: {
    require: false,
    type: Object,
    default: () => ({
      primary: '',
      secondary: '',
      otherColor: ''
    })
  },
  // 填充空白
  full: {
    require: false,
    type: Boolean,
    default: false
  }
})
const columnOptions = ref([
  { prop: 'name', key: 'a', label: 'Name', align: 'center', slot: '' },
  { prop: 'date', key: 'b', label: 'Date', align: 'left' },
  { prop: 'hobby', key: 'c', label: 'Hobby', align: 'right' },
  { prop: 'address', key: 'd', label: 'Address' },
])
const tableData = ref([
  { name: 'name', date: 'a', hobby: 'Play' },
  { name: 'date', date: 'b', hobby: 'Date' },
  { name: 'hobby', date: 'c', hobby: 'Drink' },
  { name: 'address', date: 'd', hobby: 'Hang out' },
])
const docDomRef = ref<HTMLDivElement>()

function onTriggerSearch() {

}
function onExportFile() {
  exportExcel({
    tableColumn: columnOptions.value,
    tableData: tableData.value
  }, '默认导出文件.xlsx')
}

</script>

<style scoped lang="scss">
.table-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
