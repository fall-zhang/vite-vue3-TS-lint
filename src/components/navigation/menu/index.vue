<template>
  <el-menu :default-openeds="openedMenu" @select="onSelectMenu">
    <el-sub-menu v-for="route in pageRoutes" :key="route.path" :index="route.path">
      <template #title>{{ route.meta.menuName }}</template>
      <el-menu-item v-for="children in route.children" :key="children.path" :index="children.path">
        {{ children.meta.menuName }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import pageRoutes from '@/router/constRouter'
export default {
  name: 'MainMenu',
  components: {

  },
  props: {},
  data() {
    return {
      pageRoutes,
      openedMenu: []
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {
    pageRoutes.forEach(item => {
      this.openedMenu.push(item.path)
    })
    // console.log(pageRoutes);
  },
  methods: {
    onSelectMenu(path) {
      console.log(this.$route.path)
      if (this.$route.path !== path) {
        this.$router.push({ path })
      }
    }
  }
}
</script>

<style scoped lang="sass">

</style>
