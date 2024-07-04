<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, reactive } from "vue";
import Motion from "../animation/motion";
import { ElMessage as message } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { useVerifyCode } from "../utils/verifyCode";
import { $t, transformI18n } from "@/plugins/i18n";
import { useUserStoreHook } from "@/store/modules/user";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { Lock, Iphone, User, Shield, Info } from "@icon-park/vue-next";
/** 忘记密码校验 */
const updateRules = reactive<FormRules>({
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
          callback(new Error("《隐私政策》"));
        } else if (!REGEXP_SIX.test(value)) {
          callback(new Error("请输入6位数字验证码"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
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
  ]
});
const { t } = useI18n();
const loading = ref(false);
const ruleForm = reactive({
  phone: "",
  verifyCode: "",
  password: "",
  repeatPassword: ""
});
const ruleFormRef = ref<FormInstance>();
const { isDisabled, text } = useVerifyCode();
const repeatPasswordRule = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback(new Error(transformI18n($t("login.purePassWordSureReg"))));
      } else if (ruleForm.password !== value) {
        callback(
          new Error(transformI18n($t("login.purePassWordDifferentReg")))
        );
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
];

const onUpdate = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      // 模拟请求，需根据实际开发进行修改
      setTimeout(() => {
        message(transformI18n($t("login.purePassWordUpdateReg")), {
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
  useUserStoreHook().SET_CURRENTPAGE(0);
}
</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="updateRules" size="large">
    <Motion>
      <el-form-item prop="phone">
        <el-input v-model="ruleForm.phone" clearable :placeholder="t('login.purePhone')"
          :prefix-icon="useRenderIcon(Iphone)" />
      </el-form-item>
    </Motion>

    <Motion :delay="100">
      <el-form-item prop="verifyCode">
        <div class="w-full flex justify-between">
          <el-input v-model="ruleForm.verifyCode" clearable :placeholder="t('login.pureSmsVerifyCode')"
            :prefix-icon="useRenderIcon('ri:shield-keyhole-line')" />
          <el-button :disabled="isDisabled" class="ml-2" @click="useVerifyCode().start(ruleFormRef, 'phone')">
            {{
              text.length > 0
                ? text + t("login.pureInfo")
                : t("login.pureGetVerifyCode")
            }}
          </el-button>
        </div>
      </el-form-item>
    </Motion>

    <Motion :delay="150">
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" clearable show-password :placeholder="t('login.purePassword')"
          :prefix-icon="useRenderIcon(Lock)" />
      </el-form-item>
    </Motion>

    <Motion :delay="200">
      <el-form-item :rules="repeatPasswordRule" prop="repeatPassword">
        <el-input v-model="ruleForm.repeatPassword" clearable show-password :placeholder="t('login.pureSure')"
          :prefix-icon="useRenderIcon(Lock)" />
      </el-form-item>
    </Motion>

    <Motion :delay="250">
      <el-form-item>
        <el-button class="w-full" size="default" type="primary" :loading="loading" @click="onUpdate(ruleFormRef)">
          {{ t("login.pureDefinite") }}
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="300">
      <el-form-item>
        <el-button class="w-full" size="default" @click="onBack">
          {{ t("login.pureBack") }}
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>
