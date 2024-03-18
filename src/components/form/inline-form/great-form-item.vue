<template>
  <el-form-item :label="formItem.label" :prop="formItem.prop">
    <!-- {{ formItem }} -->
    <template v-if="formItem.type === 'input'">
      <el-input :model-value="modelValue" @input="onChangeValue"></el-input>
    </template>
    <template v-else-if="formItem.type === 'number'">
      <el-input-number :model-value="modelValue" @change="onChangeValue"></el-input-number>
    </template>
    <el-checkbox-group v-else-if="formItem.type === 'checkbox-group'" :model-value="modelValue" @change="onChangeValue">
      <el-checkbox v-for="option in formItem.options" :key="option.value" :label="option.value">
        {{ option.label }}
      </el-checkbox>
    </el-checkbox-group>
    <el-radio-group v-else-if="formItem.type === 'radio-group'" :model-value="modelValue" @change="onChangeValue">
      <el-radio v-for="option in formItem.options" :key="option.value" :label="option.value">
        {{ option.label }}
      </el-radio>
    </el-radio-group>
    <el-select v-else-if="formItem.type === 'select'" :model-value="modelValue" @change="onChangeValue">
      <el-option v-for="option in formItem.options" :key="option.value" :label="option.label"
        :value="option.value"></el-option>
    </el-select>
    <el-date-picker v-else-if="formItem.type === 'date-picker'" :model-value="modelValue" type="date"
      value-format="yyyy-MM-dd"></el-date-picker>
  </el-form-item>
</template>

<script setup lang="ts">
import type { FormListItem } from './form-type'
import { throttle } from '@/utils/deBounce'
const props = withDefaults(defineProps<{
  formItem: FormListItem
  modelValue: any
}>(), {
  // formItem() { return {} }
})

// defineProps({
//   formItem: {
//     require: true,
//     type: Object as PropType<FormListItem>,
//     default: () => ({})
//   },
//   modelValue: {
//     require: false,
//     // type: Object as any,
//     default: ''
//   }
// })
const emits = defineEmits(['update:modelValue'])

function onChangeValue(value: any) {
  console.log('🚀 ~ onChangeValue ~ ev:', value)
  throttle(() => {
    console.log('🚀 ~ value:', value)
    emits('update:modelValue', value)
  }, 100, true)
}
</script>

<style scoped lang="scss"></style>
