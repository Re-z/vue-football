<template>
  <div class="delete-player">
    <md-dialog-confirm
      class="confirm-delete-popup"
      :md-active.sync="confirmDeletePopupStatus"
      md-title="Do you really want to delete this player?"
      md-content="Data of this user cannot be restored in future"
      md-confirm-text="Yes, delete anyway"
      md-cancel-text="No"
      @md-cancel="cancelDelete"
      @md-confirm="confirmDeletePlayerFromDB"
    />

    <md-field class="md-layout-item md-size-30">
      <label>Search by name</label>
      <md-input v-model="searchName"></md-input>
    </md-field>

    <div class="md-layout md-gutter">
      <!-- оптимизировать проверку на респонсив -->
      <md-card
        v-for="player in filteredPlayers"
        :key="player.id"
        class="md-layout-item md-size-30"
        :class="{ 'md-size-45': checkCardResponsive() }"
      >
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ player.name }}</div>
            <div class="md-subhead">{{ player.age }} years old</div>
          </md-card-header-text>
          <md-card-media>
            <img
              class="player-img"
              :src="require(`@/assets/img/players/${player.img}.jpg`)"
              :alt="player.name"
            />
          </md-card-media>
        </md-card-header>

        <md-card-actions class="md-card-actions md-alignment-left">
          <md-button
            class="md-primary btn-custom-color-warn"
            @click="deletePlayerFromDB(player)"
          >
            Delete
          </md-button>

          <!-- При переходе по ссылке также передаем в роутер обьект с текущим игроком -->
          <md-button
            class="btn-custom-color2"
            :to="{
              path: `/player-page/${player.url}`
            }"
          >
            About
          </md-button>
        </md-card-actions>
      </md-card>
    </div>
    <!-- if no filter results -->
    <div v-if="filteredPlayers.length <= 0">
      <h3 class="md-title">Sory, but there is no player with such name :(</h3>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      confirmDeletePopupStatus: false,
      playerToDelete: "", //тут будет храниться обьект с юзером, которого нужно удалить
      searchName: ""
    };
  },
  methods: {
    cancelDelete() {
      this.confirmDeletePopupStatus = false;
    },
    deletePlayerFromDB(player) {
      this.confirmDeletePopupStatus = true;
      this.playerToDelete = player;
    },
    confirmDeletePlayerFromDB() {
      const indexOfDeletePlayer = this.getPlayersList.indexOf(
        this.playerToDelete
      );
      //создаем новый массив, в котором нету игрока, которого мы хотим удалить
      const newPlayerList = this.getPlayersList.filter(el => {
        return el != this.playerToDelete;
      });
      // коммитим изменения во vuex
      this.$store.dispatch("deletePlayerFromDB", this.playerToDelete);
      this.$store.commit("updateAllPlayers", newPlayerList);
    },
    checkCardResponsive() {
      return window.innerWidth < 1200 && this.getWillPlayPlayers.length > 0;
    }
  },
  computed: {
    ...mapGetters(["getPlayersList", "getWillPlayPlayers"]),
    //Формируем новый массив на основании общего массива игроков,
    //который и выводится в UI
    filteredPlayers() {
      return this.getPlayersList.filter(player => {
        if (player.name.toLowerCase().includes(this.searchName.toLowerCase())) {
          return player;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.confirm-delete-popup .md-primary {
  background: tomato !important;
}
</style>
