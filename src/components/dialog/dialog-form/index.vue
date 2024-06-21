<template>
  <el-dialog :model-value="visible" width="680px" :title="title" @close="onCloseDialog">
    <InlineForm v-model="currentForm" :form-list="formList"></InlineForm>
    <div class="drawer-footer">
      <el-button class="cancel-button" @click="onCancelSubmit">取消</el-button>
      <el-button type="primary" @click="onSubmitFrom">
        保存
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import type { FormListType } from '../../form/inline-form/form-type'
import InlineForm from '../../form/inline-form/index.vue'
const props = defineProps({
  modelValue: {
    require: true,
    default() { return {} },
    type: Object
  },
  title: {
    require: false,
    default: '新增',
    type: String
  },
  formList: {
    require: true,
    default() { return [{ type: 'number', label: '文本输入', prop: 'text' }] },
    validate(newVal: [any]) {
      if (newVal.length > 8) {
        console.warn('不建议弹窗使用过多 form 内容，当前有 ' + newVal.length + '个')
      }
    },
    type: Array as PropType<FormListType>
  },
  visible: {
    require: true,
    default: false,
    type: Boolean
  }
})

const currentForm = ref({})
const emits = defineEmits(['update:modelValue', 'update:formValue', 'update:visible'])

function onSubmitFrom() {
  emits('update:formValue', false)
}
function onCloseDialog() {
  emits('update:visible', false)
}
function onCancelSubmit() {
  emits('update:visible', false)
}
</script>
<script lang="ts">
export default {
  name: 'DialogForm'
}
</script>
<style lang="scss" scoped>
.form-multiple {
  display: grid;
}

.drawer-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
