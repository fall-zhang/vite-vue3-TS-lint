<template>
  {{ drawerShow }}
  <el-dialog ref="drawerRef" v-model="drawerShow" direction="rtl" width="480px" :title="title" @opened="onOpened">
    <div class="drawer-content">
      <el-form ref="lightForm" label-width="80px" label-position="right" :model="model">
        <div class="form-content">
          <slot></slot>
        </div>
      </el-form>
      <div class="drawer-footer">
        <el-button class="cancel-button" @click="cancelSubmit">
          取消
        </el-button>
        <el-button type="primary" @click="submitFrom">
          确认
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
const drawerShow = ref(false)
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
const emit = defineEmits(['submit', 'cancel', 'update:visible'])
const lightForm = ref()
const _this = reactive({
  drawerShow: false,
  submitLoading: false,
})
watch(() => props.visible, (newVal) => {
  console.log('🚀 ~ watch ~ newVal:', newVal)
  _this.drawerShow = newVal
})
watch(() => _this.drawerShow, (newVal) => {
  emit('update:visible', newVal)
})
onMounted(() => {
  emit('update:visible', false)
})
function submitFrom() {
  if (lightForm.value) {
    lightForm.value?.validate((valid: boolean) => {
      if (valid) {
        emit('submit')
        _this.drawerShow = false
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
}
function onOpened() {
  if (lightForm.value) {
    lightForm.value.resetFields()
  }
  lightForm.value?.resetFields()
}
function cancelSubmit() {
  emit('cancel')
  lightForm.value.resetFields()
  _this.drawerShow = false
}
</script>

<style scoped lang="scss">
.cancel-button {
  background-color: #e9e9e9;
  color: #242424;

  &:hover {
    color: #242424;
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
  }
}

.form-content {
  min-height: 80px;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  padding: 0px;

  .drawer-footer {
    display: flex;
    justify-content: flex-end;
    // gap: 20px;
    width: 100%;
  }
}

:deep(.el-form-item) {
  margin: 0 0 12px 30px;
}
</style>
