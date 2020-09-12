<template>
    <div class="price">
        <div class="price-buy border-bottom" :style="stylePositon">
            <div class="desc"><span class="money-num">21</span><span class="money-unit">元</span> 门市价22元</div>
            <div class="buy">立即抢购</div>
        </div>
        <div class="price-imfo border-bottom">
            <div class="imfo-item"><img class="icon" src="imges/detailimg/2.png"><img>支持随时退款</div>
            <div class="imfo-item"><img class="icon" src="imges/detailimg/1.png"><img>支持过期自动退</div>
            <div class="imfo-item"><img class="icon" src="imges/detailimg/3.png"><img>已售2100</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailPrice',
    data() {
        return {
          stylePositon: {
            position: 'relative'
          }   
        }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll, false)
    },
    methods: {
      handleScroll () {
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        if (top > 365) {
        this.stylePositon.position = 'fixed'
        } else {
        this.stylePositon.position = 'relative'
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color #ccc
  .price
    height 3.09rem
    .price-buy
      z-index 1
      background #fff
      top 0
      display flex
      align-items center
      box-sizing border-box
      justify-content space-between
      width 100%
      height 1.23rem
      padding .2rem
      .desc
        padding-left .2rem
        .money-num
          color #06c1ae
          font-size .64rem
          font-weight bolder
        .money-unit
          color #06c1ae
      .buy
        width 2.6rem
        height .8rem
        background #fdb338;
        line-height .8rem
        text-align center
        padding-right .2rem
        border-radius .15rem
    .price-imfo
      box-sizing border-box
      height 1.86rem
      padding .2rem
      .imfo-item
        color #6bbd00
        font-size .32rem
        display inline-block
        height 0.73rem
        line-height .73rem
        width 50%
        .icon
          padding 0 .1rem .08rem 0
          display inline-block
          height .38rem
          width .38rem
      .imfo-item:nth-child(3)
        color #666
</style>