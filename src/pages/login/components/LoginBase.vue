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
        <el-button link type="primary" @click="emit('forget')">
          忘记密码
        </el-button>
      </div>
      <el-button class="full-button" size="default" type="primary" :loading="loginBtnLoading"
        :disabled="loginBtnDisabled" @click="onLogin">
        登录
      </el-button>
    </Motion>

  </el-form>


</template>

<script setup lang="ts">
import { Lock, Iphone, User, Shield, Info } from "@icon-park/vue-next";
import type { FormInstance, FormRules } from "element-plus";
import IdentifyCode from "@/components/form/identify/IdentifyCode.vue";
import Motion from '../animation/motion'
import { useRouter } from "vue-router";
const emit = defineEmits(['forget'])
const ruleForm = reactive({
  username: "admin",
  password: "admin123",
  verifyCode: ""
});
const ruleFormRef = ref<FormInstance>()
const loginBtnLoading = ref(false)
const loginBtnDisabled = ref(false)
const loginDay = ref(7)
const checked = ref()
const imgCode = ref()
/** 登录校验 */
const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;
const router = useRouter()

const onLogin = async () => {
  if (!ruleFormRef.value) return;
  await ruleFormRef.value.validate(valid => {
    if (valid) {
      loginBtnLoading.value = true;
      router.push('/example')
    }
  });
};

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
        } else if (imgCode.value.toLowerCase() !== value) {
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



:deep(.el-input) {
  .el-input-group__append {
    padding: 0;
  }
}
</style>
