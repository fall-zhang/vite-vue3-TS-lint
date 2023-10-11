<template>
  <div :style="{ height: height || format.height, width: width || format.width }" :class="type ? type : format.type"
    class="quarter_content">
    <svg :width="width || format.width" :height="height || format.height" viewBox="0 0 44 44" version="1.1"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="g_17146" :fill="fill || format.color" :stroke="stroke || format.border" :stroke-opacity="format.opacity">
        <path id="p_17146"
          d="M59.0789132,26.3283871 C66.8538699,26.3283871 74.0008671,29.0171189 79.6406657,33.5156342 L79.6406657,33.5156342 L71.4285135,41.7268599 C67.9339659,39.2705685 63.6748755,37.8283871 59.0789132,37.8283871 C54.4056353,37.8283871 50.0806552,39.3194896 46.5536021,41.8516815 L46.5536021,41.8516815 L38.3504963,33.6494537 C44.0158464,29.0704981 51.2271657,26.3283871 59.0789132,26.3283871"
          transform="translate(45, 81) scale(1, -1) rotate(90.000000)" />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    fill: { type: String, default: '' },
    height: { type: String, default: '' },
    width: { type: String, default: '' },
    stroke: { type: String, default: '' },
    type: {
      type: String,
      validator(val) {
        return ['left', 'right', 'top', 'bottom', ''].includes(val)
      },
      default: ''
    }
  },
  data() {
    return {
      format: {
        color: '#ffffff',
        height: '44px',
        width: '44px',
        border: '#13514D',
        opacity: '1',
        type: 'left'
      }
    }
  },
  watch: {
    color() {
      this.changeOpacity()
    },
    border() {
      this.changeOpacity()
    }
  },
  mounted() {
    this.changeOpacity()
  },
  methods: {
    changeOpacity() {
      if (this.border) {
        this.format.opacity = '1'
        return
      }
      if (this.color) {
        if (this.color.toLowerCase() === '#ffffff') {
          this.format.border = '#0D867F'
          this.format.opacity = '0.11'
        } else {
          this.format.opacity = '1'
        }
      } else {
        this.format.opacity = '0.11'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.quarter_content {
  position: relative;
  transform-origin: center;

  &.left {
    transform: rotate(180deg);
  }

  &.right {
    transform: rotate(0deg);
  }

  &.top {
    transform: rotate(270deg);
  }

  &.bottom {
    transform: rotate(90deg);
  }
}
</style>
