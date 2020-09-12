let defaultCity = '北京'
let defaultUserName = '小谢'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
  if (localStorage.userName) {
    defaultUserName = localStorage.userName
  }
} catch (e) {}

export default {
  city: defaultCity,
  userName: defaultUserName
}
