<template>
  <el-dropdown trigger="click">
    <globalization
      class="hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300" />
    <template #dropdown>
      <el-dropdown-menu class="translation">
        <el-dropdown-item :style="getDropdownItemStyle(locale, 'zh')"
          :class="['dark:!text-white', getDropdownItemClass(locale, 'zh')]" @click="translationCh">
          <IconifyIconOffline v-show="locale === 'zh'" class="check-zh" :icon="Check" />
          简体中文
        </el-dropdown-item>
        <el-dropdown-item :style="getDropdownItemStyle(locale, 'en')"
          :class="['dark:!text-white', getDropdownItemClass(locale, 'en')]" @click="translationEn">
          <span v-show="locale === 'en'" class="check-en">
            <IconifyIconOffline :icon="Check" />
          </span>
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="SwitchDark">
import { useTheme } from "@/hooks/useTheme";
import { useGlobalStore } from "@/stores/modules/global";
import { SunOne, Moon } from "@icon-park/vue-next";

const { switchDark } = useTheme();
const globalStore = useGlobalStore();
</script>
