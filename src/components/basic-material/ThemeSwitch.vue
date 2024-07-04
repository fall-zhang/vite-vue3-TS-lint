<template>
  <el-switch v-model="globalStore.isDark" inline-prompt :active-icon="SunOne" :inactive-icon="Moon" @change="switchDark" />
</template>

<script setup lang="ts" name="SwitchDark">
import { useTheme } from "@/hooks/useTheme";
import { useGlobalStore } from "@/stores/modules/global";
import { SunOne, Moon } from "@icon-park/vue-next";

const { switchDark } = useTheme();
const globalStore = useGlobalStore();
</script>
