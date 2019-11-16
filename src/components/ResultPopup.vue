<template>
<!-- В этом попапе отображается результат делёжки 10 человек -->
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
									<img  :src="require(`@/assets/img/players/${player.img}.jpg`)"  :alt="player.name">
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
									<img :src="require(`@/assets/img/players/${player.img}.jpg`)"  :alt="player.name">
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
</template>
<script>
import {mapGetters} from 'vuex'
export default {
	computed: mapGetters([
        'getTeam1',
        'getTeam2',
        'getResultPopupStatus',
	]),
	methods: {
        generateTeams() {
            this.$store.dispatch('generateTeams')
        },
        closeResultPopup(){
            this.$store.commit('closeResultPopup');
            this.$store.commit('clearWillPlayPlayers')
        },
    },
}
</script>