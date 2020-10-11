<template>
  <div class="index ">
      <div ref="a">{{ this.$store.state.modulesA.isVip1 }}</div>
      <div >{{this.$store.state.modulesB.isVip2 }}</div>
      <button @click="a" class="animated wobble">点击发送请求</button>
      <!-- <video-player class="video-player vjs-custom-skin" 
            ref="videoPlayer" 
            :playsinline="true" 
            :options="playerOptions">
      </video-player> -->
    <!-- <div id="qr">
      <Qrcode  ref="qrcode"></Qrcode>
    </div>
    <button @click="setQrcode">x</button> -->
   
  </div>
</template>

#q<style lang="stylus" scoped>
  r
    width 50vmin
    height 50vmin
</style>

<script>
import buttons from '../components/solt.vue'
import {
  indexConfig,
} from '../config/index'
// import {axios} from '../config/index'

import Qrcode from '../components/Qe_code.vue'
export default {
  name: 'Index',
  data () {
    return {
      indexConfig:indexConfig,
      index:null,
      qrc: 'https://www.baidu.com/',
      playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
            autoplay: true, // 如果为true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: true, // 是否视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4", // 类型
              src: require('../assets/1.mp4') // url地址
            }],
            poster: require('../assets/1.jpg'), // 封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: false, // 当前时间和持续时间的分隔符
              durationDisplay: false, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: false // 是否显示全屏按钮
            }
          }
     
    }
  },
  created(){
    
  },
  computed: {
    globalState () {
      return this.$store.state.logined
    },
    modulesAState () {
      return this.$store.state.modulesA.isVip1
    }
  },
  components:{
    // Qrcode
    buttons
  },
  provide: function () {
      return {
        faretfunction: this.cons
      }
    },
  methods:{
    
    cons() {
      console.log('父组件的方法666')
    },
  //  setQrcode() {
  //    if(this.qrc == 'https://www.baidu.com/') {
  //      this.qrc =  'https://fanyi.baidu.com/?aldtype=16047#zh/en/';
  //    }else{
  //      this.qrc =  'https://www.baidu.com/';
  //    }
  //    this.$refs.qrcode.qrCode(this.qrc)
  //  },
 
  async a() { //async
      // this.AutioVoice.Broadcast('发送请求') // 语音播放函数
    // this.$store.commit('UPDATE_LOGIN_STATUS')
    // this.$store.dispatch('getVip1')
    // this.$store.dispatch('getVip2')
    
    let getConfig = [
      {url:'/last',method:'get',data:{ last:1 }},
      {url:'/lost',method:'get',data:{lost:2}},
      {url:'/list',method:'post',data:{ list:3 }},
    ];
    
    let data = await this.axios.timeoutAxios(getConfig)
    // let data = await this.axios.timeoutAxios(getConfig)
 
    
    console.log(data)
}
  },
  // beforeRouteEnter (to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  // }
}
</script>
