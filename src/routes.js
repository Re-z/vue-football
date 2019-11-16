import GenerateTeamsPage from "./components/GenerateTeams";
import ManagePlayers from "./components/ManagePlayers";
import PlayerPage from "./components/PlayerPage";
import AllPlayersInfo from "./components/AllPlayersInfo";
import page404 from "./components/404";

const routes = [
  { path: "/", component: GenerateTeamsPage, meta: {title: 'Generate Teams'} },
  { path: "/manage-players", component: ManagePlayers,meta: {title: 'Manage Players'} },
  { path: "/player-page", component: PlayerPage, meta: {title: 'Player info'} },
  { path: "/all-players-info", component: AllPlayersInfo, meta: {title: 'All Players'} },
  { path: "/404", component: page404, meta: {title: 'Not Found'} },
  { path: "*", redirect: "/404" }
];

export default routes;
