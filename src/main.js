import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

//配置全局变量
import global from './components/Global.vue'
Vue.prototype.GLOBAL = global

import router from './js/routerconfig.js'
Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,	
  render: h => h(App)
})
