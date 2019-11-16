<template>
  <div id="app" class="app-stretched">
    <app-header></app-header>

    <app-alert-popup></app-alert-popup>

    <app-result-popup></app-result-popup>

    <md-app>
      <md-app-drawer
        class="sidebar"
        :md-active.sync="getWillPlayPlayers.length > 0"
        md-persistent="full"
      >
        <div class="sidebar-default">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-headline">Will play players:</span>
          </md-toolbar>
          <md-list>
            <md-list-item
              @click="updateWillPlayPlayers(player)"
              v-for="player in getWillPlayPlayers"
              :key="player.id"
            >
              <md-tooltip md-direction="bottom">Remove this player</md-tooltip>
              <span class="md-list-item-text md-title font-weight-normal">
                {{ player.name }}
              </span>
              <md-icon
                :md-src="require('./assets/img/delete.svg')"
                class="close-icon"
              ></md-icon>
            </md-list-item>
          </md-list>
        </div>

        <div class="sidebar__custom ">
          <div class="md-toolbar ">
            <p class="md-title md-title-visible">Number of will play players: <strong>{{ getWillPlayPlayers.length }} of 10</strong></p>
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
  }
};
</script>

<style lang="scss">
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@mixin r($width) {
  @media screen and (max-width: $width + "px") {
    @content;
  }
}
body {
  min-width: 1024px;
}
.sidebar {
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
  @include r(1200) {
    width: 100%;
  }
}
.img-reverse {
  margin: 0 16px 0 0 !important;
}
.text-reverse {
  text-align: right !important;
}
.text-center {
  text-align: center;
}
.app-stretched {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.router-link-exact-active {
  background: #64dd17 !important;
}
.router-link-exact-active .md-button-content {
  color: #424242 !important;
  color: var(--md-theme-default-background, #424242) !important;
}
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
  flex-grow: 2;
}
.md-app-container {
  transition: 0s !important;
}
.md-drawer {
  // width: 230px;
  max-width: calc(100vw - 125px);
  transition: 0s !important;
  @include r(1200) {
    max-width: 300px !important;
  }
}
.font-weight-normal {
  font-weight: 300 !important;
}
.md-overlay {
  z-index: 10 !important;
}
.md-app-content,
.custom-bg,
.custom-dialog,
.md-tabs-container,
.header__tabs .md-tabs-navigation {
  background: #303030 !important;
}
.btn-custom-color {
  background: #303030 !important;
  color: white !important;
}
.btn-custom-color2 {
  color: #9d9d9d !important;
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
.error {
  color: red !important;
}
.md-title-visible {
  white-space: pre-wrap !important;
}
.md-tabs.md-theme-default .md-tabs-indicator {
  display: none !important;
}
.md-field.md-focused label {
  color: inherit !important;
}
.md-field.md-theme-default:before {
  background-color: inherit !important;
}
.md-icon.close-icon {
  display: block;
  width: 15px;
  height: 15px;
  font-size: 15px !important;
}
.is-hidden {
  display: none !important;
}
</style>
