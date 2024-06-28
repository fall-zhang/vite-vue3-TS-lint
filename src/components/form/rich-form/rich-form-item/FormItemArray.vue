<!-- 返回一个 array -->
<template>
  <div class="form-item">

  </div>
</template>

<script lang="ts" setup>
const prop = defineProps({
  formOption: {
    type: Object,
    default: () => ({
      type: 'input',
      optional: []
    })
  },
  path: {
    type: Array,
    default: () => ([])
  },
  receiveValue: {
    require: true,
    type: [Object, Number, String, Array, Boolean],
    default: null
  }
})

</script>
<style lang="scss" scoped>
.form-item {
  padding: 6px 24px;
  display: flex;
  align-items: center;

  &.on-line {
    height: 26px;
    // border-bottom: 1px solid #aeaeae67;
  }

  .basic-form-item {
    flex: 1;
  }

  .basic-label {
    display: flex;
    width: 110px;
  }
}

.basic-container {

  .lang-label {
    display: flex;
    justify-content: space-between;
  }
}

.default-container {
  // display: flex;
  // justify-content: space-between;
}

.toggle-icon {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 6px;
  cursor: pointer;
  transition: 0.6s;

  >.reverse {
    transform-origin: center center;
    transform: rotate(0.5turn);
  }
}

.complex-container {
  margin-bottom: 8px;
}

.el-textarea {
  :deep(.el-textarea__inner) {
    max-height: 102px;
  }
}

:deep(.el-textarea__inner) {
  max-height: 120px;
}
</style>