export default {
	state: {
		loggedIn: true,
		authEmail: "",
		firebaseToken: ""
	},
	mutations: {
		setAuthData(state, dataObj) {
			state.loggedIn = true;
			state.firebaseToken = dataObj.idToken;
			state.authEmail = dataObj.email;
		},
		clearAuthData(state) {
			state.loggedIn = false;
			state.firebaseToken = "";
			state.authEmail = "";
		}
	},
	getters: {
		getAuthData(state) {
			return {
				loggedIn: state.loggedIn,
				authEmail: state.authEmail,
				firebaseToken: state.firebaseToken
			};
		}
	}
};
