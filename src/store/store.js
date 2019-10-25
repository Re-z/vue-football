import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async addNewPlayer(state, newPlayer){
            // sending form data to server
            let data = fetch('https://vue-football-83475.firebaseio.com/players.json', {
                method: 'POST',
                body: JSON.stringify(newPlayer),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let response = await data;
            if(response.ok === true) {
                alert('success')
            } else {
                alert('Wrong')
            }
        },
        async getPlayersFromDB(state){

            //initial print of players
            const data = await fetch('https://vue-football-83475.firebaseio.com/players.json');
            const players = await data.json();

            const list = [];
            for (let player in players) {
                list.push({
                    ...players[player],
                    id: player
            })
            state.commit('updateAllPlayers',list)
           }
        }
    },
    state: {
        allPlayers: [],
        teams: {
            willPlayPlayers: []
        }
    },
    mutations: {
        updateAllPlayers(state, players) {
            state.allPlayers = players
        },
        updateWillPlayPlayers(state,player) {
            // returns index of el if el already exists in array, or -1 if it doesnt
            let index = state.teams.willPlayPlayers.indexOf(player)
            
            // check if array already contains this player
            if(index >= 0) {
                // if it does - remove this player from array
                state.teams.willPlayPlayers.splice(index, 1);
            } else {
                // if it doesnt - add player to willPlayPlayers array
                state.teams.willPlayPlayers.push(player);
            }
            console.log(state.teams.willPlayPlayers);
        }
        
    },
    modules: {},
    getters: {
        getPlayersList(state){
            return state.allPlayers
        }
    }

})