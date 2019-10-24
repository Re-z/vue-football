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
                        <md-button class="md-raised md-accent">Add</md-button>
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



   async created() {
       const data = await fetch('https://vue-football-83475.firebaseio.com/players.json');
       const players = await data.json();
        //    console.log(players);

           const list = [];
           for (let player in players) {
               list.push({
                   ...players[player],
                   id: player
               })
           }
        this.$store.commit('updatePlayers', list);
        console.log(this.$store.state.players)
            
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
</style>