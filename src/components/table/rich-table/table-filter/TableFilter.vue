<!-- 筛选功能 -->
<!-- 文字超出后进行隐藏，并且进行弹窗 -->
<template>
  <el-form ref="filterFormRef" label-width="120px" label-position="right" :model="filterForm">
    <div style="display: grid;grid-template-columns: repeat(4,1fr);padding-left: 15px;">
      <template v-for="singleForm in formList" :key="singleForm.key">
        <el-form-item v-if="singleForm.type === 'select'" :label="singleForm.label" prop="specialWorkImportant">
          <el-select v-model="filterForm.specialWorkImportant" style="width: 100%;">
            <el-option value="1.1" label="一类"></el-option>
            <el-option value="1.05" label="二类"></el-option>
            <el-option value="1.0" label="三类"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-else-if="singleForm.type === 'date-picker'" :label="singleForm.label"
          prop="specialWorkProperty">
          <el-date-picker v-model="filterForm.specialWorkStartTime" type="date" value-format="yyyy-MM-dd"
            style="margin:0;width: 100%;" />
        </el-form-item>
        <el-form-item v-else :label="singleForm.label" prop="specialWorkStartTime">
          <el-input v-model="filterForm.specialWorkProperty"></el-input>
        </el-form-item>
      </template>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { VueElement } from 'vue'
const filterFormRef = ref<VueElement>()
const props = defineProps({
  modelValue: {
    require: false,
    type: Object,
    default: () => ({})
  },
  defaultValues: {

  },
  showButtons: {
    require: true,
    type: Array,
    default: () => ['search', 'change', 'reset', 'export']
  },
  // 有重置按钮
  // 重置按钮文字
  resetText: {

  },
  // 查询按钮文字
  searchText: {

  },
  // 列数
  columnNum: {

  },
  // 默认显示个数
  showNum: {
    require: false,
    type: Number,
    default: 2
  }
})
const emit = defineEmits(['search', 'change', 'reset', 'export'])
const formList = ref([
  { label: '备注', key: 'note', defaultValue: '', type: '' },
])
const filterForm = reactive<Record<string, any>>({

})

</script>

<style scoped lang="scss"></style>
