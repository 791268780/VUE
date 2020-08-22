<template>
  <div class="index ">
      <div ref="a">{{ this.$store.state.modulesA.isVip1 }}</div>
      <div >{{this.$store.state.logined }}</div>
      <button @click="a" class="animated wobble">点击发送请求</button>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
import {
  indexConfig,
} from '../config/index'

// import {axios} from '../config/index'
export default {
  name: 'Index',
  data () {
    return {
      indexConfig:indexConfig,
      index:null,
      msg:'../assets/1.mp3'
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
  methods:{
   
    // clickpush(item) {
    //    this.$router.push({
    //       path: item,
    //       query: {
          
    //       }
    //     })
    // },
  async a() { //async
      // this.AutioVoice.Broadcast('发送请求') // 语音播放函数
    // this.$store.commit('UPDATE_LOGIN_STATUS')
    // this.$store.dispatch('getVip1')
    
    let getConfig = [
      {url:'/last',methods:'get'},
      {url:'/lost',methods:'get'},
      {url:'/list',methods:'get'},
    ];
    
    // let data = await this.axios.intvalAxios(getConfig)
    // let data = await this.axios.timeoutAxios(getConfig)
 
    
    console.log(this.$refs.a)
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
