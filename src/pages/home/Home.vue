<template>
<div>
    <home-header></home-header>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
</div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import HomeHeader from '@/pages/home/components/Header'
import HomeIcon from '@/pages/home/components/Icons'
import HomeRecommend from '@/pages/home/components/Recommend'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      iconList: [],
      recommendList: [],
    }
  },
  components: {
    HomeHeader,
    HomeIcon,
    HomeRecommend,
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/page/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.iconList = data.iconList
        this.recommendList = data.recommendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
