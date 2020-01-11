<template>
<div id="app" class="app-stretched">
    <app-header></app-header>

    <app-alert-popup></app-alert-popup>

    <app-result-popup></app-result-popup>

    <md-app>
        <md-app-drawer class="sidebar" :md-active.sync="getWillPlayPlayers.length > 0" md-persistent="full">
            <div class="sidebar-default">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-headline">Will play players:</span>
                </md-toolbar>
                <md-list>
                    <md-list-item @click="updateWillPlayPlayers(player)" v-for="player in getWillPlayPlayers" :key="player.id">
                        <md-tooltip md-direction="bottom">Remove this player</md-tooltip>
                        <span class="md-list-item-text md-title font-weight-normal">
                            {{ player.name }}
                        </span>
                        <md-icon :md-src="require('@/assets/img/delete.svg')" class="close-icon"></md-icon>
                    </md-list-item>
                </md-list>
            </div>

            <div class="sidebar__custom ">
                <div class="md-toolbar ">
                    <p class="md-title md-title-visible">Number of will play players: <strong>{{ getWillPlayPlayers.length }} of 10</strong></p>
                </div>
                <div class="md-toolbar">
                    <md-button class="sidebar__btn md-raised md-accent" @click="generateTeams">Generate Teams!
                    </md-button>
                </div>
                <div class="md-toolbar">
                    <md-button class="sidebar__btn sidebar__btn btn-custom-color-warn md-raised md-accent" @click="clearWillPlayPlayers">
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
import { mapGetters } from "vuex";
export default {
  computed: mapGetters([
    "getWillPlayPlayers",
    "getAlertPopup",
    "getTeam1",
    "getTeam2",
    "getResultPopupStatus"
  ]),
  methods: {
    clearWillPlayPlayers() {
      this.$store.commit("clearWillPlayPlayers");
    },
    generateTeams() {
      this.$store.dispatch("generateTeams");
    },
    updateWillPlayPlayers(player) {
      this.$store.commit("updateWillPlayPlayers", player);
    },
    closeResultPopup() {
      this.$store.commit("closeResultPopup");
      this.$store.commit("clearWillPlayPlayers");
    }
  },
  created() {
    this.$store.dispatch("getPlayersFromDB");
  },
};
</script>
