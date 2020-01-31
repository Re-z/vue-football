<template>
  <div class="container player">
    <template v-if="player">
      <h2>{{ player.name }}</h2>
      <div class="player__top">
        <img
          class="player__img"
          :src="require(`@/assets/img/players/${player.img}.jpg`)"
          :alt="player.name"
        />

        <p>{{ player.aboutInfo }}</p>
      </div>
      <div class="player__bottom">
        <md-table>
          <md-table-row>
            <md-table-cell>Firebase ID:</md-table-cell>
            <md-table-cell>{{ player.id }}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Age</md-table-cell>
            <md-table-cell nm-numeric>{{ player.age }}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Rating</md-table-cell>
            <md-table-cell>
              <!-- передаем пропсами обьект с текущим игроком,
                        а на стороне компонента - отображаем звездочки
                        в зависимости от рейтинга -->
              <app-player-rating :playerObj="player"></app-player-rating>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Phone number</md-table-cell>
            <md-table-cell>{{ player.phoneNumber }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <!-- При клике - переходим назад на одну страницу в истории -->
      <md-button class="md-raised md-accent player__btn" @click="$router.go(-1)"
        >Return back
      </md-button>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      player: {}
    };
  },
  //принимаем пропсы от роутера. В данном случае это введенная урла
  props: ["playerName"],
  computed: {
    ...mapGetters(["getPlayersList"])
  },
  methods: {
    //Тянем данные из стора и фильтруем. Если введенная урла
    // соответствует обозначенной урле какого либо игрока,
    // то закидываем обьект с этим игроком в player и на основании
    // него принтим данные. Если же введенной урлы нигде нету,
    // то перекидываем на 404
    setPlayerData() {
      const currentPlayer = this.getPlayersList.filter(item => {
        if (item.url === this.playerName) {
          return item;
        }
      });
      if (currentPlayer.length) {
        this.player = currentPlayer[0];
      } else {
        this.$router.push("/404");
      }
    }
  },
  created() {
	this.setPlayerData();
	console.log(this.playerName);
  }
  
};
</script>

<style lang="scss" scoped>
.player {
  &__top {
    margin-bottom: 40px;

    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }

  &__img {
    display: block;
    float: left;
    margin-right: 20px;
  }

  &__btn {
    margin: 20px 0 0 0 !important;
  }
}
</style>
