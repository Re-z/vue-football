<template>
    <div class="container">
    <md-tabs class="manage-teams-tabs">
        <md-tab id="add-player" md-label="Add new player">
            <app-add-new-player></app-add-new-player>
        </md-tab>
        <md-tab class="custom-bg" id="delete-player" md-label="Delete player">
            <app-delete-player></app-delete-player>

        </md-tab>
    </md-tabs>
        



        
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
    
    .manage-teams-tabs {
        & .md-active {
            background-color: #64dd17;
            background-color: var(--md-theme-default-accent, #64dd17);
        }
    }
</style>
