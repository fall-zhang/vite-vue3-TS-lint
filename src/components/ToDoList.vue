<script setup lang="ts">
import { ref } from 'vue'
import SearchVue from '@/components/Input/Search.vue'
// import {Button } from ''
// defineProps<{ msg: string }>([;])
const todoList = ref<Array<{ msg: string, done: boolean }>>([])
const doneList = ref<Array<{ msg: string, done: boolean }>>([])
function onAddEvent() {
  todoList.value.push({ msg: '', done: false })
}
function onDoneEvent(index: number) {
  const dropItem = todoList.value.splice(index, 1)
  doneList.value.push(...dropItem)
}
// function
function onDropEvent(index: number) {
  doneList.value.splice(index, 1)
}
const searchData = [
  {
    label: '角色名',
    value: '',
    itemType: 'input',
    field: 'roleName',
    placeholder: '请输入角色名',
    clearable: true
  }
]
</script>

<template>
  <SearchVue :data="searchData" />
  <ElButton @click="onAddEvent">点击添加事件</ElButton>
  <p>未完成事项</p>
  <ul class="list">
    <li v-for="(item, index) in todoList" :key="index" class="list_item">
      <ElInput v-model="item.msg" />
      <ElButton @click="onDoneEvent(index)">完成</ElButton>
    </li>
  </ul>
  <p>已完成事项</p>
  <ul class="list">
    <li v-for="(item, index) in doneList" :key="index" class="list_item">
      <ElTag>{{ item.msg }}</ElTag>
      <ElButton @click="onDropEvent(index)">删除</ElButton>
    </li>
  </ul>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}
.list {
  list-style: none;
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-content: center;
  align-items: center;
  .list_item {
    height: 32px;
    width: 800px;
    font-size: 14px;
    // background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}
// :deep(.el-button) {
//   max-height: 600px; // 最大高度
//   background-color: cyan;
// }
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
