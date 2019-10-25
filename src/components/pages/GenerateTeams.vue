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
                            <img 
                                class="player-img"
                                :src="require(`@/assets/img/players/${player.name}.jpg`)" 
                                :alt="player.name"
                            >

                        </md-card-media>
                    </md-card-header>

                    <md-card-actions class="md-card-actions md-alignment-left">
                        <md-button 
                            class="md-raised md-accent"
                            @click="addPlayer"
                        >Add</md-button>
                        <!-- <md-button>Info</md-button> -->
                        <!-- <md-button style="background: tomato">Delete</md-button> -->
                    </md-card-actions>
                </md-card>

            </div>
        </div>
    </main>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            willPlayPlayer: []
        }
    },
    computed: {
        ...mapGetters([
            'getPlayersList',
        ])
    },
    methods: {
        addPlayer(ev){
            this.changeBtnColor(ev);
            this.changeBtnText(ev);
            
                
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
        },
        addWillPlayPlayer(playerObj){
            this.willPlayPlayer.push(playerObj)
        }
    },

   async created() {

        this.$store.dispatch('getPlayersFromDB')

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
    .player-img {
        display: inline-block;
        border-radius: 50%;

    }
</style>