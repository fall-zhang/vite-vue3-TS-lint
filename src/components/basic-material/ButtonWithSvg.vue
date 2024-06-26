<template>
  <div class="container">
    <div class="left-zone">
      <div class="animate-group">
        <div :class="animate ? 'animate2' : ''">
          <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"
              fill="none" stroke="#000" stroke-width="4" stroke-linejoin="round" />
          </svg>
        </div>
        <div style="position: absolute">
          <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"
              fill="#fff" stroke="#333" stroke-width="4" stroke-linejoin="round" />
            <path d="M23.9497 14.9497V30.9497" stroke="#333" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M15.9497 22.9497H31.9497" stroke="#333" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
    <div class="right-zone">
      <h2>
        {{ title }}
      </h2>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      require: false,
      default: '安全',
      type: String
    }
  },
  data() {
    return {
      animate: true
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: 120px;
  transition: 0.5s;
  user-select: none;

  .right-zone {
    height: 80px;
    border: 6px solid black;
    border-radius: 0 60px 60px 0;
    // border-radius: 0 80px 10px 0;
    margin-left: -60px;
    padding-left: 60px;
    width: 200px;
    line-height: 80px;
    cursor: pointer;

    h2 {
      margin: 0;
    }
  }

  .left-zone {
    height: 120px;
    width: 120px;
    border: 4px solid #888;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1;
    background-color: #fff;
    overflow: hidden;
    cursor: pointer;

    .animate-group {
      position: relative;
      height: 80px;
      width: 80px;
    }
  }

  &:hover {
    h2 {
      color: rgb(255, 195, 83);
      transition: 0.8s;
    }

    .right-zone {
      transition: 0.8s;
      box-shadow: #888 2px 2px 6px;
      border-color: rgb(255, 195, 83);
    }

    .left-zone {
      transition: 0.8s;
      box-shadow: #888 2px 2px 6px;
      border-color: rgb(255, 195, 83);
    }
  }
}

.animate2 {
  position: absolute;
  top: 0;
  animation: bigger 2.4s infinite ease-in-out;

  &::after {
    content: '';
  }
}

@keyframes bigger {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
