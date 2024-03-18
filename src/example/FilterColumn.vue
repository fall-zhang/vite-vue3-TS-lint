<template>
  <el-popover>
    <el-checkbox v-model="state.checkAll" :indeterminate="state.isIndeterminate"
      @change="onCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <div style="width: 320px;max-height: 46vh;overflow: hidden auto;">
      <el-checkbox-group v-model="state.checkColumns" @change="onSingleCheckeChange">
        <el-checkbox v-for="col in state.allColumn" :key="col.prop" :label="col.label" style="width: 100%;">
          {{ col.label }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- <el-button type="primary" text @click="onFilterList">筛选</el-button> -->
    <template #reference>
      <el-button text type="primary" style="color:#0d867f ; cursor: pointer;">
        <slot>筛选</slot>
      </el-button>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { CheckboxValueType } from 'element-plus'
const props = defineProps({
  column: {
    require: true,
    type: Array as PropType<Record<string, string>[]>,
    default: () => ([])
  },
})
const emit = defineEmits(['update:modelValue'])
const state = reactive<{
  checkAll: boolean
  checkColumns: any[]
  allColumn: any[]
  isIndeterminate: boolean
}>({
  checkAll: true,
  checkColumns: [],
  allColumn: [],
  isIndeterminate: true
})
state.allColumn = props.column
state.checkColumns = props.column.map(item => item.label)
state.isIndeterminate = false
onFilterList()

function onFilterList() {
  const commitData = state.allColumn.filter(item => state.checkColumns.includes(item.label))
  emit('update:modelValue', commitData)
}
function onSingleCheckeChange(value: any[]) {
  const checkedCount = value.length
  state.checkAll = checkedCount === state.allColumn.length
  state.isIndeterminate = checkedCount > 0 && checkedCount < state.allColumn.length
}
function onCheckAllChange(val: CheckboxValueType) {
  if (val) {
    state.checkColumns = state.allColumn.map(item => item.label)
  } else {
    state.checkColumns = []
  }
  state.isIndeterminate = false
}
</script>

<style scoped lang="scss"></style>
