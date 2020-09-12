export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeUserName (state, userName) {
    state.userName = userName
    try {
      localStorage.userName = userName
    } catch (e) {}
  }
}
