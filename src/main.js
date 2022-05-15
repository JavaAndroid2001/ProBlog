import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import { Button } from 'element-ui';
import element from "./element/index";
import 'element-ui/lib/theme-chalk/index.css';

import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.use(element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
