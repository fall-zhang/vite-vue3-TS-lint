<template>
  <div class="drawer-content">
    <div class="grid-list">
      <div class="grid-list-item">
        <el-button @click="showForm = true">轻量弹窗 Form</el-button>
      </div>
      <div class="grid-list-item">
        <el-button @click="showForm = true">弹窗式 Form</el-button>
      </div>
      <div class="grid-list-item">
        <el-button @click="showForm = true">文件上传弹窗</el-button>
      </div>
    </div>
    <DialogForm v-model:visible="showForm" v-model="dialogFormValue" title="新增内容" :form-list="formList"></DialogForm>
    <!-- <InlineForm v-model="formValue" :form-list="formList"></InlineForm> -->
  </div>
  <AuthorRender></AuthorRender>
</template>

<script lang="tsx" setup>
import DialogForm from '@/components/dialog/dialog-form/index.vue'
import type { FormListType } from '@/components/form/inline-form/form-type'

function AuthorRender() {
  return <div>pink</div>
}
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
<script lang="tsx">
export default {
  name: 'DialogFormExample'
}
</script>
<style lang="scss">
.grid-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 160px);
  align-content: center;
  justify-content: center;
  align-items: center;

  .grid-list-item {
    align-self: center;
    justify-self: center;
  }
}
</style>