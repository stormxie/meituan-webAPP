<template>
    <div class="block border-bottom" :style="{ height: height}"></div>
</template>

<script>
export default {
    name: 'Block',
    props: {
        height: String
    },
    data () {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #777
    &:after
      border-color #777
  .block
    height .26rem
    background #eee
</style>