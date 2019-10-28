<template>
        <div class="container">

            <div class="md-layout md-gutter" >
                <md-card 
                    v-for="player in getPlayersList" :key="player.id"
                    class="md-layout-item md-size-30"
                >
                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-title">{{ player.name }}</div>
                            <div class="md-subhead">{{ player.age }} years old </div>
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
                            class="md-primary"
                            @click="addPlayer($event, player)"
                            :class="selectPlayerBtnClass(player)"
                            >
                        {{selectPlayerBtnText(player)}}
                        </md-button>
                    </md-card-actions>
                </md-card>

            </div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    computed: {
        ...mapGetters([
            'getPlayersList',
            'getWillPlayPlayers'
        ])
    },
    methods: {
        // if player is chosen to getWillPlayPlayers array - change btn color
        selectPlayerBtnClass(player){
            if(this.getWillPlayPlayers.indexOf(player) >= 0) {
                return 'md-raised md-accent' //упростить?
            } else {
                return 'btn-custom-color'
            }
        },
        // if player is chosen to getWillPlayPlayers array - change btn text
        selectPlayerBtnText(player){
             if(this.getWillPlayPlayers.indexOf(player) >= 0) {
                return 'In Game' //упростить?
            } else {
                return 'Add'
            }
        },
        addPlayer(ev, player){
            this.$store.commit('updateWillPlayPlayers', player);
        },
    },
    

   
}
</script>


<style lang="scss">
    .md-layout {
        justify-content: space-between;
    }
    .md-layout-item {
        margin-bottom: 42px;
    }
    .btn-player-selected {
        background: yellow !important
    }
    .player-img {
        // display: inline-block;
        // border-radius: 50%;
    }
    
    
    
</style>