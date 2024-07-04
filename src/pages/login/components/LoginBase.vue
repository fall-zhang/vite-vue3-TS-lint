<!-- 基础登录方式 -->
<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules" size="large">
    <Motion :delay="100">
      <el-form-item :rules="[{
        required: true,
        message: '请输入账号', trigger: 'blur'
      }]" prop="username">
        <el-input v-model="ruleForm.username" clearable placeholder="账号" :prefix-icon="User" />
      </el-form-item>
    </Motion>

    <Motion :delay="150">
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" clearable show-password placeholder="密码" :prefix-icon="Lock" />
      </el-form-item>
    </Motion>

    <Motion :delay="200">
      <el-form-item prop="verifyCode">
        <el-input v-model="ruleForm.verifyCode" clearable placeholder="验证码" :prefix-icon="Shield">
          <template v-slot:append>
            <IdentifyCode v-model="imgCode" />
          </template>
        </el-input>
      </el-form-item>
    </Motion>

    <Motion :delay="250">
      <div class="login-btn">
        <el-checkbox v-model="checked">
          <span class="flex">
            <select v-model="loginDay" :style="{
              width: loginDay < 10 ? '10px' : '16px',
              outline: 'none',
              background: 'none',
              appearance: 'none'
            }">
              <option value="1">1</option>
              <option value="7">7</option>
              <option value="30">30</option>
            </select>
            天内免登录
            <Info></Info>
          </span>
        </el-checkbox>
        <el-button link type="primary">
          忘记密码
        </el-button>
      </div>
      <el-button class="full-button" size="default" type="primary" :loading="loginBtnLoading"
        :disabled="loginBtnDisabled">
        登录
      </el-button>
    </Motion>

    <Motion :delay="300">
      <div class="other-login-type">
        <el-button v-for="(item, index) in loginType" :key="index" class="w-full mt-4" size="default">
          {{ item }}
        </el-button>
      </div>
    </Motion>
  </el-form>


</template>

<script setup lang="ts">
import { Lock, Iphone, User, Shield, Info } from "@icon-park/vue-next";
import type { FormInstance, FormRules } from "element-plus";
import IdentifyCode from "@/components/form/identify/IdentifyCode.vue";
import Motion from '../animation/motion'
import { isPhoneNumber } from "@/utils/number";
const ruleForm = reactive({
  username: "admin",
  password: "admin123",
  verifyCode: ""
});
let verifyCode = ref('646a7a')
const loginBtnLoading = ref(false)
const loginBtnDisabled = ref(false)
const loginDay = ref(7)
const checked = ref()
const imgCode = ref()
const loginType = ref(['手机登录', '二维码登录', '第三方登录'])
/** 登录校验 */
const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;
const REGEXP_SIX = /^\d{6}$/;

const loginRules = reactive<FormRules>({
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else if (!REGEXP_PWD.test(value)) {
          callback(new Error("密码格式应为8-18位数字、字母、符号的任意两种组合"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  verifyCode: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error('请输入验证码'));
        } else if (verifyCode.value !== value) {
          callback(
            new Error("请输入正确的验证码")
          );
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
});

/** 手机登录校验 */
const phoneRules = reactive<FormRules>({
  phone: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入手机号码"));
        } else if (!isPhoneNumber(value)) {
          callback(new Error("请输入正确的手机号码格式"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  verifyCode: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入验证码"));
        } else if (!REGEXP_SIX.test(value)) {
          callback(new Error("请输入 6 位数字验证码"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
});


const ruleFormRef = ref<FormInstance>();
</script>

<style scoped lang="scss">
.login-btn {
  width: 100%;
  display: flex;
  justify-content: space-between
}

.full-button {
  width: 100%
}

.other-login-type {
  display: grid;
  margin-top: 16px;
  grid-template-columns: repeat(3, 1fr);
}

:deep(.el-input) {
  .el-input-group__append {
    padding: 0;
  }
}
</style>
