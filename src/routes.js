
import GenerateTeamsPage from './components/GenerateTeams'
import ManagePlayers from './components/ManagePlayers'
import PlayerPage from './components/PlayerPage'
import AllPlayersInfo from './components/AllPlayersInfo'
import page404 from './components/404'



const routes = [
    { path: '/', component: GenerateTeamsPage},
    { path: '/manage-players', component: ManagePlayers},
    { path: '/player-page', component: PlayerPage},
    { path: '/all-players-info', component: AllPlayersInfo},
    { path: '/404', component: page404 },  
    { path: '*', redirect: '/404' },  
    
]

export default routes;

