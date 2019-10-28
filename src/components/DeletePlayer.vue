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
            @md-confirm="cancelDelete" 
        />


        <md-field class="md-layout-item md-size-30">
            <label>Search by name</label>
            <md-input v-model="searchName"></md-input>
        </md-field>

        <div class="md-layout md-gutter" >
            <md-card 
                v-for="player in filteredPlayers" :key="player.id"
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
                        class="md-primary btn-custom-color-warn"
                        @click="confirmDeletePopupStatus = true"
                        >
                        Delete
                    </md-button>
                </md-card-actions>
            </md-card>

            <!-- if no filter results -->
            <md-toolbar class="md-card md-theme-default" v-if="filteredPlayers.length <= 0">
                <h3 class="md-title">Sory, but there is no player with such name :(</h3>
            </md-toolbar>



        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            confirmDeletePopupStatus: false,
            searchName: ''
        }
    },
    methods: {
      cancelDelete() {
          this.confirmDeletePopupStatus = false;
      },
    },
    computed: {
        ...mapGetters([
            'getPlayersList',
        ]),
        //Формируем новый массив на основании общего массива игроков,
        //который и выводится в UI
        filteredPlayers(){
            return this.getPlayersList.filter(player => {
                if(player.name.toLowerCase().includes(this.searchName.toLowerCase())) {
                    return player
                }
            })
        }
    },
}
</script>
<style lang="scss">
    .confirm-delete-popup .md-primary {
        background: tomato !important;
    }
</style>