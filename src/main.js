import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import Animals from './components/Animals.vue'
import Keepers from './components/Keepers.vue'
import Enclosures from './components/Enclosures.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/animals', component: Animals },
    { path: '/keepers', component: Keepers },
    { path: '/enclosures', component: Enclosures}
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
