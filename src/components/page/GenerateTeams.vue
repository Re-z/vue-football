<template>
    <main>
        <div class="container">


            <div class="md-layout md-gutter" >
                <md-card 
                    v-for="player in getPlayersList" :key="player.id"
                    class="md-layout-item md-size-30"
                >
                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-title">{{ player.name }}</div>
                        </md-card-header-text>

                        <md-card-media>
                            <img src="https://www.placecage.com/200/200" :alt="player.name">
                        </md-card-media>
                    </md-card-header>

                    <md-card-actions>
                        <md-button 
                            class="md-raised md-accent"
                            @click="addPlayer"
                        >Add</md-button>
                        <md-button>Info</md-button>
                        <md-button style="background: tomato">Delete</md-button>
                    </md-card-actions>
                </md-card>
            </div>
        </div>
    </main>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getPlayersList',
        ])
    },
    methods: {
        addPlayer(ev){
            this.changeBtnColor(ev);
            this.changeBtnText(ev)
                
        },
        //need to review
        changeBtnColor(ev){
            if(ev.target.closest('.md-button').classList.contains('btn-selected')) {
                ev.target.closest('.md-button').classList.remove('btn-selected');
            } else {
                ev.target.closest('.md-button').classList.add('btn-selected');
            }
        },
        //need to review
        changeBtnText(ev) {
            const newBtnText = 'In Game!';
            if(ev.target.classList.contains('md-button-content')){
                if(ev.target.textContent === 'Add') {
                    ev.target.textContent = newBtnText
                } else {
                    ev.target.textContent = 'Add'
                }
            } else {
                let btn = ev.target.querySelector('.md-button-content');
                if(btn.textContent === 'Add') {
                    btn.textContent = newBtnText
                } else {
                    btn.textContent = 'Add'
                }
            }
        }
    },

   async created() {
       //initial print of players
       const data = await fetch('https://vue-football-83475.firebaseio.com/players.json');
       const players = await data.json();

           const list = [];
           for (let player in players) {
               list.push({
                   ...players[player],
                   id: player
               })
           }
        // and pushing players to Vuex
        this.$store.commit('updatePlayers', list);
    }
}
</script>


<style lang="scss">
    .md-layout {
        justify-content: space-between;
    }
    .md-layout-item {
        margin-bottom: 42px;
    }
    .btn-selected {
        background: yellow !important
    }
</style>