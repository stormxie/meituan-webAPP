<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="city-list">
                <div class="button-wrapper">
                    <div class="button">{{currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="city-list">
                <div class="button-wrapper" @click="handleCityClick(item.name)" v-for="item of hot" :key="item.id">
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(itemList, name) of cities" :key="name" :ref="name">
            <div class="title border-topbottom">{{name}}</div>
            <div class="item-list">
                <div class="item border-bottom" @click="handleCityClick(item.name)" v-for="item of itemList" :key="item.id">{{item.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    })
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #777
    &:after
      border-color #777
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    top 1.78rem
    right 0
    bottom 0
    left 0
    overflow hidden
    .title
      padding-left .2rem
      font-size .26rem
      background #eee
      height .5rem
      line-height .5rem
      color $darkTextColor
    .city-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.3%
        .button
          text-align center
          background #fff
          margin .1rem
          border 1px solid #ccc
          border-radius .06rem
          height .48rem
          line-height .48rem
          font-size .28rem
    .item-list
      .item
        padding-left .2rem
        height .75rem
        line-height .75rem
        font-size .28rem
</style>
