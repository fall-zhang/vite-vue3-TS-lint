<!-- 通过 json 生成表单 -->
<template>
  <el-button>导出表单为 json</el-button>
  <div class="info-content">
    <div class="gen-form-content">
      <div v-for="(option, optIndex) in formOptionList" :key="optIndex">
        <div v-if="Array.isArray(option)" class="form-multiple" :style="{
          'gridTemplateColumns': `repeat(${option.length},1fr)`
        }">
          <FormItem v-for="singleForm in option" :key="singleForm.prop" :receiveValue="currentForm[singleForm.prop]"
            @change="(value) => onFormValueChange(value, singleForm)" :form-option="singleForm">
          </FormItem>
        </div>
        <FormItem v-else :receiveValue="currentForm[option.prop]" @change="(value) => onFormValueChange(value, option)"
          :form-option="option"></FormItem>
      </div>
    </div>
    <!-- 当前的值{{ currentForm }} -->
    <div>
      {{ currentForm }}
    </div>
  </div>
  <el-button type="primary" @click="onGenTable">生成表格</el-button>
  <div></div>
</template>

<script setup lang="ts">
import { OptionItem } from './form';
import { genColumn } from './util/genColumn'
// import { Right as IconRight, Return as IconReturn, } from '@icon-park/vue-next'
const currentForm = reactive<Record<string, any>>({
  name: '',
  jobInfo: []
})
const formOptionList = ref<Array<OptionItem[] | OptionItem>>([
  {
    label: '姓名',
    prop: 'name',
    setters: ['input'],
    default: '送'
  },
  [{
    label: '性别',
    prop: 'gender',
    setters: ['input'],
    default: '送'
  }, {
    label: '年龄',
    prop: 'age',
    setters: ['number'],
    default: '送'
  }],
  {
    label: '信息',
    prop: 'jobInfo',
    setters: ['array'],
    children: [
      {
        label: '工作任务',
        prop: 'job',
        setters: ['input'],
        default: '送'
      },
      {
        label: '工作时间',
        prop: 'job',
        setters: ['input'],
        default: '2022-11-11'
      },
    ],
    default: []
  }
])
const mainForm = reactive({})
function onFormValueChange(value: any, option: any) {
  // console.log("🚀 ~ onFormValueChange ~ option:", option)
  currentForm[option.prop] = value
  // console.log("🚀 ~ onFormValueChange ~ value:", value)
}
function onGenTable() {
  genColumn(formOptionList.value)
}

</script>

<style scoped lang="scss">
.info-content {
  display: grid;
  grid-template-columns: 1fr 360px;
}

.gen-form-content {
  .form-multiple {
    display: grid;
  }
}

.lightButton {
  white-space: nowrap;
  font-weight: 550;
  box-sizing: border-box;
  outline: 0;
  text-align: center;
  color: #399c96;
}

.show-list {
  display: flex;
  border-radius: 4px;
  margin-bottom: 8px;

  .show-list-opt {
    position: sticky;
    width: 80px;
    bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
