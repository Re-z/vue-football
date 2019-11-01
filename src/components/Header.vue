<template>
    <header class="header">
        <div class="container">
            <md-tabs class="header__tabs">
                <md-tab exact to="/" class="md-raised" md-label="Generate Teams"></md-tab>
                <md-tab exact to="/all-players-info" class="md-raised" md-label="All players info"></md-tab>
                <md-tab exact to="/manage-players" class="md-raised" md-label="Manage Players"></md-tab>
            </md-tabs>
            <!-- <md-button exact to="/" class="md-raised">Generate Teams</md-button>
            <md-button exact to="/add-new-player" class="md-raised">Add new player</md-button>
            <md-button class="md-raised">Statistics</md-button> -->


        </div>
    </header>
</template>


<style lang="scss">
    .header {
        padding: 10px 0;
        border-bottom: 1px solid #424242
    }
</style>