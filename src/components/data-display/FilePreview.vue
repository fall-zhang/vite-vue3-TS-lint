<template>
  <div style="display: flex;flex-direction: column;align-items: center; ">
    <div v-if="fileType === 'pdf'"
      style="display: flex;width: 100%;flex-direction: column;align-items: center;justify-content: center;width: 720px;">
      <object :data="fileUrl" type="application/pdf" width="720" height="420"></object>
    </div>
    <img v-else-if="fileType === 'jpg'" :src="fileUrl" alt="" style="max-width: 90%;max-height:400px ;">
    <div v-else
      style="width:100%;height: 420px;display: flex;align-items: center;justify-content: center; overflow: auto;">
      <div style="height: 80px;overflow: hidden;">
        <div>暂无内容</div>
      </div>
    </div>
    <el-button @click="onDownLoad">下载</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const props = defineProps({
  // Blob URL
  file: {
    require: true,
    type: [File, Blob],
    default: ''
  },
  fileType: {
    require: true,
    type: String,
    default: ''
  },
  fileUrl: {
    require: true,
    type: String,
    default: '',
    validate(receive: string) {
      ['pdf', 'jpg', 'png', 'gif'].includes(receive)
    }
  }
})
function onDownLoad() {
  const { file, fileUrl, fileType } = props
  if (!file && !fileUrl) {
    ElMessage.error('没有文件内容')
    return
  }
  const link = document.createElement('a')
  const downloadUrl = fileUrl || URL.createObjectURL(file)
  link.href = downloadUrl
  link.download = '文件.' + fileType
  link.click()
  // URL.revokeObjectURL(link.href)
  link.remove()
}
</script>

<style scoped lang="scss"></style>
