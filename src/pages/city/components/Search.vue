<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名称或拼音">
    </div>
    <div ref="wrapper" class="wrapper" v-show="hasInput">
      <ul class="searchList">
        <li class="city border-bottom" @click="handleCityClick(item.name)" v-for="item of searchList" :key="item.id">{{item.name}}</li>
        <li v-show="noResult" class="city">没有找到匹配数据</li>
      </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      searchList: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    noResult () {
      return !this.searchList.length
    },
    hasInput () {
      return this.keyword
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword.length) {
        this.searchList = []
        return
      }
      this.timer = setTimeout(() => {
        const list = []
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              list.push(element)
            }
          })
        }
        this.searchList = list
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-bottom
    &:before
      border-color #ccc
  .search
    background $bgColor
    height .62rem
    padding 0 .1rem .14rem .1rem
    .search-input
      text-align center
      border-radius .06rem
      height .62rem
      width 100%
  .wrapper
    overflow hidden
    position absolute
    top 1.8rem
    right 0
    bottom 0
    left 0
    background #fff
    z-index 1
    .searchList
      .city
        padding-left .2rem
        height .6rem
        line-height .6rem
        font-size .28rem
</style>
