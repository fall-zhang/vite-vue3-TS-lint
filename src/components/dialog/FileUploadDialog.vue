<template>
  <LightDialog ref="light-dialog" :visible="lightDialogVisible" title="文件导入" :validate="lightValidate"
    @submit="onSubmitLightDialog" @cancel="lightDialogVisible = false">
    <el-form-item label="上传文件" name="fileList" :rules="[{ require: true, type: 'array', message: '选择上传文件' }]">
      <el-upload ref="upload-file" :limit="1" class="upload-demo" action="" :auto-upload="false"
        :file-list="lightDialogForm.fileList">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <div>一次上传，只能上传一个文件</div>
    </el-form-item>
  </LightDialog>
</template>

<script lang="ts" setup>
const fileList = ref()
const lightDialogVisible = ref(false)
function onSubmitDrawerFrom() {

}
function lightValidate() {

}
</script>

<style lang="scss" scoped></style>
