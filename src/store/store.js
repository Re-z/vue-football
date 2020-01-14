import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import alertPopup from "@/store/alertPopup";
import generateTeams from "@/store/generateTeams";

Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		async addNewPlayer({ commit }, newPlayer) {
			// sending form data to server
			let data = fetch("https://vue-football-83475.firebaseio.com/players.json", {
				method: "POST",
				body: JSON.stringify(newPlayer),
				headers: {
					"Content-Type": "application/json"
				}
			});
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
			let data = fetch(`https://vue-football-83475.firebaseio.com/players/${playerToDelete.id}.json`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			});
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
			const data = await fetch("https://vue-football-83475.firebaseio.com/players.json");
			const players = await data.json();
			const list = [];
			for (let player in players) {
				list.push({
					...players[player],
					id: player
				});
				commit("updateAllPlayers", list);
			}
		}
	},
	state: {
		allPlayers: [],
		sidebarVisible: true
	},
	mutations: {
		addNewPlayerToAllPlayers(state, newPlayer) {
			state.allPlayers.push(newPlayer);
		},
		updateAllPlayers(state, players) {
			state.allPlayers = players;
		}
	},
	getters: {
		getPlayersList(state) {
			return state.allPlayers;
		}
	},
	modules: {
		auth,
		alertPopup,
		generateTeams
	}
});
