<template>
  <div style="height: 600px;width: 800px;">

    <el-button>点击就送</el-button>
    <el-dialog :model-value="modelValue" width="680px" @close="onCloseDialog">
      <el-form>
        <template v-for="formItem in formList" :key="formItem.prop">
          <div v-if="Array.isArray(formItem)" class="form-multiple" :style="{
      'gridTemplateColumns': `repeat(${formItem.length},1fr)`
    }">
            <GreatFormItem v-for="singleForm in formItem" :key="singleForm.prop" :form-item="singleForm">
            </GreatFormItem>
          </div>
          <template v-else>
            <GreatFormItem></GreatFormItem>
          </template>
        </template>
        <div class="drawer-footer">
          <el-button class="cancel-button" size="small" @click="onCancelSubmit">取消</el-button>
          <el-button type="primary" size="small" @click="onSubmitFrom">
            保存
          </el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { FormListType } from './form-type'
const props = defineProps({
  modelValue: {
    require: true,
    default: false,
    type: Boolean
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
    type: Array as PropType<FormListType[]>
  },
  formValue: {
    require: true,
    default() { return {} },
    type: Object
  }
})

const emits = defineEmits(['update:modelValue', 'update:formValue'])

function onCancelSubmit() {

}
function onSubmitFrom() {
  emits('update:formValue', false)
}
function onCloseDialog() {
  emits('update:modelValue', false)
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
</style>
