import GenerateTeamsPage from "./pages/GenerateTeams";
import ManagePlayers from "./pages/ManagePlayers";
import PlayerPage from "./pages/PlayerPage";
import AllPlayersInfo from "./pages/AllPlayersInfo";
import Login from "./pages/Login";
import page404 from "./pages/404";

import store from "./store/store";

const routeGuard = {
  beforeEnter: (to, from, next) => {
    if (store.getters.getAuthData.loggedIn) {
      next();
    } else {
      next("/login");
    }
  }
};

const routes = [
  {
    path: "/",
    component: GenerateTeamsPage,
    meta: { title: "Generate Teams" },
    ...routeGuard
  },
  {
    path: "/manage-players",
    component: ManagePlayers,
    meta: { title: "Manage Players" },
    ...routeGuard
  },
  {
    //страницу каждого игрока формируем по одному шаблону
    path: "/player-page/:playerName",
    component: PlayerPage,
    //передаем в компонент PlayerPage урлу, которая будет введена после /player-page
    // и уже в самом компоненте будем фильтровать и показывать контент, если урла ОК, и 404,
    // если нет
    props: true,
    meta: { title: "Player info" },
    ...routeGuard
  },
  {
    path: "/all-players-info",
    component: AllPlayersInfo,
    meta: { title: "All Players" },
    ...routeGuard
  },
  { path: "/login", component: Login, meta: { title: "Login" } },
  { path: "/404", component: page404, meta: { title: "Not Found" } },
  { path: "*", redirect: "/404" }
];

export default routes;
