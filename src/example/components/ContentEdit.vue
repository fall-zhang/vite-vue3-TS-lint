<template>
  <div class="textarea-zone">
    <div v-if="readonly">{{ value }}</div>
    <textarea v-else v-model="defaultValue" :placeholder="placeholder" @input="onInputValue"
      :class="fitContent ? 'form-field-fit' : 'form-field'"></textarea>
    <span v-if="fitContent" class="under-text">{{ value }}</span>
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
.textarea-zone {
  position: relative;
  margin-right: 6px;
}

.under-text {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: inherit;

  // height: calc(100% + 16px);
  // visibility: hidden;
}

.form-field-fit {
  overflow: hidden;
  position: absolute;
  line-height: inherit;
  font-family: inherit;
  box-sizing: border-box;
  font-weight: inherit;
  border: none;
  font-family: inherit;
  text-align: inherit;
  font-size: inherit;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  outline: 0;
  resize: none;

  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
}

.form-field {
  font-family: inherit;
  box-sizing: border-box;
  line-height: inherit;
  font-weight: inherit;
  border: none;
  text-align: inherit;
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  outline: 0;
  resize: none;

  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
}
</style>
