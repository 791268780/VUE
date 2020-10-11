<template>
  <div class="qrcode_box">
  <canvas class="qrcode"></canvas>
</div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'QeCode',
  methods: {
    qrCode (url) {
      var canvas = document.querySelector('canvas')
      QRCode.toCanvas(canvas,url)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 .qrcode_box{
  width: 100%!important;
  height: 100%!important;
  .qrcode{
    width: 100%!important;
    height: 100%!important;
    
  }
}
</style>
