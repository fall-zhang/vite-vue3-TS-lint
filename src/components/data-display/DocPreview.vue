<template>
  <div style="width:100%;height: 420px;overflow: auto;">
    <el-button @click="onDownLoad">原文下载</el-button>
    <div ref="docDom" style="transform: scale(1);transform-origin: center 0;"></div>
  </div>
</template>

<script lang="ts" setup>
import { renderAsync as renderDoc } from 'docx-preview'
import { ElMessage } from 'element-plus'
const props = defineProps({
  // Blob URL
  // fileURL: {
  //   require: false,
  //   type: String,
  //   default: ''
  // },
  file: {
    require: false,
    type: File,
    default: ''
  }
})
const docDom = ref<HTMLDivElement>()
onMounted(() => {
  renderDoc(props.file, docDom.value).then(() => {

  }).catch((err: any) => {
    throw new Error(err)
  })
})
function onDownLoad() {
  if (!props.file) {
    ElMessage.error('没有文件内容')
    return
  }
  const fileURL = URL.createObjectURL(props.file)
  const link = document.createElement('a')
  link.download = 'Word 文档.docx'
  link.href = fileURL
  link.click()
  // URL.revokeObjectURL(link.href)
  link.remove()
}
</script>

<style scoped lang="scss"></style>
