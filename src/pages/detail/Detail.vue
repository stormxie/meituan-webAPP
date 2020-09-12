<template>
  <div>
    <detail-header>团购详情</detail-header>
    <detail-banner :sightName="sightName" :desc="desc" :bannerImg="bannerImg" :galleryImgs="galleryImgs"></detail-banner>
    <!-- <detail-list :list="list"></detail-list> -->
    <detail-price></detail-price>
    <detail-evaluation></detail-evaluation>
    <detail-shop></detail-shop>
    <div class="content"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailPrice from './components/Price'
import DetailEvaluation from './components/Evaluation'
import DetailShop from './components/Shop'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailPrice,
    DetailEvaluation,
    DetailShop
  },
  data () {
    return {
      sightName: '',
      desc: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.desc = data.desc
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 10rem
</style>
