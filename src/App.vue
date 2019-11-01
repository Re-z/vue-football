<template>

    <div id="app" class="ss">
        <app-header></app-header>

        <!-- dialog with error -->
        <md-dialog :md-active.sync="getAlertPopupStatus">
            <md-dialog-title class="md-headline ">Sorry :(</md-dialog-title>
            <md-dialog-content class="md-title">
               The number of players should be 10
            </md-dialog-content> 

                <md-dialog-actions>
                    <md-button 
                        class="md-primary btn-custom-color"
                        @click="closeAlertPopup">
                        Ok!
                    </md-button>
            </md-dialog-actions>
        </md-dialog>
   

        <!-- results block -->
        <md-dialog :md-active.sync="getResultPopupStatus">
            <md-dialog-content class="custom-dialog">

            
            <div class="result-box">
                <div class="result-box__item">
                    <md-dialog-title class="result-box__item-title md-headline">Team 1</md-dialog-title>

                    <md-card 
                        class="md-primary" 
                        md-theme="green-card"
                        v-for="player in getTeam1" :key="player.id"
                    >
                        <md-card-header>
                            <md-card-header-text>
                                <div class="md-title">{{player.name}}</div>
                            </md-card-header-text>
                            <md-card-media>
                                <img  :src="require(`@/assets/img/players/${player.name}.jpg`)"  :alt="player.name">
                            </md-card-media>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="result-box__vs">
                    VS 
                </div>

                <div class="result-box__item">
                    <md-dialog-title class="result-box__item-title md-headline">Team 2</md-dialog-title>

                     <md-card 
                        class="md-primary" 
                        md-theme="green-card"
                        v-for="player in getTeam2" :key="player.id"
                    >
                        <md-card-header>
                            <md-card-media class="img-reverse" >
                                <img :src="require(`@/assets/img/players/${player.name}.jpg`)"  :alt="player.name">
                            </md-card-media>
                            <md-card-header-text class="text-reverse">
                                <div class="md-title">{{player.name}}</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
            </div>

            <md-dialog-actions>
                <md-button 
                    class="md-primary md-raised md-accent"
                    @click="generateTeams">
                    Regenerate
                </md-button>
                
                <md-button 
                    class="md-primary btn-custom-color"
                    @click="closeResultPopup">
                    Ok
                </md-button>
                 
            </md-dialog-actions>
            </md-dialog-content>
        </md-dialog>






        <md-app>
            <md-app-drawer class="sidebar" :md-active.sync="getWillPlayPlayers.length > 0" md-persistent="full">
                <div class="sidebar-default">
                    <md-toolbar class="md-transparent" md-elevation="0">
                        <span class="md-headline">Will play players:</span>
                    </md-toolbar>
                    <md-list>
                        <md-list-item @click="updateWillPlayPlayers(player)" v-for="player in getWillPlayPlayers" :key="player.id">
                            <md-tooltip md-direction="bottom">Remove this player</md-tooltip>
                            <span 
                                class="md-list-item-text md-title font-weight-normal">
                                {{player.name}}

                            </span>
                            <!-- <md-button class="md-icon-button md-list-action"> -->
                            <md-icon :md-src="require('./assets/img/delete.svg')"></md-icon>
                            <!-- </md-button> -->
                        </md-list-item>

                    </md-list>
                </div>

                <div class="sidebar__custom ">
                    

                    <div class="md-toolbar">
                        <p class="md-title">Number of will play players: <strong>{{getWillPlayPlayers.length}} of 10</strong></p>
                    </div>
                    <div class="md-toolbar">
                        <md-button
                            class="sidebar__btn md-raised md-accent"
                            @click="generateTeams"
                            >Generate Teams!
                        </md-button>
                    </div>
                    <div class="md-toolbar">
                        <md-button 
                            class="sidebar__btn sidebar__btn btn-custom-color-warn md-raised md-accent"
                            @click="clearWillPlayPlayers"
                            >
                            Clear List
                        </md-button>
                    </div>

                </div>

            </md-app-drawer>

            <md-app-content>
                
                <router-view></router-view>

            </md-app-content>
        </md-app>
        <app-footer></app-footer>




    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    
    computed: mapGetters([
        'getWillPlayPlayers',
        // 'getSidebarStatus',
        'getAlertPopupStatus',
        'getTeam1',
        'getTeam2',
        'getResultPopupStatus',
    ]),
    methods: {
        clearWillPlayPlayers() {
            this.$store.commit('clearWillPlayPlayers')
        },
        closeAlertPopup(){
            this.$store.commit('closeAlertPopup')
        },
        generateTeams() {
            this.$store.dispatch('generateTeams')
        },
        updateWillPlayPlayers(player){
            this.$store.commit('updateWillPlayPlayers',player)
        },
        closeResultPopup(){
            this.$store.commit('closeResultPopup');
            this.$store.commit('clearWillPlayPlayers')
        }
    },
    async created() {
        this.$store.dispatch('getPlayersFromDB');
    },
    
    
};

</script>

<style lang="scss">
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.sidebar {
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &__btn {
        width: 100%;
    }
}

.result-box {
    display: flex;
    justify-content: space-between;
    &__vs {
        align-self: center;
        font-size: 40px;
        font-weight: bold;
        margin: 0 20px;
    }
    &__item {
        img {
            max-height: 80px;
        }
    }
    &__item-title {
        display: block;
        text-align: center;
    }
    .md-card {
        background: #424242;
    }
}
.container {
    width: 1200px;
    margin: 0 auto;
}
.img-reverse {
    margin: 0 16px 0 0 !important;
}
.text-reverse {
    text-align: right !important;
}
.ss {
    height: 100vh;   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.router-link-exact-active {
    background: #64dd17 !important
    // change color to css var
}
.md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
    flex-grow: 2
  }
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
.font-weight-normal {
    font-weight: 300 !important;
}
.md-overlay {
    z-index: 10 !important;
}
.md-app-content, .custom-bg, .custom-dialog, .md-tabs-container, .header__tabs .md-tabs-navigation  {
    background: #303030 !important


}
.btn-custom-color {
    background: #303030 !important;
    color: white !important;
}
.btn-custom-color2 {
    color: #9D9D9D !important;
    background-color: #424242 !important; 
    background-color: var(--md-theme-default-background, #424242) !important;
}
.btn-custom-color-warn {
    background: tomato !important;
}
.star {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(./assets/img/star.svg);
}
.pointer {
    cursor: pointer;
}
</style>
