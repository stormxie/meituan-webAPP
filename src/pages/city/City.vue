<template>
    <div>
        <city-header>城市列表</city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :list="alphabetList" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityAlphabet from './components/Alphabet'
import CityHeader from 'common/header/Header'
import CityList from './components/List'
import CitySearch from './components/Search'

export default {
  name: 'City',
  components: {
    CityAlphabet,
    CityHeader,
    CityList,
    CitySearch
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      alphabetList: [],
      letter: ''
    }
  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
    },
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfosucc)
    },
    getCityInfosucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
        this.alphabetList = Object.keys(data.cities)
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
