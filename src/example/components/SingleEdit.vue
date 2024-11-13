<template>
  <div class="input-zone">
    <div v-if="readonly">{{ value }}</div>
    <input v-else v-model="defaultValue" :placeholder="placeholder" @input="onInputValue"
      :class="fitContent ? 'form-field-fit' : 'form-field'">
    <span v-if="!readonly && fitContent" class="under-text">{{ value }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SingleEdit',
  props: {
    value: {},
    fitContent: {
      require: false,
      default: false,
      type: Boolean
    },
    readonly: {
      require: false,
      default: false,
      type: Boolean
    },
    placeholder: {
      require: false,
      default: '',
      type: String
    }
  },
  data() {
    return {
      defaultValue: ''
    }
  },
  computed: {},
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        this.defaultValue = newVal
      }
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onInputValue() {
      this.$emit('input', this.defaultValue)
    },
    onChangeValue(ev) {
      console.log(ev)
    }
  }
}
</script>

<style scoped lang="scss">
.input-zone {
  position: relative;
  margin-right: 6px;
}

.under-text {
  display: inline-block;
  width: 100%;
  height: 100%;
  visibility: hidden;
}

.form-field {
  width: calc(100% + 6px);
  height: 100%;
  font-family: inherit;
  font-size: inherit;
  box-sizing: border-box;
  border: none;
  outline: 0;

  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
}

.form-field-fit {
  width: calc(100% + 6px);
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  font-family: inherit;
  font-size: inherit;
  box-sizing: border-box;
  border: none;
  outline: 0;

  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
}
</style>
