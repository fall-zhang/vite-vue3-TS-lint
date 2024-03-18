<template>
  <div class="drawer-content">
    <div>
      <el-button @click="showForm = true">弹窗式 Form</el-button>
      <el-button @click="showForm = true">轻量弹窗 Form</el-button>
    </div>
    <DialogForm v-model:visible="showForm" v-model="dialogFormValue" title="新增内容" :form-list="formList"></DialogForm>
    <InlineForm v-model="formValue" :form-list="formList"></InlineForm>
  </div>
</template>

<script lang="ts" setup>
import DialogForm from '@/components/form/dialog-form/index.vue'
import type { FormListType } from '@/components/form/inline-form/form-type'
const showForm = ref(false)
const formValue = reactive({})
const dialogFormValue = reactive({})
const formList = ref<FormListType>([
  { type: 'number', label: '数字输入', prop: 'text' },
  { type: 'number', label: '文本输入', required: true, prop: 'text' },
])
</script>

<style scoped lang="scss">
.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px;

  .drawer-footer {
    display: flex;
    justify-content: flex-end;
    // gap: 20px;
    width: 100%;
  }
}
</style>
<script lang="ts">
export default {
  name: 'DialogFormExample'
}
</script>