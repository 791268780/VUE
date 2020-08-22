<template>
  <div class="index">
    <el-container>
      <el-header>
        <div class="el-icon-arrow-left" @click="toback"></div>
        <div>绑定手机</div>
        <div class="el-icon-paperclip"></div>
      </el-header>
      <el-footer>
        <div class="m-auto">
          <div>
            <span>手机号码*</span>
            <input type="text" placeholder="请输入手机号码">
          </div>
          <div>
            <span> 验证码*</span>
            <input type="text" > 
            <span>获取验证码</span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../css/width.styl'

.el-header
  display flex
  justify-content space-around
  & > div
    line-height 8vh
    margin 0 3vmin
  & >div:nth-child(2)
    min-width 65vmin

.el-footer
  height 92vh!important
  background #F5F6F7
  padding 0
  & > div
    margin 5vmin auto
    width vmins(345)
    background #fff
    height vmins(107)
    border-radius 10px
    & > div
      width vmins(315)
      height vmins(53.5 - 4.11)
      display flex
      line-height 9vmin
      margin 0 auto
      padding 1vmin 0 0 
    & > div:nth-child(1)
      border-bottom 1px solid #E7E7E7
    & > div:nth-child(2)
      padding 2vmin 0 0 

    & > div:nth-child(1) > span 
      font-size vmins(14)
      width vmins(62.5)
      height vmins(13)
    & > div:nth-child(1) > input 
      text-indent vmins(3)
      width vmins(243)
      height vmins(25)
      margin-top 1vmin
      outline none 
      border 0
      &::-webkit-input-placeholder
        text-align right
    & > div:nth-child(2) > input
      text-indent vmins(6)
      width vmins(187)
      height vmins(25)
      margin-top 1vmin
      border 0
      outline none 
    & > div:nth-child(2) > span:nth-child(1)
        font-size vmins(14)
        width vmins(49)
        vertical-align:middle;
        height vmins(13)
    & > div:nth-child(2) > span:nth-child(3)
        font-size vmins(14)
        vertical-align:middle;
        width vmins(70.5)
        height vmins(13.5)
        color #FDB318

</style>

<script>
import {
  indexConfig,
} from '../../config/index'

export default {
  name: 'bangDingIphone',
  data () {
    return {
    }
  },
  created(){
    
  },
  methods:{
    toback() {
      this.$router.go(-1)
    },
  },
  components: {

  }
}
</script>
