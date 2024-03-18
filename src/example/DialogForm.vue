<template>
  <div class="drawer-content">
    <el-button @click="showForm = true">点击就送</el-button>
    <DialogForm v-model:visible="showForm" v-model="formValue" title="新增内容" :form-list="formList"></DialogForm>
  </div>
</template>

<script lang="ts" setup>
import DialogForm from '@/components/form/dialog-form/index.vue'
import type { FormListType } from '@/components/form/dialog-form/form-type'
const showForm = ref(false)
const formValue = reactive({})
const formList = ref<FormListType>([
  { type: 'number', label: '文本输入', prop: 'text' },
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