<template>
  <div class="tinymce-editor">
    <tinymce-editor :init="init" v-model="myValue"></tinymce-editor>
  </div>
</template>

<script lang="ts">
import Editor from '@tinymce/tinymce-vue'
export default {
  name: 'EditorVue',
  components: {
    'tinymce-editor': Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    plugins: {
      type: [String, Array],
      default:
        'link lists image code table wordcounts'
    },
    toolbar: {
      type: [String, Array],
      default:
        'bold italic underline strikethrough | fontsizeselect fontselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink code | removeformat'
    }
  },
  data() {
    return {
      myValue: this.value,
      init: {
        language_url: '/js/zh-CN.js',
        language: 'zh_CN',
        height: 800,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        images_upload_handler: (blobInfo, success, failure) => {
          success('data:image/jpeg;base64,' + blobInfo.base64())
        }
      },
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue
    },
    myValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    // 使编辑器的宽度始终为页面的一半
    calcWidth() {
      return document.body.clientWidth / 2 + 'px'
    },
  },

}
</script>
<style>
</style>
