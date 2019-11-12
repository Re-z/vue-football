<template>
<div class="wrap">
    <!-- попап ухода со страницы. Показывается, если в дочернем компоненте есть
    заполненные поля -->
    <md-dialog-confirm
            class="confirm-delete-popup"
            :md-active.sync="leavePopupStatus"
            md-title="You have unsaved data in Add Player Form"
            md-content="You`ll loose all this data"
            md-confirm-text="Leave page anyway"
            md-cancel-text="Stay and fill"
            @md-cancel="cancelPageLeave"
            @md-confirm="pageLeave"
    />
    <div class="container">
        
        <md-tabs class="manage-teams-tabs">
            <md-tab id="add-player" md-label="Add new player">
                <!-- получаем события с дочернего компонента
                Они нужны для трекинга заполненности полей и используются
                для отображения warning popup -->
                <app-add-new-player
                    @hasFilledFields = "setFilledFiledsToTrue"
                    @hasNoFilledFields = "setFilledFiledsToFalse"
                ></app-add-new-player>
            </md-tab>
            <md-tab class="custom-bg" id="delete-player" md-label="Delete player">
                <app-delete-player></app-delete-player>

            </md-tab>
        </md-tabs>
            



        
    </div>
</div>
    
</template>
<script>
export default {
    data: function(){
        return {
            hasFilledFields: false,
            leavePopupStatus: false
        }
    },
    methods: {
        setFilledFiledsToTrue(){
            this.hasFilledFields = true
        },
        setFilledFiledsToFalse(){
            this.hasFilledFields = false;
        },
        pageLeave() {
            console.log(this.$router);
        },
        cancelPageLeave(){
            console.log(this.$router);
        }
    },
    //перед уходом со страницы - смотрим в дочерний компонент addNewPlayer
    // если есть заполненные поля - показываем warning popup
    // если нет - делаем переход
    beforeRouteLeave (to, from, next) {
        if(this.hasFilledFields === true) {
           this.leavePopupStatus = true
        }
        else {
            next()
        }
    }
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
