<template>
    <div class="header">
      <div class="header-abs">
        <div class="header-content">团购详情</div>
        <router-link to="/" tag="div" class="header-left"><span class="back-icon iconfont">&#xe600;</span></router-link>
        <div class="header-right">
          <span class="cellect-icon iconfont">&#xe78c;</span>
          <span class="nav-icon iconfont">&#xe63b;</span>
        </div>
      </div>
      <div class="header-fixed">
        <div class="header-price">
          <div class="price-num"></div>
          <div class="price-desc"></div>
        </div>
        <div class="header-buy"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: false,
    }
  },
  // methods: {
  //   handleScroll
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    .header-abs
      display flex
      color #fff
      font-size .36rem
      background #06c1ae
      height 1.02rem
      line-height 1.02rem
      .header-content
        order 2
        text-align center
        width 3rem
        margin 0 auto
      .header-left
        padding-left .2rem
        order 1
        .back-icon
          font-size .46rem
      .header-right
        order 3
        padding-right .3rem
        .cellect-icon, .nav-icon
          font-size .44rem
          padding-left .3rem
</style>
