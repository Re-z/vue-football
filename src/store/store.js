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
        },
        checkIfPlayerWillPlay(state, player) {
            let index = state.teams.willPlayPlayers.indexOf(player)
            return index >= 0 ? true : false;
        },
        generateTeams(state){
            //какого хрена нужно обращаться state.state 2 раза??
            let numberOfWillPlayPlayers = state.state.teams.willPlayPlayers.length
            
            if(numberOfWillPlayPlayers === 10) {
                //cloning willPlayPlayers arr
                let willPlayPlayersSuffled = state.state.teams.willPlayPlayers.slice(0);
                //sorting it
                willPlayPlayersSuffled.sort(function() { return 0.5 - Math.random() });
                console.log(willPlayPlayersSuffled);
                let team1 = willPlayPlayersSuffled.slice(0,5); //first 5 players in array - is a first team
                let team2 = willPlayPlayersSuffled.slice(5,10); //last 5 players in array - is a second team
                state.state.teams.team1 = team1;
                state.state.teams.team2 = team2;
                state.commit('showResultPopup')

            } else {
                state.state.alertPopup.isVisible = true;
            }
        }
    },
    state: {
        allPlayers: [],
        teams: {
            willPlayPlayers: [],
            team1: [],
            team2: [],
            isResultPopupShowed: false
        },
        sidebarVisible: true,
        alertPopup: {
            isVisible: false
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
            // console.log(state.teams.willPlayPlayers);
            
        },
        clearWillPlayPlayers(state) {
            state.teams.willPlayPlayers = []
        },
        closeAlertPopup(state) {
            state.alertPopup.isVisible = false
        },
        showResultPopup(state) {
            state.teams.isResultPopupShowed = true
        },
        closeResultPopup(state) {
            state.teams.isResultPopupShowed = false
        }
    },
    modules: {},
    getters: {
        getPlayersList(state){
            return state.allPlayers
        },
        getWillPlayPlayers(state){
            return state.teams.willPlayPlayers
        },
        getAlertPopupStatus(state) {
            return state.alertPopup.isVisible
        },
        getTeam1(state) {
            return state.teams.team1
        },
        getTeam2(state) {
            return state.teams.team2
        },
        getResultPopupStatus(state) {
            return state.teams.isResultPopupShowed;
        }

    }

})