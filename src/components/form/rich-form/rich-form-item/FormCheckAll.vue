<!-- 拥有全选功能的 checkbox -->
<template>
  <div>
    <el-checkbox v-model="isCheckAll" :indeterminate="isIndeterminate" @change="onChangeSelectAll">全选</el-checkbox>
    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <el-checkbox-group v-model="checkedList" class="checkbox-container" @change="onChangeSelection">
      <el-checkbox v-for="single in checkList" :key="single.value" :label="single.label">
        {{ single.label }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
const isCheckAll = ref(false)
const isIndeterminate = ref(false)
const checkedList = ref<string[]>([])
const checkList = ref([{
  label: '白色',
  value: 'white',
}])

function onChangeSelectAll(allSelectState: string | number | boolean) {
  if (allSelectState) {
    const allNameList = checkList.value.map(item => item.label)
    checkedList.value = allNameList
  } else {
    checkedList.value = []
  }
  isIndeterminate.value = false
}

function onChangeSelection(value: Array<string | boolean | number>): void {
  const checkedCount = value.length
  console.log('🚀 ~ onChangeSelection ~ value:', value)
  isCheckAll.value = checkedCount === checkedList.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < checkList.value.length
}
</script>

<style lang="scss" scoped></style>
