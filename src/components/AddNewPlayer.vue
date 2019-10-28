<template>
        <form class="md-layout md-gutter" @submit.prevent="addNewPlayer()">

            <div class="md-layout-item md-size-25">
                <img src="../assets/img/avatar.jpg" class="form-img" alt="">
                <md-field>
                    <md-textarea  placeholder="About info" v-model="newPlayer.aboutInfo" required></md-textarea>
                </md-field>
                <md-button type="submit" style="width: 100%" class="md-raised md-accent">Send form</md-button>
            </div>
            <div class="md-layout-item">
                <md-field>
                    <label>Name</label>
                    <md-input v-model="newPlayer.name" required></md-input>
                </md-field>
                <md-field>
                    <label>Age</label>
                    <md-input v-model="newPlayer.age" type="number" required></md-input>
                </md-field>
                

                <md-field>
                    <label>Phone number</label>
                    <md-input v-model="newPlayer.phoneNumber" type="number"></md-input>
                </md-field>
                <md-field>
                    <label>Rating</label>
                    <md-input v-model="newPlayer.rating" type="number" required></md-input>
                </md-field>
                
            </div>
        </form>
</template>
<script>
export default {
    data(){
        return {
            newPlayer: {
                name: '',
                age: '',
                phoneNumber: '',
                rating: '',
                aboutInfo: ''
            }
        }
    },
    methods: {
        addNewPlayer() {
            this.$store.dispatch('addNewPlayer', this.newPlayer)
            // reseting form fields
            this.newPlayer.name = this.newPlayer.age = this.newPlayer.phoneNumber = this.newPlayer.rating = this.newPlayer.aboutInfo = ''
        }
    }
}
</script>
<style lang="scss">
    .form-img {
        display: block;
        border-radius: 50%;
        margin: 0 auto 15px auto;
    }
    
</style>