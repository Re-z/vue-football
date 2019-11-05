<template>
    <div class="container table">
        <div class="table__intro">
            <md-field class="table__search">
                <label>Search by name</label>
                <md-input v-model="searchName"></md-input>
            </md-field>


            <!-- <div class="table__btns">
                <md-button class="md-primary btn-custom-color2" @click="sortByRating">Sort by rating</md-button>
            </div> -->
        </div>
        
        
       <md-table>
        <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head>Rating</md-table-head>
            <md-table-head>Age</md-table-head>
            <md-table-head>Firebase ID</md-table-head>
            <md-table-head>Profile link</md-table-head>
        </md-table-row>

        <md-table-row v-for="(player,index) in filteredPlayers" :key="player.id">
            <md-table-cell>{{index +1}}</md-table-cell>
            <md-table-cell>{{player.name}}</md-table-cell>
            <md-table-cell>
                <!-- передаем пропсами обьект с текущим игроком,
                а на стороне компонента - отображаем звездочки
                в зависимости от рейтинга -->
                <app-player-rating :playerObj="player"></app-player-rating>

            </md-table-cell>
            <md-table-cell>{{player.age}}</md-table-cell>
            <md-table-cell>{{player.id}}</md-table-cell>
            <md-table-cell>
                <md-button 
                    class="btn-custom-color"

                    :to="{
                        path: '/player-page',
                        query: {player}
                    }"
                    >
                    More Info
                </md-button>
            </md-table-cell>
        </md-table-row>
    </md-table>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            searchName: ''
        }
    },
    computed: {
        ...mapGetters([
            'getPlayersList'
        ]),

        //возможно вынести в глобальную зону видимости?
        filteredPlayers(){
            return this.getPlayersList.filter(player => {
                if(player.name.toLowerCase().includes(this.searchName.toLowerCase())) {
                    return player;
                }
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.table {
    &__intro {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__search {
        max-width: 300px
    }
}
    .custom-align {
        align-self: flex-end !important


    }
    .md-table-head, .md-table-cell {
        text-align: center;
    }
</style>

