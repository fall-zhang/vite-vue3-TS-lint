<script setup lang="ts">
import Motion from "../animation/motion";
import ReQrcode from "@/components/data-display/qrcode";
const emit = defineEmits(['back'])
</script>

<template>
  <Motion class="qrcode-out">
    <ReQrcode text="模拟测试" />
  </Motion>
  <Motion :delay="100">
    <el-divider>
      <p class="">扫码后点击"确认"，即可完成登录</p>
    </el-divider>
  </Motion>
  <Motion :delay="150">
    <el-button class="w-full mt-4" @click="emit('back')">
      返回
    </el-button>
  </Motion>
</template>
<style>
.qrcode-out {
  display: flex;
  align-items: center;
  justify-content: center;
}

.w-full {
  width: 100%;
}

.mt-4 {
  margin-top: 1em;
}
</style>