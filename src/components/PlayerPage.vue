<template>
    <div class="container player">
        <h2>{{player.name}}</h2>
        <div class="player__top">
            <img 
                class="player__img"
                :src="require(`@/assets/img/players/${player.img}.jpg`)" 
                :alt="player.name">
                
            <p>{{player.aboutInfo}}</p>
        </div>
        <div class="player__bottom">
            <md-table>
                <md-table-row>
                    <md-table-cell >Firebase ID:</md-table-cell>
                    <md-table-cell>{{player.id}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-cell >Age</md-table-cell>
                    <md-table-cell nm-numeric>{{player.age}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-cell >Rating</md-table-cell>
                    <md-table-cell>
                        <!-- передаем пропсами обьект с текущим игроком,
                        а на стороне компонента - отображаем звездочки
                        в зависимости от рейтинга -->
                        <app-player-rating :playerObj="player"></app-player-rating>

                    </md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-cell >Phone number</md-table-cell>
                    <md-table-cell>{{player.phoneNumber}}</md-table-cell>
                </md-table-row>
            </md-table>
        </div>
        <!-- При клике - переходим назад на одну страницу в истории -->
        <md-button
            class="md-raised md-accent player__btn"
            @click="$router.go(-1)"
            >Return back
        </md-button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
// import { spawn } from 'child_process';
export default {
    data(){
        return {
            player: ''
        }
    },
    created() {
        //делаем проверку - если присутствует входящий параметр роутера
        // - распечатываем данные игрока с него и сетим локал сторедж
        // если же входящего параметра нету (она равен [object Object])
        // - берем данные из локал сторедж. Это сделано для того, чтобы приложение
        // не крашилось при перезагрузке страницы
        if(this.$route.query.player !== '[object Object]') {
            this.player = this.$route.query.player;
            localStorage.setItem('player', JSON.stringify(this.$route.query.player));
        } else {
           this.player = JSON.parse(localStorage.getItem('player'))
        }
    },
}
</script>
<style lang="scss" scoped>
    .player{
        &__top {
            margin-bottom: 40px;
            &:after {
                display: block;
                content: '';
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