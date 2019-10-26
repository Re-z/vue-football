import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex"
import store from "./store/store.js"


import VueRouter from 'vue-router'
import routes from './routes'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/black-green-light.css' // This line here
import 'vue-material/dist/theme/black-green-dark.css' // This line here

//components registration
import Header from './components/parts/Header'
import Footer from './components/parts/Footer'
import Sidebar from './components/parts/Sidebar'

import GenerateTeamsPage from './components/pages/GenerateTeams'
import AddNewPlayerPage from './components/pages/AddNewPlayer'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-generate-teams', GenerateTeamsPage);
Vue.component('app-add-new-player', AddNewPlayerPage)
Vue.component('app-sidebar', Sidebar)


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

