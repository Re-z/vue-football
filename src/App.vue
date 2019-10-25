<template>
    <div id="app" class="ss">
        <app-header></app-header>

            <router-view>
                
            </router-view>


        <app-footer></app-footer>

    </div>
</template>

<script>

export default {
    
    
    
};

</script>

<style lang="scss">
.container {
    width: 1200px;
    margin: 0 auto;
}

.ss {
    height: 100vh;   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.router-link-exact-active {
    background: lightgray !important
}

</style>
