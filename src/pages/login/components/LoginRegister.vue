<script setup lang="ts">
import { ref, reactive } from "vue";
import Motion from "../animation/motion";
import { ElMessage as message } from "element-plus";
import type { FormInstance, FormItemRule, FormRules } from "element-plus";
import { useVerifyCode } from "../animation/verifyCode";
import { Lock, Iphone, User, Shield } from "@icon-park/vue-next";
import { isPhoneNumber } from "@/utils/number";
import { updateRules } from "./formRules";
const emit = defineEmits(['back'])

const checked = ref(false);
const loading = ref(false);
const ruleForm = reactive({
  username: "",
  phone: "",
  verifyCode: "",
  password: "",
  repeatPassword: ""
});
const ruleFormRef = ref<FormInstance>();
const { isDisabled, timeText } = useVerifyCode();


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
const onUpdate = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      if (checked.value) {
        // 模拟请求，需根据实际开发进行修改
        setTimeout(() => {
          message({
            message: "注册成功",
            type: "success"
          });
          loading.value = false;
        }, 2000);
      } else {
        loading.value = false;
        message({
          message: "请勾选隐私政策",
          type: "warning"
        });
      }
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
      <el-form-item :rules="[
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }
      ]" prop="username">
        <el-input v-model="ruleForm.username" clearable placeholder="账号" :prefix-icon="User" />
      </el-form-item>
    </Motion>

    <Motion :delay="100">
      <el-form-item prop="phone">
        <el-input v-model="ruleForm.phone" clearable placeholder="手机号码" :prefix-icon="Iphone" />
      </el-form-item>
    </Motion>

    <Motion :delay="150">
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

    <Motion :delay="200">
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" clearable show-password placeholder="密码" :prefix-icon="Lock" />
      </el-form-item>
    </Motion>

    <Motion :delay="250">
      <el-form-item :rules="repeatPasswordRule" prop="repeatPassword">
        <el-input v-model="ruleForm.repeatPassword" clearable show-password placeholder="确认密码" :prefix-icon="Lock" />
      </el-form-item>
    </Motion>

    <Motion :delay="300">
      <el-form-item>
        <el-checkbox v-model="checked">
          我已仔细阅读并接受
        </el-checkbox>
        <el-button link type="primary">
          《隐私政策》
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="350">
      <el-form-item>
        <el-button class="w-full" size="default" type="primary" :loading="loading" @click="onUpdate(ruleFormRef)">
          确定
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="400">
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