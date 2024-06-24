<template>
  <div class="drawer-content">
    <InlineRadio></InlineRadio>
    <div class="grid-list">
      <div class="grid-list-item">
        <el-button @click="showForm = true">轻量弹窗 Form</el-button>
      </div>
      <div class="grid-list-item">
        <el-button @click="showForm = true">弹窗式 Form</el-button>
      </div>
      <div class="grid-list-item">
        <el-button @click="lightDialogVisible = true">文件上传弹窗</el-button>
      </div>
    </div>
    <DialogForm v-model:visible="showForm" v-model="dialogFormValue" title="新增内容" :form-list="formList"></DialogForm>
    <FileUploadDialog v-model:visible="lightDialogVisible" v-model="dialogFormValue" title="新增内容"></FileUploadDialog>
    <!-- <InlineForm v-model="formValue" :form-list="formList"></InlineForm> -->
  </div>
  <!-- <AuthorRender></AuthorRender> -->
</template>

<script lang="tsx" setup>
import DialogForm from '@/components/dialog/dialog-form/index.vue'
import FileUploadDialog from '@/components/dialog/FileUploadDialog.vue'
import type { FormListType } from '@/components/form/inline-form/form-type'
import InlineRadio from '@C/form/select/InlineRadio.vue'
const circle = ref('circle-select')
// function AuthorRender() {
//   return <div>pink</div>
// }
const lightDialogVisible = ref(false)

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

.circle-select-container {
  display: flex;
  align-items: center;
  transition: .2;

  .circle-item {
    cursor: pointer;
    margin: 0 6px;
    height: 12px;
    width: 12px;
    border: 1px solid #000000;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    &.circle-select {
      background-color: #000000;
    }
  }
}
</style>