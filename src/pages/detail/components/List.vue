<template>
  <div class="list">
    <div v-for="(item,index) of list" :key="index" class="list-item border-bottom">
        <span class="list-item-icon"></span>
        {{item.title}}
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    .list-item
      line-height .8rem
      padding 0 0 0 .2rem
      font-size .32rem
      .list-item-icon
        display inline-block
        position relative
        top .06rem
        margin-right .1rem
        width .36rem
        height .36rem
        background url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -0.46rem no-repeat
        background-size .4rem 3rem
</style>
