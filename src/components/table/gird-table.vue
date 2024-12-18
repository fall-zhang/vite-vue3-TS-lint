<!-- 使用 grid 搭建的类似于 table 的内容 -->
<!-- 可以逐渐完善 -->
<template>
  <div>
    <div class="table-column table-head">
      <div v-for="item in tableColumn" :key="item.prop">{{ item.label }}</div>
    </div>
    <div v-for="collapseItem in tableData" :key="collapseItem.prop">
      <div class="table-column table-collapse">
        <div class="collapse-icon" :class="tableShowColumn[collapseItem.prop] && 'reverse'"
          @click="onClickCollapse(collapseItem)">
          <el-icon class="el-icon-caret-bottom" />
        </div>
        <div class="collapse-label">{{ collapseItem.label }}</div>
      </div>
      <template v-if="tableShowColumn[collapseItem.prop]">
        <div class="table-column table-content" v-for="dataItem in collapseItem.children" :key="dataItem.index">
          <div v-for="(columnItem, index) in tableColumn" :key="index">
            <div class="table-cell" v-if="columnItem.prop === 'operate'">打包下载</div>
            <div class="table-cell" v-else>{{ dataItem[columnItem.prop] }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data: {
    children: any[]
  }
}>()

const tableColumn = [
  { prop: 'num', label: '名称', width: 480, slot: 'plan-name' },
  { prop: 'jhmc', label: '附件', width: 480, slot: 'plan-name' },
  { prop: 'bhxmsl', label: '意见', width: 140, align: 'center' },
  { prop: 'jhzje', label: '更新时间', width: 180, align: 'center' },
  { prop: 'zjgxsj', label: '更新人', width: 180, align: 'center' },
  { prop: 'operate', label: '操作', width: 180, align: 'center' },
]
const tableData = [
  {
    label: '报告',
    prop: 'dssa',
    children: [
      {
        index: 1,
        jhmc: 'asdfasdfa'
      }
    ]
  },
  {
    label: '建议',
    prop: 'dfdf',
    children: [
      {
        index: 1,
        jhmc: 'asdfasdfa'
      }
    ]
  },
  {
    label: '技术',
    prop: 'sss',
    children: [
      {
        index: 2,
        jhmc: 'asdfasdfa'
      }
    ]
  },
]

const tableShowColumn = ref<Record<string, boolean>>({})

function onPackDownload() {

}
function onClickCollapse(collapseItem: any) {
  tableShowColumn.value[collapseItem.prop] = !tableShowColumn.value[collapseItem.prop]
  console.log(tableShowColumn)
}
</script>

<style lang="scss" scoped>
.table-column {
  display: grid;
  grid-template-columns: 80px 1fr 280px 200px 140px 160px;
  align-items: center;
}

.table-head {
  height: 34px;
  justify-items: center;
  background-color: #e5e5e5;
  margin-bottom: 2px;
}

.table-collapse {
  height: 26px;
  background-color: #e5e5e5;

  .collapse-icon {
    position: relative;
    justify-self: center;
    cursor: pointer;
    transition: 0.3s;
    transform: rotate(-90deg);

    &.reverse {
      transform: rotate(0deg);
    }
  }

  .collapse-label {}
}

.table-content {
  height: 28px;
  justify-items: stretch;
  align-items: stretch;

  .table-cell {
    height: 28px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
  }

  &.hover {
    color: #007770
  }
}
</style>
