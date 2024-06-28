<!-- 通过 json 生成表单 -->
<template>
  <el-button>导出表单为 json</el-button>
  <div class="port-list">
    <div v-for="(option, optIndex) in formOptionList" :key="optIndex">
      <div v-if="Array.isArray(option)" placement="left" width="160px">
        <li class="cell-item link-cell" @click="onChangeSetting(option)">
          <span style="display: flex;">
            {{ option }}
            <HelpTooltip v-if="option.tips" :tip="option.tips" :path="currentPath"></HelpTooltip>
          </span>
          <IconRight class="g-icon-center" size="18px" />
        </li>
      </div>
      <FormItem v-else :receiveValue="currentForm[option.prop]" @change="(value) => onFormValueChange(value, option)"
        :form-option="option"></FormItem>
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
import { genColumn } from './util/genColumn'
import { Right as IconRight, Return as IconReturn, } from '@icon-park/vue-next'
const currentForm = reactive<Record<string, any>>({
  name: ''
})
const formOptionList = ref([
  {
    label: '姓名',
    prop: 'name',
    setters: ['input'],
    default: '送'
  },
  {
    label: '信息',
    prop: 'jobInfo',
    setters: ['array'],
    children: [
      {
        label: '工作任务',
        value: 'job',
        setters: ['input'],
        default: '送'
      },
      {
        label: '工作时间',
        value: 'job',
        setters: ['input'],
        default: '2022-11-11'
      },
    ],
    default: '送'
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
.port-list {
  display: grid;
  grid-template-columns: 1fr 360px;
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

  .show-list-info {
    flex: 1 0 180px;
  }

  .show-list-opt {
    position: sticky;
    width: 80px;
    bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

.show-list-info {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(121, 121, 121, 0.1);
  border-radius: 6px;
  padding: 8px 8px 8px 0;
  margin-right: 12px;

}
</style>
