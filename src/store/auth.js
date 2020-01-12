import router from '@/routes'


export default {
	state: {
		firebaseToken: '',
		firebaseRefreshToken: ''
	},
	actions: {
		login({commit,state}, payload) {
			const firebaseApiKey = 'AIzaSyAWDC-A_tPOyySP7GeabRr_KlLRFLt82KY',
				firebaseLoginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword'
			fetch(`${firebaseLoginUrl}?key=${firebaseApiKey}`, {
				method: 'POST',
				body: JSON.stringify({
					...payload,
					returnSecureToken: true,
				})
			})
			.then(response => response.json())
			.then(answer => {
				console.log(answer)
				commit('setFirebaseToken', answer.idToken)
				commit('setFirebaseRefreshToken', answer.refreshToken)
				
				if(!state.firebaseToken) {
					commit('showAlertPopup', answer.error.errors[0].message)
				}
				else {
					alert(1)
					router.push('/')
				}
				// this.firebaseToken = answer.idToken,
				// this.firebaseRefreshToken = answer.firebaseRefreshToken
				// console.log(state.firebaseToken);
				// console.log(state.firebaseRefreshToken);
				//if answer has error
				if(!state.firebaseToken || !state.firebaseRefreshToken) {
					commit('showAlertPopup', answer.error.errors[0].message)
				}
			})
			//if answer didnt come
			// .catch(error => {
			// 	commit('showAlertPopup', 'Something went wrong')
			// })
		}
	},
	mutations: {
		setAuthData() {

		},
		setFirebaseToken(state, token) {
			state.firebaseToken = token
		},
		setFirebaseRefreshToken(state, token) {
			state.firebaseRefreshToken = token
		}
	}
}