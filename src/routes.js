import GenerateTeamsPage from "./pages/GenerateTeams";
import ManagePlayers from "./pages/ManagePlayers";
import PlayerPage from "./pages/PlayerPage";
import AllPlayersInfo from "./pages/AllPlayersInfo";
import Login from "./pages/Login";
import page404 from "./pages/404";

const routes = [
  { path: "/", component: GenerateTeamsPage, meta: {title: 'Generate Teams'} },
  { path: "/manage-players", component: ManagePlayers,meta: {title: 'Manage Players'} },
  { path: "/player-page", component: PlayerPage, meta: {title: 'Player info'} },
  { path: "/all-players-info", component: AllPlayersInfo, meta: {title: 'All Players'} },
  { path: "/login", component: Login, meta: {title: 'Login'} },
  { path: "/404", component: page404, meta: {title: 'Not Found'} },
  { path: "*", redirect: "/404" }
];



export default routes;
