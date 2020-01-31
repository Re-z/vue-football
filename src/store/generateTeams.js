export default {
  state: {
    teams: {
      willPlayPlayers: [],
      team1: [],
      team2: [],
      isResultPopupShowed: false
    }
  },
  actions: {
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
  mutations: {
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
    showResultPopup(state) {
      state.teams.isResultPopupShowed = true;
    },
    closeResultPopup(state) {
      state.teams.isResultPopupShowed = false;
    }
  },
  getters: {
    getWillPlayPlayers(state) {
      return state.teams.willPlayPlayers;
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
};
