<template>
    <div class="container">
                <h2>{{ s }}</h2>

        <form class="md-layout md-gutter">

            <div class="md-layout-item md-size-25">
                <img src="../../assets/img/avatar.jpg" class="form-img" alt="">
                <md-field>
                    <md-textarea  placeholder="About info" ></md-textarea>
                </md-field>

                <md-button style="width: 100%" class="md-raised md-accent">Send form</md-button>
            </div>
            <div class="md-layout-item" action="">
                <md-field>
                    <label>Name</label>
                    <md-input></md-input>
                </md-field>
                <md-field>
                    <label>Age</label>
                    <md-input></md-input>
                </md-field>
                

                <md-field>
                    <label>Phone number</label>
                    <md-input  type="number"></md-input>
                </md-field>

                <md-field>
                    <label>Rating</label>
                    <md-input  type="number"></md-input>
                </md-field>

                
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            s: this.$store.state.s
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