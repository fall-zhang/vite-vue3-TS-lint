<template>
  <div class="content-layout">
    <div class="title">
      <i class="pmsIconfont" :class="icon"></i>
      <!-- <el-icon class="pmsIconfont" :class="icon" style="vertical-align:center"></el-icon> -->
      <section style="display: flex;justify-content: space-between;align-items: center; padding-left: 0px;width:100%;">
        <slot name="title">
          <div class="title-text">{{ title }}</div>
        </slot>
        <slot name="header-right">
        </slot>
      </section>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const prop = defineProps({
  title: {
    require: false,
    type: String,
    default: ''
  },
  icon: {
    require: false,
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.content-layout {
  flex: 1 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 0;
  border-radius: 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
}

.title {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  user-select: none;
  border-bottom: 1px solid #eee;

  .title-text {
    font-size: 18px;
    font-weight: 550;
  }
}
</style>
