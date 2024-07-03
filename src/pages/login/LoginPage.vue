<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <!-- <SwitchDark class="dark" /> -->
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">Vue Admin</h2>
        </div>
        <div class="login-box">
          <div class="login-form">
            <avatar class="avatar" />
            <!-- 基础登录方式 -->
            <LoginBase v-if="currentPage === 1" />
            <!-- 手机号登录 -->
            <LoginPhone v-if="currentPage === 1" />
            <!-- 二维码登录 -->
            <LoginQrCode v-if="currentPage === 2" />
            <!-- 注册 -->
            <LoginRegister v-if="currentPage === 3" />
            <!-- 忘记密码 -->
            <LoginUpdate v-if="currentPage === 4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
// import LoginForm from "./components/LoginForm.vue";
// import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginPhone from "./components/LoginPhone.vue";
import LoginRegister from "./components/LoginRegister.vue";
import LoginUpdate from "./components/LoginUpdate.vue";
import LoginQrCode from "./components/LoginQrCode.vue";

const currentPage = ref(0)
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
