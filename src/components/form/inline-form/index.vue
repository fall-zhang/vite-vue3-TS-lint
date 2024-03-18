<template>
  <el-form v-bind="$attrs">
    <template v-for="formItem in formList" :key="formItem.prop">
      <div v-if="Array.isArray(formItem)" class="form-multiple" :style="{
    'gridTemplateColumns': `repeat(${formItem.length},1fr)`
  }">
        <GreatFormItem v-for="singleForm in formItem" :key="singleForm.prop" :form-item="singleForm">
        </GreatFormItem>
      </div>
      <template v-else>
        <GreatFormItem :form-item="formItem"></GreatFormItem>
      </template>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormListType } from './form-type'
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
const emits = defineEmits(['update:modelValue', 'update:formValue'])

</script>

<script lang="ts">
export default {
  name: 'InlineForm'
}
</script>
<style lang="scss" scoped>
.form-multiple {
  display: grid;
}
</style>
