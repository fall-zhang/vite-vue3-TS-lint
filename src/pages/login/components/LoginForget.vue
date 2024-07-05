<script setup lang="ts">
import { ref, reactive } from "vue";
import Motion from "../animation/motion";
import { ElMessage as message } from "element-plus";
import type { FormInstance, FormItemRule, FormRules } from "element-plus";
import { useVerifyCode } from "../animation/verifyCode";
import { Lock, Iphone, User, Shield, Info } from "@icon-park/vue-next";
import { updateRules } from "./formRules";
/** 忘记密码校验 */
const emit = defineEmits(['back'])
const repeatPasswordRule: FormItemRule[] = [
  {
    validator: (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'))
      } else if (ruleForm.password !== value) {
        callback(
          new Error('两次密码不一致！')
        )
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }
]
const loading = ref(false);
const ruleForm = reactive({
  phone: "",
  verifyCode: "",
  password: "",
  repeatPassword: ""
});
const ruleFormRef = ref<FormInstance>();
const { isDisabled, timeText } = useVerifyCode();


const onUpdate = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      // 模拟请求，需根据实际开发进行修改
      setTimeout(() => {
        message({
          message: '修改密码成功',
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
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="updateRules" size="large">
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
                ? '秒后重新获取'
                : '获取验证码'
            }}
          </el-button>
        </div>
      </el-form-item>
    </Motion>

    <Motion :delay="150">
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" clearable show-password placeholder="密码" :prefix-icon="Lock" />
      </el-form-item>
    </Motion>

    <Motion :delay="200">
      <el-form-item :rules="repeatPasswordRule" prop="repeatPassword">
        <el-input v-model="ruleForm.repeatPassword" clearable show-password placeholder="确认密码" :prefix-icon="Lock" />
      </el-form-item>
    </Motion>

    <Motion :delay="250">
      <el-form-item>
        <el-button class="w-full" size="default" type="primary" :loading="loading" @click="onUpdate(ruleFormRef)">
          确定
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="300">
      <el-form-item>
        <el-button class="w-full" size="default" @click="emit('back')">
          返回
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>
<style lang="scss">
.identify-code {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
</style>