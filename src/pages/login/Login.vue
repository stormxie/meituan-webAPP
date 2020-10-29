<template>
    <div class="login">
        <div class="logo">美团</div>
        <div class="login-input">
          <div class="login-phone border-bottom">
            <div class="login-phone-location">中国 +86</div>
            <div class="input-wrapper">
              <input v-model="phone" type="text" placeholder="请输入手机号" class="login-phone-input">
            </div>
          </div>
          <div class="login-password border-bottom" v-show="!passwordLogin">
            <div class="input-wrapper">
              <input type="password" placeholder="请输入验证码" class="login-password-input">
            </div>
            <div class="login-password-getcode">获取验证码</div>
          </div>
          <div class="login-password border-bottom" v-show="passwordLogin">
            <div class="input-wrapper">
              <input @input="handleInput"  v-model="password" type="password" placeholder="请输入密码" class="login-password-input">
            </div>
            <div class="login-password-getcode">忘记密码</div>
          </div>
        </div>
        <div class="login-btn">
          <div class="login-btn-wrapper" v-show="showBtn"></div>
          <button class="btn" @click="handleClick2">登录</button>
        </div>
        <div class="login-tip">
          <div class="login-tip-content" v-show="!passwordLogin">未注册的手机号验证后自动创建美团账户</div>
        </div>
        <div class="login-option" @click="handleClick">{{loginPattern}}</div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      passwordLogin: true,
      loginPattern: "验证码登录",
      phone: '',
      showBtn: true,
      password: ''
    }
  },
  methods: {
    ...mapMutations(['changeUserName']),
    handleClick () {
      this.passwordLogin = !this.passwordLogin
      if(this.loginPattern === "验证码登录") {
        this.loginPattern = "手机登录"
      } else {
        this.loginPattern = "验证码登录"
      }
    },
    handleInput (e) {
      let password = e.target.value
      if ((/^1[3456789]\d{9}$/.test(this.phone)) && (/^[a-z0-9-_]{3,15}$/.test(password))) {
        this.showBtn = false
      } else {
        this.showBtn = true
      }
    },
    handleClick2 () {
      axios.post(
        '/api/user/login', 
        {"userphone": this.phone, "password": this.password},
        {headers:{"content-type": "application/json"}}
      )
        .then(this.postSucc)
    },
    postSucc (res) {
      let data = res.data
      if (data.ret) {
        console.log('to self')
        this.changeUserName(data.message)
        this.$router.push('/self')
      } else {
        alert('密码或账号错误，请重试。')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-bottom
    &:before
      border-color #aaa
  .login
    padding .6rem
    .logo
      color #000
      position relative
      height 1.6rem
      width 1.6rem
      line-height 1.6rem
      text-align center
      font-size .5rem
      font-weight bolder
      left 50%
      margin-left -.8rem
      background $bgColor
      border-radius 50%
    .login-input
      margin-top .6rem
      .login-phone
        height .6rem
        line-height .6rem
        padding .2rem
        .login-phone-location
          width 25%
          font-size .28rem
          float left
        .input-wrapper
          width 75%
          font-size .38rem
          float right
      .login-password
        margin-top .4rem
        padding-bottom .2rem
        height .6rem
        line-height .6rem
        .input-wrapper
          width 75%
          font-size .38rem
          float left
        .login-password-getcode
          box-sizing border-box
          width 25%
          font-size .24rem
          float right
          border-left .01rem solid #ccc
          padding-left .1rem
    .login-btn
      position relative
      margin-top .4rem 
      width 100%
      height .9rem
      line-height .9rem
      text-align center
      font-size .34rem
      background $bgColor
      border-radius .2rem
      .login-btn-wrapper
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        opacity .1
        background #000
      .btn
        background none
    .login-tip
      height .24rem
      margin .3rem 0 .6rem
      text-align center
      color #999
      font-size .24rem
    .login-option
      text-align center
      color #555
      font-size .28rem
</style>