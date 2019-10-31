import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js"


import VueRouter from 'vue-router'
import routes from './routes'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/black-green-light.css' // This line here
import 'vue-material/dist/theme/black-green-dark.css' // This line here

//components registration
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import GenerateTeamsPage from './components/GenerateTeams'
import ManagePlayers from './components/ManagePlayers'
import DeletePlayer from './components/DeletePlayer'
import AddNewPlayer from './components/AddNewPlayer'
import PlayerPage from './components/PlayerPage'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-generate-teams', GenerateTeamsPage);
Vue.component('app-manage-players', ManagePlayers)
Vue.component('app-add-new-player', AddNewPlayer)
Vue.component('app-delete-player', DeletePlayer)
Vue.component('app-sidebar', Sidebar)
Vue.component('app-player-page', PlayerPage)




Vue.use(VueMaterial)
Vue.use(VueRouter);



const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

