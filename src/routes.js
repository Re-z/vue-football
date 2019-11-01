
import GenerateTeamsPage from './components/GenerateTeams'
import ManagePlayers from './components/ManagePlayers'
import PlayerPage from './components/PlayerPage'
import AllPlayersInfo from './components/AllPlayersInfo'



const routes = [
    {
        path: '/',
        component: GenerateTeamsPage
    },
    {
        path: '/manage-players',
        component: ManagePlayers
    },
    {
        path: '/player-page',
        component: PlayerPage
    },
    {
        path: '/all-players-info',
        component: AllPlayersInfo
    },
    
]
export default routes;

