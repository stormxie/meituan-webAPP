<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) of galleryImgs" :key="index"><img class="gallery-img" :src="item"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    galleryImgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-container
    overflow inherit
  .gallery
    background #000
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index 99
    .wrapper
      position absolute
      top 0
      bottom 0
      margin auto
      width 100%
      height 0
      padding-bottom 100%
      .swiper
        .gallery-img
          width 100%
        .swiper-pagination
          color #fff
          bottom -1rem
</style>
