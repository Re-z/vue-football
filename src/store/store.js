import Vue from "vue";
import Vuex from "vuex";
import auth from '@/store/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async addNewPlayer({ commit }, newPlayer) {
      // sending form data to server
      let data = fetch(
        "https://vue-football-83475.firebaseio.com/players.json",
        {
          method: "POST",
          body: JSON.stringify(newPlayer),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      let response = await data;
      if (response.ok === true) {
        commit("addNewPlayerToAllPlayers", newPlayer);
        const popupMsg = "Player successfully added to DB";
        commit("showAlertPopup", popupMsg);
      } else {
        const popupMsg = "Oops! Something went wrong";
        commit("showAlertPopup", popupMsg);
      }
    },
    async deletePlayerFromDB({ commit }, playerToDelete) {
      // sending form data to server
      let data = fetch(
        `https://vue-football-83475.firebaseio.com/players/${playerToDelete.id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      let response = await data;
      if (response.ok === true) {
        const popupMsg = "Player successfully deleted from DB";
        commit("showAlertPopup", popupMsg);
      } else {
        const popupMsg = "Oops! Something went wrong";
        commit("showAlertPopup", popupMsg);
      }
    },
    async getPlayersFromDB({ commit }) {
      //initial print of players
      const data = await fetch(
        "https://vue-football-83475.firebaseio.com/players.json"
      );
      const players = await data.json();
      const list = [];
      for (let player in players) {
        list.push({
          ...players[player],
          id: player
        });
        commit("updateAllPlayers", list);
      }
    },

    generateTeams({ commit, state }) {
      let numberOfWillPlayPlayers = state.teams.willPlayPlayers.length;

      if (numberOfWillPlayPlayers === 10) {
        //cloning willPlayPlayers arr
        let willPlayPlayersSuffled = state.teams.willPlayPlayers.slice(0);
        //sorting it
        willPlayPlayersSuffled.sort(function() {
          return 0.5 - Math.random();
        });
        let team1 = willPlayPlayersSuffled.slice(0, 5); //first 5 players in array - is a first team
        let team2 = willPlayPlayersSuffled.slice(5, 10); //last 5 players in array - is a second team

        commit("setGeneratedTeam1", team1);
        commit("setGeneratedTeam2", team2);
        commit("showResultPopup");
      } else {
        const popupMsg = "The number of players should be 10 ";
        commit("showAlertPopup", popupMsg);
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
      isVisible: false,
      msg: ""
    },

  },

  mutations: {
    setAuthData(state, dataObj) {
			state.loggedIn = true
			state.firebaseToken = dataObj.idToken
			state.firebaseRefreshToken = dataObj.refreshToken
			state.authEmail = dataObj.email
    },
    
    addNewPlayerToAllPlayers(state, newPlayer) {

      state.allPlayers.push(newPlayer);
    },
    updateAllPlayers(state, players) {
      state.allPlayers = players;
    },
    updateWillPlayPlayers(state, player) {

      // returns index of el if el already exists in array, or -1 if it doesnt
      let index = state.teams.willPlayPlayers.indexOf(player);

      // check if array already contains this player
      if (index >= 0) {
        // if it does - remove this player from array
        state.teams.willPlayPlayers.splice(index, 1);
      } else {
        // if it doesnt - add player to willPlayPlayers array
        state.teams.willPlayPlayers.push(player);
      }
    },
    setGeneratedTeam1(state, team) {
      state.teams.team1 = team;
    },
    setGeneratedTeam2(state, team) {
      state.teams.team2 = team;
    },
    clearWillPlayPlayers(state) {
      state.teams.willPlayPlayers = [];
    },
    showAlertPopup(state, msg) {
      (state.alertPopup.isVisible = true), (state.alertPopup.msg = msg);
    },
    closeAlertPopup(state) {
      state.alertPopup.isVisible = false;
    },
    showResultPopup(state) {
      state.teams.isResultPopupShowed = true;
    },
    closeResultPopup(state) {
      state.teams.isResultPopupShowed = false;
    }
  },
  modules: {
    auth
  },
  getters: {
    getPlayersList(state) {
      return state.allPlayers;
    },
    getWillPlayPlayers(state) {
      return state.teams.willPlayPlayers;
    },
    getAlertPopup(state) {
      return state.alertPopup;
    },
    getTeam1(state) {
      return state.teams.team1;
    },
    getTeam2(state) {
      return state.teams.team2;
    },
    getResultPopupStatus(state) {
      return state.teams.isResultPopupShowed;
    }
  }
});
