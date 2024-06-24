<template>
  <div>
    <LightDialog ref="light-dialog" v-model:visible="lightDialogVisible" title="文件导入" :validate="lightValidate"
      @submit="onSubmitLightDialog" @cancel="lightDialogVisible = false">
      <el-form-item label="上传文件" name="fileList" :rules="[{ required: true, type: 'array', message: '选择上传文件' }]">
        <el-upload ref="upload-file" :limit="1" class="upload-demo" action="" :auto-upload="false"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <div>一次上传，只能上传一个文件</div>
      </el-form-item>
    </LightDialog>
  </div>
</template>

<script lang="ts" setup>
import LightDialog from './LightFormDialog.vue'
const fileList = ref([])
const lightDialogForm = ref()
const lightDialogVisible = ref(false)
const emit = defineEmits(['update:visible'])
const props = defineProps({
  visible: {
    require: true,
    default: false,
    type: Boolean
  },
  title: {
    require: false,
    default: '',
    type: String
  },
  model: {
    require: false,
    default: () => ({}),
    type: Object
  },
  rules: {
    require: false,
    default: () => ({}),
    type: Object
  }
})
const _this = reactive({
  drawerShow: false,
  submitLoading: false,
})
watch(() => props.visible, (newVal) => {
  _this.drawerShow = newVal
})
watch(() => _this.drawerShow, (newVal) => {
  emit('update:visible', newVal)
})
function onSubmitDrawerFrom() {

}
function lightValidate() {

}
function onSubmitLightDialog() {

}
</script>

<style lang="scss" scoped></style>
