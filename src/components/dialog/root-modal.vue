<!-- 原生的 root modal -->
<template>
  <button @click="showModal = true">来一个</button>
  <Teleport to="#root">
    <!-- 使用这个 modal 组件，传入 prop -->
    <dialog :class="{ show: showModal }" @click="showModal = false">
      <h3>custom header</h3>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>

<style scoped lang="scss">
.show {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 60px;
  background-color: pink;
}
</style>
