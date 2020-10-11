<template>
    <div class="qrcode_box">
        <button @click="onpenprent">
            <slot name="header">按钮默认内容</slot>
            <slot :user="def">hhd</slot>
        </button>
    </div>
</template>

<script>

export default {
  name: 'QeCode',
  data(){
      return {
          def: '改变文本'
      }
  },
  inject: ['faretfunction'],
  methods: {
      onpenprent() {
          this.faretfunction();
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 
</style>
