<!-- doc 文件和 docx 文件的预览功能 -->
<template>
  <div class="table-container">
    <slot name="table-filter">
      <TableFilter @search="onTriggerSearch"></TableFilter>
    </slot>
    <el-table :data="tableData" border>
      <el-table-column label="id" type="index" width="100"></el-table-column>
      <!-- 只渲染一个对应的列 -->
      <template v-for="column in columnOptions" :key="column.props">
        <el-table-column v-if="column.slot === 'eye'" label="name">
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
      <TableFilter @search="onTriggerSearch"></TableFilter>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import TableFilter from './table-filter/TableFilter.vue'
const columnOptions = ref([
  { prop: 'name', key: 'a', label: 'Name', align: 'center', slot: '' },
  { prop: 'date', key: 'b', label: 'Date', align: 'left' },
  { prop: 'hobby', key: 'c', label: 'Hobby', align: 'right' },
  { prop: 'address', key: 'd', label: 'Address' },
])
const tableData = ref([
  { name: 'name', date: 'a', title: 'Name', align: 'center' },
  { name: 'date', date: 'b', title: 'Date', align: 'left' },
  { name: 'hobby', date: 'c', title: 'Hobby', align: 'right' },
  { name: 'address', date: 'd', title: 'Address' },
])

const docDomRef = ref<HTMLDivElement>()
function onTriggerSearch() {

}
</script>

<style scoped lang="scss">
.table-container {
  width: 100%;
  overflow: auto;
}
</style>
