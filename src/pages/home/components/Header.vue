<template>
  <div class="header">
    <router-link to="/city">
      <div class="header-left">{{this.city}}
        <span class="iconfont arrow-icon">&#xe63c;</span>
      </div>
    </router-link>
    <div class="header-input">
      <span class="iconfont">&#xe67e;</span>
      请输入商家名，品类或商圈
    </div>
    <div class="header-right" @click="handleClick"><span class="iconfont login-icon">&#xe612;</span></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'HomeHeader',
  data () {
    return {}
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleClick () {
      console.log('click')
      axios.get('/api/user/logincheck')
      .then(this.getSucc)
    },
    getSucc (res) {
      console.log(res)
      if(res.data.ret) {
        this.$router.push('/self')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%)
    height: 1.01rem
    line-height 1.01rem
    color: #000
    text-align center
    .header-right
      width: .94rem
      .login-icon
        color #000
        text-align center
        font-size .4rem
    .header-left
      min-width: 1.04rem
      padding 0 0 0 .2rem
      text-align center
      line-height 1.01rem
      color #000
      .arrow-icon
        font-size .24rem
    .header-input
      flex: 1
      height .64rem
      line-height .64rem
      color #ccc
      text-align left
      background #fff
      border-radius .2rem
      padding-left .2rem
      margin-top .2rem
      margin-left .2rem
</style>
