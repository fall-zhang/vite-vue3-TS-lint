<template>
  <!-- 查找区域 -->
  <div class="search-zone">
    <el-form label-width="90px" :model="searchForm" size="mini">
      <div style="display: grid;grid-template-columns: repeat(4,1fr);"></div>
      <el-form-item label="名称">
        <el-input v-model="searchForm.name"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-date-picker v-model="searchForm.type" value-format="yyyy" type="year"></el-date-picker>
      </el-form-item>
    </el-form>
    <div>
      <el-button class="sparkButton" type="primary" size="small" @click="onSearchTable">查询</el-button>
      <el-button class="sparkButton" type="primary" size="small" @click="onResetSearch">重置</el-button>
    </div>
  </div>
  <!-- 功能区域 -->
  <div class="table-options">
    <div class="table-action">
      <el-button size="small" @click="onAddPlan">新增</el-button>
      <div v-show="tableSelection.length === 1">
        <el-button size="small" @click="onEditPlan">编辑</el-button>
      </div>
      <div v-show="tableSelection.length > 0">
        <el-button size="small" @click="onRemovePlan">删除</el-button>
      </div>
      <el-button size="small" @click="onExportPlan">导出</el-button>
      <!-- <div class="group-gap" style="height: 20px;width: 2px;background-color: #ccc;margin:0 12px;"></div> -->
      <el-button size="small" @click="onSavePlan">保存</el-button>
    </div>
  </div>
  <el-table :data="tableData" height="100%" @select="onSelectTable" @select-all="onSelectTable">
    <el-table-column type="selection" fixed="left" align="center"></el-table-column>
    <el-table-column :index="getTableIndex" type="index" width="54" label="序号" fixed="left"
      align="center"></el-table-column>
    <div v-for="column in tableColumns" :key="column.prop">
      <el-table-column v-if="column.useSlot === 'relative-line'" class-name="multi-line" v-bind="column">
        <template #default="scope">
          <ul class="cell-group">
            <li>AAA</li>
            <li>BBB</li>
            <li>CCC</li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column v-else-if="column.useSlot === 'dialog'" v-bind="column">
        <template #default="scope">
          <div>{{ scope.row[column.prop] }}</div>
        </template>
      </el-table-column>
      <el-table-column v-else v-bind="column"></el-table-column>
    </div>
  </el-table>
  <div style="display: flex; justify-content: flex-end">
    <el-pagination layout="total, sizes, prev, pager, next, jumper" v-bind="pagination" @size-change="onPageSizeChange"
      @current-change="onPaginationChange"></el-pagination>
  </div>
</template>

<script>
const tableColumns = [
  { prop: 'jhmc', label: '序号', width: 120, align: 'center', useSlot: 'plan-name', },
  { prop: 'xgnr', label: '相关内容', width: 90, align: 'center', useSlot: 'relative-line', },
  { prop: '数量', label: '数量', width: 80, align: 'center', useSlot: 'dialog' },
]
export default {
  name: 'EditPlanShow',
  props: {
  },
  data() {
    return {
      maintainVisible: false,
      searchForm: {
        name: '',
        type: ''
      },
      tableColumns,
      tableData: [],
      tableSelection: [],
      pagination: {
        total: 0,
        currentPage: 1,
        pageSize: 20,
      },
    }
  },
  watch: {
  },
  mounted() {
    this.searchTable()
  },
  methods: {
    onAddPlan() { },
    onEditPlan() { },
    onSavePlan() { },
    onExportPlan() { },
    searchTable() {
    },
    onResetSearch() {
    },
    onSelectTable(selected) {
      this.tableSelection = selected
    },
    onRemovePlan() {
    },
    onPageSizeChange(size) {
      this.pagination.pageSize = size
      this.searchTable()
    },
    onPaginationChange(page) {
      this.pagination.currentPage = page
      this.searchTable()
    },
    onClickPlanName() {
      this.maintainVisible = true
    },
    onSearchTable() {
      this.searchTable()
    },
    onViewDetail(rowInfo) {
      //
    },
    getTableIndex(index) {
      const newIndex = this.pagination.pageSize * (this.pagination.currentPage - 1) + index + 1
      // console.log("🚀 ~ file: EditCandidate.vue:437 ~ getTableIndex ~ index:", index)
      return newIndex
    }
  },
}
</script>

<style scoped lang="scss">
.table-button {
  cursor: pointer;
  color: white;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
}

.search-zone {
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f1f1f1;
}

:deep(.multi-line) {
  // width: ;
  padding: 0;

  .cell {
    padding: 0;

    ul.cell-group {
      li:first-child {
        border-top: none;
      }

      li {
        height: 20px;
        padding: 6px 8px;
        border-top: 1px solid #ebeef5;
        // border-left: 1px solid #ebeef5;
        // border-right: 1px solid #ebeef5;
      }

      li:last-child {
        // border-bottom: 1px solid #000;
        // border:none
      }
    }
  }
}

.sparkButton {
  white-space: nowrap;
  font-weight: 550;
  box-sizing: border-box;
  outline: 0;
  text-align: center;
  background-color: #0d867f;
  color: #ffffff;
  border-radius: 4px;
  border-color: #e2f3f0;
}

.table-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:deep(.el-form--inline) {
  border: none;
}

.table-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:deep(tr.el-table__row.expanded.el-table__row--level-0) {
  font-weight: 800;
}

:deep(.el-table__row.expanded) {
  background-color: #e2e2e2;
}

.activeClass {
  color: #0d867f;
  cursor: pointer;
}
</style>
