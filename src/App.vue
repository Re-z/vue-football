<template>
    <div id="app" class="ss">
        <app-header></app-header>

        <md-dialog :md-active.sync="getAlertPopupStatus">
            <md-dialog-title class>Sorry :(</md-dialog-title>
            <md-dialog-content class="md-title">The number of players should be 10</md-dialog-content>

            <md-dialog-actions>
                <md-button 
                    class="md-primary btn-custom-color"
                    @click="closeAlertPopup">
                    Ok
                </md-button>
            </md-dialog-actions>
        </md-dialog>


        <md-app>
            <md-app-drawer class="sidebar" :md-active.sync="getWillPlayPlayers.length > 0" md-persistent="full">
                <div class="sidebar-default">
                    <md-toolbar class="md-transparent" md-elevation="0">
                        <span class="md-headline">Will play players:</span>
                    </md-toolbar>

                    <md-list>
                        <md-list-item v-for="player in getWillPlayPlayers" :key="player.id">
                            <span class="md-list-item-text md-title font-weight-normal">{{player.name}}</span>
                            <md-icon>send</md-icon>
                        </md-list-item>
                    </md-list>
                </div>

                <div class="sidebar__custom ">
                    <div class="md-toolbar">
                        <p class="md-title">Number of will play players: <strong>{{getWillPlayPlayers.length}}</strong></p>
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
                            class="sidebar__btn sidebar__btn_warning md-raised md-accent"
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
        'getSidebarStatus',
        'getAlertPopupStatus',
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
        }
    },
    
};

</script>

<style lang="scss">
.sidebar {
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &__btn {
        width: 100%;
        &_warning {
            background: tomato !important;
        }
    }
}
.container {
    width: 1200px;
    margin: 0 auto;
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
  }
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
}
.font-weight-normal {
    font-weight: 300;
}

</style>
