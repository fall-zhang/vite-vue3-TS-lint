<template>
  <dialog :class="[{
    showDialog: visible,
    forceLarge: forceLarge
  }, size,]">
    <div class="dialog-header">
      <span>{{ title }}</span>
      <div class="dialog-header-right">
        <div v-show="size !== 'small'" class="header-icon" @click="onMiniSize">
          <IconBaseline></IconBaseline>
        </div>
        <div v-show="size !== 'small'" class="header-icon" @click="onLargeSize">
          <IconOutline></IconOutline>
        </div>
        <div class="header-icon" @click="onClose">
          <IconClose></IconClose>
        </div>
      </div>
    </div>
    <div class="dialog-content">
      <slot></slot>
    </div>
    <div class="dialog-footer">
      <button>确认</button>
      <button>取消</button>
    </div>
  </dialog>
</template>

<script>
import IconBaseline from '@C/icons/IconBaseline.vue'
import IconClose from '@C/icons/IconClose.vue'
import IconOutline from '@C/icons/IconOutline.vue'
export default {
  name: 'OrigonDialog',
  components: {
    IconBaseline, IconClose, IconOutline
  },
  props: {
    modelValue: {
      require: true,
      type: Boolean,
      default: false
    },
    title: {
      require: true,
      type: String,
      default: ''
    },
    size: {
      require: true,
      type: String,
      default: 'medium',
      validator(size) {
        return ['small', 'medium', 'large'].includes(size)
      }
    }
  },
  emits: ['update:modelValue', 'confirm', 'cancel', 'largeSize', 'miniSize'],
  data() {
    return {
      forceLarge: true
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    onClose() {
      console.log('关闭')
      this.$emit('update:modelValue', false)
    },
    onCancel() {
      this.$emit('cancel')
    },
    onConfirm() {
      this.$emit('confirm')
    },
    onLargeSize() {
      this.$emit('largeSize')
    },
    onMiniSize() {
      this.$emit('miniSize')
    }
  }
}
</script>

<style scoped lang="scss">
.showDialog {
  max-height: 80%;
  display: block;
  position: fixed;
  margin: 0 auto;
  top: 100px;
  padding: 0;
  border: 0;
  font-size: 14px;
  background-color: white;
  // box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);

  &.small {
    width: 420px;

    .dialog-footer {
      justify-content: center;
    }
  }

  &.medium {
    width: 820px;
  }

  &.large {
    width: 1220px;
  }

  &.forceLarge {
    width: 1220px;
  }
}

.dialog-header {
  background-color: rgb(13, 134, 128, 0.8);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  .dialog-header-right {
    display: flex;
  }

  .header-icon {
    cursor: pointer;
    font-size: 16px;
    margin: 6px;
  }
}

.dialog-content {
  min-height: 200px;
  overflow: auto;
  padding: 20px;
  background-color: rgb(13, 134, 128, .2);
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  background-color: rgba(13, 134, 128, 0.1);

  button {
    margin: 20px 20px 30px 20px;
  }
}
</style>
