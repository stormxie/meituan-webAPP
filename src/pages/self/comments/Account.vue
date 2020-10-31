<template>
    <div class="account">
        <div class="wrapper">
            <router-link to="/login" tag="div" class="account-head"><span class="iconfont">&#xe620;</span></router-link>
            <div class="account-name">{{userName}}</div>
            <div class="account-balance">账户余额: 0元</div>
            <div class="forward-icon"><span class="iconfont">&#xe601;</span></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'SelfAccount',
    data () {
        return {}
    },
    computed: {
      ...mapState(['userName'])
    }
}
</script>

<style lang="stylus" scoped>
  .account
    padding-left 1rem
    height 1.6rem
    background-color rgb(224, 211, 197)
    .wrapper
      position relative
      padding .25rem .2rem .15rem 1rem
      background url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/my-photo.png")
      background-size cover
      .account-head
        position absolute
        height 1rem
        width 1rem
        top 50%
        margin-top -.5rem
        left -.5rem
        .iconfont
          font-size 1rem
          color #eee
      .account-name
        line-height .6rem
        font-size .3rem
      .account-balance
        line-height .6rem
        font-size .24
      .forward-icon
        position absolute
        right .2rem
        line-height 1.6rem
        top 0
</style>