import Vue from 'vue'
import VueRouter from 'vue-router'

import RootComponent from './components/root.vue'
import router from './routing'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(RootComponent)
}).$mount('#app')
