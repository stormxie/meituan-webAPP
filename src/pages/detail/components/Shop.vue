<template>
    <div class="shop">
        <div class="block"></div>
        <div class="shop-wrapper">
            <div class="shop-title border-bottom">
                商店信息
            </div>
            <div class="shop-imfo border-bottom">
                <div class="shop-location">
                    <div class="shop-location-title">千味刷</div>
                    <div class="shop-location-content">揭阳市揭东区曲溪千味涮火锅店</div>
                    <div class="shop-location-distance"><span class="iconfont">&#xe602;</span>离我最近</div>
                </div>
                <div class="shop-phone">电话</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailShop',
    data() {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
    .border-bottom
      &:before
        border-color #aaa
    .block
      height .26rem
      background #eee
    .shop-wrapper
      .shop-title
        box-sizing border-box
        padding .2rem
        height .93rem
        line-height .53rem
      .shop-imfo
        height 1.57rem
        padding .2rem
        display flex
        flex-wrap wrap
        .shop-location
          width 80%
          font-size .28rem
          line-height .48rem
          .shop-location-title
            font-size .32rem
            font-weight bolder
          .shop-location-distance
            color #eb8706  
            .iconfont
              padding-right .2rem
        .shop-phone
          text-align center
          font-size .36rem
          width 20%
          box-sizing border-box
          border-left .01rem solid #aaa
          line-height 1.57rem
</style>
