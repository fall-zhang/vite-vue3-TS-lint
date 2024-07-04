<script setup lang="ts">
import { isPhoneNumber } from "@/utils/number";
import { ref, reactive } from "vue";
import Motion from "../animation/motion";
import { ElMessage as message } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { useVerifyCode } from "../animation/verifyCode";
import { Iphone, Shield } from "@icon-park/vue-next";

const emit = defineEmits(['back'])
const loading = ref(false);
const ruleForm = reactive({
  phone: "",
  verifyCode: ""
});
const ruleFormRef = ref<FormInstance>();
const { isDisabled, timeText } = useVerifyCode();

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      // 模拟登录请求，需根据实际开发进行修改
      setTimeout(() => {
        message({
          message: "登录成功",
          type: "success"
        });
        loading.value = false;
      }, 2000);
    } else {
      loading.value = false;
    }
  });
};

function onBack() {
  useVerifyCode().end();
  emit('back')
}
const REGEXP_SIX = /^\d{6}$/;

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
</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" size="large">
    <Motion>
      <el-form-item prop="phone">
        <el-input v-model="ruleForm.phone" clearable placeholder="手机号码" :prefix-icon="Iphone" />
      </el-form-item>
    </Motion>

    <Motion :delay="100">
      <el-form-item prop="verifyCode">
        <div class="identify-code">
          <el-input v-model="ruleForm.verifyCode" clearable placeholder="短信验证码" :prefix-icon="Shield" />
          <el-button :disabled="isDisabled" class="ml-2" @click="useVerifyCode().start(ruleFormRef, 'phone')">
            {{
              timeText.length > 0
                ? timeText + "秒后重新获取"
                : "获取验证码"
            }}
          </el-button>
        </div>
      </el-form-item>
    </Motion>

    <Motion :delay="150">
      <el-form-item>
        <el-button class="w-full" size="default" type="primary" :loading="loading" @click="onLogin(ruleFormRef)">
          {{ "登录" }}
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="200">
      <el-form-item>
        <el-button class="w-full" size="default" @click="onBack">
          {{ "返回" }}
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>
<style>
.identify-code {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.w-full {
  width: 100%
}
</style>