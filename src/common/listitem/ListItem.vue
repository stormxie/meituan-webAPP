<template>
    <div class="list border-bottom">
        <div class="order-icon" :style="iconStyle">
          <span class="iconfont" v-html="code"></span>
        </div>
        <slot name="default"></slot>
        <div class="forward-icon">
          <span class="iconfont">&#xe601;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
      iconStyle: Object,
      code: String
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color #ccc
  .list
    box-sizing border-box
    height .96rem
    padding .2rem
    line-height .5rem
    .order-icon
      box-sizing border-box
      width .5rem
      height .5rem
      border-radius .05rem
      margin-right .2rem
      text-align center
      float left
      .iconfont
        color #fff
    .forward-icon
      float right
</style>