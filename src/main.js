import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'

import Animals from './components/Animals.vue'
import AnimalCreate from './components/animals/AnimalCreate.vue'
import AnimalDetail from './components/animals/AnimalDetail.vue'
import AnimalOverview from './components/animals/AnimalOverview.vue'
import Keepers from './components/Keepers.vue'
import KeeperCreate from './components/keepers/KeeperCreate.vue'
import KeeperDetail from './components/keepers/KeeperDetail.vue'
import KeeperOverview from './components/keepers/KeeperOverview.vue'
import Enclosures from './components/Enclosures.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/animals', component: Animals, children: [
      { path: '', component: AnimalOverview },
      { path: 'create', name: 'animals-create', component: AnimalCreate },
      { path: 'detail/:id', name: 'animals-detail', component: AnimalDetail },
    ] },
    { path: '/keepers', component: Keepers, children: [
      { path: '', component: KeeperOverview },
      { path: 'create', name: 'keepers-create', component: KeeperCreate },
      { path: 'detail/:id', name: 'keepers-detail', component: KeeperDetail },
    ] },
    { path: '/enclosures', component: Enclosures}
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
