export default {
	state: {
		loggedIn: false,
		authEmail: '',
		firebaseToken: '',
		firebaseRefreshToken: ''
	},
	actions: {
		login({commit}, payload) {
			const firebaseApiKey = 'AIzaSyAWDC-A_tPOyySP7GeabRr_KlLRFLt82KY',
				firebaseLoginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword'
			fetch(`${firebaseLoginUrl}?key=${firebaseApiKey}`, {
				method: 'POST',
				body: JSON.stringify({
					...payload,
					//want to have refreshToken in response
					//its a part of Firebase API
					returnSecureToken: true, 
				})
			})
			.then(response => response.json())
			.then(response => {
				//if response doesnt have token, it means that we have error
				if(!response.idToken) {
					//handle error
					commit('showAlertPopup', response.error.errors[0].message)
				} else {
					// if we have token - update state
					commit('setAuthData', response)
				}
			})
		}
	},
	mutations: {
		setAuthData(state, dataObj) {
			state.loggedIn = true,
			state.firebaseToken = dataObj.idToken
			state.authEmail = dataObj.email
		},
		clearAuthData(state) {
			state.loggedIn = false,
			state.firebaseToken = ''
			state.authEmail = ''
		}
	},
	getters: {
		getAuthData(state) {
			return {
				loggedIn: state.loggedIn,
				authEmail: state.authEmail,
				firebaseToken: state.firebaseToken,
			}
		}
	}
}