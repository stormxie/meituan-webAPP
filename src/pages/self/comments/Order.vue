<template>
    <div class="order">
        <div class="order-all border-bottom">
            <span class="order-icon iconfont">&#xe61b;</span> 全部订单 <span class="iconfont forward-icon">&#xe601;</span>
        </div>
        <div class="order-item-wrappe">
            <div class="order-item order-item1"><span class="iconfont">&#xe637;</span><div class="desc">待付款</div></div>
            <div class="order-item order-item2"><span class="iconfont">&#xe618;</span><div class="desc">待使用</div></div>
            <div class="order-item order-item3"><span class="iconfont">&#xe63d;</span><div class="desc">待评价</div></div>
            <div class="order-item order-item4"><span class="iconfont">&#xe61f;</span><div class="desc">退款/售后</div></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Order',
    data () {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color #777
  .order
    .order-all
      box-sizing border-box
      height .9rem
      padding .2rem
      line-height .5rem
      .order-icon
        padding-right .1rem
        float left
        font-size .6rem
      .forward-icon
        float right
    .order-item-wrappe
      box-sizing border-box
      padding .2rem
      height 1.66rem
      .order-item
        width 25%
        float left
        text-align center
        .iconfont
          margin-top .1rem
          display block
          margin-bottom .2rem
          font-size .6rem
</style>
