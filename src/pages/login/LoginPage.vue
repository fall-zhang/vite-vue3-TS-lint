<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">Vue Admin</h2>
        </div>
        <!-- 基础登录方式 -->
        <LoginBase v-if="currentPage === 0" @forget="currentPage = 4" />
        <Motion v-if="currentPage === 0" :delay="350">
          <Motion :delay="300">
            <div class="other-login-type">
              <el-button v-for="(item, index) in loginType" :key="index" @click="currentPage = index + 1"
                size="default">
                {{ item }}
              </el-button>
            </div>
          </Motion>
          <el-form-item>
            <el-divider>
              <p class="text-gray-500 text-xs">
                第三方登录
              </p>
            </el-divider>
            <div class="third-part-logo">
              <span v-for="(item, index) in thirdParty" :key="index" :title="item.title">
                <component :is="item.icon" />
              </span>
            </div>
          </el-form-item>
        </Motion>
        <!-- 手机号登录 -->
        <LoginPhone v-if="currentPage === 1" @back="currentPage = 0" />
        <!-- 二维码登录 -->
        <LoginQrCode v-if="currentPage === 2" @back="currentPage = 0" />
        <!-- 注册 -->
        <LoginRegister v-if="currentPage === 3" @back="currentPage = 0" />
        <!-- 忘记密码 -->
        <LoginForget v-if="currentPage === 4" @back="currentPage = 0"  />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
// import LoginForm from "./components/LoginForm.vue";
// import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginBase from "./components/LoginBase.vue";
import LoginPhone from "./components/LoginPhone.vue";
import LoginRegister from "./components/LoginRegister.vue";
import LoginForget from "./components/LoginForget.vue";
import LoginQrCode from "./components/LoginQrCode.vue";
import Motion from './animation/motion'
import { Alipay, Weibo, Wechat, TencentQq, Avatar } from "@icon-park/vue-next";
const loginType = ref(['手机登录', '二维码登录', '注册'])

const thirdParty = shallowRef([
  {
    title: '腾讯 QQ',
    icon: TencentQq
  },
  {
    title: '微博',
    icon: Weibo
  },
  {
    title: '微信',
    icon: Wechat
  },
  {
    title: '支付宝',
    icon: Alipay
  },
])
const currentPage = ref(0)
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
