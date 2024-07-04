<script setup lang="ts">
// import { useI18n } from "vue-i18n";
import { ref, reactive } from "vue";
import Motion from "../animation/motion";
import { ElMessage as message } from "element-plus";
import type { FormInstance } from "element-plus";
import { useVerifyCode } from "../utils/verifyCode";
import { Iphone, Shield } from "@icon-park/vue-next";

// const { t } = useI18n();
const loading = ref(false);
const ruleForm = reactive({
  phone: "",
  verifyCode: ""
});
const ruleFormRef = ref<FormInstance>();
const { isDisabled, text } = useVerifyCode();

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
}
</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" size="large">
    <Motion>
      <el-form-item prop="phone">
        <el-input v-model="ruleForm.phone" clearable :placeholder="t('login.purePhone')" :prefix-icon="Iphone" />
      </el-form-item>
    </Motion>

    <Motion :delay="100">
      <el-form-item prop="verifyCode">
        <div class="w-full flex justify-between">
          <el-input v-model="ruleForm.verifyCode" clearable :placeholder="t('login.pureSmsVerifyCode')"
            :prefix-icon="Shield" />
          <el-button :disabled="isDisabled" class="ml-2" @click="useVerifyCode().start(ruleFormRef, 'phone')">
            {{
              text.length > 0
                ? text + "秒后重新获取"
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
