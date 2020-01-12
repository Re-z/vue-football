<template>
<div class="login">
    <div class="custom-margin md-headline text-right">Login</div>
    <form action="" @submit.prevent="login">
        <md-field class="custom-input">
			<p>admin@gmail.com</p>
            <label>Email</label>
            <md-input v-model="email"></md-input>
        </md-field>
        <md-field class="custom-input">
			<p>123456</p>
            <label>Password</label>
            <md-input v-model="password"></md-input>
        </md-field>

        <div class="custom-btn-wrap">
            <md-button type="submit" class="custom-btn md-raised md-accent">Log in</md-button>
        </div>
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
            const formData = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', formData)
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    min-width: 400px;
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
