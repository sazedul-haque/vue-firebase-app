<template>
	<div class="sign-up">
		<p>Lets create a new account!</p>
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button @click="signUp">Sign Up</button>
		<span>Or go back to <router-link to="/login">Login</router-link>.</span>
	</div>
</template>
<script>
	import firebase from 'firebase';
	export default{
		name: 'signUp',
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signUp: function() {
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(	
					(user) => {
						this.$router.replace('home')
					},
					(err) => {
						alert('Oops. ' + err.message)
					}
				);
			}
		}
	}
</script>
<style scoped>
	.sign-up{
		margin-top: 40px;
	}
	input{
		margin: 10px 0px;
		width: 20%;
		cursor: pointer;
		padding: 10px;
    	border: 1px solid #f1f1f1;
	}
	button{
		margin-top: 10px;
		padding: 10px;
		width: 10%;
		cursor: pointer;
	}
	span{
		display: block;
		margin-top: 40px;
		font-size: 11px;
	}
</style>