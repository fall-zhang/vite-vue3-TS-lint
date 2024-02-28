<template>
  <div class="card-layout">
    <div class="title-zone" :class="title !== ' ' && 'title-bar'" style="margin-bottom:12px;">
      <section v-if="title"
        style="display: flex;justify-content: space-between;width: 100%;align-items: center;padding-left: 12px;">
        <span style="font-size: 18px;font-weight: 550;">{{ title }}</span>
        <slot name="header-right"></slot>
      </section>
      <div>
        <slot name="header">
        </slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.card-layout {
  flex: 1 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0px 12px;
  border-radius: 6px;
  height: 60%;

  .card-content {
    display: flex;
    flex-direction: column;
  }
}

.title-zone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  &.title-bar {
    border-left: 8px solid #0d867f;

  }

  .title {
    font-size: 18px;
    font-weight: 550;
  }
}
</style>
