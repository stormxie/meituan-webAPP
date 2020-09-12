<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div v-for="item of page" :key="item.id" class="icon">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeIcon',
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  // .icons >>> swiper-container
  //   height 0
  //   padding-bottom 50%
  .icons
    height 0
    padding-bottom 50%
    margin .1rem 0
    .icon
      position relative
      float left
      overflow hidden
      height 0
      width 20%
      padding-bottom 25%
      background #fff
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          position absolute
          display block
          margin auto
          height 60%
          top 0
          bottom 0
          left 0
          right 0
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        margin 0 auto
        width 1.60rem
        line-height .44rem
        color $darkTextColor
        text-align center
        ellipsis()
</style>
