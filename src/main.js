import Vue, { createApp } from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'babel-polyfill';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'styles/reset.css';
import 'swiper/dist/css/swiper.css';
import store from './store';


createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
