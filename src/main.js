import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";

import VueRouter from "vue-router";
import routes from "./routes";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-dark.css";

//components registration
import Header from "./components/Header";
import Footer from "./components/Footer";

import GenerateTeamsPage from "./components/GenerateTeams";
import ManagePlayers from "./components/ManagePlayers";
import DeletePlayer from "./components/DeletePlayer";
import AddNewPlayer from "./components/AddNewPlayer";
import PlayerPage from "./components/PlayerPage";
import AllPlayersInfo from "./components/AllPlayersInfo";
import PlayerRating from "./components/PlayerRating";
import AlertPopup from "./components/AlertPopup";
import ResultPopup from "./components/ResultPopup";

Vue.component("app-header", Header);
Vue.component("app-footer", Footer);
Vue.component("app-generate-teams", GenerateTeamsPage);
Vue.component("app-manage-players", ManagePlayers);
Vue.component("app-add-new-player", AddNewPlayer);
Vue.component("app-delete-player", DeletePlayer);
Vue.component("app-player-page", PlayerPage);
Vue.component("app-allplayers-info", AllPlayersInfo);
Vue.component("app-player-rating", PlayerRating);
Vue.component("app-alert-popup", AlertPopup);
Vue.component("app-result-popup", ResultPopup);

Vue.use(VueMaterial);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
