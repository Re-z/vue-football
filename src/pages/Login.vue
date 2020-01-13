<template>
<div class="login">
    <div class="custom-margin md-headline text-right">Login</div>
    <form action="" @submit.prevent="login">
        <md-field class="custom-input">
            <label>Email</label>
            <md-input v-model="email" type="email"></md-input>
        </md-field>
        <md-field class="custom-input">
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
        </md-field>
        <div class="custom-btn-wrap">
            <md-button type="submit" class="custom-btn md-raised md-accent">Log in</md-button>
        </div>
        {{logInStatus}}
    </form>

</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            if (this.email && this.password) {
                const formData = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('login', formData)
            } else {
                this.$store.commit('showAlertPopup', 'All fields are mandatory')
            }
        }
    },
    computed: {
        logInStatus() {
            if (this.$store.getters.getAuthData.loggedIn === true) {
                //if no error catch - we have console warning
                this.$router.push('/').catch(err => {})
            }
        }
    },

}
</script>

<style lang="scss" scoped>
.login {
    min-width: 350px;
}

.custom-input {
    display: block;
    margin: 0 0 20px 0 !important;

    input {
        width: 100%;
    }
}

.custom-margin {
    margin-bottom: 20px;
}

.custom-btn-wrap {
    display: grid;
    justify-content: end
}

.custom-btn {
    margin: 20px 0 0 0 !important;
}
</style>
