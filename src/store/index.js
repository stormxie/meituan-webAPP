import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'

export default Vuex.createStore({
  state,
  mutations
//   actions: {
//     changeCity (ctx, city) {
//       ctx.commit('changeCity', city)
//     }
//   },
});