<template>
    <div id="app" class="ss">
        <app-header></app-header>

        <md-app>
            <md-app-drawer class="sidebar" :md-active.sync="getWillPlayPlayers.length > 0" md-persistent="full">
                <div class="sidebar-default">
                    <md-toolbar class="md-transparent" md-elevation="0">
                        <span class="md-title">Will play players</span>
                    </md-toolbar>

                    <md-list>
                        <md-list-item v-for="player in getWillPlayPlayers" :key="player.id">
                            <span class="md-list-item-text">{{player.name}}</span>
                            <md-icon>send</md-icon>
                        </md-list-item>
                    </md-list>
                </div>

                <div class="sidebar__custom ">

                    <div class="md-toolbar">
                        <md-button class="sidebar__btn md-raised md-accent">Generate Teams!</md-button>
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
        'getSidebarStatus'
    ]),
    methods: {
        clearWillPlayPlayers() {
            this.$store.commit('clearWillPlayPlayers')
        },
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

</style>
