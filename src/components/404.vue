<template>
    <div class="container">
        <div class="p404">
            <div class="p404__box">
                <span class="p404__item">4</span>
                <img class="p404__img" src="../assets/img/soccer-ball.svg" alt="Soccer ball">
                <span class="p404__item"> 4</span>
            </div>
            <p class="p404__text">Sorry,this page is not available :(</p>
            <md-button exact to="/" class="md-raised md-accent">Back to mainpage</md-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .p404 {
        text-align: center;
        &__box {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__item {
            font-size: 60px;
        }
        &__img {
            display: block;
            margin: 0 10px;
            max-width: 130px
        }
        &__text {
            font-size: 20px;
        }
    }
</style>