
import GenerateTeamsPage from './components/GenerateTeams'
import ManagePlayers from './components/ManagePlayers'
import PlayerPage from './components/PlayerPage'



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
    
]
export default routes;

