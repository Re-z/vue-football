<template>
<div class="login">
    <div class="custom-margin md-headline text-right">Login</div>
    <md-field class="custom-input">
        <label>Email</label>
        <md-input v-model="email"></md-input>
    </md-field>
    <md-field class="custom-input">
        <label>Password</label>
        <md-input v-model="password"></md-input>
	</md-field>	
	<div class="custom-btn-wrap">
		<md-button class="custom-btn md-raised md-accent" >Log in</md-button>
	</div>


</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: ''
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
