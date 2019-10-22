import Vue from 'vue'
import Vuex from 'vuex'

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
            console.log(response)
        }
    },
    state: {
        
    },
    mutations: {},
    modules: {},
    getters: {

    }

})