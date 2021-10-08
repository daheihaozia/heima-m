import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 加载vant核心组件库
import Vant from 'vant'
// 加载vant 全局样式
import 'vant/lib/index.css'
// 注册使用vant
Vue.use(Vant)
// 加载全局样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
