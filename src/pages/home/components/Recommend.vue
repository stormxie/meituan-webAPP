<template>
    <div>
        <div class="block"></div>
        <div class='title border-bottom'>猜你喜欢</div>
        <ul>
            <router-link :to="'/detail/' + item.id" tag="li" class='item border-bottom' v-for='item of list' :key='item.id'>
                <img class='item-img' :src='item.imgUrl'>
                <div class='item-info'>
                    <p class='item-title'>{{item.title}}</p>
                    <p class='item-desc'>{{item.desc}}</p>
                    <button class='item-btn'>查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeRecommend',
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .border-bottom
    &:before
      border-color #bbb
      margin-left .14rem
  .block
    padding-bottom .2rem
    background #eee
  .title
    font-size .34rem
    line-height .8rem
    text-indent .2rem
  .item
    // overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.5rem
      height 1.5rem
      padding .2rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-btn
        margin-top .16rem
        line-height .44rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
