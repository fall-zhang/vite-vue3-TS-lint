<template>
  <el-dialog ref="drawer" v-model:visible="drawerShow" v-dialogDrag direction="rtl" width="480px" :title="title"
    @opened="onOpened">
    <div class="drawer-content">
      <el-form ref="lightForm" label-width="80px" label-position="right" :model="model" size="small">
        <div class="form-content">
          <slot></slot>
        </div>
      </el-form>
      <div class="drawer-footer">
        <el-button class="cancel-button" size="small" @click="cancelSubmit">
          取消
        </el-button>
        <el-button type="primary" size="small" @click="submitFrom">
          确认
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
export default {
  name: 'LightFormDialog',
  props: {
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
  },
  emits: ['submit', 'cancel', 'update:visible'],
  data() {
    return {
      drawerShow: false,
      submitLoading: false,
    }
  },
  watch: {
    visible(newVal) {
      this.drawerShow = newVal
    },
    drawerShow(newVal) {
      this.$emit('update:visible', newVal)
    }
  },
  mounted() {
    this.$emit('update:visible', false)
  },
  methods: {
    submitFrom() {
      const _this = this
      if (this.$refs.lightForm) {
        _this.$refs.lightForm?.validate((valid) => {
          if (valid) {
            _this.$emit('submit')
            _this.drawerShow = false
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    onOpened() {
      if (this.$refs.lightForm) {
        this.$refs.lightForm.resetFields()
      }
      this.$refs.lightForm?.resetFields()
    },
    cancelSubmit() {
      this.$emit('cancel')
      this.$refs.lightForm.resetFields()
      this.drawerShow = false
    }
  }
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
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // padding-left: 15px;
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
