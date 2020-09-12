<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left-icon">
                <span class="iconfont back-icon">&#xe600;</span>
            </div>
        </router-link>
        <div class="header-content">
            选择城市
        </div>
        <div class="header-right-icon">
          <router-link to="/">
            <span class="home-icon iconfont">&#xe608;</span>
          </router-link>
          <span class="search-icon iconfont">&#xe67e;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    background $bgColor
    height 1.01rem
    line-height 1.01rem
    text-align center
    font-size .32rem
    color #000
    .header-left-icon
      font-weight bolder 
      color #000
      float left
      padding-left .14rem
      .back-icon
        font-size .4rem
    .header-content
      width 3rem
      position absolute
      left 0
      right 0
      margin auto
    .header-right-icon
      font-weight bolder 
      float right
      margin-right .44rem
      .home-icon
        font-size .42rem
        color #000
      .search-icon
        padding-left .4rem
        font-size .36rem
</style>
