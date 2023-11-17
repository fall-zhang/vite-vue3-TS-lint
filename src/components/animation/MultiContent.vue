<template>
  <div>
    <el-button size="small" type="primary" @click="onRandomAdd">
      随机添加节点
    </el-button>
    <el-button size="small" type="danger" @click="onRandomRemove">
      随机删除节点
    </el-button>
    <el-button size="small" type="success" @click="onShuffle">
      随机移动节点
    </el-button>
    <TransitionGroup name="list" tag="ul" class="container">
      <li v-for="(item,index) in list" :key="item" class="item">
        <div>
          {{ '飞翔'+item }}
          <button @click="onDelete(index)">
            删除
          </button>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import shuffle from '@/utils/shuffle'
const list = ref([1, 2, 3, 4, 5])
const current = ref(6)

function onDelete(index: number) {
  list.value.splice(index, 1)
}
function onRandomAdd() {
  const random = Math.floor(Math.random() * (list.value.length + 1))
  list.value = [...list.value.slice(0, random), current.value, ...list.value.slice(random)]
  // list.value = [].concat(current.value)
  current.value++
  console.log(list)
}
function onRandomRemove() {
  const random = Math.floor(Math.random() * list.value.length)
  list.value.splice(random, 1)
}
function onShuffle() {
  list.value = shuffle(list.value)
}
</script>
<script lang="ts">
export default {
  name: 'MultiContent'
}
</script>
<style scoped lang="scss">
.container {
  position: relative;
  padding: 0;

  .item {
    width: 200px
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  // opacity: 0;
  transform: scaleY(0.01) translate(90px, 0);
}

.list-leave-active {
  position: absolute;
}
</style>
